import {join} from 'path'

const homeController=(req,res)=>{
    console.log("home page executed");
   // res.send('<h1>Home Page</h1>')
   //res.sendFile('/home/neha/Desktop/expressjs/ch5/views/index.html')
  // console.log(join(process.cwd(),'views','index.html'));
   res.sendFile(join(process.cwd(),'views','index.html'))
}
export {homeController};                                                