output "ec2_public_ip" {
  description = "Public IP of EC2"
  value       = aws_instance.skillswap_ec2.public_ip
}
