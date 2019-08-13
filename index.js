// window.alert("Hello from JavaScript")
console.log("Hello from JavaScript")
// DATU TIPI: Integer (skaitļi), Double, String, Character, Boolean, Number 
// JS vēl datu tipi Null, Undefined, Object (pēdiņās definē string, bez pēdiņām, skaitli) 

var nosaukums = "mans nosaukums";
console.log(nosaukums); //mans nosaukums 
console.log(typeof(nosaukums));

nosaukums = 8; 
console.log(nosaukums); //
console.log(typeof(nosaukums)); 

const skolasNosaukums = "RCS"; //const konstantes nedrīkst mainīt, metīs kļūdu
console.log(skolasNosaukums);

var nosaukums_jauns= "Jauns nosaukums"; 
console.log(nosaukums_jauns);

var a; 
console.log(a); //ja definē mainīgo tam nepiešķirot vērtību, vērtība ir "undefined"
console.log(b); 
var b; //mainīgos var definēt jebkurā vietā kodā, nav obligāti secīgi
// lasa tikai katru skriptu atsevišķi, neiet cauri visai mapei 

a=7;
console.log(a);
b=a;
console.log(b); 
console.log(a);

console.log(a) //JS semikols nav obligāts
console.log(b) //semikolu var aizstāt ar enter vai starp 1 un otru vienā rindā likt semikolu bez enter

var q = 1; 
var w = 2; 
var e = "I'm a string";
console.log(e); 
q=q+1; 
console.log(q); 
w=w+5; 
console.log(w); 
e=e+"teksts";
console.log(e); 
w=w+"teksts";
console.log(w); 

//Mathematics 
var summa = 10 + 5; 
console.log(summa); 
var navSumma = "10 + 5"; 
console.log(navSumma); 
var minus= 10-5; 
console.log(minus); 
var multiply=10*5; 
console.log(multiply); 
var divide=50/5; 
console.log(divide); 
var inc=3; 
inc=inc+1; 
inc+=1; 
console.log(inc); 
inc++; 
console.log(inc); 
inc--; 

var decimalNumbers=5.6; 
console.log(typeof(decimalNumbers)); //floating number 

var multiDecimal = 2.0*2.5; 
console.log(multiDecimal); 

var divdec=4.4/2; 
console.log(divdec); 

var reminder=11%3; 
console.log(reminder); 

//short īsais pieraksts 
var r = 5; 
r+=6; //11 
r-=3; // 8 
r*=2; // 16 
r/=4; //4 

//operations with strings 
var name = "this is string"; 
var myAge = "44" //<arī strings 
var myName = ` 
    red 
    text 
    goes 
    here
    `; //tilde simbols blakus 1 uz klav 
console.log(myName); 

name=name+" and that's cool" 
console.log(name); 
name+=" and this is fun" 

var forss = "foršs";
console.log(name); name="šis" + "teksts" + forss + "!"; 

var qText = "man patīk"; 
var wText = "mācīties"; 

qText = qText + " " + wText; // " " ar atstarpi ir lai vārdi nebrauc kopā 
console.log(qText); 

qText+= wText; 
console.log(qText); //man patīk mācītiesmācīties 

console.log(qText.length); //uzzināt, cik garš strings

console.log(qText[0]); //izvada konkrētu simbolu - pirmo, m 
// qText[0]="M"; nestrādās 
//strings are immutable 

console.log(qText[qText.length-1]); //kā izvadīt pēdējo simbolu 
console.log(qText[qText.length-4]); //kā dabūt ceturto no beigām 
//<script> var atrasties dažādās vietās, ne tikai head daļā 