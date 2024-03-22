const Music = require('../models/musicscores');
const User = require('../models/user');

module.exports = {
    index,
    new: newMusicScore,
    create,
    show,
    delete: deleteSong,
    edit: editMusic,
    update: updateMusic
}

async function index(req, res) {
    const musicscore = await Music.find();
    res.render('musicscores/index', {
        title: 'All Music',
        musicscore,
        errorMsg: ''
    });
};

function newMusicScore(req, res) {
    res.render('musicscores/new', {
        title: 'Add Music Sheet',
        errorMsg: ''
    });
};

async function create(req, res) {
    const music = await new Music.create();
    try {
        music.save();
        res.redirect('musicscores')
    } catch(err) {
        console.log(err)
        res.redirect('/');
    }
}

async function show(req, res) {
    const musicscore = await Music.findById(req.params.id).populate('reviews');
    res.render('musicscores/show', {
        title: musicscore.song,
        musicscore
    })
}


async function deleteSong(req, res) {
    try {
        await Music.findByIdAndDelete(req.params.id);
        res.redirect('/musicscores');
    } catch(err) {
        console.error(err)
        res.redirect('/musicscores');
    }
}

async function editMusic(req, res) {
    const music = await Music.findById(req.params.id);
    try{
        res.render('musicscores/edit', 
        {
            music,
            title: 'Edit Musicsheet'
        }
        );
    } catch(err) {
        console.log(err)
        res.redirect('/musicscores');
    }
}

async function updateMusic(req, res) {
    try {
        await Music.findOneAndUpdate({ '_id': req.params.id}, req.body, {new: true});
        res.redirect(`/musicscores/${req.params.id}`);
    } catch(err) {
        console.log(err);
        res.redirect(`/musicscores/${req.params.id}`);
    }
}