let sayi1El=document.getElementById("sayi1");
let sayi2El=document.getElementById("sayi2");
let sonuc=document.getElementById("sonuc");

function topla(){
    let sayi1=Number(sayi1El.value);
    let sayi2=Number(sayi2El.value);

    let sonuc=sayi1+sayi2;

    document.getElementById("sonuc").innerHTML=sonuc;
}
