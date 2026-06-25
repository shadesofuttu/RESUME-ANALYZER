categories = {

    "Data Analyst": [
        "Python",
        "Pandas",
        "SQL",
        "Excel",
        "Power BI"
    ],

    "ML Engineer": [
        "Python",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Machine Learning"
    ],

    "Full Stack Developer": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js"
    ]
}

def get_resume_category(
    detected_skills
):

    best_category = ""
    best_score = 0

    for category in categories:

        category_skills = categories[
            category
        ]

        score = 0

        for skill in category_skills:

            if skill in detected_skills:
                score += 1

        if score > best_score:

            best_score = score
            best_category = category
    return best_category


if __name__ == "__main__":

    print(
        get_resume_category(
            [
                "Python",
                "Pandas",
                "SQL"
            ]
        )
    )

    print(
        get_resume_category(
            [
                "Python",
                "TensorFlow",
                "PyTorch"
            ]
        )
    )