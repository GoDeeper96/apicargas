

import app from './app.js';    
import { connectDb } from './mongodbcon.js';
// import { connectDb } from './mongodbConnection/GetConnectionMongoDb';

async function main() {
    try {
      await connectDb();
     
      app.listen(6000,()=>{
        console.log("LISTENNING ON PORT 6000")
        
    })
    } catch (error) {
      console.error(error);
    }
  }

  main();