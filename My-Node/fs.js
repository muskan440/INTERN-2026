//read the file


// import fs from 'fs/promises'


//  async function reading() {

//     try {
//         const data= await fs.readFile('muskan.txt','utf-8')
//         console.log('File contain the content----->', data);
        
        
//     } catch (error) {
//         console.log(error.message);
        
        
//     }
    
// }

// reading()



// //2. create the file


// import fs from 'fs/promises'


//  async function writing() {

//     try {
//         const data= await fs.writeFile('Muski.txt','created new file for adding some text msges')
//         console.log('file is creates successfully');
        
        
//     } catch (error) {
//         console.log(error.message);
        
        
//     }
    
// }

// writing()




//2. delete the file


import fs from 'fs/promises'


 async function DelFile() {

    try {
        const data= await fs.unlink('Muski.txt')
        console.log('file is deleted successfully');
        
        
    } catch (error) {
        console.log(error.message);
        
        
    }
    
}

DelFile()

