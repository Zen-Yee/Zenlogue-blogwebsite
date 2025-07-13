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
- Created basic project folder structure:
  - `/views` – for EJS templates. 
  - `/public` – for static resources (CSS, images, JS).
- Designed basic blog layout including:
  - Header with navigation bar.
  - Blog post container
  - Side bar  
  - Footer 
- Added aboutMe.ejs to the `/views` folder.

### [Week 2] – 22-28/06/2025
- Introduced posts.json to store blog post data.
    - JSON is used instead of a database as no backend database is hosted yet
- Updated index.js to fetch data from posts.json and render on the homepage.

### [Week 3] – 29-05/07/2025
- Created login.ejs for user login interface.
- Created user.ejs and headerUser.ejs:
    - These mirror index.ejs and header.ejs, but include:
        - A text field for creating new posts.
        - A modified navigation bar with a "Logout" button instead of "Login".
- Updated index.js:
    - Added "/login" endpoint to serve the login page when "Login" is clicked in the navbar.
    - Added "/User" endpoint to handle submitted credentials:
        - If correct, the user is directed to user.ejs.
        - If incorrect, the user is alerted and redirected back to "/login".
- Noted redundancy between:
    - user.ejs & index.ejs
    - headerUser.ejs & header.ejs
- Exploring ways to reuse components and reduce code duplication.

### [Week 4] – 06-12/07/2025
- Updated index.js:
    - Added loginY variable where "1" represent log in, and "0" represent log out.
    - Updated the data passed to res.render() by including loginStatus: loginY, enabling templates to reflect user authentication status.
    - Updated "/User" endpoint, instead of render user.ejs, it updated loginY = 1" and redirect back to "/" endpoint.
    - Added "/posts/new" endpoint to handle new post added by user.
    - Added "/logout" endpoint to change loginY = "0".
- Updated index.ejs:
    - Added section "blog-update" that contains a form let user update new post.
    - Added conditional statement for loginStatus, if loginStatus === "1":
        - Navigation bar will show log out.
        - Section "blog-update" will shown.
- Removed user.ejs and headerUser.ejs.
- Update main.css


## Author
**Zen Yee**  
GitHub: [@Zen Yee](https://github.com/Zen-Yee)  
Software developer striking to explore more full-stack technologies.