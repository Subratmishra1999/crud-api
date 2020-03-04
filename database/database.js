const mongoose = require('mongoose');

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/mySchoolData', {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});