const router = require('express').Router();

router.use('/', (req, res, next) => {
    //TODO: Verify user
    return next();
});

router.get('/todo/', (req, res) => {
    //TODO: return todo list
});

router.put('/todo/edit/:id', (req, res) => {
    //TODO: edit the todo 
});

router.delete('/todo/edit/:id', (req, res) => {
    //TODO: delete the todo 
});
