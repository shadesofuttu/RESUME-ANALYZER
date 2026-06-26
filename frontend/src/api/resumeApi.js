import { apiClient } from './axios.js'

export async function analyzeResume({ resumeFile, jobDescription }) {
  const formData = new FormData()

  formData.append('resume', resumeFile)
  formData.append('job_description', jobDescription || '')

  const response = await apiClient.post('/analyze', formData)

  return response.data
}
