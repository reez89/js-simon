
/* 
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzae il programma. */



// Genero 5 numeri casuali

var fiveNmubers = [];
var modalBox = document.getElementById("pc-numbers")


function pcNumbers(){

    for (var i=0; i<5; i++){
        var random = Math.floor(Math.random() * 100);
        fiveNmubers.push(random);
    }   
    
    modalBox.innerHTML = fiveNmubers;
    setTimeout(function(){
    document.getElementById("pc-numbers").style.display="none";
}, 4000);

}
    pcNumbers();
    console.log(fiveNmubers);


var userNumbers =[];
var clock = setTimeout(askUser, 5000);


function askUser(){

    // Chiedo all'utente di generare 5 numeri.

    for (var j=0; j<fiveNmubers.length; j++){
    var values = Number(prompt("Inserisci i numeri che hai visto in precedenza"));
    userNumbers.push(values);   
    }

    //Confronto i valori inseriti dall'utente, con quelli ottenuti casualmente dal sistema. 

    var found = [];
        function confronto(a, b) {
        for ( var i = 0; i < a.length; i++ ) {
            for ( var e = 0; e < b.length; e++ ) {
                if ( a[i] === b[e] ) found.push( a[i] );
            }
        }
           return found;
        }
    
    // Invoco la funzione e visualizzo quanti punti e quali numeri sono stati trovati dall'utente.
    
        confronto(userNumbers,fiveNmubers);
        alert('Hai totalizzato '+ found.length + ' punti.' + ' I numeri indovinati sono '+ found + ".");
    };

console.log(userNumbers);






