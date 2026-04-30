resource "aws_db_instance" "biz_case_db" {
  identifier        = "migration-biz-db-${var.env}"
  engine            = "postgres"
  engine_version    = "15.3"
  instance_class    = "db.t3.large"
  allocated_storage = 50
  
  db_name  = "migration_biz_case"
  username = var.db_user
  password = var.db_password

  vpc_security_group_ids = [var.db_sg_id]
  db_subnet_group_name   = var.db_subnet_group

  backup_retention_period = 7
  multi_az               = var.env == "prod" ? true : false
  skip_final_snapshot    = var.env != "prod" ? true : false
  
  performance_insights_enabled = true
  
  tags = {
    Project     = "Migration Business Case"
    Environment = var.env
    CostCenter  = "Strategy-Finance"
  }
}
