export $(grep -v '^#' .env | xargs)
aws s3 cp ./ s3://${AWS_BUCKET_NAME} --recursive \
  --exclude "*" \
  --include "*.html" \
  --include "*.css" \