// // asynchronous
// console.log("Hello Binarian!");
// //output kode akan ditunda selama 100ms
// setTimeout(() => {
//     console.log("Javascript")}, 100)
//     console.log("Developer");


// //asynchronous
// console.log("Hello Binarian!");
// console.log("Javascript");
// console.log("Developer");


// // tanpa callback
// function kuadratAsync(x){
//     setTimeout(() => x * x, 100);
// }
// console.log(kuadratAsync(5));


// //dengan callback
// function kuadratAsync(x, callback){
//     setTimeout(() => callback(x * x), 100);
// }
// kuadratAsync(5, console.log);


// //setTIMEOUT
// console.log("Hello Binarian!");
// //output kode akan ditunda selama 100ms
// setTimeout(() => {
//     console.log("Javascript")}, 100)
//     console.log("Developer");


// //setINTERVAL
// let a = 0
// const iniInterval = setInterval(() => {
//     console.log(`${++a} kali jalan`)
//     if (a === 10) clearInterval(iniInterval)
// }, 100)
// console.log('Apakah aku jalan duluan?')


// //CALLBACK DI DALAM CALLBACK
// const download = (url, callback) => {
//     console.log(`Downloading from ${url}....`);

//     callback();
// };

// const url1 = 'https://brachio.site/download';
// const url2 = 'https://trex.site/download';
// const url3 = 'https://stego.site/download';

// download(url1, function(){
//     download(url2, function(){
//         download(url3, function(){
//             console.log('Downloading complete!');
//         });
//     });
// });


// //PROMISE
// const myPromise = new Promise(resolve =>
//     resolve('Hello World'))

//     myPromise.then(result => {
//         console.log(result);
//     })


// //FUNCTION PROMISE
// function isPasswordCorrect(password){
//     return new Promise((resolve, reject) => {
//         console.log('Password:', password)
//         if (password !== '123456')
//         return reject("Wrong password!")

//         resolve("Password is correct!")
//     })
// }
// //Producing
// isPasswordCorrect('123456')
// .then(resolve => console.log(resolve))
// .catch(reject => console.error(reject))
// Consuming
// isPasswordCorrect('123455')
// .then(resolve => console.log(resolve))
// .catch(reject => console.error(reject))


//ASYNC AWAIT
let punyaBuku = false
//function beliBuku
const beliBuku = () => new Promise(resolve => {
    setTimeout(() => {
        punyaBuku = true
        resolve()
    }, 1000)
})

const gambar = judul => {
    if (!punyaBuku) return Promise.reject('gak punya buku')
    return Promise.resolve({
        id: Date.now(), title: judul, createdAt: Date()
})
}

// async function main(){
//     if (!punyaBuku) await beliBuku()
//     const hasilGambar = await gambar("Doraemon")
//     console.log(hasilGambar)
// }
// main()

//kalo pake try catch
async function main(){
    try {
        if (!punyaBuku) await beliBuku()
        const hasilGambar = await gambar("Doraemon")
        console.log(hasilGambar)
    }
    catch(err) {
        console.log("Beli buku dulu dong!")
    }
}
main()