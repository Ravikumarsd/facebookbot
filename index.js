const express = require('express'),
      bodyParser = require('body-parser'),
      request = require('request'),
      app = express();

      app.set('port',(process.env.PORT || 5000))

      app.use(bodyParser.urlencoded({extended: false}))
      app.use(bodyParser.json())
    app.get('/',function(req, res) {
        res.send("Hello Heroku")
    })