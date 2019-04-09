const path=require('path');
module.exports={
 devServer:{
   proxy:{
   '/server/app.py':{
    target:'http://localhost:5000'
    }
   }
 }
};
