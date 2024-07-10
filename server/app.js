var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// /adminapi/ * --后台系统用
const UserRouter = require('./routes/admin/UserRouter');
const UserUploadRouter = require('./routes/admin/UserUploadRouter.js')
    // /webapi/ * --企业官网用
const usersRouter2 = require('./routes/web/UserRouter.js');
const { log } = require('console');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 跨域问题
// app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// /adminapi/ * --后台系统用
app.use(UserRouter)
app.use(UserUploadRouter)

// /webapi/ * --企业官网用
app.use(usersRouter2)
    // catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.send({
        err: "出错了"
    })
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;