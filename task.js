const a=new Promise((resolve,reject)=>{
    if(1){
        resolve("coffee ordered")
    }
    else{
        reject("order reject")
    }
})
const b=new Promise((x,y)=>{
    if(1){
        x("coffee is being prepared")
    }
    else{
        y("order rejected")
    }
})
const c=new Promise((x,y)=>{
    if(1){
        x("coffee is served!!!")
    }
    else{
        y("order rejected")
    }
})
a.then((res)=>{
    console.log(res)
    return b
}).then((res)=>{
    console.log(res)
    return c
}).then((res)=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})