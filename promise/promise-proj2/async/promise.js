console.log(1,2,3,4,5)
/*process.on('unhandledRejection', error => {
    console.log('我帮你处理了', error.message);
   });

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve({user: 'ed'})
        console.log('got an error');
        //reject(new Error('user not logged in'));
        reject({error: "stupid error"});
    }, 2000);
});

promise.catch((err)=>console.log('rejected', err));

*/
function loginUser(email, password){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("now we have the data");
            resolve({userEmail: email});
        }, 3000)
    });
}

function getUserVideos(email){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        res = ['video1', 'video2', 'video3']
        console.log(res);
        resolve(res);
    }, 2000);
})
}

function videoDetails(video) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            res = 'title of the video'
            resolve(res);
        }, 2000);
    })
}

loginUser('ed', 'bubmba')
.then(user=>getUserVideos(user.email))
.then(videos=>videoDetails(videos[0]))
.then(detail=>console.log(detail));