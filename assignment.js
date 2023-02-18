// Randome Color generator onclick
function radomeColor(){
  console.log("random number function");

  let r = Math.round( Math.random() * 255);
  let g = Math.round( Math.random() * 255);
  let b = Math.round( Math.random() * 255);
  console.log({r,g,b});
  document.body.style.backgroundColor = "rgb(" + r + ","+ g + "," + b+")";
}


let count = 0;
// traingle-1
document.getElementById("btn-first").addEventListener('click',function(){
  count += 1;
  const areaNameOfTr = document.getElementById("first-title").innerText;

  const baseOfTr = document.getElementById("first-input").value;
  const heightOfTr = document.getElementById("second-input").value;

  if(baseOfTr == "" || heightOfTr == "" || baseOfTr <= 0 || heightOfTr <= 0){
    return alert("Plese Enter a valid input!!");
  };

  const resultTr = 0.5 * parseInt(baseOfTr) * parseInt( heightOfTr);
  // const finalResultTr = resultTr.toFixed(2);


  displayResult(areaNameOfTr, baseOfTr, heightOfTr, resultTr);

  
});


// rectangle-2
document.getElementById("btn-second").addEventListener('click',function(){
  count += 1;
  const areaNameOfRe = document.getElementById("second-title").innerText;

  const widthOfRe = document.getElementById("firstRe-input").value;
  const lengthOfRe = document.getElementById("secondRe-input").value;

  if(widthOfRe == "" || lengthOfRe == "" || widthOfRe <= 0 || lengthOfRe <= 0){
    return alert("Plese Enter a valid input!!");
  };


  const resultRe = parseInt(widthOfRe) * parseInt(lengthOfRe);
  // const finalResultRe = resultRe.toFixed(2);


  displayResult(areaNameOfRe, widthOfRe, lengthOfRe, resultRe);

  
});


//parallelogram-3
document.getElementById("btn-third").addEventListener('click',function(){
  count += 1;
  const areaNameOfPa = document.getElementById("third-title").innerText;

  const BaseOfPa = document.getElementById("base-pa").innerText;
  const heightOfPa = document.getElementById("hight-pa").innerText;

  const resultPa = parseInt(BaseOfPa ) * parseInt(heightOfPa);
  // const finalResultPa = resultPa.toFixed(2);

  displayResult(areaNameOfPa, BaseOfPa, heightOfPa, resultPa);

  
});


// Rhombosh-4
document.getElementById("btn-forth").addEventListener('click',function(){
  count += 1;
  const areaNameOfRh = document.getElementById("forth-title").innerText;

  const firstDiagonalOfRh = document.getElementById("diagonal-first").innerText;
  const secondDiagonalOfRh = document.getElementById("diagonal-second").innerText;

  const resultRh = 0.5 * parseInt(firstDiagonalOfRh ) * parseInt(secondDiagonalOfRh);
  // const finalResultRh = resultRh.toFixed(2);


  displayResult(areaNameOfRh, firstDiagonalOfRh, secondDiagonalOfRh , resultRh);

  
});


// Pentagon-5
document.getElementById("btn-fifth").addEventListener('click',function(){
  count += 1;
  const areaNameOfPn = document.getElementById("fifth-title").innerText;

  const firstOfPn = document.getElementById("first-pn").innerText;
  const secondOPn = document.getElementById("second-pn").innerText;

  const resultPn = 0.5 * parseInt(firstOfPn) * parseInt(secondOPn);
  // const finalResultPn = resultPn.toFixed(2);


  displayResult(areaNameOfPn, firstOfPn,  secondOPn, resultPn);

  
});


// Ellipse-6
document.getElementById("btn-six").addEventListener('click',function(){
  count += 1;
  const areaNameOfElp = document.getElementById("six-title").innerText;

  const axisOfElpA = document.getElementById("axis-a").innerText;
  const axisOfElpB = document.getElementById("axis-b").innerText;

  const resultElp = 3.14 * parseInt(axisOfElpA) * parseInt(axisOfElpB).toFixed(2);
  const finalResultElp = resultElp.toFixed(2);


  displayResult(areaNameOfElp, axisOfElpA,  axisOfElpB, finalResultElp);

  
});









function displayResult(areaName, baseOfTr, heightOfTr, result){

  const container = document.getElementById("table-container");

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${count}</td>
    <td>${areaName}</td>
    <td>${result}cm<sup>2</sup></td>
    <td>
    <button class="btn btn-sm bg-sky-500"> <span>Covert to m<sup>2</sup></span></button>
    </td>

    `;
    container.appendChild(tr);
}