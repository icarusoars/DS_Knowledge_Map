https://medium.com/@katiemctigue/how-to-create-a-dark-mode-in-sass-609f131a3995

# DS Knowledge Map Frontend

The frontend of this website mostly consists of a D3.js interactive visualization. Whenever nodes within it are clicked on, React state changes correspondingly and the corresponding markdown is rendered.

## Localhost Development
`yarn start` should run app in development mode. Upon save, changes are automatically reloaded.
Expect website to be loaded at [http://localhost:3000](http://localhost:3000).

The website by default works with the static markdown files already deployed. To work with the static markdown files on your local machine, go into `/src/api_calls/api_kmap.js` to change the URL which you request static markdown files from. You may change it to a localhost static file server that you create.

## Deployment
Frontend and backend are deployed at the same time with one command. See root directory README for deployment instructions.

## Features
### 1. Interactive D3.js Circle Map
Circle map adapted from example here: https://bl.ocks.org/fdlk/076469462d00ba39960f854df9acda56
### 2. Rendering Markdown from Backend on Circle Node Click
Whenever a specific circle is clicked on in the D3.js visualization, markdown information appears on the right. This is done by passing React event handlers into the D3.js svg object.
Followed tutorial here: https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71
### 3. Blur Nodes that are Descendants of Immediate Children
To make the user experience better, I blur all nodes that are not the immediate children of the root node. This way the user can focus on all the information directly under the hierarchy of the root node. To do so, I use svg gaussian blur filter: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur
### 4. Dynamically Size Text
The name descriptions of each node of the circlemap are dynamically sized based on how big their circle is.
Referred to this demo: https://bl.ocks.org/mbostock/1846692





---
# Create React App Readme Below
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
