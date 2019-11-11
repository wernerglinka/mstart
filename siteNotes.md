# Metalsmith Starter - MS1

Uses:
- the latest versions of plugins as of June 2019
- Nunjucks templating
- image optimization... ne cloudinary images... much better
- svg icons
- responsive images

## Metadata
Uses the Meatlsmith-data-loader plugin to provide meta data globally as well as per page
Reference: https://www.npmjs.com/package/metalsmith-data-loader


## Page Partials
- head
- social-metadata (for inclusion in the <head> tag)

## Page optimization
Using https://developers.google.com/speed/pagespeed/insights/ to analyze page performance

Steps taken to optimize page load:

- Minimize wasted bytes for images. We don't want to serve more than 30kB - at a maximum - for any image.
  Using https://www.responsivebreakpoints.com/ to create responsive img tags


  