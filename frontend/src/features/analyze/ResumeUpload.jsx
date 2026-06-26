import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, FileText, Loader2, UploadCloud, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { analyzeResume } from '../../api/resumeApi.js'

const MAX_FILE_SIZE = '10 MB'

export function ResumeUpload() {
  const inputRef = useRef(null)
  const [uploadedFile, setUploadedFile] = useState(null)
  const [jobDescription, setJobDescription] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [fileError, setFileError] = useState('')
  const navigate = useNavigate()
  const hasPdf = Boolean(uploadedFile)

  function handleFile(file) {
    if (!file) return

    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setUploadedFile(null)
      setFileError('Please select a PDF resume.')
      return
    }

    setFileError('')
    setUploadedFile(file)
  }

  function handleDrop(event) {
    event.preventDefault()
    setIsDragging(false)
    handleFile(event.dataTransfer.files?.[0])
  }

  async function handleAnalyze() {
    if (!hasPdf || isLoading) return

    setIsLoading(true)

    try {
      const response = await analyzeResume({
        resumeFile: uploadedFile,
        jobDescription,
      })

      navigate('/results', {
        state: {
        data:response, 
        },
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  function removeFile() {
    setUploadedFile(null)
    setFileError('')

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <main className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#03040a] px-4 py-12 text-white sm:px-6 lg:px-8">
      <UploadBackground />

      <section className="relative mx-auto flex min-h-[calc(100svh-11rem)] max-w-5xl items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="w-full"
        >
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.5, ease: 'easeOut' }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
            >
              <UploadCloud size={16} className="text-sky-300" />
              Resume analysis workspace
            </motion.div>

            <h1 className="text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
              Upload your resume for AI analysis
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Add a PDF resume and paste the job description. API analysis will be connected in a later sprint.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative rounded-[2rem] border border-white/12 bg-white/[0.07] p-3 shadow-[0_30px_120px_rgba(15,23,42,0.62)] backdrop-blur-2xl"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-[#070914]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-7 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <motion.div
                    onDragOver={(event) => {
                      event.preventDefault()
                      setIsDragging(true)
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    animate={{
                      borderColor: isDragging ? 'rgba(125, 211, 252, 0.55)' : 'rgba(255, 255, 255, 0.12)',
                      backgroundColor: isDragging ? 'rgba(14, 165, 233, 0.1)' : 'rgba(255, 255, 255, 0.045)',
                    }}
                    className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-dashed p-6 text-center transition-colors"
                  >
                    <motion.div
                      animate={hasPdf ? { scale: [1, 1.08, 1] } : { y: [0, -6, 0] }}
                      transition={{
                        duration: hasPdf ? 0.5 : 4,
                        repeat: hasPdf ? 0 : Infinity,
                        ease: 'easeInOut',
                      }}
                      className="mb-5 flex size-17 items-center justify-center rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-500/20 to-sky-500/15 shadow-[0_0_38px_rgba(124,58,237,0.25)]"
                    >
                      <FileText size={34} className="text-violet-100" />
                    </motion.div>

                    <h2 className="text-xl font-semibold text-white">
                      Drag and drop your resume
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Accepted format: PDF
                      <span className="mx-2 text-slate-600">|</span>
                      Maximum file size: {MAX_FILE_SIZE}
                    </p>

                    <input
                      ref={inputRef}
                      type="file"
                      accept="application/pdf,.pdf"
                      className="hidden"
                      onChange={(event) => handleFile(event.target.files?.[0])}
                    />

                    <motion.button
                      type="button"
                      onClick={() => inputRef.current?.click()}
                      whileHover={{ y: -2, scale: 1.015 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.07] px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-colors hover:bg-white/[0.11]"
                    >
                      Browse File
                    </motion.button>

                    <AnimatePresence mode="wait">
                      {uploadedFile && (
                        <motion.div
                          key="uploaded-file"
                          initial={{ opacity: 0, y: 12, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.96 }}
                          transition={{ duration: 0.24, ease: 'easeOut' }}
                          className="mt-6 flex w-full max-w-md items-center justify-between gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-3 text-left"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <CheckCircle2 size={20} className="shrink-0 text-emerald-200" />
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-white">
                                {uploadedFile.name}
                              </p>
                              <p className="text-xs text-emerald-100/75">Upload ready</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            aria-label="Remove uploaded file"
                            onClick={removeFile}
                            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            <X size={17} />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {fileError && <p className="mt-4 text-sm font-medium text-rose-300">{fileError}</p>}
                  </motion.div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="job-description" className="text-sm font-semibold text-white">
                    Job Description
                  </label>
                  <textarea
                    id="job-description"
                    value={jobDescription}
                    onChange={(event) => setJobDescription(event.target.value)}
                    placeholder="Paste the job description here..."
                    className="mt-3 min-h-80 resize-none rounded-3xl border border-white/10 bg-white/[0.045] p-5 text-sm leading-6 text-white outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-300/40 focus:bg-white/[0.065] focus:shadow-[0_0_35px_rgba(14,165,233,0.12)]"
                  />

                  <motion.button
                    type="button"
                    disabled={!hasPdf || isLoading}
                    onClick={handleAnalyze}
                    whileHover={hasPdf && !isLoading ? { y: -2, scale: 1.01 } : undefined}
                    whileTap={hasPdf && !isLoading ? { scale: 0.98 } : undefined}
                    className="mt-5 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-6 text-sm font-semibold text-white shadow-[0_0_45px_rgba(124,58,237,0.36)] transition disabled:cursor-not-allowed disabled:from-slate-800 disabled:to-slate-700 disabled:text-slate-400 disabled:shadow-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Preparing analysis
                      </>
                    ) : (
                      'Analyze Resume'
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

function UploadBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(124,58,237,0.24),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(14,165,233,0.2),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.12),transparent_34%)]" />
      <div className="absolute left-1/2 top-12 h-[24rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/18 via-fuchsia-500/10 to-sky-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_74%)]" />
    </div>
  )
}
