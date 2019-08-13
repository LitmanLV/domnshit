console.log("test"); 

//boolean 
var yes=true; 
console.log(yes); 
console.log(typeof(yes)); 

var no = "true"; 
console.log(typeof(no)); //šādi rakstot būs string, nevis boolean 

var nepatiess= false; 
console.log(typeof(false)); 

var a = 12; 
var b = undefined; //var b; tieši tāds pats pieraksts. Nedefinētam
console.log(a+b) // konsolē NaN = not a number

b= null; 
console.log(a+b) //12 

a="seko man"; 
b="man"; 
console.log(a+b); //NaN, jo nav nr 

a=12; 
b="2"; 
console.log(a-b); //rezultātā tomēr 10 
console.log(a+b); //122 kļūme, jo cenšas stringu pārveidot par skaitli
console.log(a*b); //24 cenšas parsot visus skaitļus 
//stringiem saskaitīšana darbojas, nav mīnuss, dalīšana utt. 

a=10; 
b=0; 
console.log(a/b); //Infinity 
console.log(10/Infinity); //0 

//salīdzināšana 
console.log(1==1);//true, tip, ir vienāds 
console.log(1==true); 
console.log(1===true); //vai vienāds gan pēc vērtības, gan tipa (3x=). Atbilde false
//1 tips ir number, true tips ir boolean, nav vienādi tipi. 
//true=1 false=0 
console.log(1===1); //true 
console.log(1==="1"); //false 
console.log(1=="1"); //true 

console.log(1!=2); //pārbauda vai NAV vienāds, true 
console.log(1!==2)//true 
console.log(1!=="2"); //true 
console.log(1!=1) //false 
console.log(1!="1")//false 
console.log(1!=="1")//true 

console.log(1>2) //false 
console.log(1>0)//true 
console.log(1>=1)// true 
console.log(1<=1)//true 
console.log(1>"0")//true 
console.log(true>false)// true 
// console.log(1>=="0") nevar šādi pārbaudīt, rādīs sintakses kļūdu 

console.log(NaN == NaN)//false, jo neskaitlis nav definēts 
console.log(NaN != NaN)//true 

console.log(0==null)//false, ar null salīdzināt nevar, vienmēr dos atpakaļ false
console.log(null==null)//true 

console.log(Infinity==Infinity)//true 

console.log(2*null);//0 

console.log(undefined==null)//true 
console.log(undefined===null)//false 
console.log(0==undefined)//false 
console.log(null==undefined)//true 
console.log(0==false)//true 
console.log(false==null)//false 

console.log()