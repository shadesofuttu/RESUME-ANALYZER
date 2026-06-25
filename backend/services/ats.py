def get_matching_skills(
    resume_skills,
    job_skills
):
    return resume_skills.intersection(job_skills)
def get_missing_skills(
    resume_skills,
    job_skills
):
    return job_skills - resume_skills
def calculate_ats_score(
    matching_skills,
    job_skills
):

    if len(job_skills) == 0:
        return 0

    score = (
        len(matching_skills)
        /
        len(job_skills)
    ) * 100

    return round(score, 2)