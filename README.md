# Website

This website is built using **[VuePress](https://vuepress.vuejs.org/)** and the **VuePress Default Theme**, a modern static site generator designed for documentation websites.

VuePress allows you to write documentation using **Markdown**, while automatically generating a fast, responsive static website.

---

## Installation

Make sure **Node.js (v18 or later)** is installed on your system.

Install the project dependencies:

```bash
npm install
```

---

## Local Development

Start the development server:

```bash
npm run docs:dev
```

This command starts a local development server at:

```
http://localhost:8080
```

Most changes are reflected **live without restarting the server**.

---

## Build

Build the static site:

```bash
npm run docs:build
```

This command generates the static website inside the following directory:

```
docs/.vuepress/dist
```

The contents of this folder can be deployed to any static hosting service.

---

## Deployment

### Deploy to GitHub Pages

You can deploy the generated site by publishing the contents of:

```
docs/.vuepress/dist
```

to the **`gh-pages` branch**.

Example using `gh-pages` package:

```bash
npm install gh-pages --save-dev
npx gh-pages -d docs/.vuepress/dist
```

---

### Manual Deployment

After running:

```bash
npm run docs:build
```

Deploy the contents of:

```
docs/.vuepress/dist/
```

to any static hosting provider such as:

* GitHub Pages
* Netlify
* Vercel
* AWS S3
* Cloudflare Pages

---

## Additional Resources

* VuePress Documentation: https://vuepress.vuejs.org
* VuePress Default Theme: https://vuepress.vuejs.org/reference/default-theme/
* VuePress GitHub: https://github.com/vuejs/vuepress
