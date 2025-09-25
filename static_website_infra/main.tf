# Main infrastructure resources for LocalStack

resource "aws_s3_bucket" "x_emr" {
  bucket = "x-emr-patient-portal-01"

  tags = {
    Name        = "x-emr-patient-portal-01"
    Environment = "Dev"
  }
}


