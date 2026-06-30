from services.scorer import (
    calculate_skill_score,
    calculate_project_score,
    calculate_experience_score,
    has_github,
    has_linkedin,
)
def calculate_job_match_score(
    resume_skills,
    job_skills,
):

    if len(job_skills) == 0:
        return 0

    matching_skills = set(resume_skills).intersection(
        set(job_skills)
    )

    score = (
        len(matching_skills) / len(job_skills)
    ) * 20

    return round(score)

def calculate_resume_score(text, detected_skills, job_skills):

    # Individual scores
    skill_score = calculate_skill_score(detected_skills)

    project_score = calculate_project_score(text)

    experience_score = calculate_experience_score(text)

    job_match_score = calculate_job_match_score(
        detected_skills,
        job_skills
    )

    github_score = 5 if has_github(text) else 0

    linkedin_score = 5 if has_linkedin(text) else 0

    total_score = (
        skill_score
        + project_score
        + experience_score
        + job_match_score
        + github_score
        + linkedin_score
    )

    return {
        "total_score": min(total_score, 100),

        "skill_score": skill_score,
        "project_score": project_score,
        "experience_score": experience_score,
        "job_match_score": job_match_score,
        "github_score": github_score,
        "linkedin_score": linkedin_score,
    }

