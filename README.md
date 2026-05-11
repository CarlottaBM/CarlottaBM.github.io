# CarlottaBM.github.io

Personal website for Carlotta Barone MacDonald.

## Structure

- `index.html` — homepage with the interactive research atom
- `assets/styles.css` — site styling
- `assets/script.js` — homepage interaction logic
- `pages/` — individual research direction pages
- `media/` — place images, figures, PDFs, and other media here

## Editing the homepage research directions

The five homepage electrons are defined in two places:

1. `index.html` controls the visible electron buttons.
2. `assets/script.js` controls the text, project previews, and page links that appear when each electron is clicked.

The current research directions are:

- Quantum Information Science
- Experimental Quantum Systems
- Exploring Energy Applications
- Outreach and Education
- Science Policy and Field Building

## Adding images

Put images in the `media/` folder, then reference them from pages using paths like:

```html
<img src="../media/example-image.jpg" alt="Description of image">
```

From the homepage, use:

```html
<img src="media/example-image.jpg" alt="Description of image">
```

## Deploying on GitHub Pages

Push these files to the root of the GitHub Pages repository. GitHub Pages should serve `index.html` automatically.
