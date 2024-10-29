// Ciclo for numeri da 1 a 100
for (i = 1; i <= 100; i++) {
    console.log((i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i);
}

/* 
    Stampa "Fizz" se i è multiplo di 3, altrimenti una stringa vuota
    Stampa "Buzz" se i è multiplo di 5, altrimenti una stringa vuota
    Se i non è multiplo ne di 3 ne di 5, stampa il numero stesso
*/

// Non ditemi che dovevo fare più commit che letteralmente sono 3 righe di codice