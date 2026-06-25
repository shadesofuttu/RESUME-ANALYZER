
from fastapi import APIRouter, UploadFile, File
from services.analyze_service import analyze_resume
import shutil
import os

router = APIRouter()


@router.post("/analyze")
async def analyze(
    resume: UploadFile = File(...),
    job_description: str = ""
):

    upload_path = f"uploads/{resume.filename}"

    with open(upload_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    result = analyze_resume(upload_path, job_description)

    os.remove(upload_path)

    return result