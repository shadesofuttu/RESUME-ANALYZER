import streamlit as st
import pandas as pd
from utils.recommendations import get_recommendation
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
from utils.semantic import (
    calculate_semantic_similarity
)
from utils.category import (
    get_resume_category
)
from utils.verdict import (
    get_final_verdict
)

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

    # EXTRACT DATA 
    text = extract_text_from_pdf(uploaded_file)
    similarity_score = calculate_similarity(
        text,
        job_description
    )
    semantic_score = calculate_semantic_similarity(
        text,
        job_description
    )
    detected_skills = extract_skills(text)
    
    job_skills = extract_skills(job_description)
    resume_skills_set = set(detected_skills)
    job_skills_set = set(job_skills)

    # ATS
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

    # RESUME SCORE
    skill_score = calculate_skill_score(
        detected_skills
    )
    projects_found = has_projects(text)
    github_found = has_github(text)
    linkedin_found = has_linkedin(text)
    resume_score = calculate_resume_score(
        skill_score,
        projects_found,
        github_found,
        linkedin_found
    )

    # CATEGORY
    resume_category = get_resume_category(
    detected_skills)

    # FINAL VERDICT 
    verdict = get_final_verdict(
    resume_score,
    ats_score,
    semantic_score,
    resume_category
    )

    # DASHBOARD METRICS
    st.subheader("📊 Dashboard")
    col1, col2, col3, col4 = st.columns(4)

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
            "TF-IDF Match",
            f"{similarity_score}%"
        )
    with col4:
        st.metric(
            "Semantic Match",
            f"{semantic_score}%"
        )
    st.info(
    f"""
    Resume Score: {resume_score}/100
    ATS Match: {ats_score}%
    Semantic Match: {semantic_score}%
    Resume Category: {resume_category}
    """
    )

    # VERDICT
    st.subheader("🏆 Final Verdict")
    st.success(verdict["verdict"])
    st.write(verdict["summary"])
    st.subheader("📌 Suggestions")
    for suggestion in verdict["suggestions"]:
        st.write(f"• {suggestion}")

    # PROGRESS BARS
    st.subheader("📈 Match Overview")
    st.write(f"ATS Match: {ats_score}%")
    st.progress(ats_score / 100)
    st.write(f"Semantic Match: {semantic_score}%")
    st.progress(semantic_score / 100)

    # MATCH QUALITY
    if ats_score >= 80:
        st.success("🟢 Excellent Match")

    elif ats_score >= 60:
        st.info("🔵 Good Match")

    elif ats_score >= 40:
        st.warning("🟡 Average Match")

    else:
        st.error("🔴 Needs Improvement")


    # ATS ANALYSIS
    st.subheader("🎯 ATS Analysis")
    st.write(f"ATS Match: {ats_score}%")
    st.write("✅ Matching Skills")
    for skill in matching_skills:
        st.success(skill)

    st.write("❌ Missing Skills")
    for skill in missing_skills:

        st.error(skill)
        recommendation = get_recommendation(
            skill
        )

        st.info(
            f"💡 Recommendation: {recommendation}"
        )
    
    # SKILLS CHART
    matched_count = len(
        matching_skills
    )

    missing_count = len(
        missing_skills
    )

    chart_data = pd.DataFrame(
        {
            "Category": [
                "Matched Skills",
                "Missing Skills"
            ],
            "Count": [
                matched_count,
                missing_count
            ]

        }

    )

    st.subheader("📊 Skills Overview")
    st.bar_chart(

        chart_data.set_index(
            "Category"
        )
    )

    # RESUME ANALYSIS
    st.subheader("📋 Resume Analysis")
    st.write(
        f"📁 Projects Found: {'Yes' if projects_found else 'No'}"
    )
    st.write(

        f"🐙 GitHub Found: {'Yes' if github_found else 'No'}"
    )
    st.write(
        f"💼 LinkedIn Found: {'Yes' if linkedin_found else 'No'}"
    )
    st.write(
    f"🎯 Resume Category: {resume_category}"
    )

    # DETECTED SKILLS
    st.subheader("🛠 Detected Skills")
    if detected_skills:
        for skill in detected_skills:
            st.write(f"✅ {skill}")

    else:
        st.warning(
            "No skills detected."
        )

    # RESUME CONTENT
    st.subheader("📄 Extracted Resume Text")
    st.text_area(
        "Resume Content",
        text,
        height=300
    )


    
    