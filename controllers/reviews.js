const Music = require('../models/musicscores')

module.exports = {
    create,
    delete: deleteReview
}

async function create(req, res) {
    const musicscore = await Music.findById(req.params.id);
    req.body.user = req.user;
    musicscore.reviews.push(req.body);
    try {
        await musicscore.save();
    } catch(err) {
        console.log(err);
    }
    res.redirect(`/musicscores/${musicscore.id}`);
}

async function deleteReview(req, res) {
    const music = await Music.findOne({ 'reviews._id': req.params.revId });
    if(!music) return res.redirect(`/musicscores/${req.params.id}`);
    music.reviews.remove(req.params.revId);
    await music.save();
    res.redirect(`/musicscores/${req.params.id}`)
}