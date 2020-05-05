const express = require('express');
 exports.register = (app) => {
    app.use('/api/users', require('./api/users'));
    app.use('/api/clientProfile', require('./api/clientProfile'));
    app.use('/api/grade', require('./api/grade'));
    app.use('/api/course', require('./api/course'));
    app.use('/api/lesson', require('./api/lesson'));
    app.use('/api/kit', require('./api/kit'));
    app.use('/api/teacher', require('./api/teacher'));
    app.use('/api/adminBlog', require('./api/adminBlog'));
    app.use('/static', express.static('./public'));
};
