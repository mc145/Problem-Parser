const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const fs = require('fs'); 
const app = express(); 


app.use(bodyParser.json()); 
app.use(cors()); 

const PORT = 10043; 
let userInput = process.argv[2]; 

let T = fs.readFileSync('template.cpp', 'utf-8'); 
let Q = fs.readFileSync('genTemp.cpp', 'utf-8'); 
let data; 
let starts = false; 
app.post('/', (req, res) =>{
   data = req.body;  
    starts = true; 
    let num = data.name[0] + data.name[1];      
    //console.log(num);
    fs.mkdirSync(`${userInput}/${num}`); 
    all_tests = JSON.stringify(data.tests);  
 //console.log(all_tests); 
    

    // Count the number of tests

    let test_number = 0; 

    let cur = 0;

    while(all_tests[cur] != ']'){
        if(all_tests[cur] == '{'){
            test_number++; 
        }
        cur++; 
    }
    //console.log("Test number " + test_number); 



 //   console.log(all_tests[11]); 
    let start_input = 0; 
    for(let k = 0; k<test_number; k++){
    while(all_tests[start_input] != '{'){
        start_input++; 
    }

    start_input+=10; 
   // console.log("START" + all_tests[start_input]); 
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
    //console.log(input); 
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
    //console.log(output);
        fs.writeFileSync(`${userInput}/${num}/main.cpp`, T); 
        fs.writeFileSync(`${userInput}/${num}/${k}.in`, input); 
        fs.writeFileSync(`${userInput}/${num}/${k}.out`, output); 
        fs.writeFileSync(`${userInput}/${num}/gen.cpp`, Q); 
       console.log(`Already made problem ${num}!`); 
        console.log('Samples downloaded!'); 

        console.log(`Problem ${data.name} Finished!`); 

        console.log('\n'); 
    }


   // __________________________________________________________________________
    


    















}); 
app.listen(PORT, err=>{
    if(err){
        console.error(err); 
        process.exit(1);
    }
    console.log(`Listening on port ${PORT}`); 
}); 
