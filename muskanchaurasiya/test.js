// //1.

// var name ="muskan"
// console.log(name);
// console.log(typeof(name));


// var num= 5
// console.log(num);
// console.log(typeof(num));

// let pass="true"
// console.log(pass);
// console.log(typeof(pass));



// var b=null
// console.log(b);
// console.log(typeof(b));


// var a
// console.log(a);
// console.log(typeof(a));

// //2.

// let num1=100
// let num2=100
// console.log(num1);
// console.log(num1==num2);

// //3.

// let m=20
// let n=10

// console.log(m+n);
// console.log(m-n);
// console.log(m*n);
// console.log(m/n);
// console.log(m%n);


// //4.

// let p=20
// let q=10

// console.log(p>q);
// console.log(p<q);
// console.log(p=="p");


//5.

// let age=10
// if(age>=18)
//     console.log("person is eligible for vote");
// 

// //6.

// let num3= -5
// if(num3<=0)
//     console.log("number is negative");
// else
//     console.log("number is positive");

//7.

// let marks= 85
// if(marks>=40)
//     console.log("pass");
// else if (marks<40) {
//     console.log("fail");
    
    
// } else {
//     console.log("moderate");

    
    
// }


//9.
// for(let i=1;i<=10;i++)
//     console.log(i);


//10.
// for(let i=2;i<=20;i+=2)
//     console.log(i);


    //11.
// for(let i=5;i<=50;i+=5)
//     console.log(i);

// for(let i=1;i<=5;i+=2)
//     console.log(i);

//12.
// let color=["red","yellow","green","blue","black"]
// console.log(color);

    

//13.

// let number=[10,20,30,40,50]
// console.log(number[0]);
// console.log(number[4]);

//14.

// let value=["HTML", "CSS", "JavaScript"]
// console.log(value);

// len=value.length
// console.log(len);

// //15.
// value.push("python")
// console.log(value);

//16.

// let student={
//     name:"Muskan Chaurasiya",
//     Age: 19,
//     course: "b tech"


// }
// console.log(student);

//17.
// student.Age=20
// console.log(student);


//18.
// function greet(){

//     console.log("Welcome to JavaScript");
// }
// greet()


//19.

// function add(m,n){
//     console.log(m+n);
    

// }
// add(10,20)

//20.

// function square(c){
//     console.log(c*c);
    
// }
// square(6)

//21.
// function students(){
//     setTimeout(() => {
//          console.log("Hello Student");
        
//     }, 2000);
   
    
// }
// students()
function order(callback){
    setTimeout(()=>{
        console.log("Choose food items and order this")
    callback()

    },4000)
    

}

function prepare(callback){
    setTimeout(() => {
        console.log("prepare the food according to order")
        callback()
        
    },2000);


}

function servefood(){
    setTimeout(()=>{
        console.log("Serves the food to the owner")
       

    },3000 )
   

}
function call(){
    order(()=>{
        prepare(()=>{
         servefood()
             

        })

    })
    
    
  

}
call()
    






















    


    

    






 