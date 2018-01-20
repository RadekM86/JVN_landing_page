var magenta = "#FF0090";
var darkMagenta = "#FF1BFF";
var greenBlack = "#001001";
var neonGreen = "#00CC9C";
var neonLime = "#39ff14";


var random ="#39akcwh大学生音楽祭y0240GW"

function randomLetters(){
    let newRandom= []
    for (let i=0; i<10;i++){
        newRandom.push(random[Math.floor(Math.random()*14)])
    }
    newRandomString = newRandom.join("")
    return newRandomString
}

document.addEventListener("DOMContentLoaded", function() {

    let text1 = document.getElementById("matrix1");
    let text2 = document.getElementById("matrix2");
    var counter = 0
    setInterval(function(){ 
        let oldText = "W PRZYSZŁOŚĆ";
        let randomNumber = Math.floor(Math.random()*14);
        let newText = [];
        for (let i=0; i<oldText.length;i++){
            if(i===randomNumber){
                newText.push(random[Math.floor(Math.random()*24)])
            } else{
                newText.push(oldText[i]);
        }}
        let newString = newText.join("");
         counter++
        if(counter%25===0){
            text1.innerText = oldText
        }else{
            text1.innerText = newString;
        }

        text2.innerText = randomLetters()

     }, 200);
   
        
    })