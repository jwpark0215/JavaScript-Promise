const statusRef = document.querySelector(".status")
const videoRef = document.querySelector(".video")

function getSubscription(){
    return new Promise((resolve, reject)=>{
        resolve(undefined)
    })
}

function getVideo(subscriptionStatus){
    return new Promise((resolve,reject) =>{
        if(subscriptionStatus === "VIP"){
            resolve("Show Video")
        }
        else if(subscriptionStatus === "FREE"){
            resolve("show trailer")
        }
        else{
            reject("no video")
        }
    })
 }



async function letsTry(){
    const check = (await getSubscription())
    try{
        console.log(await getVideo(check))
    }
    catch(e){
         console.log(e)
         videoRef.innerHTML = e
    }
}

letsTry()