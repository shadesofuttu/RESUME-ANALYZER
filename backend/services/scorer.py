def calculate_skill_score(detected_skills):

    num_skills = len(detected_skills)

    if num_skills == 0:
        return 0
    elif num_skills <= 3:
        return 5
    elif num_skills <= 6:
        return 12
    elif num_skills <= 10:
        return 20
    elif num_skills <= 15:
        return 26
    else:
        return 30
    

def calculate_project_score(text):
    text = text.lower()
    project_count = text.count("•")
    if project_count == 0:
        return 0
    elif project_count <= 2:
        return 8
    elif project_count <= 4:
        return 15
    else:
        return 20

def calculate_experience_score(text):

    text = text.lower()

    keywords = [
        "experience",
        "intern",
        "developer",
        "engineer",
        "worked",
        "employment",
    ]

    matches = sum(keyword in text for keyword in keywords)

    if matches == 0:
        return 0
    elif matches <= 2:
        return 8
    else:
        return 15
    

def has_projects(text):
    return "projects" in text.lower()

def has_github(text):
    return "github" in text.lower()


def has_linkedin(text):
    return "linkedin" in text.lower()

def calculate_resume_score(
    skill_score,
    project_score,
    experience_score,
    github_found,
    linkedin_found,
):

    total_score = (
        skill_score
        + project_score
        + experience_score
    )

    if github_found:
        total_score += 5

    if linkedin_found:
        total_score += 5

    return min(total_score, 100)

