'use strict';


module.exports = {
    app: {
        name: 'GrowStuff'
    },
    twitter: {
        clientID: process.env.TWITTER_CONSUMER_KEY,
        clientSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    }
};