# Discourse Journal

A beautiful, modern academic journal website built with React, TypeScript, and Tailwind CSS.

## 🌐 Live Site

Visit the live journal at: [https://bossman125.github.io/discourse](https://bossman125.github.io/discourse)

## 📝 For Editors: How to Add New Articles

### Prerequisites

Before you begin, make sure you have:
- [Git](https://git-scm.com/downloads) installed on your computer
- [Node.js](https://nodejs.org/) (version 18 or higher) installed
- A GitHub account with access to this repository
- A text editor (we recommend [VS Code](https://code.visualstudio.com/))

### Step 1: Clone the Repository

If this is your first time, clone the repository to your computer:

```bash
git clone https://github.com/bossman125/discourse.git
cd discourse
```

### Step 2: Install Dependencies

Install the required packages:

```bash
npm install
```

### Step 3: Create Your New Article

1. Open the file `src/data/articles.json` in your text editor
2. Add your new article to the array following the format below
3. Place your article at the top of the array (after the opening `[` bracket) to feature it first

#### Article Format

```json
{
  "id": "6",
  "title": "Your Article Title Here",
  "author": "Your Name",
  "summary": "A brief 1-2 sentence summary that appears on the article card and at the top of the article page.",
  "content": "# Your Article Title\n\nYour article content goes here. Use markdown formatting:\n\n## Section Heading\n\nParagraph text here.\n\n### Subsection\n\nMore content here.",
  "issue": "Winter 2026",
  "published": true,
  "date": "2026-01-15"
}
```

#### Field Descriptions

- **id**: A unique number for the article (increment from the last article)
- **title**: The full title of your article
- **author**: Author name(s)
- **summary**: A brief abstract or summary (1-3 sentences)
- **content**: The full article content in markdown format (see formatting guide below)
- **issue**: The journal issue (e.g., "Winter 2026", "Spring 2025")
- **published**: Set to `true` to make the article visible, `false` to hide it
- **date**: Publication date in YYYY-MM-DD format

#### Markdown Formatting Guide

In the `content` field, use these markdown patterns:

- `# Heading` - Main title (H1)
- `## Heading` - Section heading (H2)
- `### Heading` - Subsection heading (H3)
- Regular text for paragraphs
- Use `\n\n` to create paragraph breaks

**Example:**
```
"content": "# The Future of AI\n\nArtificial intelligence is transforming our world.\n\n## Current Applications\n\nToday we see AI in many fields.\n\n### Healthcare\n\nAI assists doctors in diagnosis."
```

### Step 4: Test Locally

Before publishing, test your changes locally:

```bash
npm run dev
```

Open your browser to `http://localhost:5173/discourse` to preview the site. Check that:
- Your article appears in the articles list
- The article opens correctly when clicked
- All formatting looks good
- There are no errors in the browser console

Press `Ctrl+C` in the terminal to stop the dev server when done.

### Step 5: Commit Your Changes

Save your work to Git:

```bash
git add src/data/articles.json
git commit -m "Add new article: [Your Article Title]"
```

### Step 6: Push to GitHub

Push your changes to the repository:

```bash
git push origin main
```

If you're working on a branch, push to your branch instead:

```bash
git push origin your-branch-name
```

### Step 7: Deploy to GitHub Pages

Deploy the updated site:

```bash
npm run deploy
```

This command will:
1. Build the production version of the site
2. Push it to the `gh-pages` branch
3. Make it live at https://bossman125.github.io/discourse

**Note:** It may take 1-2 minutes for changes to appear on the live site.

## 🔄 Updating Existing Articles

To modify an existing article:

1. Open `src/data/articles.json`
2. Find the article by its `id` or `title`
3. Make your changes
4. Follow steps 4-7 above (test, commit, push, deploy)

## 📋 Quick Reference: Common Tasks

### Hide an Article (Unpublish)

Change `"published": true` to `"published": false` in the article object.

### Change Article Order

Articles are displayed in the order they appear in the JSON file. Move an article object up in the array to feature it higher on the page.

### Add a New Issue

Simply use a new issue name in the `"issue"` field (e.g., "Summer 2026"). The site will automatically create a filter button for it.

### Update Before Making Changes

Always pull the latest changes before starting work:

```bash
git pull origin main
```

## 🛠️ Troubleshooting

### "Git command not found"
Install Git from [git-scm.com](https://git-scm.com/downloads)

### "npm command not found"
Install Node.js from [nodejs.org](https://nodejs.org/)

### Build Errors
- Check that all JSON is valid (no missing commas, quotes, or brackets)
- Ensure all `"id"` values are unique
- Verify dates are in YYYY-MM-DD format

### Changes Not Showing on Live Site
- Wait 2-3 minutes after deploying
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check that `npm run deploy` completed without errors

### JSON Validation
Use a JSON validator like [jsonlint.com](https://jsonlint.com/) to check your `articles.json` file for syntax errors.

## 📁 Project Structure

```
discourse/
├── src/
│   ├── data/
│   │   └── articles.json      ← Edit this file to add/modify articles
│   ├── pages/
│   │   ├── Articles.tsx       ← Articles list page
│   │   ├── Article.tsx        ← Individual article page
│   │   └── Submit.tsx         ← Submission guidelines
│   └── components/
├── package.json
└── README.md
```

## 🚀 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Check code for issues

## 📧 Need Help?

If you encounter any issues or need assistance:
1. Check the troubleshooting section above
2. Review the [GitHub documentation](https://docs.github.com/)
3. Contact the technical administrator

## 📄 License

This project is maintained by the Discourse Journal editorial team.
