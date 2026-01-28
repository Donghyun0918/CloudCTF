resource "aws_s3_bucket" "level1" {
  bucket_prefix = "cloudctf-level1-"
}

resource "aws_s3_object" "flag" {
  bucket = aws_s3_bucket.level1.id
  key    = "flag.txt"
  content = "CTF{s3_buckets_are_public}"
}
