## Human API Project

### Production App link
[Human API Link](https://test-crud-app.firebaseapp.com/)
The application is deployed in Firebase.

### Feature set
* User Sign up page which creates users with email, password and id. Id is unique and 20 chars long. Email is also unique.
* Password contains on numeral atleast and is a minimum of 8 chars
* Username is email address and validation for email address
* Tokens are 20 chars long and unique
* Users can be created through the sign up process
* There is a sign in button which is just a place holder. Right now, only sign up is supported for user creation.
* Admin can edit and delete users
* Editing users includes editing their email address and adding and deleting tokens
* Opening a user's page lists their information with tokens.
* Editing any user information, updates the updated_at automatically.
* From the Second section: Added unit tests and selenium tests for testing all the different pages and components.

### Stuff I used
* Polymer Starter Kit which helps build apps using Polymer framework and Firebase database (nosql)
* Firebase for storing data
* Polymer's own routing scheme from page.js and Iron-pages elements
* Gulp for task running
* web-component-tester for unit and selenium tests (Also introduced by Polymer for Polymer)
* Plain old CSS
* Paper elements from Material Design for all the UI elements
* Utility called randomID for generating random ids
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
* app/scripts/vendor has randomID which I am using for generating random ids
* app/scripts/app.js is the starting js script for the app.
* all the tests are placed under app/test.
* index.html is the root of the application.
* firebase.json is set up for Firebase and also application deployment.
* wct.conf.js is test setup.

### Running unit tests + selenium
* gulp test:local

### What is included in Polymer Starter Kit
* [Polymer](http://polymer-project.org), [Paper](https://elements.polymer-project.org/browse?package=paper-elements), [Iron](https://elements.polymer-project.org/browse?package=iron-elements) and [Neon](https://elements.polymer-project.org/browse?package=neon-elements) elements
* [Material Design](http://www.google.com/design/spec/material-design/introduction.html) layout
* Routing with [Page.js](https://visionmedia.github.io/page.js/)
* Unit testing with [Web Component Tester](https://github.com/Polymer/web-component-tester)
* NOT USING THIS FOR THIS PROJECT: Optional offline setup through [Platinum](https://elements.polymer-project.org/browse?package=platinum-elements) Service Worker elements
* End-to-end Build Tooling (including [Vulcanize](https://github.com/Polymer/vulcanize))
