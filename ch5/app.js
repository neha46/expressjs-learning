// rounting--- line 81 and 66

import express from 'express';
import {join} from 'path'
import stu from './routes/student.js';//import router module
import tea from './routes/teacher.js'
import home from './routes/Home.js'

const app=express();
const port= process.env.PORT||5000;






  //Mone than one call back functions-------------------------------------------------------
//   app.get('/',(req,res,next)=>{
//     console.log('first call')
//     next()
//   },(req,res,next)=>{
//     console.log('second call')
//     next()
//   },(req,res)=>{
//     res.send('<h1> hi this is  all about more than one  call back  functions </h1>')
//   })

//   const port=process.env.PORT  || '4000'
//   app.listen(port,()=>{
//     console.log(`server is running on  http://localhost:${port}`);
//   })

// Combination of independent function and arrays of functions -----------------------------------
// const ch1=(req,res,next)=>{
//     console.log('first call')
//     next()
//   }
//   const ch2 =(req,res,next)=>{
//     console.log('second call')
//     next()
//   }
//   const ch3=(req,res,next)=>{
//     console.log('third call')
//     next()
//   }
// app.get('/',[ch1,ch2,ch3],(req,res,next)=>{
//     console.log('fourth call')
//     next()
//   },(req,res)=>{
//     res.send('<h1> Combination of independent function and arrays of functions </h1>')
//   })


  //an array of call back  functions-------------------------------------------------------
//   const ch1=(req,res,next)=>{
//       console.log('first call')
//       next()
//     }ab
//     const ch2 =(req,res,next)=>{
//         console.log('second call')
//         next()
//     }
//     const ch3=(req,res,next)=>{
//         res.send('<h1>an array of callback functions </h1>')
//         next()
//     }
//     app.get('/',[ch1,ch2,ch3])


//all method------------------------------------------
// app.all('/cbexample',(req,res)=>{
//     console.log("all method");
//     res.send('<h1>all method</h1>')
// })

//all with reistriction--------------------------------------------
// app.all('/sabkuch',(req,res,next)=>{
//     console.log('all chl gya');
//     res.send('page not found')
//next()
// })
// app.get('/',(req,res)=>{
//     res.send('Get method')
// })  


// app.all('*',(req,res)=>{
//     console.log('all chl gya');
//     res.send('page not found')
// })

//dstring path---------------------------------------
// app.get('/about',(req,res)=>{
//     res.send(' thisis an about page')
// })

//Regular pattern path------------------------------------------------
// app.get(/a/, (req, res) => {
//     res.send('This route path will match acd and abcd');
// });

// app.listen(port, () => {
//     console.log('Server started');
//     console.log(`Server is running on http://localhost:${port}`);
// });



//string pattern path------------------------will run by abc or abcd------------------------
// app.get('/ab*cd', (req, res) => {
//     res.send('This route path will match acd and abcd');
// });

// app.listen(port, () => {
//     console.log('Server started');
//     console.log(`Server is running on http://localhost:${port}`);
// });


// chained route callbacks-----------------------------------------
//single path -- used by multiple times
// app.route('/student')
// .get((req,res)=>{
//     res.send('all student')
// })
// .post((req,res)=>{
//     res.send('add new student')
// })
// .put((req,res)=>{
//     res.send('update new student')
// })

//by using all------------------------------------------
// app.route('/student')
// all can be uised first for  any  validation for all methods
// .all((req,res,next)=>{
//     console.log('run for all student')
//     next()
// })
// .get((req,res)=>{
//     console.log('get method')
//     res.send('all student')
// })
// .post((req,res)=>{
//     console.log('post method')
//     res.send('add new student')
// })
// .put((req,res)=>{
//     res.send('update new student')
// })

// app.listen(port, () => {
//     console.log('Server started');
//     console.log(`Server is running on http://localhost:${port}`);
// });

// router----------------------------------------------------------------------
// all student routes---------

//static file -----
// app.use(express.static(join(process.cwd(),'public')))
// app.use('/static',express.static(join(process.cwd(),'public')))// static for virtual


const Options={
  dotfiles:"deny",
  etag:false,
  extentions:['htm','html'],
  index:false,
  maxAge:'1d',
  redirect:false,
  setHeaders: function(res,path,stat){
    res.set('x-timestamp',Date.now())
  }

  
}
app.use(express.static(join(process.cwd(),'public'),Options))


// VIRTUAL FOR ONE
// app.use('/css',express.static(join(process.cwd(),'public/css')))// static for virtual
// app.use('/js',express.static(join(process.cwd(),'public/js')))
// app.use('/images',express.static(join(process.cwd(),'public/images')))
// load the router modules
app.use('/student',stu)//load router module
app.use('/teacher',tea)
app.use('/',home)
app.listen(port, () => {
    console.log('Server started');
    console.log(`Server is running on http://localhost:${port}`);
});
