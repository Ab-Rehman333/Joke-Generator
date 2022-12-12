console.log("This is laugh challenging game ");


// getting html elements 
const jokeId = document.getElementById("jokeId")
const button = document.getElementById("get_joke");
let fetchAPI = ("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");

button.addEventListener("click", newFunction)
// whenever page load its generate a new joke from APi that's why i wrote the funciton here 
newFunction()



async function newFunction() {
    let getApi = await fetch(fetchAPI);
    let gotApi = await getApi.json();
    console.log(gotApi)
    const { joke } = gotApi;
    jokeId.innerHTML = joke;

}

