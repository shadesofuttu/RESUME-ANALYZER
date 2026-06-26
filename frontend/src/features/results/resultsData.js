import {
  Award,
  Brain,
  BriefcaseBusiness,
  Code2,
  FileSearch,
  Gauge,
  ListChecks,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react'

export const resultsData = {
  stats: [
    { label: 'Resume Score', value: 92, suffix: '/100', icon: Award },
    { label: 'ATS Score', value: 88, suffix: '%', icon: Gauge },
    { label: 'Semantic Match', value: 94, suffix: '%', icon: Brain },
    { label: 'TF-IDF Match', value: 86, suffix: '%', icon: FileSearch },
  ],
  category: {
    title: 'Machine Learning Engineer',
    badge: 'Best Fit',
    description:
      'Your resume strongly signals applied machine learning, backend API work, and production-ready AI project experience.',
    icon: BriefcaseBusiness,
  },
  verdict: {
    label: 'Excellent Candidate',
    badge: 'High Confidence',
    summary:
      'Your profile is highly aligned with the target role. Strengthen deployment keywords and measurable project outcomes to improve recruiter visibility even further.',
  },
  skills: [
    'Python',
    'FastAPI',
    'Docker',
    'TensorFlow',
    'React',
    'Git',
    'GitHub',
    'NLP',
    'Machine Learning',
  ],
  matchingSkills: ['Python', 'SQL', 'FastAPI'],
  missingSkills: ['Docker', 'AWS', 'CI/CD'],
  recommendations: [
    {
      title: 'Improve ATS Score',
      description: 'Add more role-specific keywords from the job description in your skills and project sections.',
      icon: Target,
    },
    {
      title: 'Add measurable achievements',
      description: 'Convert responsibilities into outcomes using metrics, scale, latency, accuracy, or business impact.',
      icon: ListChecks,
    },
    {
      title: 'Add Docker experience',
      description: 'Mention containerized projects or deployment workflows to strengthen production engineering signals.',
      icon: Code2,
    },
    {
      title: 'Improve project descriptions',
      description: 'Clarify model choices, API design, data pipeline details, and the practical value of each project.',
      icon: Rocket,
    },
  ],
  breakdown: [
    { label: 'Resume Score', value: 92, icon: Award },
    { label: 'ATS Score', value: 88, icon: Gauge },
    { label: 'Semantic Score', value: 94, icon: Brain },
    { label: 'Similarity Score', value: 86, icon: Sparkles },
  ],
}
