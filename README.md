# Carlotta Barone MacDonald — Personal Research Website

Static GitHub Pages website for a research portfolio organized around an interactive atom model.

## Structure

```text
.
├── index.html
├── assets/
│   ├── styles.css
│   └── script.js
├── pages/
│   ├── quantum-information.html
│   ├── quantum-hardware.html
│   ├── quantum-energy.html
│   ├── outreach-education.html
│   ├── science-policy.html
│   └── contact.html
├── media/
│   └── .gitkeep
└── .nojekyll
```

## Editing content

- Edit the homepage text and electron labels in `index.html`.
- Edit the homepage interaction panel in `assets/script.js`.
- Edit each research direction page in `pages/`.
- Add images, figures, PDFs, or screenshots to `media/`, then reference them from a page with paths like `../media/my-image.png`.

## Research navigation

The top navigation includes a Research dropdown linking to the five main research pages. Each research page also includes a right-side table of contents on desktop, which collapses near the top of the page on smaller screens.

## Publishing on GitHub Pages

Push these files to the root of your `CarlottaBM.github.io` repository. GitHub Pages should serve the site directly from `index.html`.
