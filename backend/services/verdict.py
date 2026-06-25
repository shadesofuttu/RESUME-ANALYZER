def get_final_verdict(
    resume_score,
    ats_score,
    semantic_score,
    resume_category
):

    verdict = ""
    summary = ""
    suggestions = []

    summaries = {

        "Data Analyst":
        "You have a strong foundation for Data Analyst roles. Focus on cloud tools, visualization, and advanced analytics to become more competitive.",

        "ML Engineer":
        "You have a promising Machine Learning profile. Build more end-to-end ML projects and strengthen your deployment skills.",

        "Full Stack Developer":
        "You have a solid Full Stack foundation. Expand your backend, deployment, and database experience."
    }

    if (
        resume_score >= 85
        and ats_score >= 80
    ):

        verdict = "🟢 Excellent Candidate"

    elif (
        resume_score >= 70
        and ats_score >= 60
    ):

        verdict = "🟡 Good Candidate"

    else:

        verdict = "🔴 Needs Improvement"

    summary = summaries.get(
        resume_category,
        "Continue improving your technical skills."
    )

    if ats_score < 80:
        suggestions.append(
            "Improve ATS score above 80%."
        )

    if semantic_score < 70:
        suggestions.append(
            "Tailor your resume more closely to the job description."
        )

    if resume_score < 90:
        suggestions.append(
            "Add more impactful projects and achievements."
        )

    return {

        "verdict": verdict,
        "summary": summary,
        "suggestions": suggestions

    }