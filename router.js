const express = require('express');
 exports.register = (app) => {
    app.use('/api/users', require('./api/users'));
    app.use('/api/clientProfile', require('./api/clientProfile'));
    app.use('/api/curriculum', require('./api/curriculum'));
    app.use('/api/grade', require('./api/grade'));
    app.use('/api/course', require('./api/course'));
    app.use('/api/lesson', require('./api/lesson'));
    app.use('/api/kit', require('./api/kit'));
    app.use('/api/teacher', require('./api/teacher'));
    app.use('/api/adminBlog', require('./api/adminBlog'));
    app.use('/api/clientBlog', require('./api/clientBlog'));
    app.use('/api/order', require('./api/order'));
    app.use('/api/stats', require('./api/stats'));
    app.use('/static', express.static('./public'));
};
