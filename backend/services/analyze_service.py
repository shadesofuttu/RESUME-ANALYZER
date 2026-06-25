from services.parser import extract_text_from_pdf
from services.skills import extract_skills
from services.scorer import calculate_resume_score
from services.ats import calculate_ats_score
from services.similarity import calculate_similarity
from services.category import get_resume_category
from services.verdict import generate_verdict
from services.recommendations import generate_recommendations

def analyze_resume(pdf_path, job_description):

    text = extract_text_from_pdf(pdf_path)

    skills = extract_skills(text)

    ats_score = calculate_ats_score(text, job_description)

    semantic_score = calculate_similarity(text, job_description)

    resume_score = calculate_resume_score(skills)

    category = get_resume_category(skills)

    verdict = generate_verdict(resume_score)

    recommendations = generate_recommendations(text)

    return {
        "resume_score": resume_score,
        "ats_score": ats_score,
        "semantic_score": semantic_score,
        "category": category,
        "verdict": verdict,
        "skills": skills,
        "recommendations": recommendations
    }