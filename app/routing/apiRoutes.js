
var friends = require('../data/friends.js');
var path = require('path');




module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });



    app.post('/api/friends', function(req, res){

        var newFriend = {
            name 	  : "",
            photo 	  : "",
            matchDiff : 1000
        };

        var newFriendData 	= req.body;
        var newFriendName 	= newFriendData.name;
        var newFriendPhoto 	= newFriendData.photo;
        var newFriendScore 	= newFriendData.scores;


        var totalScore = 0;


        for (var i=0; i<friends.length-1; i++){
            console.log(friends[i].name);
            totalScore = 0;



            for(var j=0; j<10; j++){

                totalScore += Math.abs(
                    parseInt(newFriendScore[j]) - parseInt(friends[i].scores[j]));

                if (totalScore <= newFriend.friendDiff){


                    newFriend.name 		= friends[i].name;
                    newFriend.photo 	= friends[i].photo;
                    newFriend.matchDiff = totalScore;
                }
            }
        }

        friends.push(newFriend);
        res.json(newFriend);
    });
};


