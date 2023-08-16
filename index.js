var http = require('http');
var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser')
var apiConfig = express();
var cors = require('cors');
apiConfig.use(cors());
apiConfig.use(bodyParser.json({limit: "50mb"}));
apiConfig.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 5000}));


ApiFunction = async() =>{

apiConfig.get('/getAll', async(req, res)=>{
   // const {z} = req.body;
   let data1 = await axios.get('http://localhost:3002/getAll')
   console.log(data1.data)
   res.json(data1.data)
})
 
apiConfig.get('/get/:id', async(req, res)=>{
   // const {z} = req.body;
   const itemId = parseInt(req.params.id);
   let data1 = await axios.get('http://localhost:3002/get/'+itemId)
   console.log(data1.data)
   res.json(data1.data)
})

apiConfig.post('/post', async(req, res)=>{
   // const {z} = req.body;
   let data1 = await axios.post('http://localhost:3002/post',req.body)
   res.json(data1.data)

})


apiConfig.put('/update/:id', async(req, res)=>{
   // const {z} = req.body;
   const itemId = parseInt(req.params.id);
   const updatedItem = req.body;
   let data1 = await axios.put('http://localhost:3002/update/'+itemId,updatedItem)
   res.json(data1.data)
})


apiConfig.delete('/delete', async(req, res)=>{
    //const {z} = req.body;
    const itemId = parseInt(req.params.id);
    let data1 = await axios.put('http://localhost:3002/delete/'+itemId)
    res.json(data1.data)
})

}

ApiFunction();

http.Server(apiConfig).listen(3001, ()=>{
    console.log("server running on 3001")
})