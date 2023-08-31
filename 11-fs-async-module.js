const {readFile ,writeFile, read} = require('fs')
console.log('start')
readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result;
    writeFile('./content/reult-async.txt',
    `Here is the result : ${first},${second}`
    ,(err,result) => {
        if(err){
            console.log(err)
            return
        }
        console.log('done with the task')
    }
    )
    })
})
console.log('starting new task')