# Avidly Toc Block
Custom block to generate table of contents list from content with anchor links. 

## Installation
1. Upload the plugin files to the /wp-content/plugins/ directory, or download the ZIP and install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress

## Requirements
* Requires at least WordPress 5.8

## Development
- Get packages with `npm install` command
- Run development with `npm run start` command (does not compress the code so it is easier to read)
- Run production build with `npm run build` command (compresses the code down so it downloads faster)

VERY IMPORTANT: Always run production build to compile compressed, production-ready CSS and JS.

## block.json
- Canonical way to register block types. Read details from <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/">Block Editor Handbook</a>.

### Translating with WP CLI
- Go to plugin folder with terminal: `cd wp-content/plugins/avidly-toc-block`
- Create or update POT file: `npm run make-pot`
- Open your PO file(s) with PoEdit & update the content from POT file and make your translations changes.
- Create or update JSON translations file: `npm run make-json`
- Test that your translations works