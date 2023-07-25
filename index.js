                  //path module

// const path = require("node:path");
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.resolve("folder1","./index.js"));


//--------------------------------------------------------------------------------------------------

                  //fs module

//   const fs = require("node:fs");

// const file = fs.readFileSync("./file.txt", "utf-8");
// fs.writeFileSync("./file.txt","hello", {flag : "a"}); //append a text to existing
// fs.writeFileSync("./file2.txt", file);


             //async read and write

// fs.readFile("./file.txt","utf-8", (err, data)=>{
//     if(err) console.log(err);
//     else fs.writeFile("./file.txt",data, (err) =>{
//         if(err) console.log(err);
//         else console.log("file written");
//     })
// });


//--------------------------------------------------------------------------------------------------

                          //stream 

// const fs = require("node:fs");

// const readable = fs.createReadStream("./file.txt", {encoding : "utf-8", highWaterMark: 16});
// const writeable = fs.createWriteStream("./file2.txt");

// readable.on("data", (chunk)=>{
//     console.log(chunk);
//     writeable.write(chunk);
// })



//--------------------------------------------------------------------------------------------------

                             //events module (class)                 
     
    //  const EventEmitter = require("node:events");
     
    //  const event = new EventEmitter();

    //  event.on("order",(ordernum, orderName)=>{  // write above the emit method.
    //     console.log(`${orderName} of order list ${ordernum} placed successfully!`); 
    //     ordernum++;
    //  });

    //  event.on("order", (ordernum)=>{
    //     if(ordernum === "1"){
    //         console.log("offer of 50%");
    //     }
    //  })

    // event.emit("order","1", "iPhone 14"); //initiating an event.
 
     

//---------------------------------------------------------------------------------------------------
                  
                       //http module  (localhost = 127.0.0.1, default portnumber = 80)
                                  
    //    const http = require("node:http");
   
//    const server = http.createServer((req, res) =>{
//     res.writeHead(200, {"Content-Type": "text/plain"} );
//     res.end("Mugesh!!")
//    });
//    server.listen(80, ()=>{
//     console.log("server on 3000");
//    })

    //-------------------------------------------------

        //for JSON files

// const json = http.createServer((req,res) =>{
//     const data = {
//         Name :"Mugesh",
//         age: 32
//     }
//     res.writeHead(200, {"Content-Type": "application/json"});//content: optional;
//     res.end(JSON.stringify(data)); //necessary
// })   

// json.listen(80,()=>{
//     console.log("server on 80")
// })

      //------------------------------------

                //html response
 
//  http.createServer((req,res)=>{
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end("<h1>Hii All<h1>");
// }).listen(80);         


//html from a file;

// const fs = require("node:fs");
// let html = fs.readFileSync("./index.html", "utf-8"); 
// // let Name = "Mugesh TN"
// // html = html.replace("{{name}}", Name);

// http.createServer((req, res) =>{
//     res.writeHead(200, {"Content-Type": "text/html"});
  
//     //fs.createReadStream("./index.html").pipe(res)   //more responsive code.
//      res.end(html);
// }).listen(80);

