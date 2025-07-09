# Zenlogue - A Developer’s First Blog
A modern and responsive blogging website created as a Capstone Project from "The Complete Full-Stack Web Development Bootcamp" from Dr. Angela Yu (Udemy) to learn and practice full-stack web development. Users can view read, create, edit, and manage blog posts through a clean and intuitive interface. Posts will not persist between sessions as no database will be used in this version of the application. 

## Features
- View, create, update and delete blog posts.
- Posts stored in a JSON file (no database).
- Sidebar with author bio and quick links.

## Built With
- HTML, CSS, JavaScript
- Node.js & Express
- EJS Templating
- JSON file for storing posts

## My Journey 🚀

### [Week 1] – 15-21/06/2025
- Created basic project folder structure with `/views` (stores dynamic templete) and `/public` (Stores resource used across website).
- Created basic layout for the blog website, include navigation bar, blog post container, side bar and footer. 
- Added aboutMe.ejs in folder `/views`.

### [Week 2] – 22-28/06/2025
- Added posts.json file to stores post data. JSON file is use as storage because no database as no databse is hosted for this project.
- Updated index.js file to pull data from posts.json.

### [Week 3] – 29-05/07/2025
- Created login.ejs for user login.
- Created user.ejs & headerUser.ejs which is exactly same as index.ejs & header.ejs, except an additional section with text field to let user add new post, and navigation bar with "logout" instead of "login".
- Updated index.js file: added endpoint "/login" that direct user to the login page once they clicked on "login" in the navigation bar.
- Updated index.js file: added endpoint "/User" to handle credentials submitted in "login.ejs". If the credentials is correct, send "user.ejs" to the user. Alert and redirect back to "/login" otherwise.
- Observed similar patterns: user.ejs & index.ejs, headerUser.ejs & header.ejs, searching for solutions to combine these and avoid repetitive functions.


## Author
**Zen Yee**  
GitHub: [@Zen Yee](https://github.com/Zen-Yee)  
Software developer striking to explore more full-stack technologies.