---
name: Read Me
collection: articles
---
# Sho Styleguide

This styleguide is a collection of base elements and components for SHO.com.

## Requirements

1. `node` / `npm` must be installed. Install using `brew` if on a Mac. Ensure you have the latest version as older versions may not work correctly.
2. `gulp` should be installed, globally. Use `$ npm install -g gulpjs/gulp#4.0 --save-dev` to do this.

## Getting up and running

1. `$ npm install`
2. `$ npm update`
3. `$ gulp reset`
4. `$ gulp dev:styleguide`

You should now have the styleguide running on port 4000, with a BrowserSync setup that watches the folders of the site and will automatically re-build on changes.

Note that `gulp dev:styleguide` is the task for working on the styleguide - when you need to focus on sho.com itself, the task you want is `gulp dev:sho`. This will kick off a BrowserSync'd version of the site at http://localhost:8081 - assuming your local tomcat is running on http://localhost:8080.

## Folder structure

| Folder | Description |
| ------ | ----------- |
| `styleguide/site` | Holds all the styles, javascript, and content for building the styleguide website |
| `styleguide/src` | Contains all of the items in the styleguide, made up of elements / components. Each item should contain any CSS / Javascript and a markdown file describing the item and giving an example of it's use.|
| `styleguide/build` | Contains the static Metalsmith-generated styleguide website |
| `sho` | Source files for sho.com website. |
| `sho/lib/styleguide` | A copy of the styleguide for use by sho.com|
| `gulpfile` | Gulp index file. |
| `gulpisms` | Holds all of the grunt tasks for working on the styleguide and on sho.com. |
| `node_modules` | Vendor code installed with NPM |

## How it works
The styleguide, the website that serves the styleguide, and sho.com should be thought of as **three separate entities**, which you can see reflected in the folder structure. Think of the styleguide website as just another consumer of the styleguide itself. The styleguide website is mostly for our own use, but there is also Showtime's public-facing website at sho.com - which we are building in the `sho` folder. Sho.com is also heavily dependent on the styleguide, and we will frequently work on both in parallel.

```
  module --> styleguide ---> styleguide website
                        `--> sho.com website
```

The styleguide has convienience files for importing all the CSS (Sass) and JS for every single item declared in the styleguide in the files: `styleguide/index.scss` and `styleguide/index.js`.

Each component in the styleguide has a folder to house it's style, markup and javascripts, for example, this Slider component:

```
  styleguide/src/slider
    - _slider.scss
    _ index.js
    _ index.md
```

**Please do not edit files in the `styleguide/site/styleguide` or `sho/lib/styleguide` folder as they are constantly being regenerated and your changes will be overwritten. All editing must take place in `styleguide/src` folder instead**

## NPM Modules

We use NPM to install vendor javascript, and in some cases, css/sass dependencies for the project. NPM is a great way to leverage the work that others have done, and to keep the depencancies clearly organized and tracked, but wrapping your head around how we actually link to the assets can take a second. Let's say we we want to add a new framework for attaching javasript behaviors to media queries - sounds like a job for nicky william's excellent [enquire.js](http://wicky.nillia.ms/enquire.js/)!

### Find the NPM Module

a little google'ing might be all you need to do here - you'll want to ensure the project is healthy and supports NPM installation, and the readme of the project website or github should answer those concerns. you can also use the console to look for the NPM module by name, but I find this to be painfully slow:

`npm search enquire.js`

this might also be a good time to ask the team if they know of something for your use-case, get people to weigh in on a particular module, or perhaps point you to something that's already been installed..

## Install the Module

this is as simple as running npm install with the appropriate save flag:

`npm install enquire.js --save` 

or 

`npm install enquire.js --save-dev`

which flag to use? if the module is a front-end concern, and needs to be surfaced in the browser, use `--save`. if it's a tool, like a gulp plugin, or anything else that doesn't need to actually make it's way into front-end code, use `--save-dev`.

## package.json

a quick glance at `package.json` reveals the dependency has been added. This is crucial, because other devs who run git update will automatically be notified of the new module. they will then be able to bring their environment into line with your changes by running `npm install`. _npm modules live in node_modules and don't travel with git_

```
  "dependencies": {
    "backbone": "1.3.1",
    "bourbon": "4.2.6",
    "bourbon-neat": "1.7.2",
    :
    :
    "enquire.js": "2.1.1",
    :
  },
```


## browserify

once you've added your dependency to the stack, you'll need to confirm that it works with our browserify pipeline. does `gulp browserify` complete without an error?

```
gulp sync-styleguide
gulp browserify
```

if the task complains, your npm module may not work with browserify and it'll have to be shimmed or added to the document through old-school means (a script tag), neither of which is desired. but with any luck it'll have been added to the application bundle and you're off to the races:

```
$ grep enquire styleguide/build/styleguide.js 
},{}],"/usr/webapps/www/src/main/webapp/www/node_modules/enquire.js/dist/enquire.js":[function(require,module,exports){
 * enquire.js v2.1.1 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
}('enquire', this, function (matchMedia) {
var _enquire = require('enquire.js');
...
```
this will make more sense after you read about the gulp tasks:

## Gulp tasks

At the moment, we have a number of gulp tasks that are responsible for generating html, compiling scss and javascripts and more. Your best bet to understanding these tasks in depth is to check out the contents of `www/gulpisms`:

### Public Tasks

These are the tasks we interact with directly

| file | gulp command(s)| description |
|------|----------------|------|
|gulpfile.js|dev:styleguide|Primary task for development workflow. Kicks off a livereload process for monitoring the styleguide, which will trigger compilation of all markdown templates, sass and javascript sourcefiles, and invoke a browser refresh. This task remains open until you close it with control-c, and will start a local server at localhost:4000 |
|"|dev:sho|Same as above, but with a focus on the sho.com web application, instead of the styleguide. This starts a proxy of the tomcat web application running on localhost:8081 that will automatically reload on change.|
|clean.js| reset| Delete the various instances of the styleguide, recompile templates, syncronize and build the styleguide from source. useful when something is cached or when similarly named directories stubbornly refuse to delete in the destination contexts (site and sho)|
|deploy.js| deploy|Set environment variables for the asset-server context and deploy the styleguide to the local /assets webapp|
|"| build|Build a production copy of the styleguide|


### Private Tasks

These are private/utility tasks that are called by other gulp tasks

| file | gulp command(s)| desc |
|------|----------------|------|
|sass-environment.js|sass-env--asset-server, sass-env--development,s ass-env--production|Copy one of the environment-specific variable stylesheets into place as _variables.env.scss. this is our workaround for normalizing svg paths etc across different env contexts |
|sass.js| sass|Compile the sho and styleguide bundles to css and stamp with the version number defined in package.json|
|uglify.js|uglify|minification of the javascript bundle. this is slow so it's only called by the build task|
|browserify.js|browserify|resolve dependencies, transpile es6 modules into es5 (vanilla javascript) with Babel, and package/concat into a single javascript asset|
|compile-site.js|compile-site|invoke static generation of the styleguide website with metalsmith |
|build-styleguide.js|build-styleguide| a wrapper task called by the watcher whenever there is a change to the styleguide src. it calls these in sequence: sync-styleguide,sass,browserify,compile-site,refresh |
|compile-templates.js|compile-templates|coerce the folder of order tray templates into a list of imports that can be handlebars-afied transform(hsbfy)|
|readme.js|readme|copy this markdown file from project root to styleguide |
|build-styleguide.js|build-styleguide|compile static html site with metalsmith |
|watch.js| | |
|clean.js| clean| force the deletion of different instances of the styleguide |


## Troubleshooting

when in doubt, try `gulp reset`. this task attempts to restore your environment to a pristine state by deleting the various instances of the styleguide (there are serveral), and re-generating them from scratch.

The `dev:styleguide` and `dev:sho` tasks call a number of tasks in a series. If you get node or gulp errors while running the task, it's worth stopping to try each of the individual tasks in isolation to see where the failure is. they can be seen by inspecting the contents of `gulpisms/watch.js`

```
gulp.task('watch', function() {
  gulp.watch(paths.templates,   opts, gulp.series('build-styleguide'));
  gulp.watch(paths.sourcefiles, opts, gulp.series('sync-styleguide'));
  gulp.watch(paths.javascripts, opts, gulp.series('browserify'));
  gulp.watch(paths.stylesheets, opts, gulp.series('sass'));
});

// so, to step through this process one task at a time, we'd try:
$ gulp sync-styleguide
$ gulp sass
$ gulp browserify
$ gulp compile-site
```

## Workflow

Your typical workflow shouldn't involve working in the `site` intself too much; the exception obviously being if you need to modify some of the styleguide site itself.

The workflow will usually look like:

1. Create a branch, from `develop` (in usual git-flow style) with a descriptive name ie `feature/SITE-12687-slider-widget` *
2. Edit some file in the `styleguide` itself (a component / element / etc)
3. Push your changes on the branch
4. Create a Pull Request detailing your changes
5. Pull request gets merged in
6. Changes to styleguide src are propagated up to sho and to styleguide/site
6. New version of the styleguide goes out as part of normal sho.com build release schedule

_the feature branch name should be the JIRA ticket followed by a hyphenated, lower-cased phrase such as the component name. when creating a pull request in STASH, this branch name can be used as the name for the pull request, by dropping the 'feature/' part_ 

## Adding a new component

A new component can be created in the `styleguide` folder by creating a new folder that names the item you wish to create eg `slider`.

Inside of this folder should be:

1. An `index.md` file that documents the component and it's use
2. Any SCSS files associated
3. Any JS files associated

### Markdown

The markdown file should contain the following things:

1. A reference to which category the file should be in (see /styleguide/typography/index.md for more details)
2. The name of the component
3. An example of the component AND HTML markup for the component

### CSS (Sass)

The entry point of a component's Sass should **always** be named after the component itself as a partial. Eg: `_slider.scss`. If this module has separate pieces of Sass, then import those **in this entry point**.

All CSS must adhere to the guidelines established.

### JS

The entry point for any JS in a component must be named `index.js` and should export only one object or function to be consumed by the application implementing the styleguide

All JS must be authored in ES6 following the guidelines established.

## Including the Styleguide in your project

In your Sass file:

```sass
@import "../lib/styleguide/index";
```
 
In your  Javascript file:

```javascript
import ShoModules from "lib/styleguide/index";
// This gives you a reference to ALL JS components
// OR if you want a specific component
// import SpecificComponent from "sho_styleguide/styleguide/component/index";
```

## Deploying Style-Guide to QA

The folowing are a list of steps to build the Style Guide to QA

## How it works

- Navigate to your StyleGuide Directory in the Terminal. It is usually `/usr/webapps/www/src/main/webapp/www/`
- Make sure you are in develop branch  - `git checkout develop`
- Do a git pull to get latest code - `git pull`
- Change version number by editing `package.json` version field
- Run `gulp reset` to clean everything up. Sometimes when you switch from a remote branch when working on a StyleGuide component  and then switch back to develop, your incomplete work can show up.
- Run `gulp deploy:asset-server`

## Key Commands straight up:

```
$ cd /usr/webapps/www/src/main/webapp/www/
$ git checkout develop
$ git pull
$ gulp reset
$ gulp deploy:asset-server
```

Navigate to the newly created dir structure which is typically `/usr/webapps/assets/html`

## Test/View Style Guide on your local after build
1) Start your Tomcat
2) Go to http://localhost:8080/assets/html/ 

Note: Here Tomcat is used only to test if it loads. To work in the style guide normally you do not need Tomcat as you are using `http://localhost:4000/`

## Deploy to QA
1. Using an FTP Tool such as Cyberduck or Transmit, upload the html directory to the assets folder `content/data/sho.com/webapps/assets` in dev.com

2. Using the stager tool, push the styleguide directory up to the QA instances of `assets/html`
<style type="text/css">
  table {
    border:#000 solid 1px;
    border-collapse: collapse;
  }
  td,th {
    border: #000 solid 1px;
    padding:10px 15px;
    font-family: "Consolas", "Courier New", "Monaco", monospace;
    background-color:#222226;
  }
</style>