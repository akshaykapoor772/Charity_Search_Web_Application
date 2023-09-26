# Charity Search Web Application

## Overview
This web application provides a platform to search for charities. Users can view key information about each charity, including an image, name, address, and mission statement.

## Files in the Repository
* __data.db:__ SQLite database file storing application-related data.

* __run.py:__ Main server file for the Flask web application. Defines routes and renders appropriate templates based on user requests.

* __db.py:__ Provides functionality for interacting with the SQLite database and performing specific data-related operations.

* __index.py:__ Contains functionality related to indexing and searching using the Whoosh library.

* __goatViewer.js, searcher.js, viewer.js:__ JavaScript files providing frontend functionalities like searching, displaying results, and viewing details.

* __home.html, base.html, view.html:__ HTML templates defining the structure and layout of the web pages.

## Features

* __Charity Search:__ Users can search for charities using a search bar on the home page.

* __Search Results:__ Displays a list of charities matching the search criteria. Each result includes an image, name, address, and a truncated mission statement with a "read more" option.

* __Detailed View:__ Clicking on a charity's name takes the user to a detailed view page showing more information about the selected charity.

## How to Run

1. Ensure you have Flask installed.
2. Navigate to the project directory in the terminal.
3. Run the command python run.py.
4. Open a web browser and go to http://127.0.0.1:5000/ to access the application.

## Future Enhancements
* __Advanced Search:__ Implement filters and sorting options for more refined searches.

* __User Profiles:__ Allow users to create profiles, save favorite charities, and track their interactions.

* __Donation Integration:__ Implement a feature to allow users to make donations directly through the platform.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
