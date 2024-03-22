

fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=fad394d14adc46cb94d09d7e1680981d")
.then((result)=>{
  console.log(result);
  let myData= result.json();
  return myData
})
.then((currency)=>{
  let theAmount= document.querySelector(".amount");
  let egpPrice= document.querySelector(".egp span");
  let sarPrice= document.querySelector(".sar span");


  egpPrice.innerHTML= Math.round(theAmount.innerHTML * currency.rates["EGP"]);
  sarPrice.innerHTML= Math.round(theAmount.innerHTML * currency.rates["SAR"]);


  console.log(currency.rates)
  console.log(currency.rates["EGP"])
  console.log(currency.rates["SAR"])


})