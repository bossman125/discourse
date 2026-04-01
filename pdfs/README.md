# PDF Storage Migration to Google Drive

## Current Status
PDFs are now excluded from Git tracking to prevent large files from being committed. The system uses a unified PDF viewer that works with both local files and Google Drive URLs.

## Migration Steps

### 1. Upload PDFs to Google Drive
1. Create a folder in Google Drive called "Discourse PDFs"
2. Upload all PDF files from this directory to that folder
3. Make sure all PDFs are set to "Anyone with the link can view"

### 2. Get Sharing Links
For each PDF:
1. Right-click the PDF in Google Drive
2. Select "Get shareable link"
3. Copy the link (should look like: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`)

### 3. Update Article Frontmatter
In each article's markdown file (in `src/articles/`), replace the `pdfFile` field with the Google Drive sharing URL:

```yaml
# Before
pdfFile: "Lila1.pdf"

# After
pdfFile: "https://drive.google.com/file/d/1DeYMyHLy1JJwJpt5idYRAzv_BxZrPxMR/view?usp=sharing"
```

### 4. Remove Local PDFs (Optional)
Once all articles are updated with Google Drive links, you can delete the PDF files from this directory.

## How It Works
- **Unified PDF Viewer**: All PDFs (local and Google Drive) use the same Skia/PDF renderer
- **Automatic Detection**: The system detects Google Drive URLs and fetches them as blobs
- **Consistent Experience**: Same zoom, scroll, and interaction across all PDFs
- **Loading States**: Shows loading spinner while fetching Google Drive PDFs
- **Fallback Support**: If fetching fails, provides direct link to open PDF in new tab
- **Mobile Optimized**: Mobile users get a "View PDF" button for better experience

## Benefits
- No more large files in Git repository
- Faster repository cloning and operations
- PDFs still accessible to users
- Easy to manage PDF versions in Google Drive
- Consistent PDF viewing experience across all articles
- No CORS issues with unified viewer approach

## Technical Details
- **Local Files**: Rendered directly using react-pdf
- **Google Drive URLs**: Converted to blob URLs for react-pdf compatibility
- **Error Handling**: Graceful fallback with external links
- **Performance**: Efficient blob URL management and cleanup

## Troubleshooting
- If PDFs don't load, double-check that they're set to "Anyone with the link can view"
- Make sure you're using the sharing URL format, not direct download links
- For local development, ensure PDFs are in the correct directory structure
