console.log("...Advanced..."); 
console.log("1" + "1" + "1")//111 
console.log("1" + "1" - "1")//10 

var masīvs = [1, 2, 3, 4] 
console.log(masīvs); 
console.log(typeof(masīvs)); //JS masīvs/array ir objekts 

masīvs = ["12", "32", true, 4]; 
console.log(masīvs); 
console.log(masīvs[1]); 
console.log(masīvs[3]); //ja ieraksta indeksu, kam nav piešķirta vērtība, tad console izvadīs undefined 
masīvs[2]=null; 
console.log(masīvs); 

console.log(masīvs[0]==masīvs[3]); //false 

var objekts= [{name: "Rolands", age: 22}, 
 {name: "Pēteris", age: 12}]
console.log(objekts); 
console.log(objekts[0]); 
console.log(objekts[0].name); 

console.log(typeof(objekts)); 
console.log(typeof(objekts[0])); 
console.log(typeof(objekts[0].name)); 
console.log(typeof(objekts[0].age)); 

//CASE sensitive
var var1 = 2; 
var Var1 = 10; 
console.log(var1); //2
console.log(Var1); //10 

//camel case, sāk ar mazo, katru jaunu vārdu sāk ar lielo 

var sisIsMansMainigais = "camelCase"; 

//Conditions 

var condition = true; 

if (condition){
    console.log("This if is true");
} else {
    console.log("This if is false"); 
} 

var time = 6; 

if(time>12){
    console.log("Pēcpusdiena");
}else if(time==12){
    console.log("Ir 12");
}else{
    console.log("Priekšpusdiena"); 
}

//Conditions SWITCH 

switch(time){
    case 10: 
    console.log("Ir 10") 
    break; 
    case 11: 
    console.log ("Ir 11") 
    break; 
    case 12: 
    console.log ("Ir 12")
    break; 
    case 13: 
    console.log ("Ir 13")
    break; 
    default: 
    console.log("Nav tāda laika"); 
    break; 
} 

//Cikli 
//If 

for (var i = 0; i<5; i++){
    console.log("i = " + i)
}

for (var i = 1; i!=6; i++){
    console.log("i = " + i)
}//!= kamēr i nav vienāds ar 

for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        console.log(i + "*" + j + "=" + i * j); 
    } 

    console.log(i); 
} 

var masīvs= [4, 3, 2, 1, 0]; 
for (var i=0; i < masīvs.length; i++){
    console.log(masīvs[i]);
} 

for(var i = 0; i<5; i++){
    if(i==1){
        console.log(i)
    } 
    console.log(i); 
} //0,1,1,2,3,4 

for(var i = 0; i<5; i++){
    if(i==1){
        break;
    } 
    console.log(i); 
}//0 

for(var i = 0; i<5; i++){
    if(i==1){
        continue;
    } 
    console.log(i); 
}//0,2,3,4 

//WHILE 

var i = 0; 
while(i<5) {
    console.log(i); 
    i++; 
}  

//DO WHILE 

var i=0; 
do{
    console.log(i); 
    i++
}while (i<5); //0,1,2,3,4, atšķirība no while, ka vienmēr vismaz 1x izies cauri 

//Types and Competences 

var a=5; 
var b=10; 
console.log(a); //5
console.log(b); //10
b=a; 
console.log(b)//5 
a=12; 
console.log(a)//12 
console.log(b)//5 

//pointers 
var masivs=[1,2,3]; 
console.log(typeof masivs)//object 
console.log(masivs)//1,2,3 

var masivsB=masivs; 
console.log(masivsB); //1,2,3 

masivs.push(4); 
console.log(masivs)//1,2,3,4 
console.log(masivsB)//1,2,3,4 
//tātad, veicot izmaiņas, izmainīsies pats array, bet norāde neizmainīsies

masivs[0] =2; 
console.log(masivs) //2,2,3,4,
console.log(masivsB) //2,2,3,4 

masivs=[0,1]; 
console.log(masivs)//0,1 //jauns objekts, pārlika masīvu citā vieta atmiņā 
console.log(masivsB) //2,2,3,4 //norāde palika atmiņā taja pašā vietā, kur bija 

//Functions Funkcijas izmanto, lai vairākkārt nebūtu jāraksta viena un tā pati darbība 
//Funkcija ir jāizsauc 
function funkcija(input){
    console.log("Mūsu funkcija!")
    input=input *2; 
    return input
}  

funkcija(2); //Mūsu funkcija! 
console.log(funkcija(4));//8

(function calc(){
    var number = 10; 
    console.log("esam funkcijā")
    console.log(number)
})(); 

(function calc2(input){
    var number = 10; 
    input=input*number; 
    console.log(input)
})(2) 

//SCOPES 
console.log("SCOPES");
var number=10;
(function calc(input){
    var number=20;
    input=input+number; 
    console.log(input) 
    console.log("Number:"+number)
})() 
console.log("Number:" + number) 

console.log("SCOPES");
var number=10;
(function calc(input, number){
    var number=20;
    input=input+number; 
    console.log(input) 
    console.log("Number:"+number)
})(10) 
console.log("Number:" + number) 

console.log("SCOPES");
var number=10;
(function calc(input){
    var number=20;
    input=input+this.number; 
    console.log(input) 
    console.log("Number:"+number)
})(10) 
console.log("Number:" + number) 
//ar this.number tiek laukā no scope uz pirms scope definēto number (ņems 10, nevis 20)
//this. piekļūst globālajam mainīgajam 
//var that=this 

//arguments 
function message(message){
    console.log(message) 

    console.log(arguments)
    console.log(arguments[2])
    for(i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
} 
message("h1", "h2", "h3"); //funkcija, kas izvada visu, ko tai dod 