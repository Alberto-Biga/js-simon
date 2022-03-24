//CREO VARI ARRAY
//numeri inseriti da utente
var userNumber = [];
//numeri generati per cpu
var cpuNumber = [];
var points = [];
var score = 0
let target = document.getElementById("target");
//setto scomparsa numeri
setTimeout(numberHide,9000);
setTimeout(getUserNumber,10000);

//genero 5 numeri casuali
for ( i = 0;i < 5; i++ ){
    let randomNum = Math.floor(Math.random() * 100)
    cpuNumber.push(randomNum);    
}
console.log(cpuNumber)

target.innerHTML += `<h2> Forza! Hai 30 secondi per memorizzare i seguenti numeri!! ${cpuNumber}`;

//ricevo 5 numeri da utente
function getUserNumber(){
    for ( i = 0; i < 5; i++ ){
        let input = parseInt(prompt(`Inserisci il ${i +1}° numero.`));
        userNumber.push(input);
    }
    arrayCompare();
    return userNumber;
}
//confronto array
function arrayCompare(){
    for ( y = 0; y < 5; y++ ){
        if ( cpuNumber.includes(userNumber[y])){
            points.push(userNumber[y]);
            score++
        }
    }
    result();
    return points;
}
// nascondo numeri
function numberHide(){
    target.classList.add('d-none');
}
// mostro il risultato
function result(){
    target.classList.remove('d-none');
    target.innerHTML = `I numeri indovinati sono ${score}. I numeri da indovinare erano ${cpuNumber}`;
}
