resource "aws_eks_cluster" "biz_case_cluster" {
  name     = "migration-biz-eks-${var.env}"
  role_arn = var.cluster_role_arn

  vpc_config {
    subnet_ids = var.private_subnet_ids
  }

  tags = {
    Environment = var.env
  }
}

resource "aws_eks_node_group" "standard_nodes" {
  cluster_name    = aws_eks_cluster.biz_case_cluster.name
  node_group_name = "standard-nodes"
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.private_subnet_ids

  scaling_config {
    desired_size = var.desired_nodes
    max_size     = var.max_nodes
    min_size     = var.min_nodes
  }

  instance_types = ["t3.large"]
}
