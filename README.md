# Nuvalence Address Book

## Running and Testing application

To Run the Application, run `ng serve --open` or `npm run start`

To Run Unit tests, run `ng test`.  Tests are written in Jasmine with the Karma runner

To Run End to End Tests, run `ng e2e`.

## Project Summary

This application was scaffolded using the Angular 11 CLI.  

I chose the material library for the UI controls because of my familarity with it and it comes with some easy to implement themes to get me to MVP quicker.

I implemented a sidebar list that has thumbnails.  This sidebar stays open for larger screens and auto-collapses when the screen size is less than 600px wide.

The details page is on a route that's loaded by clicking on the user's name from the sidebar

## If more time was available

### Type Safety
I would create an interface for the user objects being returned via the api so that I wouldn't be using any as the type.  
This would take about 3 hours to investigate and implement

### Resolver for Detail Page
I would add a resolver for the detail page to validate the querystring parameter and show a different page if the user isn't found
This would take about an hour plus unit tests

### Preview for the sidebar items.  
When you hover over the people on the sidebar, I would add a popup that shows phone numbers.
This would probably take about an hour plus unit tests

### Paging, Sorting and Filtering
I would have added the ability to page through a variable set of items per page, filter the list by name/address/phone# and sort the results. Currently, the list size is hardcoded to 20 entries.
This would probably take 5 hours plus unit tests

### Localization
It would probably only take a few hours at most to add localization support, but adding the different languages would be an ongoing project as languages are requested




