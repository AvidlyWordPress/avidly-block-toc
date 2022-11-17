# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.0] - 2022-11-17
Change block output markup to work with HTML5 and improve DOM content detection.
! NOTE: This will require style changes in your theme if you have modified the button element and not the `#toc-toggle` ID.

### Changed
- Block output markup to HTML5 `<details>` tag.
- Build ToC links after `DOMContentLoaded`.
- Disallow to create multiple Toc blocks in same content.

### Added
- Block depreaction for v1.
- Ignore toggle JS for `<summary` tag.
- Style fixes and support for `<summary` elements.

## [1.0.0] & [1.0.1] - 2022
Initial release.