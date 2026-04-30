from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_scenarios():
    return {'status': 'ok', 'component': 'scenarios'}
