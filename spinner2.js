let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];
let timer = 100;

 for(let i of spinner){
   setTimeout(() => {
    process.stdout.write(i);
   }, timer)
   timer += 200;
  }

  


