import streamlit as st

from utils.parser import extract_text_from_pdf
from utils.skills import extract_skills 
from utils.scorer import (
    calculate_skill_score,
    has_projects,
    has_github,
    has_linkedin
)

st.title("Resume Analyzer")

uploaded_file = st.file_uploader(
    "Upload your resume",
    type=["pdf"]
)

if uploaded_file is not None:
    st.success("Resume uploaded successfully!")

    text = extract_text_from_pdf(uploaded_file)
    detected_skills = extract_skills(text)
    skill_score = calculate_skill_score(detected_skills)
    projects_found = has_projects(text)
    github_found = has_github(text)
    linkedin_found = has_linkedin(text)

    st.subheader("Extracted Resume Text")
    st.text_area(
        "Resume Content",
        text,
        height=300
    )
    st.subheader("Resume Score")
    st.write(f"🏆 Skill Score: {skill_score}/40")
    st.write("Projects Found:", projects_found)
    st.write("GitHub Found:", github_found)
    st.write("LinkedIn Found:", linkedin_found)

    st.subheader("Detected Skills")
    if detected_skills:
        for skill in detected_skills:
            st.write(f"✅ {skill}")
    else:
        st.warning("No skills detected.")

