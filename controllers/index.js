const Music = require('../models/musicscores');
const User = require('../models/user')

module.exports = {
    showPop,
    showClassical,
    showJazz,
    showRandb,
    showRock,
    showCountry,
    showDashboard
}

async function showPop(req, res) {
    const popmusic = await Music.find({ genre: 'pop' });
    res.render('pop', {
        title: 'All Pop Music',
        popmusic
    })
}
async function showClassical(req, res) {
    const classicalmusic = await Music.find({ genre: 'classical' });
    res.render('classical', {
        title: 'All Classical Music',
        classicalmusic
    })
}
async function showJazz(req, res) {
    const jazzmusic = await Music.find({ genre: 'jazz' });
    res.render('jazz', {
        title: 'All Jazz Music',
        jazzmusic
    })
}
async function showRandb(req, res) {
    const randbmusic = await Music.find({ genre: 'R&B' });
    res.render('randb', {
        title: 'All R&B Music',
        randbmusic
    })
}
async function showRock(req, res) {
    const rockmusic = await Music.find({ genre: 'rock' });
    res.render('rock', {
        title: 'All Rock Music',
        rockmusic
    })
}
async function showCountry(req, res) {
    const countrymusic = await Music.find({ genre: 'country' });
    res.render('country', {
        title: 'All Country Music',
        countrymusic
    })
}

async function showDashboard(req, res) {
    const dashboard = await Music.find({ user: User.googleId });
    res.render('dashboard', {
        title: 'Dashboard',
        dashboard
    })
}