import bcrypt from 'bcrypt'
 let password1='muskan@9235'                //plain text
  let password2='muskan@1234'
  
  

 let hashpass1=await bcrypt.hash(password1,6) 
  let hashpass2=await bcrypt.hash(password2,6)    //encrypted pass


//  console.log('password----->  ',hashpass);    


 //compare

 let isMatch1=await bcrypt.compare(password1,hashpass1)



 let isMatch2=await bcrypt.compare(password2,hashpass1)

  console.log(isMatch1);
  console.log(isMatch2);
  
  
 