from fastapi import FastAPI
from routes.analyze import router as analyze_router


app = FastAPI(
    title="ResumeIQ API",
    description="AI Resume Analyzer Backend",
    version="1.0.0"
)
app.include_router(analyze_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to ResumeIQ API 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }