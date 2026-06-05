# Vincent Teo's Personal Website (vincentteo.com)

Welcome to the repository for my personal portfolio and blog site: [vincentteo.com](https://vincentteo.com). This site showcases my open-source software, game design projects, and writings about technology, home automation, and vibe-coding experiments.

## 🚀 Tech Stack & Design System

* **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Theme & Typography**:
  * Curated slate/violet base palette with vibrant pink/lime glowing accents
  * Premium font pairings: **Outfit** (for headings) and **Inter** (for body text)
  * Bouncy cards, custom keyframe floating animations, and friendly glassmorphism panels
* **Templating**: Nunjucks (`.njk`) and Markdown (`.md`) with front-matter integration

---

## 🛠️ Project Structure

```text
├── .devcontainer/        # Development container configurations
├── .github/workflows/    # CI/CD pipelines (Lint, Build, & Pages Deploy)
├── src/                  # Source files
│   ├── _data/            # Global data (projects, site configuration)
│   ├── _includes/        # Layout templates (base, post templates)
│   ├── assets/           # Client-side assets
│   │   ├── css/          # Tailwind CSS input and compiled outputs
│   │   ├── images/       # Project and blog visuals
│   │   └── js/           # Interactive UI scripts (navigation, filters)
│   ├── blog/             # Markdown blog posts
│   ├── blog.njk          # Blog index page template
│   └── index.njk         # Homepage layout (projects, about, contact)
├── eleventy.config.js    # Eleventy configuration
├── eslint.config.mjs     # ESLint configuration (JS, JSON, HTML/Nunjucks rules)
└── .markdownlint.json    # Markdownlint rules configuration
```

---

## 💻 Development Commands

Make sure Node.js (v20+) is installed. Clone the repository and install the dependencies:

```bash
npm install
```

### Run Locally

Starts both the Tailwind CSS compiler (watching for changes) and the Eleventy dev server:

```bash
npm run dev
```

### Build for Production

Generates the compiled production assets (`src/assets/css/main.css`) and builds the static HTML website in the `./_site` folder:

```bash
npm run build
```

### Code Quality & Linting

Runs ESLint (for JavaScript, Nunjucks/HTML templates, and JSON configurations) and Markdownlint (for documentation and blog posts):

```bash
# Run all quality checks
npm run lint

# Run markdown linter specifically
npm run lint:md
```

To automatically fix formatting or prose issues in your markdown files, run:

```bash
npx markdownlint "**/*.md" --ignore node_modules --ignore _site --fix
```

---

## 🤖 CI/CD & Auto Deployment

This repository uses **GitHub Actions** for CI/CD:

1. **Pull Requests & Pushes**: Automatically triggers lint checks and compiles the production build to ensure there are no compile or styling errors.
2. **Continuous Deployment**: On every push/merge to the `main` branch, the site is automatically built and deployed to **GitHub Pages** using GitHub Actions.
