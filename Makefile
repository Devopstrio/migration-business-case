.PHONY: help build up down test lint migrate calculate-tco calculate-roi simulate-scenarios generate-report

help:
	@echo "Migration Business Case Platform - Management Commands"
	@echo "----------------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Financial models + API)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "calculate-tco      : Run TCO calculation engine on current portfolio"
	@echo "calculate-roi      : Run ROI/NPV modeling engine"
	@echo "simulate-scenarios : Run best/worst case scenario simulations"
	@echo "generate-report    : Generate executive PDF/JSON business case report"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/models tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

calculate-tco:
	docker-compose exec api python scripts/calculate/tco_calc.py

calculate-roi:
	docker-compose exec api python scripts/calculate/roi_npv.py

simulate-scenarios:
	docker-compose exec api python scripts/simulate/run_scenarios.py

generate-report:
	docker-compose exec api python scripts/report/executive_summary.py
