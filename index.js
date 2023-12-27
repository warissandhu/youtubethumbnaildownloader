const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
