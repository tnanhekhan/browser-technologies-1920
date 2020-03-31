const http = require('http');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const directionsRouter = require('./routes/directions');
const port = process.env.PORT || 3001;

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(logger('dev'))
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')))
    .use('/', indexRouter)
    .use('/directions', directionsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (req, res, next) {
    next(createError(402));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);

    let errorMessage;
    if (err.status === 404) {
        errorMessage = "You took a wrong turn! Page not found!"
    } else if (err.status === 402) {
        errorMessage = "We didn't find any directions. Please try again."
    }
    res.render('error', {title: err.status, message: errorMessage});
});

http.createServer(app).listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});

module.exports = app;
