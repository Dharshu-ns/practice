const { error } = require("console");

function fetch(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data = {id: 1, name: 'John'}
            resolve(data);
        },2000);
    })
}

fetch()
.then(data=>{
console.log("Data recieved", data)
})
.catch(error=>{
    console.error("Error:", error)
})