#!/bin/bash

# Bash script to convert all PNG and JPG images to WebP using ffmpeg

echo "Starting WebP conversion..."

# Find all matching image files, case-insensitive, safely handling spaces
find . -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0 | while IFS= read -r -d '' file; do
  # Construct output path with .webp extension
  output="${file%.*}.webp"

  # Convert with ffmpeg
  echo "Converting: $file -> $output"
  ffmpeg -y -hide_banner -loglevel error -i "$file" -q:v 80 "$output" || echo "Failed to convert: $file"
done

echo "Conversion complete."