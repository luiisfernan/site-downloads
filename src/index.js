const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');





app.use(morgan('dev'));
app.use(require('./routes/index.js'));




app.use(express.static(path.join(__dirname, 'public')));




app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});