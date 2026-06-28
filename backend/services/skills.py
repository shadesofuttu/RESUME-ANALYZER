from .knowledge_loader import load_knowledge


def extract_skills(text):
    """
    Extract matching skills from the selected knowledge base.
    """

    # Load the Full Stack knowledge base
    knowledge = load_knowledge("full_stack")

    # Build a list of skills from the CSV
    skills_list = [row["skill"] for row in knowledge]

    detected_skills = []

    text = text.lower()

    for skill in skills_list:
        if skill.lower() in text:
            detected_skills.append(skill)

    return detected_skills