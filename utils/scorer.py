def calculate_skill_score(detected_skills):

    num_skills = len(detected_skills)

    if num_skills == 0:
        return 0

    elif num_skills <= 2:
        return 10

    elif num_skills <= 4:
        return 20

    elif num_skills <= 7:
        return 30

    else:
        return 40
    
def has_projects(text):
    return "projects" in text.lower()


def has_github(text):
    return "github" in text.lower()


def has_linkedin(text):
    return "linkedin" in text.lower()

def calculate_resume_score(
    skill_score,
    projects_found,
    github_found,
    linkedin_found
):

    total_score = skill_score

    if projects_found:
        total_score += 30

    if github_found:
        total_score += 15

    if linkedin_found:
        total_score += 15

    return total_score