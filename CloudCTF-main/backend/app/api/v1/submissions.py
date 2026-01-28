from fastapi import APIRouter

router = APIRouter()

@router.post("/")
def submit_flag():
    return {"status": "correct"}
