var http = require('http');
var express = require('express');
var bodyParser = require('body-parser')
var apiConfig = express();
var cors = require('cors');
apiConfig.use(cors());
apiConfig.use(bodyParser.json({limit: "50mb"}));
apiConfig.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 5000}));


var store = {};

apiConfig.post('/get', async(req, res)=>{
    const {z} = req.body;

})
   

apiConfig.post('/post', async(req, res)=>{
    const {z} = req.body;

})


apiConfig.post('/update', async(req, res)=>{
    const {z} = req.body;

})


apiConfig.post('/delete', async(req, res)=>{
    const {z} = req.body;

})

