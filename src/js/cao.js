// IF-ELSE

// 1.Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.

// let legalAge = 20;
// let clientAge = 19;
// if (clientAge>=legalAge){
//   console.log("Jusu amzius tinkamas");
// }else{
// console.log("Jusu amzius per mazas");}

// 2.Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length).

// let vardas = "Tomas";
// if (vardas.length>6){
//   console.log("Vardas per ilgas")
// }

// 3.Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult".

// let age = 34;
// if (age<=0 || age>=100){
//   console.log('Invalid age')
// }else if (age<18){
//   console.log('Child')
// }else {  console.log('Adult')}

// 4.Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam. VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche. BMW group priklauso: BMW, Mini, Rolls-Royce.

// let car = "Mini";
// const vwGroup = ["vw", "audi", "bentley", "bugatti", "lamborghini", "porche"];
// const bmwGroup = ["bmw", "mini", "rolls-royce"];
// if (vwGroup.find(item => {
//   return item == car.toLowerCase();
// })){
//   console.log('brandas priklauso VW group')
// }else if (car.toLowerCase() === "bmw" || car.toLowerCase() === "mini" || car.toLowerCase() === "rolls-royce"){
//   console.log('brandas priklauso BMW group')
// }else {
//   console.log('brandas nepriklauso VW ir BMW group')
// }

// Switch Sąlyga

// 1.Ar atsimenat paskutinį IF-ELSE pratimą? Būtent jį efektyviau apsirašyti su Switch, pasibandykime: Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam. VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche. BMW group priklauso: BMW, Mini, Rolls-Royce.

// const car = "mini";
// switch(car){
//   case "vw":
//   case "audi":
//   case "bentley":
//   case "bugatti":
//   case "lamborghini":
//   case "porche":
//   console.log('brandas priklauso VW group');
//   break;
//   case "bmw":
//   case "mini":
//   case "rolls-royce":
//   console.log('brandas priklauso BMW group');
//   break;
//   default:
//   console.log('brandas nepriklauso VW ir BMW group');
// }

// 2.Sukurkite variable 'userInput' ir pradžioje prilyginkite 'Obuolys'. Su Switch statement apsirašyk, kad pasakytų ar vartotojo įvestas laukelis - vaisius ar daržovė. Pridėkite bent 5 kiekvienos kategorijos.

// let userInput = 'Obuolys';
// switch(userInput){
//   case "Kriause":
//   case "Obuolys":
//   case "Bananas":
//   case "Mandarinas":
//   case "Apelsinas":
//   console.log('Vaisius');
//   break;
//   case "Pomidoras":
//   case "Morka":
//   case "Burokas":
//   case "Agurkas":
//   case "Moliugas":
//   console.log('Darzove');
//   break;
//   default:
//   console.log('nei vaisius nei darzove');
// }

// 3.Kokia šiandien diena? Sukurkite variable 'weekDay', kuris būtų lygus skaičiui - savaitės dienai, skaičiuojant nuo 0 (t.y. pirmadienis - 0; antradienis - 1; trečiadienis - 2 ir t.t.). Parašykite Switch statement, kuris paimtų skaičių ir jį pakeistų (ne sukurtų naują kintamąjį, o pakeistų 'weekDay' reikšmę) į savaitės dieną žodžiu. Vėliau, atspausdink kintamąjį.

// let weekDay = 5;
// switch(weekDay){
//   case 0:
//   weekDay = 'Pirmadienis';
//   break;
//   case 1:
//   weekDay = 'Antradienis';
//   break;
//   case 2:
//   weekDay = 'Treciadienis';
//   break;
//   case 3:
//   weekDay = 'Ketvirtadienis';
//   break;
//   case 4:
//   weekDay = 'Penktadienis';
//   break;
//   case 5:
//   weekDay = 'Sestadienis';
//   break;
//   case 6:
//   weekDay = 'Sekmadienis';
//   break;
// } console.log(weekDay)

// Ternary Operator (vienos eilutės sąlyga)

// 1.Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

// const vardas = 'Tomas';
// const namelenght = vardas.length < 5 ? "Short name" : "Long name";
// console.log(namelenght);

// 2.Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.

// const clientAge = 17;
// const legalAge = 18;
// const check = clientAge >= legalAge ? "Can Drive" : "Can't drive";
// console.log(check);

// 3.Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y. operatorius operatoriuje. Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame "Invalid Age". Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu.

// const clientAge = 121;
// const legalAge = 18;
// const check = clientAge < 0 || clientAge > 120 ? "Invalid Age" : (clientAge >= legalAge ? "Can Drive" : "Can't drive");
// console.log(check);

// 4.Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas.

// const phone = 'iPhone';
// const isIphoneUser = phone === 'iPhone';
// console.log(isIphoneUser);

// Ciklų Pradmenys - For

// 1.Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą (atsimink, konsolė tas pačias eilutes grupuoja ir šalia parašo skaičiuką dažniausiai, vietoj to, kad išmestų kiekvienoje eilutėje).

// for(i=0; i<10; i++){
//   console.log("Tomas");
// }

// Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.

// const vardas = 'Tomas';
// let k=10;
// for(i=0; i<k; i++){
//   console.log(vardas);
// }

// Prie savo vardo atspaudink ir 'i' raidę, t.y. kelintas ciklas yra (pvz.: "0. Petras", "1. Petras", "2. Petras")...

// const vardas = 'Tomas';
// let k=10;
// for(i=0; i<k; i++){
//   console.log(i+". "+vardas);
// }

// Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.

// for(i=10; i>0; i--){
//   console.log(i);
// }

// Ciklai - While ir Do...While

// 1.Su while ciklu pasirašykite, kad jūsų vardą alertintų 3 kartus.

// let i = 0;
// while( i<3 ){
//   console.log("Tomas");
//   i++;
// }

// 2.Sukurkite kintamąjį (let combo = ""). Kiekvieną kartą paleidus loopą į combo prisirašo jūsų vardas (t.y. combo += "Petras" viduje while loop). Sukurkite programą, kur bus kintamasis (const times = 5), kuris nurodys kiek kartų combo atsiras jūsų vardas. Jei skaičius 0 ar neigiamas - vis tiek bent vieną kartą atsiras jūsų vardas. Pvz: times = 0; combo = "Petras"; times = 1; combo = "Petras"; times = 2; combo = "PetrasPetras"; times = 3; combo = "PetrasPetrasPetras".

// let combo = "";
// const times = 5;
// let i = 0;
// do{
//   combo += "Tomas";
//   i++;
// }while(i<times)
// console.log(combo);

// JS Math Objektas

// 1.Suskaičiuok su JS koks bus cos(0) (t.y. cos, kai kampas 0 radians). Hint, atsakymas: 1.

// const angle = 0;
// const cos = Math.cos(angle);
// console.log(cos);

// 2.Sukurk random skaičių tarp 1 ir 5 (įskaitant abu). Pasitikrink su console.log().

// const random = Math.ceil(Math.random()*5);
// console.log(random);

// 3.Sukurk random skaičių tarp 5 ir 12 (įskaitant abu). Pasitikrink su console.log().

// const random = Math.ceil(Math.random()*8)+4;
// console.log(random);

// 4.Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne. Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random).

// const random = Math.ceil(Math.random()*5);
// if(random == 1 ){
// alert("Laimejote bilieta!");}

// 5.Patobulink programą, kad atsirastų daugiau prizų (naudok switch statement vietoj if-else). 1/15 tikimybė laimėti automobilį, 3/15 tikimybė laimėti televizorių, 5/15 tikimybė laimėti 2 eurus, kitais atvejais - nieko nelaimi.

// const random = Math.ceil(Math.random()*15);
// switch(random){
//   case 1:
//     alert("Laimejote automobili!");
//     break;
//   case 2:
//   case 3:
//   case 4:
//     alert("Laimejote televizoriu!");
//     break;
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//     alert("Laimejote 2 eurus!");
//     break;
//   default:
//   alert("Nieko nelaimejote.");
// }

// DOM manipuliavimo pagrindai

// 1.Susikurkite projektą, be jokių HTML tag'ų body. Su JS į body įrašykite savo vardą <h2> tag'e.

// document.body.innerHTML = "<h2>Tomas</h2>"

// 2.Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Pakoreguokite tik tekstą šio elemento ir pakeiskite jį į savo vardą su JS.

// document.getElementById("name").textContent = "Tomas"

// 3.Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena". Su JS pakeiskite paskutinį list item tekstą į "Sūris".

// document.getElementsByTagName("li")[2].textContent = "Suris"

// 4. Ištaisykite klaidą. Nusikopijuokite apačioje esantį kodą ir su JS naudodami querySelector, pasikeiskite antrame paragrafe esantį span - iš 'red' teksto, turi būti 'blue':<p class="redtext">This text will be in <span>red</span></p> <p class="bluetext">This text will be in <span>red</span></p> <p class="yellowtext">This text will be in yellow</p>

// document.querySelector(".bluetext > span").textContent = "blue"

// 5.Sukurkite ordered list su trim list item'ais: "BMW group", "VW group", "GE". Tik "VW group" didesnis už "BMW group". Su querySelector pakeiskite tekstus pirmo ir antro item'o, kad teisingai atvaizduotų. Tačiau, kabliukas - negalite rašyti jokio teksto per JS. Pirma jums šias tekstų reikšmes reikės pasiimti ir išsisaugoti į kintamuosius.

// const vw = "VW group";
// const bmw = "BMW group";
// document.querySelector("ol > li").textContent = vw;
// document.querySelector("ol > li:nth-child(2)").textContent = bmw;

// FUNKCIJOS

// 1.Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)

// function yourname(a){
//   alert(a)
// }
// yourname("Tomas")

// 2.Ir ne visos funkcijos turi parametrus - sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

// function randomNumb(){
//   random=Math.random() *5;
//   random=Math.ceil(random)
//   return random
// }
// randomNumb()
// console.log(random)

// 3.Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

// function raidziusuma(a,b){
//   suma=a+b;
//   suma=suma.length;
//   return suma;
// }
// console.log(raidziusuma("tomas","zagorskis"));

// 4.Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array - pasižiūrėkite čia.

// const ABC = ["A", "B", "C", "D", "E",
// "F", "G", "H", "J", "I", "Y", "K", "L",
// "M", "N", "O", "P", "R", "S", "T", "U",
// "V", "Z"];
// function raide(a){
//   return ABC[a];
// }
// console.log(raide(0))

// 5.Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

// function math(n1, n2, op){
//   if (op == "sum"){
//     return n1+n2;
//   }else if (op == "sub"){
//     return n1-n2;
//   }else if (op == "div"){
//     return n1/n2;
//   }else if (op == "multi"){
//     return n1*n2;
//   }
// }
// console.log(math(6, 3, "sum"))

// 6.Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

// function generateRandomNumber(){
//   random=Math.random() *10;
//   random=Math.ceil(random)
//   return random
// }
// function squareNum(){
//   return random= random*random;
// }
// squareNum(generateRandomNumber())
// console.log(random)

// JS EVENTAI

// 1.Padaryk, kad paspaudus ant mygtuko - išoktų alert su tavo vardu! (naudoti inline metoda: onclick="")

// function AlertName(){
//   alert("Tomas")
// }

// 2.Perrašyti pirmą pratimą su addEventListener (ir nuo šiol naudoti būtent jį ;) ).

// document.querySelector("button").addEventListener("click", () => alert("Tomas"));

// 3.Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.

// document.querySelector("button").addEventListener("click", aboutMe);
// function aboutMe(){
//   document.querySelector(".aboutme").textContent = "Studijuoju programavima."
// }

// 4.Sukurk programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja (+1).

// let number = 1;
// document.querySelector("#plus").textContent = number;
// function addNumber(){
//  number++;
//  document.querySelector("#plus").textContent = number;
// }
// document.getElementById("addnumber").addEventListener("click", addNumber);

// 5.Sukurk programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą - išmeta, kad negalima kopijuoti.

// document.querySelector("#noCopy").addEventListener("copy", () => alert("Do Not Copy"))

// 6.Sukurk programą, kur paspaudus ant mygtuko - sugeneruoja random skaičių nuo 1 iki 100 ir jį išmeta kaip h1 tekstą.

// document.querySelector("#random").addEventListener("click", randomh1);
// function randomh1(){
//   document.querySelector("#randomNumber").textContent = Math.ceil(Math.random()*100)
// }

// 7.Sukurk programą, kurioje du mygtukai - "Turiu bent 18 metų" ir "Mažiau nei 18 metų". Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus". Jei antrą paspaudžia - išmeta alert su "nepilnametis - nieko neturim".

// document.querySelector("#adult").addEventListener("click", () => document.querySelector("#randomNumber").textContent = "Alus");
// document.querySelector("#child").addEventListener("click", () => alert("nepilnametis - nieko neturim"))

// 8.Sukurk programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis. Vartotojas skaičiaus nemato (bet jūs pasiconsole'inkit). Ekrane - trys mygtukai (1, 2, 3). Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja - išoka alert("Yay"), jei ne - alert("Nay").

// random = Math.ceil(Math.random()*3);
// console.log(random)
// document.getElementById("one").addEventListener("click", () => random == 1 ? alert("Yay") : alert("Nay"));
// document.getElementById("two").addEventListener("click", () => random == 2 ? alert("Yay") : alert("Nay"));
// document.getElementById("three").addEventListener("click",() => random == 3 ? alert("Yay") : alert("Nay"));

// 9.Parašykite programą, kurioje būtų tekstas "Nespauskite mygtuko". Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į "Neklausote manęs".

// document.getElementById("badbtn").addEventListener("click", () => {document.getElementById("noclick").textContent = "Neklausote manęs"})

// 10.Sukurkite h1, jam duokite 150vh aukštį (ir 150vh line-height). Pasakykite vartotojui, kad puslapio nejudintų. Tačiau, jei jis su pelytę pajudės - išmeskite "kiek galime neklausyti"..

// window.addEventListener("scroll", () => {alert("kiek galime neklausyti")})

// FORM valdymas js

// 1.Sukurk input į kurį įvestum savo vardą. Submit paspaudus - išoktų alert su tavo vardu.

// document.querySelector("form").addEventListener("submit", myFunction);
// function myFunction(event){
//   event.preventDefault();
//   const result = document.querySelector("input[name=abc]").value;
//   alert(result);
// }

// 2.Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 elemente atsirastų "Tavo amžius: [amžius]".

// document.querySelector("form").addEventListener("submit", myFunction);
// function myFunction(event){
//   event.preventDefault();
//   const result = document.querySelector("input[name=age]").value;
//   document.querySelector("#age").textContent = "Tavo amžius: "+result;
// }

// 3.Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių. Jei daugiau nei 18 - išmeta h1 elemente "Vairuoti gali: [vardas]"; jei nėra išmeta: "Dar mokysis vairuotis: [vardas]".

// document.querySelector("form").addEventListener("submit", myFunction);
// function myFunction(event){
//   event.preventDefault();
//   const age = document.querySelector("input[name=age]").value;
//   const result = document.querySelector("input[name=abc]").value;
//   if (age>=18){
//     document.querySelector("#age").textContent = "Vairuoti gali: "+result;
//   }else {
//     document.querySelector("#age").textContent = "Dar mokysis vairuotis: "+result;
//   }
// }

// 4.Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist.

// let ticket = 6;
// document.querySelector("form").addEventListener("submit", myFunction);
// function myFunction(event){
//   event.preventDefault();
//   const age = document.querySelector("input[name=age]").value;
//   if (age<=16){
//     document.querySelector("#age").textContent = "Bilieto kaina: "+(ticket*.5).toFixed(2)+"eur"
//   }else if (age>=60){
//     document.querySelector("#age").textContent = "Bilieto kaina: "+(ticket/3).toFixed(2)+"eur"
//   }else {
//   document.querySelector("#age").textContent = "Bilieto kaina: "+ticket.toFixed(2)+"eur"
// }}

// ----------cao atsakymas--------
// const ageInput = document.getElementById("numberAge");
// const btn = document.querySelector("button");
// const priceDisplay = document.getElementById("age");
// btn.addEventListener("click", fn);
// function fn(e) {
//   e.preventDefault();
//   const price = 6;
//   const age = Number(ageInput.value);
//   if (age >= 60) {
//     priceDisplay.textContent = (0.5 * price).toFixed(2);
//   } else if (age < 18) {
//     priceDisplay.textContent = (0.45 * price).toFixed(2);
//   } else {
//     priceDisplay.textContent = price.toFixed(2);
//   }
// }

// 5.Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo. Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

// document.querySelector("form").addEventListener("submit", myFunction);
// function myFunction(event){
//   event.preventDefault();
//   const age = document.querySelector("input[name=age]").value;
//   if (document.querySelector("input[type=checkbox]:checked")){
//     if (age>=18 && age<=30){
//       document.querySelector("#age").textContent = "Jus tinkamas eiti i kariuomene"
//     }else{document.querySelector("#age").textContent = "Jus netinkamas kariuomeneje"}
//   }else{document.querySelector("#age").textContent = "Jus netinkamas kariuomeneje"}
// }

// ----------cao atsakymas----------
// const ageInput = document.getElementById("age");
// const tInput = document.querySelector("input[type=checkbox]");
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   const age = Number(ageInput.value);
//   const teistumas = tInput.checked;
//   if (age >= 18 && age <= 30 && !teistumas) {
//     document.getElementById("result").textContent = "Esi saukiamas!";
//   } else {
//     document.getElementById("result").textContent = "Esi laisvas!";
//   }
// });

// 6.Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu. Pvz: [16] => "Jūsų bonusas: 100 eurų".

// let bonus = 50;
// const ageInput = document.querySelector("#age");
// document.querySelector("form").addEventListener("submit", myFunction);
// function myFunction(event){
//   event.preventDefault();
//   const year = document.querySelector("input[name=age]").value;
//   if (year>=20){
//     ageInput.textContent = "Jūsų bonusas: "+(bonus+150)+" eurų";
//   }else if (year>=5 && year<20){
//     ageInput.textContent = "Jūsų bonusas: "+(bonus+50)+" eurų";
//   }else {
//   ageInput.textContent = "Jūsų bonusas: "+bonus+" eurų";
// }}

// 7.Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

// const yearInput = document.querySelector("input[name=age]");
// const textYear = document.getElementById("leap");
// document.querySelector("form").addEventListener("submit", myFunction);
// function myFunction(event){
//   event.preventDefault();
//   const year = document.querySelector("input[name=age]").value;
//   if (year%100 && !(year%4)){
//     textYear.textContent = "Tai yra kelemieji metai ir turi 366 d."
//   }else if(!(year%400)){
//     textYear.textContent = "Tai yra kelemieji metai ir turi 366 d."
//   }else {    textYear.textContent = "Tai yra paprastieji metai ir turi 365 d."}
// }

// 8.Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

// document.querySelector("form").addEventListener("submit", myFunction);
// function myFunction(event){
//   event.preventDefault();
//   const grade = document.querySelector("input[name=age]").value;
//   document.querySelector("#leap").textContent = (grade*1.8+32)+" laipsniu pagal Farenheita";}

// 9.Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

// const emailInput = document.getElementById('email');
// const newsInput = document.getElementById('news');
// document.querySelector("#submitBtn").addEventListener("click", () => {
//   const news = newsInput.checked;
//   if (!news){
//     alert("Registracija nesėkminga.");
//   }else{alert("El. paštas "+ String(emailInput.value) +" sėkmingai užregistruotas")}
// });

// 10.Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)

// const nameInput = document.querySelector("input[name=abc]");
// const numberInput = document.querySelector("#numberAge");
// const list = document.getElementById('list');
// document.getElementById('btnAdd').addEventListener("click", (e)=>{
//   e.preventDefault();
//   const nmb = Number(numberInput.value);
//   for (i=0; i<nmb; i++) {
//     list.innerHTML += "<li>"+String(nameInput.value)+"</li>";
//   }
// })

// 11.Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
// Pvz:
// Įvesta: 2
// Rezultatas:
// *
// **
// Įvesta: 5
// Rezultatas:
// *
// **
// ***
// ****
// *****

// const numberInput = document.querySelector("#numberAge");
// const triangle = document.getElementById('div');
// document.getElementById('btnAdd').addEventListener("click", (e)=>{
//   e.preventDefault();
//   triangle.innerHTML = "";
//   const nmb = Number(numberInput.value);
//   for (i=0; i<nmb; i++) {
//     for (x=0; x<=i; x++){
//       triangle.innerHTML += "*";}
//     triangle.innerHTML += "<br>";
//   }
// })

// 12.Sukurkite funkciją, į kurią būtų paduotas vienas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš mažų L raidžių ASCII būdų).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspaudinti tokį rezultatą:
// L
// L
// L
// L L L L

// const numberInput = document.querySelector("#numberAge");
// const L = document.getElementById('div');
// document.getElementById('btnAdd').addEventListener("click", (e)=>{
//   e.preventDefault();
//   L.innerHTML = "";
//   const nmb = Number(numberInput.value);
//   for (i=1; i<nmb; i++) {
//     L.innerHTML += "L<br>";
//   }
//   for (i=0; i<nmb; i++){
//     L.innerHTML += "L";
//   }
// })

// 13.Sukurkite tokią pačią funkciją, bet kad spausdintų I raidę. Vartotojas gali įrašyti tik nelyginį teigiamą skaičių, kitaip išmeta klaidą.
// pvz.:
// I I I I I
// I
// I
// I
// I I I I I

// const numberInput = document.querySelector("#numberAge");
// const I = document.getElementById('div');
// document.getElementById('btnAdd').addEventListener("click", (e)=>{
//   e.preventDefault();
//   I.innerHTML = "";
//   const nmb = Number(numberInput.value);
//   if (nmb%2 && nmb>0){
//     for (let i=0; i<nmb; i++){
//       I.innerHTML += "I ";
//     }
//     I.innerHTML += "<br>";
//     for (let i=2; i<nmb; i++) {
//       I.innerHTML += "I<br>";
//     }
//     for (let i=0; i<nmb; i++){
//       I.innerHTML += "I ";
//     }
//   } else {alert("Klaida: skaicius turi but nelyginis ir teigiamas.")}
// })

// 14.Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
// Pvz.: Petras, Jonas, Mantas, Antanas.

// const nameInput = document.querySelector("input[name=abc]");
// const arr = document.getElementById('div');
// let i=0;
// nameInput.addEventListener("blur", (e)=>{
//   e.preventDefault();
//   if (i>0){
//   document.querySelector("span:last-child").textContent = ", "}
//   i++;
//   arr.innerHTML += String(nameInput.value)+"<span>.</span>";
// })

// 15.Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.
// Pvz.: fn(101, 81) grąžins 101.

// const numberInput1 = document.querySelector("#number1");
// const numberInput2 = document.querySelector("#number2");
// document.getElementById('btn100').addEventListener("click", (e)=>{
//   e.preventDefault();
//   const num1 = Number(numberInput1.value);
//   const num2 = Number(numberInput2.value);
//   const num01 = Math.abs(100 - num1);
//   const num02 = Math.abs(100 - num2);
//   for(x=0; x<num01; x++){}
//   for(y=0; y<num02; y++){}
//   if(x>y){
//     alert(num2+" skaicius yra arciau 100")
//   }else {
//     alert(num1+" skaicius yra arciau 100")
//   }
// })

// 16.Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius tarp 1 ir 5. Vartotojas turi formą su vienu input - gali spėti skaičių. Atspėjus - išmeta alert(atspejai), kitaip alert(neatspejai).

// const random = Math.ceil(Math.random()*5);
// const numInput = document.getElementById("numberAge")
// console.log(random)
// document.getElementById("btnAdd").addEventListener("click", () =>{
//   const num = Number(numInput.value);
//   random == num ? alert("atspejai") : alert("neatspejai");
// });

// 17.Pakoreguokite 16 pratimą, kad skaičiuotų iš kelinto karto atspėjai ir tai parašytų alert'e.

// const random = Math.ceil(Math.random()*5);
// const numInput = document.getElementById("numberAge");
// let i=0;
// console.log(random)
// document.getElementById("btnAdd").addEventListener("click", (e) =>{
//   e.preventDefault();
//   const num = Number(numInput.value);
//   i++;
//   if (random == num){
//     alert("atspejai iš "+i+" karto.");
//     location.reload();
//    }else {
//      alert("neatspejai");}
// });

// Styliaus keitimas su JS

// 1.H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

// const style = document.getElementById("style");
// style.addEventListener("click", () => {
//   style.style.textAlign = "center";
//   style.style.fontSize = "4em";
//   style.style.color = "red";
// })

// 2.Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

// const btn = document.getElementById("jump");
// btn.style.position = "absolute";
// btn.style.top = "0";
// btn.style.left = "0";
// let x = 0;
// btn.addEventListener("click", () => {
//   if (x == 0){
//     btn.style.inset = "auto 0 0 auto";
//     x = 1;
//   }else {
//     btn.style.inset = "0 auto auto 0";
//     x = 0;
//   }
// })

// 3.Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle.
// +-
// const btn = document.getElementById("jump");
// btn.style.position = "absolute";
// btn.style.top = "0";
// btn.style.left = "0";
// let x = 0;
// btn.addEventListener("click", () => {
//   if (x == 0){
//     btn.style.inset = "auto 0 0 auto";
//     x = 1;
//     }else {
//       btn.style.inset = "0 auto auto 0";
//       x = 0;
//       }
//       btn.style.transition = "all 1s ease-in";
//       btn.style.transform = "rotate(360deg)";
// })

// 4.Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias.

// const wrd = document.getElementById("word");
// wrd.addEventListener("input", () => {
//   const word = String(wrd.value);
//   if (word.length > 2 ){
//     document.body.style.backgroundColor = "green";
//   }else {
//     document.body.style.backgroundColor = "red";
//   }
// })

// 5.Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom (["red", "green", "blue", "yellow"]). Paspaudus ant mygtuko - tegul jo spalva pasikeičia į atsitiktinę spalvą.

// const btn = document.getElementById("jump");
// const arr = ["red", "green", "blue", "yellow"];
// btn.addEventListener("click", () => {
//   const random = Math.ceil(Math.random()*4);
//   switch (random){
//     case 1: btn.style.backgroundColor = arr[0]; break;
//     case 2: btn.style.backgroundColor = arr[1]; break;
//     case 3: btn.style.backgroundColor = arr[2]; break;
//     case 4: btn.style.backgroundColor = arr[3]; break;
//   }
// })

// 6.Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas. Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai), šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB). Padarykite, kad paspaudus ant mygtuko, jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.

// const btn = document.getElementById("jump");
// btn.addEventListener("click", () => {
//   const random1 = Math.floor(Math.random()*256);
//   const random2 = Math.floor(Math.random()*256);
//   const random3 = Math.floor(Math.random()*256);
//   const color = String("rgb("+random1+", "+random2+", "+random3+")");
//   btn.style.backgroundColor = color;
// })

// JS pratimai su objektais

// 1.Susikuriame objektą "car". Duodame jam tris properties: "doors", "color", "brand". Reikšmes įrašykite patys, tik atminkite - doors bus skaičius, o color ir brand - string'ai. Pasiconsole'inkite ir patikrinkite ar matosi car objektas, ar galite atskirai pasiimti vieną iš jo parametrų (pvz. car.doors).

// const car = {
//   doors: 2,
//   color: "red",
//   brand: "audi"
// }

// 2.Sukuriame formą su dviem input - name ir surname. Pateikus formą, JS turi pasiimti vardą ir pavardę ir sukurti objektą pavadinimu 'person'. Šis objektas turės du parametrus - name ir surname. Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje) - atsispausdink objektą ir pažiūrėk ar viskas gerai veikia. Hint: už funkcijos ribų negali atspausdinti objekto, nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja.

// const nameInput = document.getElementById('word');
// const surnameInput = document.getElementById('surname');
// document.querySelector("#forma").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = nameInput.value;
//   const surname = surnameInput.value;
//   const person = {
//     name: name,
//     surname: surname
//   };
//   console.log(person);
// })

// 3.Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių. Pateikus duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge. Name - string, o isLegalAge - boolean.

// document.querySelector("#forma0").addEventListener("submit", (e) =>{
//   e.preventDefault();
//   const name = e.target[0].value;
//   const age = e.target[1].value;
//   const isLegalAge = age >= 18;
//   const person = {
//     name: name,
//     isLegalAge: isLegalAge,
//   }
//   console.log(person);
// })

// DOM elementų kūrimas su JS (append ir prepend)

// 1.Susikuriame h1 elementą, jame įrašome savo vardą, pastilizuojame, kad elementas būtų raudonas ir pridedame jį prie <body>.

// const h1 = document.createElement('h1');
// h1.textContent = 'Tomas';
// h1.style.color = 'red';
// document.body.append(h1);

// 2.Sukuriame <ul> elementą, o jame - tris <li> elementus su mašinų brand'ais. <body> turi atsirasti <ul>, kuriame trys <li>

// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// li1.textContent = "VW";
// li2.textContent = "BMW";
// li3.textContent = "Volvo";
// document.body.append(ul);
// ul.append(li1, li2, li3);

// JS Boolean metodai

// Pasirašykite variable isLegalAge, kurį priskirkite true arba false. Console.log'e atvaizduokite šį variable. Sukurkite antrą console.log, kuriame atvaizduokite šį variable su toString() metodu. Turėtų skirtis spalva teksto.

// const isLegalAge = true;
// console.log(isLegalAge);
// console.log(isLegalAge.toString());

// JS Number metodai

// 1.Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).

// const milkPrice = 3;
// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia")
// }else{
//   alert("Centų reikia")
// }

// 2.Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).

// const milkPrice = 3.49;
// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia, kaina: "+milkPrice.toFixed(2))
// }else{
//   alert("Centų reikia, kaina: "+milkPrice.toFixed(2))
// }

// 3.Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trim skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).

// document.querySelector("#degaline").addEventListener("submit", (e) =>{
//   e.preventDefault();
//   const kaina = document.querySelector('input[name=kaina]').value;
//   const kiekis = document.querySelector('input[name=kiekis]').value;
//   const h1 = document.createElement("h1");
//   h1.textContent = (kaina*kiekis).toFixed(3)+" eur";
//   document.querySelector("#degaline").append(h1);
// })

// // JS String metodai

// 1.Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

// document.querySelector("#forma0").addEventListener("submit", (e)=>{
//   e.preventDefault();
//   const name = document.querySelector("input[name=abc]").value;
//   const nmb = Number(document.querySelector("input[name=age]").value);
//   if(Number.isInteger(nmb)) {
//     const h1 = document.createElement('h1');
//     h1.textContent = name.repeat(nmb);
//     document.body.prepend(h1);
//   }else{ alert("skaicius turi but sveikas")
// }})

// 2.Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

// document.querySelector("#forma0").addEventListener("submit", (e)=>{
//   e.preventDefault();
//   const name = document.querySelector("input[name=abc]").value.trim();
//   alert("Length: " + name.length);
// })

// 3.Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.

// document.querySelector("#forma0").addEventListener("submit", (e)=>{
//   e.preventDefault();
//   const nameInput = document.querySelector("input[name=abc]").value.trim().split(" ");
//   const name = document.createElement('h1');
//   const surname = document.createElement('h1');
//   name.textContent = nameInput[0];
//   surname.textContent = nameInput[1];
//   document.body.prepend(name, surname);
// })

// 4.Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis.

// document.querySelector("#forma0").addEventListener("submit", (e)=>{
//   e.preventDefault();
//   const nameInput = document.querySelector("input[name=abc]").value.trim();
//   const name = document.createElement('h1');
//   const surname = document.createElement('h1');
//   name.textContent = nameInput.split(" ")[0];
//   surname.textContent = nameInput.replace(name.textContent, "").slice(1);
//   document.body.prepend(name, surname);
// })

// JS callback

// Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną parametrą - vardą. Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins. O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę, ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).

// function alertName(text){
//   alert(text);
// }
// function consoleName(text){
//   console.log(text);
// }
// function coreFunction(name, callback){
//   const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   callback(capitalizedName);
// }
// coreFunction("toMas", consoleName);

// JS array metodai

// 1.Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

// const cars = ["BMW", "VW", "Audi"];
// cars.forEach((x)=>console.log(x));

// 2.Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

// const cars = ["BMW", "VW", "Audi"];
// const newCars = cars.map((x, i)=> i+": "+x);
// console.log(newCars);

// 3.Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

// const friends = ["miNdauGas", "PetRas", "laURYnaS", "mANtas"];
// const newFriends = friends.map((x)=>  x.charAt(0).toUpperCase()+x.slice(1).toLowerCase());
// console.log(newFriends)

// 4.Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

// const ages = [12, 34, 38, 25, 18, 16];
// console.log(ages.filter((x)=> x>=18))

// 5.Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

// const cities = ['Vilnius', 'Klaipeda', 'Kaunas', 'Panevezys'];
// console.log(cities.find(v => v.charAt(0) === "K"));

// 6.Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

// const cities = ['Vilnius', 'Klaipeda', 'Kaunas', 'panevezys'];
// console.log(cities.some(v => v.charAt(0) === v.charAt(0).toLowerCase()));

// 7.Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.

// const cities = ['Vilnius', 'Klaipeda', 'Kaunas', 'Panevezys'];
// console.log(cities.every(v => v.charAt(0) === v.charAt(0).toUpperCase()));

// Masyvų rykiavimas (sort)

// 1.Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.

// const friends = ["Mindaugas", "Petras", "Laurynas", "Mantas"];
// console.log(friends.sort());

// 2.Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.

// const friends = ["Mindaugas", "Petras", "Laurynas", "Mantas"];
// // friends.sort((a, b) => b > a ? 1 : -1);
// console.log(friends.sort().reverse());

// 3.Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).

// const numb = [5, 10, 20, 11, 12, 1, 0, 14, 25];
// console.log(numb.sort((a,b)=> b-a))

// 4.Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).

// const numb = [10, 5, 20, 4];
// console.log(numb.sort((a,b)=>b-a)[0]);

// Masyvų suplokštinimas - mažinimas (reduce)

// 1.Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.

// const nmb = [7, 10, 15, 23, 33];
// console.log(nmb.reduce((a,v)=>a+v))

// 2.Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).

// const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
// console.log(cars.reduce((a, v) => v.length == 3 ? a+1 : a, 0));

// 3.Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.

// const nmb = [7, 10, 15, 23, 33, 100, 250, 5, 11, 99, 2];
// console.log(nmb.reduce((a,v)=> a>v ? a : v, 0))

// Pratimai su JS masyvų metodais

// 1. Kaip matome - šitame masyve yra objektai (o iš objekto pasiimame reikšmę - t.y. property, rašydami objektas.property). Prafiltruojame masyvą, kad rodytų tik pilnamečius.

// const people = [
//   {
//     name: "Petras",
//     age: "18"
//   },
//   {
//     name: "Jonas",
//     age: 15
//   },
//   {
//     name: "Antanas",
//     age: 20
//   },
//   {
//     name: "Urtė",
//     age: 10
//   },
//   {
//     name: "Diana",
//     age: 25
//   },
//   {
//     name: "Ieva",
//     age: 16
//   }
// ];
// console.log(people.filter((x) => x.age>=18))

// 2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"].

// console.log(people.filter((x) => x.age>=18).map(person => person.name));

// 3. Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

// console.log(people.filter((x) => x.age>=18).map(person => person.name).sort())

// 4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du). Pvz: iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}]) grąžins: {brangiausias: "lemonade", pigausias: "lime"}

// const items = [
//   {
//     name: "lemonade",
//     price: 50
//   },
//   {
//     name: "lime",
//     price: 10
//   },
//   {
//     name: "candy",
//     price: 20
//   },
//   {
//     name: "fruits",
//     price: 15
//   },
//   {
//     name: "veg",
//     price: 25
//   },
//   {
//     name: "ice cream",
//     price: 16
//   }
// ];
// function fn(things){
//   things.sort((a,b)=>a.price - b.price);
//   return {brangiausias: things[things.length - 1].name, pigiausias: things[0].name}
// }
// console.log(fn(items));

// Praktika su funkcijomis ir metodais

// 1.Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds"). Pvz: fn(3) => "180 seconds".

// function fn(min) {
//   return console.log(min*60+" seconds")};
// fn(3);

// 2.Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos). Pvz: fn(20) => 7300.

// function fn(age) {
//   return console.log(age*365+" days")};
// fn(20);

// 3.Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą. Pvz.: fn(5) -> 25

// const Square = (nmb) => nmb*nmb;
// console.log(Square(5));

// 4.Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2) Pvz: fn(10, 10) -> 50

// const S = (a, p) => a*p/2;
// console.log(S(10, 10));

// 5.Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę. pvz. Paduodu: "Petras", grąžina "s".

// const lastSimbol = (str) => str.charAt(str.length-1);
// console.log(lastSimbol("Petras"));

// 6.Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis. T.y. "Petras" -> "sartep"

// const myFunction = (str) => str.toLowerCase().split("").reverse().join("");
// console.log(myFunction("Petras"));

// 7.Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių. pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

// const myFunction = (mas) =>
//   mas.filter(nmb => nmb<0).sort((a,b) => b-a)[0];
// console.log(myFunction([-1, -100, -5, 10, 0, 11]));

// 8.Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta. T.y. "3" => [1, 6, 3].

// const myFunction = (times) => {
//   const arr = [];
//   for(i=0; i<times; i++){
//     const random = Math.ceil(Math.random() * 10);
//     arr.push(random);
//   }
//   console.log(arr)
// }
// myFunction(3)

// 9.Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100. Pvz.: fn(10, 50) -> false

// const myFunction = (num1, num2) => num1+num2 > 100;
// console.log(myFunction(10, 50));

// 10.Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka. Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

// const fn = (array) => array.sort((a,b)=>a.name>b.name ? 1:-1).sort((a,b)=>a.age-b.age)
// console.log(fn([{name: "Alfredas", age: 25}, {name: "Jonas", age: 25}, {name: "Kasparas", age: 20}]))

// 11.Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.) Pvz.: fn(new Date(2020, 12, 25)) -> true

// const fn = (date) => {
//   const holidays = ["2020-01-01", "2020-12-24", "2020-12-25", "2020-04-01", "2020-05-25", "2020-11-01", "2020-11-02"];
//   return holidays.some(holiday => (new Date(holiday)).getDate() === date.getDate());
// }
// console.log(fn(new Date("2020-12-25")));

// 12.Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array. Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

// const fn = (array) => array.sort((a,b)=>a-b).find((x, i) => x + 1 !== array[i+1]) + 1
// console.log(fn([6, 2, 1, 5, -2, 0, -5]))

// Praktika su objektais masyvuose

// Nusikopijuokite:
const data = [
  {
    id: 1,
    first_name: "Lief",
    gender: "Female",
    car_model: "Corolla",
    car_year: 2002,
    shirt_size: "3XL",
  },
  {
    id: 2,
    first_name: "Danya",
    gender: "Male",
    car_model: "911",
    car_year: 2008,
    shirt_size: "XS",
  },
  {
    id: 3,
    first_name: "Marsha",
    gender: "Male",
    car_model: "V50",
    car_year: 2009,
    shirt_size: "XL",
  },
  {
    id: 4,
    first_name: "Clim",
    gender: "Genderqueer",
    car_model: "Sebring",
    car_year: 2000,
    shirt_size: "XS",
  },
  {
    id: 5,
    first_name: "Merlina",
    gender: "Polygender",
    car_model: "Corvette",
    car_year: 2012,
    shirt_size: "2XL",
  },
  {
    id: 6,
    first_name: "Danila",
    gender: "Genderfluid",
    car_model: "1 Series",
    car_year: 2011,
    shirt_size: "3XL",
  },
  {
    id: 7,
    first_name: "Homere",
    gender: "Male",
    car_model: "Sunbird",
    car_year: 1983,
    shirt_size: "S",
  },
  {
    id: 8,
    first_name: "Dayna",
    gender: "Non-binary",
    car_model: "Sigma",
    car_year: 1989,
    shirt_size: "2XL",
  },
  {
    id: 9,
    first_name: "Chickie",
    gender: "Agender",
    car_model: "Esteem",
    car_year: 1997,
    shirt_size: "L",
  },
  {
    id: 10,
    first_name: "Haley",
    gender: "Bigender",
    car_model: "Neon",
    car_year: 1999,
    shirt_size: "XL",
  },
  {
    id: 11,
    first_name: "Ajay",
    gender: "Genderqueer",
    car_model: "Edge",
    car_year: 2012,
    shirt_size: "3XL",
  },
  {
    id: 12,
    first_name: "Cyb",
    gender: "Bigender",
    car_model: "Tahoe",
    car_year: 2009,
    shirt_size: "XS",
  },
  {
    id: 13,
    first_name: "Ewell",
    gender: "Agender",
    car_model: "9-7X",
    car_year: 2007,
    shirt_size: "XS",
  },
  {
    id: 14,
    first_name: "Charyl",
    gender: "Genderqueer",
    car_model: "Sidekick",
    car_year: 1994,
    shirt_size: "XL",
  },
  {
    id: 15,
    first_name: "Ottilie",
    gender: "Genderfluid",
    car_model: "Continental GTC",
    car_year: 2012,
    shirt_size: "M",
  },
  {
    id: 16,
    first_name: "Sammy",
    gender: "Genderqueer",
    car_model: "Sonata",
    car_year: 2013,
    shirt_size: "XS",
  },
  {
    id: 17,
    first_name: "Giorgio",
    gender: "Genderfluid",
    car_model: "S40",
    car_year: 2011,
    shirt_size: "2XL",
  },
  {
    id: 18,
    first_name: "Cedric",
    gender: "Agender",
    car_model: "Thunderbird",
    car_year: 2006,
    shirt_size: "S",
  },
  {
    id: 19,
    first_name: "Holli",
    gender: "Non-binary",
    car_model: "Prius c",
    car_year: 2012,
    shirt_size: "2XL",
  },
  {
    id: 20,
    first_name: "Neil",
    gender: "Genderqueer",
    car_model: "Taurus",
    car_year: 2003,
    shirt_size: "M",
  },
  {
    id: 21,
    first_name: "Lynnett",
    gender: "Female",
    car_model: "Mirage",
    car_year: 1994,
    shirt_size: "M",
  },
  {
    id: 22,
    first_name: "Thacher",
    gender: "Genderqueer",
    car_model: "Navigator L",
    car_year: 2012,
    shirt_size: "S",
  },
  {
    id: 23,
    first_name: "Glenna",
    gender: "Non-binary",
    car_model: "Aero 8",
    car_year: 2008,
    shirt_size: "2XL",
  },
  {
    id: 24,
    first_name: "Nicol",
    gender: "Agender",
    car_model: "GTO",
    car_year: 1968,
    shirt_size: "XS",
  },
  {
    id: 25,
    first_name: "Bernadine",
    gender: "Non-binary",
    car_model: "928",
    car_year: 1991,
    shirt_size: "S",
  },
  {
    id: 26,
    first_name: "Joanna",
    gender: "Genderqueer",
    car_model: "S60",
    car_year: 2013,
    shirt_size: "XS",
  },
  {
    id: 27,
    first_name: "Celesta",
    gender: "Female",
    car_model: "Esprit",
    car_year: 2001,
    shirt_size: "L",
  },
  {
    id: 28,
    first_name: "Adi",
    gender: "Agender",
    car_model: "RAV4",
    car_year: 2008,
    shirt_size: "S",
  },
  {
    id: 29,
    first_name: "Nan",
    gender: "Non-binary",
    car_model: "Town Car",
    car_year: 2007,
    shirt_size: "3XL",
  },
  {
    id: 30,
    first_name: "Reynold",
    gender: "Female",
    car_model: "Blackwood",
    car_year: 2003,
    shirt_size: "2XL",
  },
  {
    id: 31,
    first_name: "Raina",
    gender: "Non-binary",
    car_model: "Tempo",
    car_year: 1987,
    shirt_size: "S",
  },
  {
    id: 32,
    first_name: "Eward",
    gender: "Non-binary",
    car_model: "Milan",
    car_year: 2008,
    shirt_size: "2XL",
  },
  {
    id: 33,
    first_name: "Teresa",
    gender: "Genderqueer",
    car_model: "Econoline E150",
    car_year: 1997,
    shirt_size: "3XL",
  },
  {
    id: 34,
    first_name: "Delmar",
    gender: "Female",
    car_model: "Legend",
    car_year: 1990,
    shirt_size: "XL",
  },
  {
    id: 35,
    first_name: "Koral",
    gender: "Agender",
    car_model: "B-Series",
    car_year: 1992,
    shirt_size: "3XL",
  },
  {
    id: 36,
    first_name: "Karil",
    gender: "Non-binary",
    car_model: "MR2",
    car_year: 1986,
    shirt_size: "S",
  },
  {
    id: 37,
    first_name: "Stepha",
    gender: "Polygender",
    car_model: "Daewoo Magnus",
    car_year: 2004,
    shirt_size: "S",
  },
  {
    id: 38,
    first_name: "Jaclyn",
    gender: "Genderfluid",
    car_model: "Grand Marquis",
    car_year: 2000,
    shirt_size: "M",
  },
  {
    id: 39,
    first_name: "Peria",
    gender: "Polygender",
    car_model: "Evora",
    car_year: 2011,
    shirt_size: "2XL",
  },
  {
    id: 40,
    first_name: "Cecelia",
    gender: "Genderfluid",
    car_model: "Accent",
    car_year: 1998,
    shirt_size: "L",
  },
  {
    id: 41,
    first_name: "Katha",
    gender: "Female",
    car_model: "RDX",
    car_year: 2011,
    shirt_size: "XS",
  },
  {
    id: 42,
    first_name: "Beverie",
    gender: "Male",
    car_model: "Probe",
    car_year: 1992,
    shirt_size: "2XL",
  },
  {
    id: 43,
    first_name: "Pavla",
    gender: "Polygender",
    car_model: "Colt",
    car_year: 1994,
    shirt_size: "XL",
  },
  {
    id: 44,
    first_name: "Sonnie",
    gender: "Non-binary",
    car_model: "Impreza",
    car_year: 2012,
    shirt_size: "3XL",
  },
  {
    id: 45,
    first_name: "Jordan",
    gender: "Genderqueer",
    car_model: "Cougar",
    car_year: 1994,
    shirt_size: "2XL",
  },
  {
    id: 46,
    first_name: "Court",
    gender: "Female",
    car_model: "Civic",
    car_year: 2005,
    shirt_size: "2XL",
  },
  {
    id: 47,
    first_name: "Berton",
    gender: "Female",
    car_model: "xB",
    car_year: 2012,
    shirt_size: "2XL",
  },
  {
    id: 48,
    first_name: "Maryl",
    gender: "Bigender",
    car_model: "LaCrosse",
    car_year: 2010,
    shirt_size: "XS",
  },
  {
    id: 49,
    first_name: "Robinson",
    gender: "Non-binary",
    car_model: "Dakota",
    car_year: 1992,
    shirt_size: "XS",
  },
  {
    id: 50,
    first_name: "Nerissa",
    gender: "Male",
    car_model: "F150",
    car_year: 2002,
    shirt_size: "3XL",
  },
];
// ir su šiais duomenimis atlikite nurodytus pratimus:

// 1.Pasakykite skaičių kiek vyrų yra tarp šių duomenų (t.y. console'log skaičių).

// console.log(data.filter(x=> x.gender == "Male").length);

// 2.Sukurkite masyvą, kuriuose būtų id visų žmonių, kurie turi automobilius naujesnius nei 2000 metai.

// console.log(data.filter(x=> x.car_year > 2000).map(x=> x.id));

// 3.Sukurkite masyvą visų žmonių, kurių marškinių dydžiai XS arba S; ir surūšiuokite šį masyvą pagal vardus, A-Z tvarka (alfabetiškai).

// console.log(data.filter(x=> x.shirt_size == "XS" || x.shirt_size == "S").map(x=> x.first_name).sort());

// 4.Pakoreguokite trečią pratimą, kad masyve matytųsi tik id, vardas bei marškinių dydis.

// console.log(data
// .filter(x=> x.shirt_size == "XS" || x.shirt_size == "S")
// .map((person) => ({
//   id: person.id,
//   first_name: person.first_name,
//   shirt_size: person.shirt_size
// }))
// .sort((a,b)=> a.first_name>b.first_name ? 1:-1));

// OOP - objektinis programavimas

// 1.Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.

// function Car(brand, model, engine) {
//   this.brand = brand;
//   this.model = model;
//   this.engine = engine;
//   this.turnOn = function () {
//     alert('vroom')
//   }
// }
// const passat = new Car("VW", "Passat", 1.9);
// const yaris = new Car("Toyota", "Yaris", 1.3);
// console.log(passat.turnOn())

// 2.Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

// function Car(brand, model, engine, basePrice) {
//   this.brand = brand;
//   this.model = model;
//   this.engine = engine;
//   this.basePrice = basePrice;
//   this.getPrice = function () {
//     if (this.engine == "electric") {
//       return (this.basePrice += 10000);
//     } else if (this.engine == "diesel") {
//       return (this.basePrice += 5000);
//     } else {
//       return this.basePrice;
//     }
//   };
//   this.turnOn = function () {
//     alert("vroom");
//   };
// }
// const passat = new Car("VW", "Passat", "diesel", 15000);
// const yaris = new Car("Toyota", "Yaris", "electric", 12000);
// const a4 = new Car("Audi", "A4", "petrol", 16000);
// console.log(yaris.getPrice());

// JS Objektų pratimai

// 1.Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

// class CapitalizedName {
//   constructor(input) {
//     this.input = input;
//   }
//   capitalized() {
//     this.name =
//       this.input.split(" ")[0].charAt(0).toUpperCase() +
//       this.input.split(" ")[0].slice(1).toLowerCase();
//     this.surname =
//       this.input.split(" ")[1].charAt(0).toUpperCase() +
//       this.input.split(" ")[1].slice(1).toLowerCase();
//     this.nameSurname = this.name + " " + this.surname;
//     return this.nameSurname.split(" ");
//   }
// }
// class MyFunction {
//   constructor(arr) {
//     this.name = arr[0];
//     this.surname = arr[1];
//   }
//   newTable() {
//     this.nameRow = document.createElement("td");
//     this.nameRow.textContent = this.name;
//     this.surnameRow = document.createElement("td");
//     this.surnameRow.textContent = this.surname;
//     this.tableRow = document.createElement("tr");
//     document.querySelector("table").append(this.tableRow);
//     this.tableRow.append(this.nameRow, this.surnameRow);
//   }
// }
// document.querySelector("#fullName").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const fullNameInput = document
//     .querySelector("input[name=fullName]")
//     .value.trim();
//   const fullName = new CapitalizedName(fullNameInput);
//   const nameForTable = new MyFunction(fullName.capitalized());
//   nameForTable.newTable();
// });

// 2.Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą.

// class MyFunction {
//   constructor(b, mod, m, p, img) {
//     this.brand = b;
//     this.model = mod;
//     this.mileage = m;
//     this.price = p;
//     this.img = img;
//   }
//   newBlock() {
//     const price = this.price;
//     this.imgBlock = document.createElement("div");
//     this.imgBlock.className = "img";
//     this.imgBlock.style.backgroundImage = "url(" + this.img + ")";
//     this.nameRow = document.createElement("h2");
//     this.nameRow.textContent = this.brand + ", " + this.model;
//     this.textRow = document.createElement("p");
//     this.textRow.textContent = "Mileage: " + this.mileage + " miles";
//     this.carBlock = document.createElement("div");
//     this.carBlock.className = "block";
//     document.querySelector(".container").append(this.carBlock);
//     this.carBlock.append(this.imgBlock, this.nameRow, this.textRow);
//     this.alertPrice = function () {
//       alert(price + " eur");
//     };
//     this.carBlock.addEventListener("click", this.alertPrice);
//   }
// }
// document.querySelector("#forma5").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const brandInput = document.querySelector("#brand").value.trim();
//   const modelInput = document.querySelector("#model").value.trim();
//   const mileageInput = document.querySelector("#mileage").value.trim();
//   const priceInput = document.querySelector("#price").value.trim();
//   const imageInput = document.querySelector("#image").value.trim();
//   const newCarBlock = new MyFunction(
//     brandInput,
//     modelInput,
//     mileageInput,
//     priceInput,
//     imageInput
//   );
//   newCarBlock.newBlock();
// });

// 3.Prisimename darbą su masyvais: sukurkite funkciją, kuri priims masyvą ir išfiltruos visus pasikartojančius skaičius bei šį masyvą grąžins atgal.
// Pvz:
// paduodu: [1, 3, 3, 5, 5, 5]
// grąžina: [1, 3, 5]

// function filteredNumb(arr) {
//   return arr.filter((a, i) => arr.indexOf(a) == i);
// }
// console.log(filteredNumb([1, 3, 3, 5, 5, 5]));

// Praktinės užduotys su JS metodais

// 1.Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne, pagal jo amžių.
// Pvz.:
// const p1 = new Person("Petras", 16)
// p1.compareAge() => "Petras is old enough to drink";
// Nusikopijuokite apačioje esantį kodą ir jį papildykite:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   compareAge() {
//     if (this.age >= 18) {
//       console.log(this.name + " is old enough to drink");
//     } else {
//       console.log(this.name + " is too young to drink");
//     }
//   }
// }
// const p1 = new Person("Petras", 18);
// p1.compareAge();

// 2. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais. pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]

// function filteredNumb(arr) {
//   return arr.filter((a) => Number(a));
// }
// console.log(filteredNumb([1, 5, "a", "g", "z", 6]));

// 3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių). pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"

// function doubleLetter(str) {
//   return str
//     .split("")
//     .map((a, i, arr) => (arr[i].match(/[a-z]/i) ? a + a : a))
//     .join("");
// }
// console.log(doubleLetter("Petras 123 Slekys"));

// 4. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas. Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra tarpų - post code neteisingas. Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.

// function correctPostCode(code) {
//   if (code.match(/^\d{3}[a-zA-Z]{2}$/) || code.match(/^\d{5}$/)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// correctPostCode("12345");

// 5. Sukurkite funkciją, kuri priims array ir prie kiekvieno array elemento pridės "7", nebent elementas baigsis "7".
// pvz:
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// jazzify([]) ➞ []

// function jazzify(arr) {
//   return arr.map((element) =>
//     element.split("")[element.length - 1] !== "7" ? element + 7 : element
//   );
// }
// console.log(jazzify(["F", "E7", "A7", "Ab7", "Gm7", "C7"]));

// Pratimai su Cookies ir LocalStorage

// 1.Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies. Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą.

// let i = 1;
// i =
//   Number(
//     document.cookie.slice(
//       document.cookie.lastIndexOf("name") + 4,
//       document.cookie.lastIndexOf("=")
//     )
//   ) + 1;
// console.log(document.cookie);
// function setCookie(value) {
//   document.cookie =
//     "name" + i + "=" + value + ";  expires=Thu, 18 Dec 2033 12:00:00 UTC";
//   i++;
// }
// document.querySelector("#forma6").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const cookieValue = e.target.elements.name.value;
//   setCookie(cookieValue);
//   console.log(document.cookie.split("name"));
//   if (document.cookie == "name=" + cookieValue) {
//     const h1 = document.createElement("h1");
//     h1.textContent = cookieValue;
//     const remove = document.createElement("button");

//     document.querySelector("#forma6").append(h1, remove);
//   }
// });

// 2.Į localStorage, įrašykite savo vardą, pavardę, aprašymą, linkus į FB, G+, Twitter, linką į nuotrauką. Informaciją galite įrašyti per console'ę, arba naudojant kodą projekte pirmą kart užkraunant puslapį. Vėliau susikurkite puslapį, kuris atvaizduos šią informaciją būtent taip:

// localStorage.setItem("name", "Tomas");
// localStorage.setItem("surname", "Zagorskis");
// localStorage.setItem(
//   "info",
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus facere explicabo corporis."
// );
// localStorage.setItem("fb", "https://www.facebook.com/");
// localStorage.setItem("instagram", "https://www.instagram.com/");
// localStorage.setItem(
//   "photo",
//   "C:Users/Tomas/Desktop/programavimas/Front-end/Darbas/src/imgphoto-99.jpg"
// );

// 3.Sukurkite puslapį, kuriame būtų forma su vienu input - fullName. Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname). Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array išsaugo localStorage. Po forma, tegul būna lentelė, būtent joje atsivaizduoja informacija iš localStorage array.

// class CapitalizedName {
//   constructor(input) {
//     this.input = input;
//   }
//   capitalized() {
//     this.name =
//       this.input.split(" ")[0].charAt(0).toUpperCase() +
//       this.input.split(" ")[0].slice(1).toLowerCase();
//     this.surname =
//       this.input.split(" ")[1].charAt(0).toUpperCase() +
//       this.input.split(" ")[1].slice(1).toLowerCase();
//     this.nameSurname = this.name + " " + this.surname;
//     return this.nameSurname.split(" ");
//   }
// }
// class MyFunction {
//   constructor(arr) {
//     this.name = arr[0];
//     this.surname = arr[1];
//     localStorage.setItem("name", this.name);
//     localStorage.setItem("surname", this.surname);
//   }
//   newTable() {
//     this.nameRow = document.createElement("td");
//     this.nameRow.textContent = localStorage.getItem("name");
//     this.surnameRow = document.createElement("td");
//     this.surnameRow.textContent = localStorage.getItem("surname");
//     this.tableRow = document.createElement("tr");
//     document.querySelector("table").append(this.tableRow);
//     this.tableRow.append(this.nameRow, this.surnameRow);
//   }
// }
// document.querySelector("#fullName").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const fullNameInput = document
//     .querySelector("input[name=fullName]")
//     .value.trim();
//   const fullName = new CapitalizedName(fullNameInput);
//   const nameForTable = new MyFunction(fullName.capitalized());
//   nameForTable.newTable();
// });

// Praktika su JS pažadais (Promises)

// 1.Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut.

// const promise = new Promise(function(resolve, reject){
//   setTimeout(() => resolve(), 5000)
// })
// promise.then(() => alert("yes, veikia!"))

// 2.Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

// const promise = new Promise(function(resolve, reject){
//   const random = Math.ceil(Math.random()*5);
//   setTimeout(() => {
//     if(random == 1){
//       reject()
//     }else{
//       resolve()
//     }}, 5000)
// })
// promise
// .then(() => alert("yes, veikia!"))
// .catch(() => alert("something is bad!"))

// 3.Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę , šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą.

// const promise = new Promise(function(resolve, reject){
//   const random = Math.ceil(Math.random()*5);
//   setTimeout(() => {
//     if(random == 1){
//       reject()
//     }else{
//       resolve("yes, veikia!")
//     }}, 5000)
// })
// promise
// .then(function() {
//   return "this is a message"
// }).then(function(result) {
//   return alert(result)
// }).catch(() => alert("something is bad!"))


// Pratimai su Fetch API

// 1.Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML/CSS pasirašyti, bet norintiems sunkumo - pabandykite ir su JS):

// 2.Naudojant "https://boiling-reaches-93648.herokuapp.com/week-3/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?

// 3. Organizuojate vestuves - pasiimkite informaciją iš "https://boiling-reaches-93648.herokuapp.com/week-3/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".