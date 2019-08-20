var mobiles = {
  samsung: [
    {
      name: "SAMSUNG A50",
      display: 6.4,
      price: 18490.00
    },
    {
      name: "SAMSUNG M40",
      display: 6.3,
      price: 19990.80
    },
    {
      name: "SAMSUNG M30",
      display: 6.4,
      price: 9990.99
    },
    {
      name: "SAMSUNG A70",
      display: 6.7,
      price: 27085.00
    },
    {
      name: "SAMSUNG A80",
      display: 6.7,
      price: 45590.50
    },
    {
      name: "SAMSUNG A30",
      display: 6.4,
      price: 15490.00
    },
    {
      name: "SAMSUNG A20",
      display: 6.4,
      price: 11325.25
    },
    {
      name: "SAMSUNG A10",
      display: 6.2,
      price: 7990.0
    },
    {
      name: "SAMSUNG M20",
      display: 6.3,
      price: 11990.00
    },
    {
      name: "SAMSUNG S10plus",
      display: 6.4,
      price: 69990.9
    },
    {
      name: "SAMSUNG NOTE10",
      display: 6.3,
      price: 69990.99
    },
    {
      name: "SAMSUNG NOTE10plus",
      display: 6.8,
      price: 79990.90
    },
    {
      name: "SAMSUNG A7",
      display: 6.0,
      price: 14440.00
    },
    {
      name: "SAMSUNG M10",
      display: 6.22,
      price: 7990.00
    },
    {
      name: "SAMSUNG S10",
      display: 6.1,
      price: 61990.90
    },
    {
      name: "SAMSUNG M30",
      display: 6.4,
      price: 16990.25
    },
    {
      name: "SAMSUNG A50",
      display: 6.4,
      price: 21390.00
    }
  ],
  iphone:[
      {
          name:"iphone S7",
          display: 6.3,
          price: 75000.00
      },
      {
        name:"iphone S7",
        display: 6.3,
        price: 75000.00
    },
    {
      name:"iphone S7",
      display: 6.3,
      price: 75000.00
  }
  ],
  redme:[
    {
        name:"redme note 5 pro",
        display: 6.3,
        price: 14000.00
    },
    {
      name:"redme note 6 pro",
      display: 6.5,
      price: 17000.00
  },
  {
    name:"redme note 7 pro",
    display: 6.6,
    price: 20000.00
  },
  {
    name:"redme note 6 pro",
    display: 6.5,
    price: 17000.00
  },
  {
    name:"redme note 6 pro",
    display: 6.5,
    price: 17000.00
  },
  {
    name:"redme note 6 pro",
    display: 6.5,
    price: 17000.00
  },
  {
    name:"redme note 6 pro",
    display: 6.5,
    price: 17000.00
  }
  ]
};

var samsung = document.querySelector(".samsung-card-template");
var mobilediv = document.querySelector(".samsung-div");
var mob = document.querySelector(".mobile-section");
var whole_sec = document.querySelector(".whole-section");
var pagination = document.querySelector(".pagination");
var button = document.querySelector(".page-footer");

var index_arr = [];

var obj_pro = Object.keys(mobiles);

obj_pro.forEach(function(item1){

  var count=0;
  var section = mob.cloneNode(false);
  section.classList.remove("display-nn");
  var mob_clone = mobilediv.cloneNode(true);
  mob_clone.querySelector(".mobile-name").innerText = item1.toUpperCase();

  mobiles[item1].forEach(function(item,index) {
    var mobile = samsung.cloneNode(true);
    mobile.classList.remove("samsung-card-template");
    // samsung.setAttribute("id",index+1);
    count++;
    mobile.querySelector(".name").innerText = item["name"];
    mobile.querySelector(".display-size").innerText = item["display"];
    mobile.querySelector(".price").innerText = item["price"];
    mob_clone.appendChild(mobile);
  });

  if(count>6){
    var clone_no = Math.ceil(count/6);
    console.log(clone_no); 
    var page = pagination.cloneNode(true);
    for(var i=0; i<clone_no ;i++){
      var pg = button.cloneNode(true);
      console.log(pg);
      pg.style.display = "block";
      pg.innerHTML = i+1;
      page.appendChild(pg);
      }
      mob_clone.appendChild(page);
  }
    section.appendChild(mob_clone);
    whole_sec.appendChild(section);
});


// var page_no = document.querySelector(".page-footer");
// var code = document.querySelectorAll(".samsung-card");
// console.log(code);
// if(count > 6){
//     page_no.style.display = "block";
//     page_no.innerHTML = "1";
//     code.forEach(function(item)
//     {
//         if(item.id>5){
//             item.style.display="none";
//         }
//     });
// }
// if(count > 6 && count <= 12){
//     page_no.style.display = "block";
//     page_no.innerHTML = "2";
//     code.forEach(function(item)
//     {
//         if(item.id>5){
//             item.style.display="none";
//         }
//         else if(item.id>5 && item.id<12){
//             item.style.display="block";
//         }
//     });
// }