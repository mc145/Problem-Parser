const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 

const app = express(); 


app.use(bodyParser.json()); 
app.use(cors()); 


const PORT = 10043; 




app.post('/', (req, res) =>{
    const data = req.body; 
    console.log(`Problem Name: ${data.name}`); 
    console.log(`Problem Group: ${data.group}`); 
    console.log('Full body:'); 
    console.log(JSON.stringify(data, null, 4)); 
});
 
app.listen(PORT, err=>{
    if(err){
        console.error(err); 
        process.exit(1);
    }
    console.log(`Listening on port ${PORT}`); 
}); 
