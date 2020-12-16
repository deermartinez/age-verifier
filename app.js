// document.write('Hello World' + '<br/>');
// document.write('Hello World' + '<br/>');
// document.write('Hello World' + '<br/>');
// document.write('Hello World' + '<br/>');
// document.write('Hello World' + '<br/>');
// document.write('Hello World' + '<br/>');
// document.write('Hello World' + '<br/>');
// document.write('Hello World' + '<br/>');
// document.write('Hello World' + '<br/>');
// document.write('Hello World' + '<br/>');


// for (i-0; 1<10; i++){
// document.write("Hello WOrlds" + '<br/>');
// }


// for(i=0; i<10; i++){
//     if (i===7){
//         break;
//     }
// }

// document.write ("The number is" + i + "<br>");

// var x = 0;
// while(x < 5){
//     console.log(x);
//     x = x + 1;
// };

// varx  = 5;
// while(x<5){
//     console.log(x);
//     x = x + 1;
// }
//FIRST ATTEMPT
// for ( var i=0; i <= 20; i++){
//     if (i===("1", "3", "5", "7")){
//         document.write(i + " is odd");
//     }
//     if (i==="2", "4", "6" ){
//         document.write(i + " is even");
//     }
// }

for ( var i=0; i <= 20; i++){
    if(i % 2 === 0){
            document.write(i + "is even" + "<br>");
    }
    else {
        document.write(i + "is odd" + "<br>");
    }
}

var money = 2500.00;
var bills = 2500.00;

if (money > bills){
     document.write ("You're good to go!");
}
else if (money===bills){
    document.write("Don't push it");
}
    else {
        document.write("Haha POOR");
};





function assignGrade(score){
    if (score > 90){
        return "A";
    }
    else if (score > 80){
        return "B";
    }
    else if (score > 70){
        return "C";
    }
    else if (score > 60){
        return "Technically passing and failing at the same time";
    }
    else {
        return "Failing";
    } 
}

document.write(" Your grade is " + assignGrade(86) + "<br>");
document.write(" Your grade is " + assignGrade(53) + "<br>");
document.write(" Your grade is " + assignGrade(76) + "<br>");