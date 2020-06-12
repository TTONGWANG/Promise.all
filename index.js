// from bilibili 大翔_Arcxiang
Promise.allTest = function(promises){
    return new Promise(function (resolve,reject){
        const len = promises.length;
        console.log(len)
        let count = 0,
            results = new Array(len);
            console.log(results)
        for (let i = 0; i< len; i++){
            Promise.resolve(promises[i]).then((value) =>{
                count++;
                results[i] = value;
                if(count === len){
                    return resolve(results);
                } 
            },
            (reason)=>{
                return reject (reason)                
            })
        }
    })
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('p1 resolved')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('p2 resolved')
    }, 2000)
})

console.time('cost')
Promise.allTest([p1, p2]).then(res => {
    console.log(res);
    console.timeEnd('cost')
})