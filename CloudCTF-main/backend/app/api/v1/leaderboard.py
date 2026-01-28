from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_leaderboard():
    return [{"user": "alice", "score": 100}]
