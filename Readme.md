# Flava Web Client

## Setup Instructions

1. Install [Node.js 8+](https://nodejs.org/) and [Yarn](https://yarnpkg.com/)
2. Run `yarn install` from inside the project folder
3. To run the development server with auto-reload, run `yarn start`
4. For full functionality make sure [the server](https://github.com/gregoryjjb/flava) is running as well
5. To create a production build run `yarn build`

## Code Formatting

ESLint and Prettier are used to auto-format the code on commit. Changes from the default Prettier format are in `prettier.config.js`. If you install the "ESLint" and "Prettier - Code Formatter" VS Code extensions you can get style error highlighting in your editor.

To manually force the prettier to run on all files run `yarn pretty`.
