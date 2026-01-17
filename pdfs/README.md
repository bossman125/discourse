# PDF Files Directory

This directory should contain the PDF files for your research articles.

## File Naming Convention

PDF files should be named using a slug format derived from the article title:
- Lowercase only
- Replace spaces with hyphens
- Remove special characters
- Example: "How Lung Cancer Severity Can Be Predicted..." → `how-lung-cancer-severity-can-be-predicted-using-machine-learning-based-on-different-risk-factors.pdf`

## Required Files

For the example article to work, you need to add:
- `how-lung-cancer-severity-can-be-predicted-using-machine-learning-based-on-different-risk-factors.pdf`

## Adding Your Own Articles

1. Create a `.md` file in `src/articles/` with frontmatter metadata
2. Add the corresponding PDF file to this directory
3. Ensure the PDF filename matches the slug generated from the article title
