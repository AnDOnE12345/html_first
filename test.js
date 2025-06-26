// Zeilenkommentare
/*
Mehrzeiliger
Kommentar
*/

// Datentypen und Variablen
    //Alt: sowohl eine constante, als auch variable (initialisierung ohne Zuweisung immer am Anfang = Global)
        var a = "";
    //Neu: let ist variable, const ist constant (Lokal)
        let b = "variable";
        const c = "constante";
    //String
        let string_Var = "string"; 
    //Number
        let int_Var = 1;
        let float_Var = 1.2;
    //Arrays
        let intArrayVar = [1, 2, 3, 4, 5];
        let floatArrayVar = [1.2, 2.3, 3.4, 4.5];
        let stringArrayVar = ["eins", "zwei", "drei"];
    //Boolean
    let boolVar = true;
    //Object. Objekte bestehen aus sogenannten Key-Value Pairs in folgender Notation:
    //          key:value
        let objektName = {
            name: "Name",
            firstname: "First Name",
            yearOfStudy: 2204
        };
    //Class
    class Rechtangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

    let rect1 = new Rechtangle(12, 24);
    console.log(rect1);

    // Funktionen in JavaScript
    // ES5: function  RUNKTIONSNAME (param1, ..., paramN) {}
    function add(value1, value2) {
        return value1 + value2
    }

    //ES6: Supported Arrow Functions: Eine Variable kann auch den "Datentyp" Funktion haben
    const sub = (value1, value2) => {
        return value1 - value2
    };

    //Syntactic Suparing: Funktion und Funktionsweise identisch zu vorheriger Funktion
    //const sub = (value1, value2) => value1 - value2

    //Conditions
        // Vergleichsoperatoren:
        // == : Nicht Casesensitive Prüfung duf Gleichheit (NICHT VERWENDEN!!!)
        // === : Casesensitive Prüfung auf Gleichheit
        // <=, >=, !=, !==
    //if/else (immer optional)
    if(value>0) {
    } else {
    }
    //if/else if/else (nicht optional)
    if(value>5) {
    } else if(value > 0) {
    } else {
    }

    //Ternary Operator
    value > 5 ? 2 : 7;
    value > 5 ? (value = 2) : 7

    //Loops
    while(int_Var < 10) {
    }

    for(var i = 1; i<10; i++){
        int_Var += i;
    }

    do {} while (int_Var < 10);


//Ausgabe in der Konsole
console.log(add(12, 12));



/*
function createMyIntArray(a) {
  let arr = [];
  for (let i = 1; i < a; i++) {
    arr.push(i);
  }
  return arr;
}

function countDown() {
  let myIntArray = createMyIntArray(11);
  while (myIntArray.length > 0) {
    console.log(myIntArray);
    myIntArray.pop();
  }
}

countDown();

AUSGABE:
(1) [1]
(2) [1, 2]
(3) [1, 2, 3]
(4) [1, 2, 3, 4]
(5) [1, 2, 3, 4, 5]
(6) [1, 2, 3, 4, 5, 6]
(7) [1, 2, 3, 4, 5, 6, 7]
(8) [1, 2, 3, 4, 5, 6, 7, 8]
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
(8) [1, 2, 3, 4, 5, 6, 7, 8]
(7) [1, 2, 3, 4, 5, 6, 7]
(6) [1, 2, 3, 4, 5, 6]
(5) [1, 2, 3, 4, 5]
(4) [1, 2, 3, 4]
(3) [1, 2, 3]
(2) [1, 2]
(1) [1]
*/