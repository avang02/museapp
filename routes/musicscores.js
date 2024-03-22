const express = require('express');
const router = express.Router();
const musicscoresCtrl = require('../controllers/musicscores');
// Insert a user into database

// GET /musicscores
router.get('/', musicscoresCtrl.index);
// GET /musicscores/new
router.get('/new', musicscoresCtrl.new);
// POST /musicscores
router.post('/', musicscoresCtrl.create);
// GET /musicscores/:id (this SHOW function MUST be below new route)
router.get('/:id', musicscoresCtrl.show)
// delete /musicscores/:id
router.delete('/:id', musicscoresCtrl.delete);
// get /musicscores/:id/edit
router.get('/:id/edit', musicscoresCtrl.edit)
// put /musicscores/:id
router.put('/:id', musicscoresCtrl.update)


module.exports = router;
