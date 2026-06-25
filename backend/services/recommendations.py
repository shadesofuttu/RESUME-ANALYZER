recommendations = {

    "Docker":
    "Learn Docker Fundamentals and build a Dockerized project",

    "AWS":
    "Complete AWS Cloud Practitioner and deploy a project",

    "NLP":
    "Build an NLP project using text classification or sentiment analysis",

    "Scikit-learn":
    "Learn Scikit-learn and build ML projects",

    "Machine Learning":
    "Study supervised learning and build prediction projects",

    "Deep Learning":
    "Learn neural networks and TensorFlow/PyTorch",

    "Git":
    "Practice Git workflows and contribute to GitHub projects",

    "GitHub":
    "Upload projects and maintain a strong GitHub profile",

    "SQL":
    "Practice SQL queries and database design",

    "Data Analysis":
    "Work on Pandas and exploratory data analysis projects"
}

def get_recommendation(skill):

    if skill in recommendations:
        return recommendations[skill]

    return "Explore learning resources for this skill."