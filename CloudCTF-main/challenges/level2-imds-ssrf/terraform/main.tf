resource "aws_instance" "level2" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
}
