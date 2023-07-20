const textSearch = document.getElementById("textoProcurar");
const resultRank = document.getElementById("resultRank");
const resultCount= document.getElementById("resultCount");
const resultWord = document.getElementById("resultWord");
const resultPercent = document.getElementById("resultPercent");
const button = document.querySelector("button");

let words ='';
let wordCount = '';
let wordPercent = '';

function pegaTexto(text){
    return text.replace(/\.|\,/g,'').split(' ');
}

function contarPalavra(text){
    const arr = text;
    const uniqueElements = [...new Set(arr)];
    const count = uniqueElements.map(element => [
      element,
      arr.filter(el => el === element).length,
    ]);
    return count;
}

function translate(text){
    const arr = text.sort((a,b)=>{
        return b[1]-a[1];
    })
    arr.forEach(activity => {
        let percentage = ((activity[1] / 24) * 100).toFixed();
        activity[2] = percentage + '%';
    });
    return arr;

}

function mostra(text){
    text.forEach((activity) => {
  
            console.log(activity[0]);
            console.log(activity[1]);
            console.log(activity[2]);
    });


    // text.forEach((activity) => {
    //     activity.forEach((data) => {
    //         console.log(data);
    //     });
    // });
    // resultWord.textContent = wordCount[0];
      // resultCount.textContent = wordCount[1];
      // resultWord.textContent = wordCount[2];
}

button.addEventListener("click", () => {
    words = pegaTexto(textSearch.value);
    wordCount = contarPalavra(words);
    wordPercent = translate(wordCount);
    mostra(wordPercent);


    //console.table(wordPercent);
    //console.log(wordPercent);
    
    
    //result.textContent = ordenarTexto(words);
    
});



