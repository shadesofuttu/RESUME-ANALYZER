import streamlit as st

from utils.parser import extract_text_from_pdf
from utils.skills import extract_skills 
from utils.scorer import (
    calculate_skill_score,
    has_projects,
    has_github,
    has_linkedin,
    calculate_resume_score
)
from utils.ats import (
    get_matching_skills,
    get_missing_skills,
    calculate_ats_score
)
from utils.similarity import calculate_similarity


st.title("Resume Analyzer")

uploaded_file = st.file_uploader(
    "Upload your resume",
    type=["pdf"]
)

job_description = st.text_area(
    "Paste Job Description Here"
)

if uploaded_file is not None:
    st.success("Resume uploaded successfully!")

    text = extract_text_from_pdf(uploaded_file)
    similarity_score = calculate_similarity(
    text,
    job_description
)
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



    skill_score = calculate_skill_score(detected_skills)
    projects_found = has_projects(text)
    github_found = has_github(text)
    linkedin_found = has_linkedin(text)
    resume_score = calculate_resume_score(
        skill_score,
        projects_found,
        github_found,
        linkedin_found
)
    
    st.subheader("ATS Analysis")

    st.write(f"📊 ATS Match: {ats_score}%")

    st.subheader("ATS Analysis")

    st.write("✅ Matching Skills")
    for skill in matching_skills:
        st.success(skill)

    st.write("❌ Missing Skills")
    for skill in missing_skills:
        st.error(skill)

    

    st.subheader("Extracted Resume Text")
    st.text_area(
        "Resume Content",
        text,
        height=300
    )
    # UI
    col1, col2, col3 = st.columns(3)

    with col1:
        st.metric(
            "Resume Score",
            f"{resume_score}/100"
        )

    with col2:
        st.metric(
            "ATS Match",
            f"{ats_score}%"
        )

    with col3:
        st.metric(
            "Similarity",
            f"{similarity_score}%"
        )

    if ats_score >= 80:
        st.success("🟢 Excellent Match")

    elif ats_score >= 60:
        st.info("🔵 Good Match")

    elif ats_score >= 40:
        st.warning("🟡 Average Match")

    else:
        st.error("🔴 Needs Improvement")

    st.subheader("Resume Analysis")
    st.write("Projects Found:", projects_found)
    st.write("GitHub Found:", github_found)
    st.write("LinkedIn Found:", linkedin_found)

    st.subheader("Detected Skills")
    if detected_skills:
        for skill in detected_skills:
            st.write(f"✅ {skill}")
    else:
        st.warning("No skills detected.")

    
    