from services.parser import extract_text_from_pdf
from services.skills import extract_skills

from services.scorer import (
    calculate_skill_score,
    has_projects,
    has_github,
    has_linkedin,
    calculate_resume_score,
)

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

    text = extract_text_from_pdf(pdf_path)

    detected_skills = extract_skills(text)

    job_skills = extract_skills(job_description)

    resume_skills_set = set(detected_skills)
    job_skills_set = set(job_skills)

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

    semantic_score = calculate_semantic_similarity(
        text,
        job_description
    )

    similarity_score = calculate_similarity(
        text,
        job_description
    )

    skill_score = calculate_skill_score(
        detected_skills
    )

    resume_score = calculate_resume_score(
        skill_score,
        has_projects(text),
        has_github(text),
        has_linkedin(text)
    )

    resume_category = get_resume_category(
        detected_skills
    )

    verdict = get_final_verdict(
        resume_score,
        ats_score,
        semantic_score,
        resume_category
    )

    recommendations = [
        get_recommendation(skill)
        for skill in missing_skills
    ]

    return {
        "resume_score": resume_score,
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