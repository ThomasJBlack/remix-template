# Welcome to the Remix Template!

## Development

Ensure all packages are installed by running:

```sh
npm install
```

Run

```sh
npm run dev
```

Local site: [http://localhost:5173](http://localhost:5173). Keyboard shortcut `o` + `enter` opens local site in browser.

## Deployment

### Site is deployed to Netlify when code is pushed to gitlab.

Three deployments/urls depending on the branch:

- Feature branches:
  - Deploy Preview URL: deploy-preview-(Nth preview deployment)--remix-template.netlify.app
  - Example: https://deploy-preview-8--remix-template.netlify.app
- staging:
  - Deploy Staging URL: https://staging--remix-template.netlify.app
- master: Deploy Production
  - Deploy Production URL: https://remix-template.netlify.app

<!-- ### Important note on gitlab/Netlify integration

Due to the way the Netlify deploy script works, the generic node:20 docker image is required. Some other projects use the node:alpine image, which will not work due to underlying dependencies in the deploy script. -->
