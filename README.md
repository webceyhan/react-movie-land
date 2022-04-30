<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/react-movie-land/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/react-movie-land/actions/workflows/codeql-analysis.yml)
[![Build and Deploy](https://github.com/webceyhan/react-movie-land/actions/workflows/gh-pages-deploy.yml/badge.svg)](https://github.com/webceyhan/react-movie-land/actions/workflows/gh-pages-deploy.yml)

<!-- HEADER ///////////////////////////////////////////////////////////// -->

# MovieLand Application + React + Bootstrap

This is a simple movie search SPA inspired by a tutorial to demonstrate the basics of React framework and its core concepts.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[View Demo](https://ceyhan.io/react-movie-land/) |
[Report Issue](https://github.com/webceyhan/react-movie-land/issues) |
[Request Feature](https://github.com/webceyhan/react-movie-land/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/react-movie-land.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd react-movie-land
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```

<br>
<!-- DEVELOPMENT ///////////////////////////////////////////////////////// -->

## Development

Run the app in the development mode.

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes. You may also see any lint errors in the console.

<br>
<!-- TESTING ///////////////////////////////////////////////////////////// -->

## Testing

Launche the test runner in the interactive watch mode.

```sh
npm test
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<br>
<!-- BUILDING //////////////////////////////////////////////////////////// -->

## Building

Build the app for production to the `build` folder.

```sh
npm run build
```
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified and the filenames include the hashes. Your app is ready to be deployed!

You can also preview the built application locally as follows:

```sh
npm install -g serve # if not installed yet
serve -s build
```

<br>
<!-- DEPLOYMENT ////////////////////////////////////////////////////////// -->

## Deployment (GitHub Pages)

A GitHub Action will automatically deploy the project to GitHub Pages on every push.

The workflow will build the project using npm and output the result to the `dist` folder which will be then pushed to the `gh-pages` branch.

> See the details in [.github/workflows/gh-pages-deploy.yml](./.github/workflows/gh-pages-deploy.yml)

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Node.js](https://nodejs.dev/)
-   [React](https://reactjs.org/)
-   [Bootstrap](https://getbootstrap.com)
-   [GitHub Actions](https://docs.github.com/en/actions)
    -   [GitHub Pages](https://pages.github.com/)
    -   [github-pages-deploy-action](https://github.com/JamesIves/)
-   [React JS Crash Course 2022](https://www.youtube.com/watch?v=b9eMGE7QtTk&t=3002s)
