var Auth = require('./controllers/auth');
var User = require('./models/user');
var BucketList = require('./controllers/bucketlistcontroller');

var passportService = require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app){

	app.post('/api/signup', Auth.signup);
	app.post('/api/signin', requireSignin, Auth.signin);
	app.post('/api/newitem', requireAuth, BucketList.addBucketList);
	app.get('/api/items', requireAuth, BucketList.fetchBucketLists);
	app.get('/api/items/:id', requireAuth, BucketList.fetchBucketList);
	app.put('/api/items/:id', requireAuth, BucketList.updateBucketList);
	app.delete('/api/items/:id', requireAuth, BucketList.deleteBucketList);
};