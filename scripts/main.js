const textSearch = document.getElementById("textoProcurar");
const button = document.querySelector("button");
let table = document.getElementById("tableBody");
let words ='';
let wordCount = '';
let wordPercent = '';
let count = 0;

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
        let row = document.createElement("tr");
      
        // Create cells
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        
        // Insert data to cells
        c1.innerText = count + 1;
        c2.innerText = activity[0];
        c3.innerText = activity[1];
        c4.innerText = activity[2];
        
        // Append cells to row
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        
        // Append row to table body
        table.appendChild(row)
        count++;
    });
}

button.addEventListener("click", () => {
    words = pegaTexto(textSearch.value);
    wordCount = contarPalavra(words);
    wordPercent = translate(wordCount);
    mostra(wordPercent);

});



