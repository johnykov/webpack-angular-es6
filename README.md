## WTF is this?

This repo is to showcase a usage of webpack. It's:

  * Angular 1.x, 
  * ES6 
  * Babel 6

Idea is based on egghead.io videos and it's goal is glorify modules. 


### Requirements
Tools:

  1. node >=4.0.0 (with es6 support)
  2. webpack:
      
        npm install webpack -g

  3. when cloned do 
      
        npm install

    
### Usage of webpack 
Use npm scripts:
    
    npm start 
or directly

    webpack app/index.js app/bundle.js
or

    ./node_modules/.bin/webpack app/index.js app/bundle.js


### Development
How to start a server on `http://localhost:8080/`:
  
    npm start
or
    ./node_modules/.bin/webpack-dev-server --content-base=app

#### Resolved issues and references:
  
  1. [Angular with Webpack - Introduction](https://egghead.io/lessons/angularjs-angular-with-webpack-introduction?series=angular-and-webpack-for-modular-applications)
  2. [.babelrc or package.json: babel section](https://babeljs.io/docs/usage/babelrc/)
  3. [babel6 plugin for module exports](https://github.com/59naga/babel-plugin-add-module-exports)


## Run with http-server:
Command to serve files:

    hs dist
    
    
#### Other

Remarks about my mistake:
When in `webpack.config.js` you change `module.export` to `module.exports` it's fine with just:

    webpack



#### License
do whatever you want with this code

### Preview

![webpack + angular + es6](screenshot.png)
