var BucketList = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){
	//for Postman use
	// var title = req.body.title;
	// var topic = req.body.topic;
	// var url = req.body.url;
	// var content = req.body.content;
	// var specificUser = req.user;

	var title = req.body.props.title;
	var topic = req.body.props.topic;
	var url = req.body.props.url;
	var content = req.body.props.content;
	var specificUser = req.user;

	var bucketList = new BucketList({
		title: title,
		topic: topic,
		url: url,
		content: content,
		specificUser: specificUser
	});

	bucketList.save(function(err){
		if(err) { return next(err); }
		res.json(bucketList);
	});
}