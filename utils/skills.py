import pandas as pd


def extract_skills(text):
    skills_df = pd.read_csv("data/skills.csv")

    skills_list = skills_df["skill"].tolist()

    detected_skills = []

    text = text.lower()

    for skill in skills_list:
        if skill.lower() in text:
            detected_skills.append(skill)

    return detected_skills