// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

const emailRef = document.querySelector(".email");
console.log(emailRef);

//1. Then 
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email
//   });

// 2. Async/Await
async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await re sponse.json()
    console.log(data)
    emailRef.innerHTML = data.email
}

main()

