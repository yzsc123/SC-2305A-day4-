const fs =require('fs')
const { get } = require('http')
function getPeach(url){
    return new Promise(function(resolve,reject){
        fs.readFile(url,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
function getPeach(){
    return new Promise(function(resolve,reject){
        fs.readFile('./resource/出居庸山.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}


getPeach('./resource/桃花源记.md').then(res=>{
    console.log( res.toString());
    const data1=res.toString()
    return data1
}).then(res=>{
    console.log(res);
    const data2=getAgent().then(data=>data.toString())
    return data2
})
