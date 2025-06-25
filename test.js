// Zeilenkommentare
/*
Mehrzeiliger
Kommentar
*/

// Datentypen und Variablen
    //Alt: sowohl eine constante, als auch variable (initialisierung ohne Zuweisung immer am Anfang)
        var a = "";
    //Neu: let ist variable, const ist constant
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
    //Object. Objekte bestehen aus sogenannten Key-Value Pairs in folgender Notation:
    //          key:value
        let objektName = {
            name: "Name",
            firstname: "First Name",
            yearOfStudy: 2204
        };
    //Class

//Ausgabe in der Konsole
console.log(objektName.name)
