const express = require('express');
const app = express();
const path = require('path');

// Set up view engine and static files
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
    res.render("index");
}); // <--- Added closing bracket here

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});