// Reactor Variables
var Research = 1;
var Reactor_Heat = 0;
var Reactor_Power = 0;
var Money = 100;
var Power_Cells = 1;
var Reactor_Towers = 0;
var Reactor_Clusters = 0;
var Employees = 1;
var SleepingHalls = 1;
var Uranium = 0;
var Plutonium = 0;
var Plans = 1;



document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
document.getElementById("Plan").innerHTML = 'Reactor Plans: '+ Plans;
setInterval(function(){autoconvert()}, 20/Employees);
convert = function convert(){


Power_Cells = Power_Cells + Math.floor((Reactor_Towers*1.5))
Reactor_Towers = Reactor_Towers + (Reactor_Clusters*100)
// Overheat:
if(Reactor_Heat > Power_Cells*100){
Money = Money/2
}
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
  
console.log(Reactor_Power)
}
//Auto Convert

autoconvert = function autoconvert(){

Reactor_Power = Reactor_Power + (4*Power_Cells)*Math.ceil(Employees/3);
Reactor_Heat = Reactor_Heat + Math.round((Power_Cells/2)/SleepingHalls);
cluster();

if(Money < -10){
 Employees = 1
 Money = 0 
}
// Overheat:
if(Reactor_Heat > Power_Cells*100){
sell()

}
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Research").innerHTML = 'Research: '+ Research;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
console.log(Reactor_Power)
}


sell = function sell(){
  Money = Math.floor(   Money + Math.floor(Reactor_Power * Power_Cells/6)/Math.floor(5)    );
Reactor_Power = 0
Reactor_Heat = Math.round(Reactor_Heat/2)
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}
cell = function cell(){

if(Money >= (Power_Cells*((45/100)*100))){
  
  document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  Money = Money - (Power_Cells*((45/100)*100));
  Power_Cells = Power_Cells + 1;
}
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Cell").removeAttribute("hidden")
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));

  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}
tower = function tower(){
  document.getElementById("con").removeAttribute("hidden")
  document.getElementById("con").add
  if(Power_Cells > 14){
    document.getElementById("con").removeAttribute("hidden")
    document.getElementById("Tower").removeAttribute("hidden")
    Reactor_Towers = Reactor_Towers + 1;
    Power_Cells = Power_Cells - 15;
  }
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;

  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;

}

cluster = function cluster(){
  if(Reactor_Towers > 99){
    document.getElementById("Cluster").removeAttribute("hidden")
  Reactor_Clusters = Reactor_Clusters + 1*Plans
  Reactor_Towers = Reactor_Towers - 100
  
  
  }
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}

function employee(){
  if(Money > Power_Cells*10*Employees){
 Employees = Employees + 1 
 document.getElementById("Hires").removeAttribute("hidden")
 Money -= Power_Cells*10*Employees;
}

  document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}
function hall(){
  if (Money > 1999) {
    document.getElementById("Halls").removeAttribute("hidden")
    SleepingHalls = SleepingHalls + 1
    Money = Money - 10000
  }
  document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}


function plutonium(){

  if (Uranium > 19 && Research > 100){
    document.getElementById("pluto").removeAttribute("hidden")
    Plutonium = Plutonium + 1
    Uranium = Uranium - 20
    document.getElementById("uran").innerHTML = 'Uranium: '+ Uranium;
    document.getElementById("pluto").innerHTML = 'Thorium: '+ Plutonium;
}
  
  document.getElementById("Money").innerHTML = 'Money: $'+ Money;
  document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
  document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
  document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
  document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
  document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
    document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
    document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}

function uranium(){

  if (Reactor_Clusters > 9999 && Research > 10){
    document.getElementById("uran").removeAttribute("hidden")
    Uranium = Uranium + 1
    Reactor_Clusters = Reactor_Clusters - 10000
    document.getElementById("uran").innerHTML = 'Uranium: '+ Uranium;
  }
  document.getElementById("Money").innerHTML = 'Money: $'+ Money;
  document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
  document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
  document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
  document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
  document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
    document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
    document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
    

}

function research(){


if(Money >= 300000*Research*1.5){
  Research += 1;
  Money -= 300000*Research*1.5;
}

  document.getElementById("Money").innerHTML = 'Money: $'+ Money;
  document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
  document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
  document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C/' + Power_Cells*10 + ' C';
  document.getElementById("Price").innerHTML = 'Cost: $'+ (Power_Cells*((45/100)*100));
  document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
    document.getElementById("Hires").innerHTML = 'Employees: '+ Employees + ' Price: ' + Power_Cells*10*Employees;
    document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
    document.getElementById("Research").innerHTML = 'Research: '+ Research;


}



