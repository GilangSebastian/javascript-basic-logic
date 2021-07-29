function stringGenap (input) {
    if ( typeof input !== 'string' ) {
        return "Error"
    }

    let hasil = "";
        for ( let i = 0; i < input.length; i++ ) {
            if ( i % 2 == 1 ) {
                hasil += input[i]
            } else {
            "";
        }
    }
        return hasil;
}

console.log(stringGenap("gilang gilang"));






function totalKata (input) {
    if ( typeof input !== "string" ) {
        return "Error"
    } if ( input === "" ) {
        return 0
    }

    let total = 0;
        for ( let i = 0; i < input.length; i++ ) {
            if ( input[i] === " " ) {
                total += 1;
    }
    }
    return total + 1;
    }

console.log(totalKata("gilang sebastian muslim"));





function vokalKonsonan (input) {
if ( typeof input !== 'string' ) {
        return "Error input bukan string"
    }
    let vokal = "aiueoAIUEO";
    let jmlVokal = 0;
    let konsonan = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    let jmlKonsonan = 0;

    for ( let i = 0; i < input.length; i++ ) {
        for ( let j = 0; j < vokal.length; j++ ) {
         if ( input[i] == vokal[j] ) {
            jmlVokal++
         }
         }
    for ( let k = 0; k < konsonan.length; k++ ) {
            if ( input[i] == konsonan[k] ) {
                    jmlKonsonan++
                }
            }
        }
        return `Jumlah vokal: ${jmlVokal}, Jumlah Konsonan: ${jmlKonsonan}`;
    }
    
    console.log(vokalKonsonan("GILANG"));





function reverse (input) { 
    let hasil = "";

    for (let i = input.length - 1; i >= 0; i--) { 
        hasil = hasil += input[i];
    }
    console.log(hasil);
}

reverse("reverse");


        
                        
                
function palindrome (input) {
    let checker = true;
    for ( let i = 0, j = input.length - 1; i <= j; i++, j-- ) {
            if ( input[i] !== input[j] ) {
                    checker = false
                } if ( input.length == 1 ) {
                        checker = false
                    }
                }
                return checker ? true : false;
            }
console.log(palindrome("a"))




                                
function kembalian(input) {
    let pecahan = '';

    while (input > 0) {
    if (input - 1000 >= 0) {
    pecahan += '1000, ';
    input -= 1000;

    } else if (input - 500 >= 0) {
    pecahan += '500, ';
    input -= 500;

    } else if (input - 200 >= 0) {
    pecahan += '200, ';
    input -= 200;

    } else if (input - 100 >= 0) {
    pecahan += '100, ';
    input -= 100;

    } else if (input - 50 >= 0) {
    pecahan += '50, ';
    input -= 50;

    } else if (input - 20 >= 0) {
    pecahan += '20, ';
    input -= 20;

    } else if (input - 10 >= 0) {
    pecahan += '10, ';
    input -= 10;

    } else if (input - 5 >= 0) {
    pecahan += '5, ';
    input -= 5;

    } else if (input - 1 >= 0) {
    pecahan += '1, ';
    input -= 1
    }
    }
    return pecahan;
    }

    console.log(kembalian(1700));
                        
                        
function asterisk (n) {
    let input = "";
    for ( let p = 0; p < n; p++ ) {
        for ( let l = 0; l <= p; l++ ) {
            input += "*";
        }
        input += "\n";
    }
    return input;
}

console.log(asterisk(5));


function piramid (input) {
  
    for( let i = 1; i <= input; i++ ){
        let str = '';

        for(let k = 1; k <= (input - i); k++){
        str += ' ';
        }

        for(let j = 0; j != (2 * i - 1); j++){
        str += '*';
        }

        for(let k =  i + 1; k <= input; k++){
        str += ' ';
        }

        console.log(str);
    }
 }
 piramid(0);