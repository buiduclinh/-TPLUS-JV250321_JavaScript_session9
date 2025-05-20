//B1:
// const emplpoyee = [
//     {
//         id: 1,
//         name: 'Example 1',
//         age: 18,
//         address: 'District',
//     },
//     {
//         id: 2,
//         name: 'Example 2',
//         age: 18,
//         address: 'District',
//     },
// ];

// let studentsList = document.getElementById("studentList");


// let result = "";
// for (let i = 0; i <= emplpoyee.length - 1; i = i + 1) {
//     let tr = `        
//         <tr>
//           <td>${emplpoyee[i].id}</td>
//           <td>${emplpoyee[i].name}</td>
//           <td>${emplpoyee[i].age}</td>
//           <td>${emplpoyee[i].address}</td>
//         </tr>`;
//     result = result + tr;
// }
// studentsList.innerHTML = result;
// console.log(result);


//B2:


//B6:
// let list = [
//     { id: 1, name: "a", price: 1000 },
//     { id: 2, name: "b", price: 2000 },
//     { id: 3, name: "c", price: 3000 },
// ];

// let todolist = document.getElementById("myDIV");
// let displaylist = document.getElementById("list");
// console.log(todolist);
// let result = "";
// for (let i = 0; i <= list.length - 1; i = i + 1) {
//     let input1 = `   
//     <div id="myDIV" class="header">
//       <h2 style="margin: 5px">My To Do List</h2>
//       <input type="${list[i].id}, ${list[i].name}, ${list[i].price}" id="myInput" placeholder="Title..." />
//       <span class="addBtn">Add</span>
//     </div>` ;
//     result = result + input1;
// } console.log(result);