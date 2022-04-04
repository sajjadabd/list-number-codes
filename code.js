let table = document.getElementById("tableBody");

let start = 0;
let end = 3;

// get input from alert
let month = 1;
let day = 15;
start = 43;
end = 84;

let content = '' ;
console.log(`start processing at ${start}`);

for(let i = start; i <= end; i+=3){
    content += `
    <tr>
      <td>${month}-${day}-${i}</td>
      <td>${month}-${day}-${i+1}</td>
      <td>${month}-${day}-${i+2}</td>
    </tr>
    `;
}
console.log(`end processing at ${end}`);

//console.log(content);

table.innerHTML = content;