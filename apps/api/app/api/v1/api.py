from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, applications, assessments, financial, scenarios, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(applications.router, prefix="/applications", tags=["applications"])
api_router.include_router(assessments.router, prefix="/assessments", tags=["assessments"])
api_router.include_router(financial.router, prefix="/financial", tags=["financial"])
api_router.include_router(scenarios.router, prefix="/scenarios", tags=["scenarios"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
