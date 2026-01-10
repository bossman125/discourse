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

Articles are now written as Markdown files with YAML frontmatter. This makes them easier to write and edit!

1. Navigate to the `src/articles/` directory
2. Create a new file with a descriptive name using kebab-case: `your-article-title.md`
3. Use the template below to structure your article

#### Article Template

Create a new `.md` file in `src/articles/` with the following format:

```markdown
---
id: "6"
title: "Your Article Title Here"
author: "Your Name"
summary: "A brief 1-2 sentence summary that appears on the article card and at the top of the article page."
issue: "Winter 2026"
date: "2026-01-15"
published: true
---

# Your Article Title Here

Your article content goes here. Write naturally using standard Markdown formatting.

## Section Heading

Regular paragraph text here. You can write multiple paragraphs simply by adding blank lines between them.

Another paragraph here.

### Subsection

More content here. Use standard Markdown for:
- Lists
- **Bold text**
- *Italic text*
- And more...

## Conclusion

Your concluding thoughts here.
```

#### Field Descriptions

**YAML Frontmatter** (between the `---` markers):
- **id**: A unique number for the article (increment from the last article)
- **title**: The full title of your article
- **author**: Author name(s)
- **summary**: A brief abstract or summary (1-3 sentences)
- **issue**: The journal issue (e.g., "Winter 2026", "Spring 2025")
- **date**: Publication date in YYYY-MM-DD format
- **published**: Set to `true` to make the article visible, `false` to hide it

**Article Body** (after the frontmatter):
Write your article using standard Markdown syntax. No escaping or `\n` characters needed!

#### Markdown Formatting Guide

Use these standard Markdown patterns in your article body:

- `# Heading` - Main title (H1)
- `## Heading` - Section heading (H2)
- `### Heading` - Subsection heading (H3)
- Regular text for paragraphs (just write naturally)
- Blank line between paragraphs
- `**bold text**` for **bold**
- `*italic text*` for *italic*
- `- item` for bullet lists

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
git add src/articles/your-article-title.md
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

1. Navigate to `src/articles/`
2. Find the article's `.md` file by name
3. Open the file and make your changes
4. Follow steps 4-7 above (test, commit, push, deploy)

## 📋 Quick Reference: Common Tasks

### Hide an Article (Unpublish)

In the article's frontmatter, change `published: true` to `published: false`.

### Change Article Order

Articles are automatically sorted by date (newest first). To change the order, modify the `date` field in the article's frontmatter.

### Add a New Issue

Simply use a new issue name in the `issue` field (e.g., "Summer 2026"). The site will automatically create a filter button for it.

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
- Check that all YAML frontmatter is valid (proper indentation, quotes around strings with special characters)
- Ensure all `id` values are unique across articles
- Verify dates are in YYYY-MM-DD format
- Make sure the frontmatter is between `---` markers

### Changes Not Showing on Live Site
- Wait 2-3 minutes after deploying
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check that `npm run deploy` completed without errors

### YAML Validation
Make sure your frontmatter follows proper YAML syntax:
- Use quotes around strings with special characters
- Keep consistent indentation
- Check that all required fields are present

## 📁 Project Structure

```
discourse/
├── src/
│   ├── articles/              ← Add your .md articles here!
│   │   ├── student-identity-global-discourse.md
│   │   ├── ethics-digital-scholarship.md
│   │   └── ...
│   ├── utils/
│   │   └── articles.ts        ← Article loading logic
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
