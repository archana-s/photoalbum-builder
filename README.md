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

## Design decisions
* I used Polymer.js to play with web components and all the new Google's features like material design, page.js routing bundled in to it.
* There are four different pages for the web app: home ( where you can find your album ), search ( for searching for images using tags or location ), album (display of photos, ability to add/delete), gallery (to view the images as a gallery). I set up routes for each one of them. That way, it is easier to manage and also pass around links.
* I separated out the logic for different UI elements in to components (in this case even web components).
* I used icons as a means to convey information redundantly which is not only immediately intuitive but also fun to play with.
* I built the search box to allow for users to search by tags and by location. I used Google Maps api to fetch locations that match the string that they provided. I included auto-filling which makes it easier for users to click and choose. It also displays the tag (or the input that the user typed) as is, so the user can always search by just the keywords and not location.
* I wanted the search box to look like a search + dropdown. It is made up of an input control and a menu. I included a lot of keyboard support for the user to move from input to the menu of auto-filled suggestions and vice versa. The demarcation between tags and locations in the same menu is made clear with icons.
* I used Flickr's apis to fetch data by tags or by latitude and longitude.
* Clicking in to each thumbnail photo helps the user toggle the selections. The user can then add those photos to the album. The selection looks like a highlighted photo, but a checkbox is used in the background which makes this control accessible as well.
* I segregated the photos list to its own component. This component handles displaying list of photos, handling any photo selection, allowing for "select all" and "unselect all". It also has a load more functionality for pagination. The parent component can decide to do what they want with the selections. This is reused by the search page and the album page. User can add photos from search page, delete them from album page through this common component.
* I used "Load more" in the photos list for search page over pagination with page numbers. This helps the user see all her/his selections at one glance with some scrolling.
* All the buttons have a neat icon to convey its purpose. This makes it intuitive even from peripheral vision.
* In the album, you can select photos and delete them in bulk. This can help with deleting images that are similar.
* The album also links to the gallery where you can view images in large in a carousel. The images can be deleted from here too.
* The gallery is useful to see additional information about the photos as well. In this case, I added a "photo added to album date". It can contain more information. Back and forward key controls on this page will move the carousel in either direction.
* I added empty states for every page. I also added a message for someone who lands in album/gallery route without an album. These empty states have icons in them too for a little delight factor.

## Future Improvements - Things I would have done with more time
* Ability to create multiple albums
* User management - have the ability for multiple users to create their albums
* When a user searches for photos, fetch related tags and suggest those by the side.
* Before they search, display the most recent/most popular photos.
* Use firebase and AWS to store the data. This can give the app more control and also help with performance. Right now it uses localStorage.
* Pre-fetch images in gallery and improve performance for image loads.
* Optimize the experience for mobile. Have an offline mode for operation too with service workers.
* Grouping the photos in the album by query/date.
* Allow sorting of photos.
* Using grid system for page layouts.

### Technologies I used
* Polymer Starter Kit which helps build apps using Polymer framework
* Web components for the different UI elements
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
