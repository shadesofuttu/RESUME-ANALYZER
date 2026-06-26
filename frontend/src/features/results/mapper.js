import {
  Award,
  Gauge,
  Brain,
  FileSearch,
  BriefcaseBusiness,
  Target,
  ListChecks,
  Code2,
  Rocket,
} from 'lucide-react'
const recommendationIcons = [Target, ListChecks, Code2, Rocket]
export function mapApiToDashboard(data) {
  return {
    stats: [
      {
        label: "Resume Score",
        value: data.resume_score,
        suffix: "/100",
        icon: Award,
      },
      {
        label: "ATS Score",
        value: data.ats_score,
        suffix: "%",
        icon: Gauge,

      },
      {
        label: "Semantic Match",
        value: data.semantic_score,
        suffix: "%",
        icon: Brain,

      },
      {
        label: "Similarity Score",
        value: data.similarity_score,
        suffix: "%",
        icon: FileSearch,

      },
    ],

    category: {
      title: data.category,
      badge: "Best Fit",
      description: `Your resume best matches the ${data.category} role.`,
      icon: BriefcaseBusiness,

    },

    verdict: {
      label: data.verdict.verdict,
      summary: data.verdict.summary,
      suggestions: data.verdict.suggestions,
    },

    skills: data.skills,

    matchingSkills: data.matching_skills,

    missingSkills: data.missing_skills,

    recommendations: data.recommendations.map((item, index) => ({
        title: item,
         description: item,
        icon: recommendationIcons[index % recommendationIcons.length],
      })),

    breakdown: [
      {
        label: "Resume Score",
        value: data.resume_score,
        icon: Award,
      },
      {
        label: "ATS Score",
        value: data.ats_score,
        icon: Gauge,
      },
      {
        label: "Semantic Score",
        value: data.semantic_score,
        icon: Brain,
      },
      {
        label: "Similarity Score",
        value: data.similarity_score,
        icon: FileSearch,
      },
    ],
  }
}