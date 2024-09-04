//step 1;
//1. Creați un array „facturi” care să conțină toate cele 10 valori ale facturilor de testare
const facturi = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//step 2;
//2. Creați 2 array-uri goale pentru “tips” și “totals”
const tips = [];
const totals = [];

//step 3
function calcTip(factura) {
  let tip;
  factura >= 50 && factura <= 300 ? (tip = 0.15) : (tip = 0.2);
  return factura * tip;
}

//step 3, part 2
//Utilizați ciclul for pentru a efectua cele 10 calcule!

for (i = 0; i < facturi.length; i++) {
  for (let i = 0; i < facturi.length; i++) {
    const tip = calcTip(facturi[i]);
    tips.push(tip);
    totals.push(tip + facturi[i]);
  }

  //step 4
  // Scrieți o funcție „calcAverage” care ia ca argument un array numit „arr”. Această funcție calculează media tuturor numerelor din array-ul primit. Apelați funcția cu array-ul „totals”.
  function calcAverage(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
    // Alternativ pentru for loop - reduce()
    // let suma = arr.reduce((acc, curr) => acc + curr, 0);

    return suma / arr.length;
  }

  const mediaTotal = calcAverage(totals);
  console.log(`Media totală este: ${mediaTotal}`);
}
