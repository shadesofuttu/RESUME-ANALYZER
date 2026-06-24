from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

documents = [
    "Python Pandas Git",
    "Python Pandas SQL Docker"
]

vectorizer = TfidfVectorizer()

vectors = vectorizer.fit_transform(documents)

similarity = cosine_similarity(
    vectors[0],
    vectors[1]
)

print(similarity)