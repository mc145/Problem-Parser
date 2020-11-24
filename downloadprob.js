const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 

const app = express(); 


app.use(bodyParser.json()); 
app.use(cors()); 


const PORT = 10043; 



let data; 
let starts = false; 
app.post('/', (req, res) =>{
   data = req.body;  
    starts = true; 
    
    all_tests = JSON.stringify(data.tests);  
 console.log(all_tests); 
 //   console.log(all_tests[11]); 
    let start_input = 11; 

    let cur_pos = start_input; 
 //   console.log(cur_pos); 
    while(all_tests[cur_pos] != ","){
        cur_pos++; 
       // console.log(data[cur_pos]); 
    }
    
    cur_pos-=2; 

    let input = ""; 

    for(let i = start_input; i<=cur_pos; i++){
        if(all_tests[i] != "\\" && all_tests[i] != "n"){
            input+=all_tests[i]; 
        }
        else if(all_tests[i] == "n"){
            input+=' '; 
        }
    }
    console.log(input); 
    // Output starting is 14 more than end of input 

    let start_output = cur_pos + 13; 
    cur_pos = start_output; 

    while(all_tests[cur_pos] != "}"){
        cur_pos++; 
    }
    cur_pos-=2; 
    let output = ""; 
    
    for(let i = start_output; i<=cur_pos; i++){
        if(all_tests[i] != "\\" && all_tests[i] != "n"){
            output+=all_tests[i]; 
        }
        else if(all_tests[i] == "n"){
            output+=' '; 
        }
    }
    console.log(output); 

}); 
app.listen(PORT, err=>{
    if(err){
        console.error(err); 
        process.exit(1);
    }
    console.log(`Listening on port ${PORT}`); 
}); 
