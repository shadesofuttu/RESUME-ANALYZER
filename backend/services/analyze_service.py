from services.scoring_engine import calculate_resume_score
from services.parser import extract_text_from_pdf
from services.skills import extract_skills

from services.ats import (
    get_matching_skills,
    get_missing_skills,
    calculate_ats_score,
)

from services.similarity import calculate_similarity
from services.semantic import calculate_semantic_similarity

from services.category import get_resume_category
from services.verdict import get_final_verdict
from services.recommendations import get_recommendation


def analyze_resume(pdf_path, job_description):

    # Extract resume text
    text = extract_text_from_pdf(pdf_path)
     
    # SKILL EXTRACTION
    detected_skills = extract_skills(text)
    job_skills = extract_skills(job_description)

    resume_skills_set = set(detected_skills)
    job_skills_set = set(job_skills)

    # ATS
    matching_skills = get_matching_skills(
        resume_skills_set,
        job_skills_set
    )

    missing_skills = get_missing_skills(
        resume_skills_set,
        job_skills_set
    )

    ats_score = calculate_ats_score(
        matching_skills,
        job_skills_set
    )

    # Similarity Scores
    # -------------------------------
    semantic_score = calculate_semantic_similarity(
        text,
        job_description
    )

    similarity_score = calculate_similarity(
        text,
        job_description
    )

    score_data = calculate_resume_score(
    text,
    detected_skills,
    job_skills
)
    resume_score = score_data["total_score"]


    # category ddetection
    resume_category = get_resume_category(
        detected_skills
    )

    # FINAL VERDICT
    verdict = get_final_verdict(
        resume_score,
        ats_score,
        semantic_score,
        resume_category
    )

    # RECOMMENDATIONS
    recommendations = [
        get_recommendation(skill)
        for skill in missing_skills
    ]

    return {
    "resume_score": resume_score,
    "job_match_score": score_data["job_match_score"],
    "skill_score": score_data["skill_score"],
    "project_score": score_data["project_score"],
    "experience_score": score_data["experience_score"],
    "github_score": score_data["github_score"],
    "linkedin_score": score_data["linkedin_score"],

    "ats_score": ats_score,
    "semantic_score": semantic_score,
    "similarity_score": similarity_score,

    "category": resume_category,
    "verdict": verdict,

    "skills": detected_skills,
    "matching_skills": list(matching_skills),
    "missing_skills": list(missing_skills),

    "recommendations": recommendations,
}