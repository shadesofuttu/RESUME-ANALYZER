from sentence_transformers import SentenceTransformer
from sentence_transformers import util

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

def calculate_semantic_similarity(
    resume_text,
    job_description
):

    resume_embedding = model.encode(
        resume_text
    )

    job_embedding = model.encode(
        job_description
    )

    similarity = util.cos_sim(
        resume_embedding,
        job_embedding
    )

    similarity_score = (
    similarity[0][0].item()
    * 100
    )

    return round(
        similarity_score,
        2
    )