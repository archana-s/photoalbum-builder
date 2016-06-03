## Viv Project

### Production App link
[Viv Project link](https://viv-project.firebaseapp.com/)
The application is deployed in Firebase.

### Feature set
* User can create a photo album
* Created date is attached to the photo album
* User can search for photos by keywords or by location
* User can add any number of photos to the album through search
* Photos have a added timestamp
* User can delete photos any or all the photos in the album
* User can view the photos in thumbnails or as a gallery

### Stuff I used
* Polymer Starter Kit which helps build apps using Polymer framework
* Localstorage for storing data.
* Polymer's own routing scheme from page.js and Iron-pages elements
* Gulp for task running
* Plain old CSS
* Paper elements from Material Design for all the UI elements
* Node modules + bower components (all of polymer's elements are bower components)

### Set up
* Please install node and gulp
* Clone the repo
* npm install
* bower install (make sure .bowerrc is present)
* Run gulp serve

### Code structure
* app directory contains all the app specific code.
* app/elements contains all the web components for the different parts of the app.
* Each element has its own directory and inside that is an HTML file which includes html, js and styles for the same.
* Styles inside each of these elements are scoped by the element by default.
* Common set of styles are placed in styles/main.css
* app/scripts/app.js is the starting js script for the app.
* index.html is the root of the application.
* firebase.json is set up for Firebase and also application deployment.

### What is included in Polymer Starter Kit
* [Polymer](http://polymer-project.org), [Paper](https://elements.polymer-project.org/browse?package=paper-elements), [Iron](https://elements.polymer-project.org/browse?package=iron-elements) and [Neon](https://elements.polymer-project.org/browse?package=neon-elements) elements
* [Material Design](http://www.google.com/design/spec/material-design/introduction.html) layout
* Routing with [Page.js](https://visionmedia.github.io/page.js/)
* Unit testing with [Web Component Tester](https://github.com/Polymer/web-component-tester)
* NOT USING THIS FOR THIS PROJECT: Optional offline setup through [Platinum](https://elements.polymer-project.org/browse?package=platinum-elements) Service Worker elements
* End-to-end Build Tooling (including [Vulcanize](https://github.com/Polymer/vulcanize))
