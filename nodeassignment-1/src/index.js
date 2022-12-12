let fs = require('fs');
let write = () =>{ 
	fs.writeFile('../src/app.txt','this is new file with name app.js','utf-8',(err)=>{
	if(err) throw err;
	console.log("this is created")
}) 
}
//write()
let read = ()=>{ 
	fs.readFile('../src/app.txt','utf-8',(err,data)=>{
if(err) throw err;
console.log(data)
});
}
//read()

let update = ()=>{
	fs.appendFile('../src/app.txt',' This is updating text in app','utf-8',(err)=>{
	if(err) throw err;
	console.log("data is updated")
});

} 
//update()
let deleted = ()=>{
	fs.unlink('../src/app.txt',(err)=>{
	if(err) throw err
	console.log('file is deleted')

})  
}

module.exports = {
	read,write,update,deleted
}

/* const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	let fileContent = "Hello";
	fs.writeFile(fileName,fileContent,'utf-8')

}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
   */
















