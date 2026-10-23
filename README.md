# Password Generator

A browser-based password generator built with plain HTML, CSS, and JavaScript. Choose which character sets to include, set a length, and generate a password that can be copied to the clipboard. No build step or dependencies are required.

## Features

- Toggle lowercase letters, uppercase letters, numbers, and symbols
- Password length from 1 to 50 characters (default 12)
- Optional "Exclude Duplicate Characters" mode so no character repeats
- One-click copy to clipboard

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript

## Getting started

Clone the repository and open `index.html` in any modern browser.

```bash
git clone https://github.com/TIRK3Y/Password-Generator.git
cd Password-Generator
```

## Project structure

```
.
├── index.html   # Markup and options form
├── styles.css   # Styling
└── script.js    # Generation and copy logic
```

## Notes

- Characters are selected with `Math.random()`, which is not a cryptographically secure random source. For generating real credentials, `crypto.getRandomValues()` would be the appropriate choice.
- With "Exclude Duplicate Characters" enabled, the requested length cannot exceed the number of available characters in the selected sets (for example, 10 when only numbers are selected); otherwise generation will not complete.
- If no character set is selected, an empty password is returned.

## License

No license has been specified for this project.
