from fastapi import APIRouter
router = APIRouter()
@router.get('/tco')
def get_tco():
    return {'tco_5yr': 45000000, 'on_prem': 65000000, 'savings': 20000000}
@router.get('/roi')
def get_roi():
    return {'roi': 0.45, 'npv': 15000000, 'payback_months': 14}
