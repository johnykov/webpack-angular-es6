### Usage

    npm install webpack -g
    webpack app/index.js app/bundle.js
or

    ./node_modules/.bin/webpack app/index.js app/bundle.js


When in `webpack.config.js` you change `module.export` to `module.exports` it's fine with just:

    webpack


### Development
How to start a server on `http://localhost:8080/`:

    ./node_modules/.bin/webpack-dev-server --content-base=app


### Angular with Webpack - Introduction

[Angular with Webpack - Introduction](https://egghead.io/lessons/angularjs-angular-with-webpack-introduction?series=angular-and-webpack-for-modular-applications)


#### Mine tips

ls /Users/jankowalski/.nvm/versions/node/v4.0.0/bin/



#### Resolved issues:

1.  https://babeljs.io/docs/usage/babelrc/ <-- package.json babel:
2. babel6 https://github.com/59naga/babel-plugin-add-module-exports



## Run with http-server:
Command to serve files:

    hs dist