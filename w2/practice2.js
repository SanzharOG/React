const adlog = "Sanzhar";
const adpas = "123";
const uslog = "user";
const uspas ="123";

let process = true;
while (process){
    const test = prompt("Введите логин Админа", "");
    const test1 = prompt("Введите пароль Админа", "");

if (test != adlog || test1 != adpas){
    alert("Error");
}
else{
    alert("OK");
    process = false;
}
}

let process1= true;
while (process1){
    const test2 = prompt("Введите логин пользователя", "");
    const test3 = prompt("Введите пароль пользователя", "");
if (test2 != uslog || test3 != uspas){
    alert("Error");
}
else{
    alert("OK");
    process1 = false;
}
}
let shopList = [
    { pName: 'Iphone', amount: 10, price: 30000 },
    { pName: 'Samsung', amount: 5, price: 45000 },
  ];

let busket = [
    { pName: 'Iphone', amountip: 0, totalprice: 0 },
    { pName: 'Samsung', amountsum: 0, totalprice: 0 },
];
function but(){
    if (shopList[0].amount ==0){
        alert("Товар закончился");
        return;
    }
    alert("Покупка совершенна");
    busket[0].amountip +=1;

    shopList[0].amount -=1;
    busket[0].totalprice +=shopList[0].price;
}
function but1(){
    if (shopList[1].amount ==0){
        alert("Товар закончился");
        return;
    }
    alert("Покупка совершенна");
    busket[1].amountsum +=1;
    shopList[1].amount -=1;
    busket[1].totalprice +=shopList[1].price;
    
}
function stop(){
    alert("Спасибо за покупки!");
    process = false;
    console.log(busket);
    console.log(busket[0].totalprice+busket[1].totalprice);
}

//const totalin = busket[0].totalprice + busket[1].totalprice;

