//Bài 1:
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

//Bài 1:
let studentList = [
  {
    id: 1,
    name: "John",
    age: 18,
    address: "New York"
  },
  {
    id: 2,
    name: "Mike",
    age: 22,
    address: "Canada"
  },
  {
    id: 3,
    name: "Linda",
    age: 19,
    address: "California"
  },
  {
    id: 4,
    name: "Peter",
    age: 25,
    address: "London"
  },
  {
    id: 5,
    name: "Tony",
    age: 17,
    address: "New York"
  },
];

//Bước 3: Chuyển đổi dữ liệu(Mảng đối tượng)
//Thành các phần tử HTML xuất hiện trên trình duyệt

//Bước 3.1: Xác định các phần tử HTML sẽ được sử dụng trong JavaScript
//Phần tử HTML sẽ được chọn để gắn dữ liệu vào (table)

let table = document.getElementById("main-table");

//Bước 3.2:Lần lượt chuyển đổi các phần tử đối tượng
//dữ liệu thành phần tử HTML ({}-> tr>td*4)

//for..in với mảng

for (let index in studentList) {
  //student -> HTML
  //student === studenlist[index]
  let tableRow = `
    <tr>
    <td>${+index + 1}</td>
    <td>${studentList[index].name}</td>
    <td>${studentList[index].age}</td>
    <td>${studentList[index].address}</td>
    </tr>`
  console.log(table.innerHTML);
  console.log(tableRow);
  table.innerHTML = table.innerHTML + tableRow;
};

//Baì 2:
let admin = [
  { username: "huanrose@gmail.com", password: "123456" },
];
let button = document.getElementById("button");

let login = document.getElementById("login");

let email = document.getElementById("email");

let password = document.getElementById("password");

email.style.border = "1px solid black";
password.style.border = "1px solid black";
login.style.width = "250px";
login.style.height = "200px";
login.style.textAlign = "left";

let logincheck = false;

button.onclick = function () {
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  if (emailValue === `${admin[0].username}`
    && passwordValue === `${admin[0].password}`) {
    console.log("Đăng nhập thành công");
    logincheck = true;
  } else {
    console.log("Đăng nhập thất bại");
    logincheck = false;
  }
};



//Bài 3:
let container = document.getElementById("container");
let text = document.getElementById("text");

let hide = document.getElementById("hide");
let show = document.getElementById("show");
let p = document.createElement("p");
p.getAttribute("text");
p.setAttribute("id", "text",);
p = "This is the text";
console.log(p);
hide.onclick = function () {
  text.innerHTML = "";
}
show.onclick = function () {
  text.innerHTML = p;
}
//Bài 4:
let darkbutton = document.getElementById("darkmode");
let check = false;
darkbutton.onclick = function () {
  if (check === true) {
    container.style.backgroundColor = "white";
    container.style.color = "black";
    check = false;
  } else {
    container.style.backgroundColor = "black";
    container.style.color = "white";
    check = true;
  }
}

//Bài 5:
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let click = false;
red.onclick = function () {
  if (click === false) {
    container.style.backgroundColor = "red";
    click = true;
  } else {
    container.style.backgroundColor = "white";
    container.style.color = "black";
    click = false;
  }
}
blue.onclick = function () {
  if (click === false) {
    container.style.backgroundColor = "blue";
    click = true;
  } else {
    container.style.backgroundColor = "white";
    container.style.color = "black";
    click = false;
  }
}

green.onclick = function () {
  if (click === false) {
    container.style.backgroundColor = "green";
    click = true;
  } else {
    container.style.backgroundColor = "white";
    container.style.color = "black";
    click = false;
  }
}

//Bài 6:

//B1: xây dựng giao diện(DONE)

//B2: xây dựng kho lưu trữ dữ liệu mẫu
//Mảng các đối tượng có tính chất tương đồng nhau
//Từ thẻ li --->{content,status}

let todolistDB = [
  {
    id: 1,
    content: "Nhậu",
    status: false,
  },
  {
    id: 2,
    content: "Massage trườn",
    status: true,
  },
  {
    id: 3,
    content: "Xông hơi",
    status: false,
  },
  {
    id: 4,
    content: "Đá bát phở nạm",
    status: true,
  },
];

//B3:Chuyển đổi các đối tượng dữ liệu thành phần tử HTML

//   <li class="checked">
//     Đá bát phở nạm
//     <span class="close">X</span>
//   </li>

//B3.1:Xóa hết HTML fix cứng
//B3.2:Xác định mốc (phần tử HTML) dùng để hiện thị dữ liệu (ul)
let ul = document.getElementById("myUL");
console.log(ul);

//B3.4: Sử dụng vòng lặp duyệt qua mảng --> Chuyển đổi
for (let index in todolistDB) {
  //{}-->li
  let li;
  if (todolistDB[index].status) {
    li = `
        <li class="checked">
      ${todolistDB[index].content}
       <span class="close">X</span>
       </li>
    `;
  } else {
    li = `
        <li>
      ${todolistDB[index].content}
       <span class="close">X</span>
       </li>
    `;
  }
  ul.innerHTML = ul.innerHTML + li;
};
for (const key in ul) {
  let libutton = document.getElementsByClassName("close");
  libutton.onclick = function () {
    li.remove();
    console.log(todolistDB);
  }
}
//Bài 7:
let myInput = document.getElementById("myInput");
let addbutton = document.getElementById("addBtn");
console.log(addbutton);
let checkvalue = false;
addbutton.onclick = function () {
  for (let i = 0; i <= todolistDB.length - 1; i = i + 1) {
    if (myInput.value.trim().toLowerCase() !== "" &&
      myInput.value.trim().toLowerCase() !== todolistDB[i].content.toLowerCase()) {
      let newinputvalue = {
        id: Math.random(),
        content: `${myInput.value.trim()}`,
        status: false
      };
      todolistDB.push(newinputvalue);
      checkvalue = true;
      console.log(todolistDB);
      let li;
      li = `
        <li>
      ${newinputvalue.content}
       <span class="close">X</span>
       </li>
    `;
      ul.innerHTML = ul.innerHTML + li;
      return todolistDB;
    } else {
      console.log("không có gì để nhập hoặc trùng lặp việc đã nêu trên");
      checkvalue = false;
      return todolistDB;
    }
  }
};


