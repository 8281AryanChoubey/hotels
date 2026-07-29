const fs=require('fs');
const os=require('os');
const user=os.userInfo();

fs.appendFile('hey.txt',`user name is ${user.username}`,(err)=>{
           console.log('thik se data fill karna chahiye tha na');
});
