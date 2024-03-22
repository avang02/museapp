var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexCtrl = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to MuseApp' });
});
//  GET /pop
router.get('/pop', indexCtrl.showPop);
//  GET /classical
router.get('/classical', indexCtrl.showClassical);
//  GET /jazz
router.get('/jazz', indexCtrl.showJazz);
//  GET /randb
router.get('/randb', indexCtrl.showRandb);
//  GET /rock
router.get('/rock', indexCtrl.showRock);
//  GET /country
router.get('/country', indexCtrl.showCountry);
// GET /dashboard
router.get('/dashboard', indexCtrl.showDashboard);


// OAuth setup
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/musicscores',
    failureRedirect: '/musicscores'
  }
));
router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/musicscores');
  });
});

module.exports = router;
