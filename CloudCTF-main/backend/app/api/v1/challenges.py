from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_challenges():
    return [{"id": 1, "name": "Level 1"}]
