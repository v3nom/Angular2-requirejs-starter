# Angular2-requirejs-starter
Angular2 quickstart guide is using SystemJS and has no clear explanation how to do production builds.
This project gives an example of Angular2 project with GruntJS build and RequireJS integration. I needed RequireJS to support 
some legacy business logic code written in JavaScript using AMD modules.  

## Running
You need globally installed grunt-cli and typescript npm modules:
- clone repository
- npm install
- grunt
- launch your favorite web server in /build folder

## Angular2 changes
- Selected UMD build files
- Removed SystemJS polyfill and library

## Changes
- Added AlmondJS as AMD module resolver
- Updated tsconfig.json to use AMD modules and output everything to a single file
- Added lib/ngAmd.js which wraps global angular2 variables to AMD modules. Note: UMD should allow to use almond direcly, but there is an issue in Angular2 build, which brakes module resolution.
- Replaced systemJS bootstrap with "require(['main'])"

## GruntJS
- Executes global TS command (not flexible, should use local TS version from node_modules)
- Generates manifest.appcache to support offline applications
- Copies files to build folder
- Adds prefixes for old browsers to CSS files