const textSearch = document.getElementById("textoProcurar");
const wordSearch = document.getElementById("buscaPalavra");
const result = document.getElementById("resultado");

const button = document.querySelector("button");




button.addEventListener("click", () => {
    
    let inputString = "I'm John, or johnny, but I prefer john.";
    let name = "John";
    let re = new RegExp(`\\${wordSearch}\\b`, "gi");
    let ree = new RegExp(`\\${name}\\b`, "gi");
    console.log(inputString.replace(re, "Jack"));
    console.log(inputString.replace(ree, "pobre"));
    
    let op = textSearch.value.match(re);
   result.value = op;
   console.log(textSearch.value.match(re));
  
});


//document.getElementById('buscarBtn').addEventListener('click', handleValidation);






