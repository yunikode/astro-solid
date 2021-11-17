# Astro + Solid.js Example

This example showcases Astro working with [Solid](https://www.solidjs.com/).

## Installation

```npm i``` to install the required packages

## Development

Write your Solid components as `.jsx` or `.tsx` files in your project.

```npm start``` will start a live-server on localhost:3000

## Deployment

```npm run build``` will build a deployable bundle in the ```/dist``` folder.

Currently there are issues with reading env variables, so I needed to hardcode my baseurl for GitHub pages deployment. You can find the configuration in ```astro.config.mjs``` on line 14, and in ```src/layouts/BaseLayout.astro``` on lines 43:45.