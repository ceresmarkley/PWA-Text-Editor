# PWA-Text-Editor [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE)

## Table of Contents

* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Technology](#technology)
* [Installation](#installation)
* [Links](#links)
* [License](#license)
* [Sources](#sources)

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Technology

* [![Node.js](https://img.shields.io/badge/Node.js®-v20.4.0-blue?logo=node.js)](https://nodejs.org/en)

* [![npm](https://img.shields.io/badge/npm-v9.8.0-blue?logo=npm)](https://docs.npmjs.com/cli/v9/)
  - [![Concurrently Package](https://img.shields.io/badge/concurrently-8.2.1-green?logo=npm)](https://www.npmjs.com/package/concurrently)
  - [![babel Core Package](https://img.shields.io/badge/@babel/core-7.22.15-green?logo=babel)](https://www.npmjs.com/package/@babel/core)

      - [![babel-loader Package](https://img.shields.io/badge/babel--loader-9.1.3-green?logo=babel)](https://www.npmjs.com/package/babel-loader)
      - [![babel Preset-Env Package](https://img.shields.io/badge/babel%20Preset--Env-7.22.15-green?logo=babel)](https://www.npmjs.com/package/@babel/preset-env)
      - [![babel Plugin-Proposal-Object-Rest-Spread Package](https://img.shields.io/badge/babel%20Plugin--Proposal--Object--Rest--Spread-7.20.7-green?logo=babel)](https://www.npmjs.com/package/@babel/plugin-proposal-object-rest-spread)
      - [![babel Runtime Package](https://img.shields.io/badge/@babel/runtime-7.22.15-green?logo=babel)](https://www.npmjs.com/package/@babel/runtime)
      - [![@babel/plugin-transform-runtime": "^7.22.15](https://img.shields.io/badge/@babel/plugin--transform--runtime-7.22.15-green?logo=babel)](https://www.npmjs.com/package/@babel/plugin-transform-runtime)

  - [![Express Package](https://img.shields.io/badge/Express-4.18.2-green?logo=express)](https://www.npmjs.com/package/express)
  - [![http-server Package](https://img.shields.io/badge/http--Server-14.1.1-green?logo=npm)](https://www.npmjs.com/package/http-server)
  - [![html Webpack Plugin Package](https://img.shields.io/badge/html--webpack--plugin-5.5.3-green?logo=npm)](https://www.npmjs.com/package/html-webpack-plugin)
  - [![IndexedDB Package](https://img.shields.io/badge/idb-7.1.1-green?logo=npm)](https://www.npmjs.com/package/idb)
  - [![If-Env Package](https://img.shields.io/badge/if--env-1.0.4-green?logo=npm)](https://www.npmjs.com/package/if-env)
  - [![nodemon Package](https://img.shields.io/badge/nodemon-3.0.1-green?logo=nodemon)](https://www.npmjs.com/package/nodemon)
  - [![webpack Package](https://img.shields.io/badge/Webpack-5.88.2-green?logo=webpack)](https://webpack.js.org/)
      - [![Code Mirror Themes Package](https://img.shields.io/badge/Code--Mirror--Themes-1.0.0-green?logo=webpack)](https://www.npmjs.com/package/code-mirror-themes)
      - [![CSS Loader Package](https://img.shields.io/badge/CSS--Loader-6.8.1-green?logo=webpack)](https://www.npmjs.com/package/css-loader)
      - [![style-loader Package](https://img.shields.io/badge/Style--Loader-3.3.3-green?logo=webpack)](https://www.npmjs.com/package/style-loader)
      - [![Webpack CLI Package](https://img.shields.io/badge/Webpack--CLI-5.1.4-green?logo=webpack)](https://www.npmjs.com/package/webpack-cli)
      - [![Webpack Dev Server Package](https://img.shields.io/badge/Webpack--Dev--Server-4.15.1-green?logo=webpack)](https://www.npmjs.com/package/webpack-dev-server)
      - [![Webpack Manifest Plugin Package](https://img.shields.io/badge/Webpack--Manifest--Plugin-4.3.0-green?logo=webpack)](https://www.npmjs.com/package/webpack-manifest-plugin)
      - [![Workbox Webpack Plugin Package](https://img.shields.io/badge/Workbox--Webpack--Plugin-7.0.0-green?logo=webpack)](https://www.npmjs.com/package/workbox-webpack-plugin)


## Installation

* Packages to support this application can be installed by using [*npm install*](https://docs.npmjs.com/cli/v9/commands/npm-install) commands.

> **Note**: If you do not have a `package.json` in your directory already, enter command below to [*initiate*](https://docs.npmjs.com/cli/v9/commands/npm-init).
>
>```bash
>npm init -y
>```
>
>```bash
>npm i
>```

**START** application by invoking the following command:

```bash
npm start
```

## Links

* GitHub Repo: [PWA Text Editor Repo](https://github.com/ceresmarkley/PWA-Text-Editor)
* Deployed Heroku URL: [Text Editor!](https://pwa-text-editor16-771a68457772.herokuapp.com/)


## License

* This application is licensed by [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE).


## Sources
Bootcamp Starter Code: [Bootcamp Repo](https://github.com/coding-boot-camp/cautious-meme)
