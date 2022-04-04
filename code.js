let table = document.getElementById("tableBody");

let start = 0;
let end = 3;

// get input from alert
let month = 1;
let day = 16;
start = 1;
end = 21*5;
// end = 21;
// end = 21*2;
// end = 21*3;


let content = `` ;
console.log(`start processing at ${start}`);

for(let i = start; i <= end; i++){
  if(i % 21 == 1){ 
    content += `<div class="container">`;
  }

  if(i % 7 == 1) { 
    content += `<div class="column">`;
    content += `<div class="cell">${month}-${day}-${i}</div>`;
  } else if(i % 7 == 0) {
    content += `<div class="cell">${month}-${day}-${i}</div>`;
    content += `</div>`;
  } else {
    content += `<div class="cell">${month}-${day}-${i}</div>`;
  }

  if(i % 21 == 0){
    content += `</div>`;
  }
}

// content += `
// <div class="column">
//   <div class="cell">${month}-${day}-${i}</div>
//   <div class="cell">${month}-${day}-${i+1}</div>
//   <div class="cell">${month}-${day}-${i+2}</div>
// </div>
// `;

console.log(`end processing at ${end}`);



table.innerHTML = content;