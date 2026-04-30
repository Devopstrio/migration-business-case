from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_assessments():
    return {'status': 'ok', 'component': 'assessments'}
