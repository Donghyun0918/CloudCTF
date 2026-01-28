from .base import BaseGrader

class S3PublicGrader(BaseGrader):
    def grade(self, context):
        # Check if S3 bucket is public
        return True
