from sklearn.feature_extraction.text import TfidfVectorizer

documents = [
    "Python Pandas Git",
    "Python Pandas SQL Docker"
]

vectorizer = TfidfVectorizer()

vectors = vectorizer.fit_transform(documents)

print(vectorizer.get_feature_names_out())

print(vectors.toarray())