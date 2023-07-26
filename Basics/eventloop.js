// const fs = require("node:fs");

// fs.readFile("./file.txt",(err,data)=>{ //I/O -> async methods form the built-in-modules 
//     console.log("This is from I/O queue")    //I/O polling
// })

// console.log("First global");

// let readstream = fs.createReadStream('./file.txt');
// readstream.close();

// readstream.on("close", ()=>{
//     console.log("This is from close queue");
// })

// Promise.resolve().then(()=> console.log("This is from promise queue"));

// process.nextTick(()=>console.log("This is from nextTick queue"));

// setTimeout(()=> console.log("This is from timeout queue"), 0)

// setImmediate(()=>console.log("This is from check queue"));

// console.log("Statement at the end");

//------------------------------------------------------------------------------------------------------
          
           //fspromises


// fs.readFile("./file.txt", "utf-8") 
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err));


//--------------------------------------------------------------------------------------------------------
      
   
//       const fs = require("fs/promises")

//  async function readFile(){
//     try{
//         const data = await fs.readFile("./file.txt", "utf-8");
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
//  };  

//  readFile();


//-------------------------------------------------------------------


const fs = require("node:fs");

let readStream = fs.createReadStream("./file.txt", {encoding: "utf8", highWaterMark: 10});
let writeStream = fs.createWriteStream("./file2.txt","utf8");

readStream.on("data", (chunk)=>{
      console.log(chunk);
      writeStream.write(chunk);
})