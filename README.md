# Barker

Barker is an SCSS starter kit for design systems.

It includes:

- A [Style Dictionary](https://v4.styledictionary.com/) configuration for defining design tokens.
- A sensible project layout and organized SCSS files for themes, components, layouts, and base styles.
- SCSS mixins and functions for accessing design tokens.
- [Esbuild](https://esbuild.github.io/) configuration with [dart-sass](https://sass-lang.com/dart-sass/), [PostCSS](https://postcss.org/), [autoprefixer](https://github.com/postcss/autoprefixer), and [PurgeCSS](https://purgecss.com/).
- A [Stylelint](https://stylelint.io/) configuration.
- [pnpm](https://pnpm.io/) as package manager.

SCSS is used to generate functions and utility classes from the design
tokens. You can either use a set of accessor functions to reference the design
tokens or use SCSS variables. Although SCSS functions or variables are used in
the code, the final output relies on CSS custom properties (variables). This
ensures that only defined variables are used. Themes are created by assigning
different values to these CSS custom properties.

## Usage

This kit cannot be installed and does not include any generators. Instead, clone
the repository into your project and adapt it to your needs.

```bash
git clone git@github.com:woylie/barker.git
cd barker
rm -rf .github .git
pnpm install
```

## Configuration

- `build.js`: Contains the build configuration for Esbuild, as well as the
  PostCSS configuration and PurgeCSS configuration (disabled by default).
- `style-dictionary.js`: Contains the configuration for Style Dictionary. You
  can modify the output formats for the design tokens here. Note that the SCSS
  files depend on the `scss` output format.

## Commands

| Description                                         | Command                   |
| --------------------------------------------------- | ------------------------- |
| Development build (tokens, CSS, JS, etc.)           | `pnpm build:dev`          |
| Production build (tokens, CSS, JS, etc.)            | `pnpm build:prod`         |
| Watch mode (does not watch Style Dictionary tokens) | `pnpm build:dev:watch`    |
| Build Style Dictionary tokens                       | `pnpm build:tokens`       |
| Run linters                                         | `pnpm lint`               |
| Fix linter issues                                   | `pnpm lint:fix`           |
| Run Prettier                                        | `pnpm lint:prettier`      |
| Fix Prettier issues                                 | `pnpm lint:prettier:fix`  |
| Run Stylelint                                       | `pnpm lint:stylelint`     |
| Fix Stylelint issues                                | `pnpm lint:stylelint:fix` |

## Folder Structure

    .
    ├── build                   # Build artefacts (token definitions, CSS, etc.)
    │   ├── css                 # CSS output
    │   └── tokens              # Token output
    │       ├── css             # CSS custom properties
    │       ├── js              # JavaScript
    │       ├── json            # JSON definitions
    │       └── scss            # SCSS mixins and variables
    ├── src                     # Source files
    │   ├── css                 # Styles
    │   ├── js                  # JavaScript
    │   └── tokens              # Design Tokens
    └── ...

### Build Folder

The build folder contains the build artefacts.

    .
    ├── ...
    ├── build                   # Build artefacts
    │   ├── css                 # CSS output
    │   └── tokens              # Token output
    │       ├── css             # CSS custom properties
    │       ├── js              # JavaScript
    │       ├── json            # JSON definitions
    │       └── scss            # SCSS mixins and variables
    └── ...

### CSS Folders

The CSS styles are divided into the layers `base`, `components`, `layouts`,
`themes`, and `utilities`. More details about each layer can be found in the
corresponding `_index.scss` files.

    .
    ├── ...
    ├── src
    │   ├── css
    │   │   ├── base                    # Global base layer
    │   │   │   ├── _animations.scss    # Keyframe animations
    │   │   │   ├── _general.scss       # Global styles
    │   │   │   ├── _index.scss         # Entry point for base layer
    │   │   │   └── _typography.scss    # Global typography styles
    │   │   ├── components              # Components are styled elements
    │   │   ├── layouts                 # Layouts arrange components on the page
    │   │   ├── themes                  # Place for light/dark themes etc.
    │   │   ├── utilities               # Utility classes generated from design tokens
    │   │   ├── _extends.scss           # SCSS placeholders for @extend
    │   │   ├── _functions.scss         # SCSS functions for using design tokens
    │   │   ├── _mixins.scss            # SCSS mixins
    │   │   └── main.scss               # Entry point
    │   └── ...
    └── ...

## Resources

- The design token structure is based on [Design Tokens Format](https://design-tokens.github.io/community-group/format/) where possible.
- The structure is inspired by [CubeCSS](https://cube.fyi/), even though it isn't a faithful implementation.
- Barker is based on ideas described in the
  [Design Systems article series](https://www.mathiaspolligkeit.com/tags/design-systems/).
