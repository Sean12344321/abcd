/* :)
*/
//字串
"這是字串"
//數字
87
160.234761243716927486
//布林值
true
false
//變數，開頭不能是數字
var QQ = "hello\" Mr.write";
var age = 80.534264;
document.write("<h1>Hello</h1>");
document.write(QQ.charAt(7));
document.write(QQ.indexOf(" "));
document.write(QQ.substring(2,8));
//數字用法
document.write(Math.max(2,3,4,age));
document.write(Math.round(age));
document.write(Math.pow(4,4));
document.write(Math.round(Math.random() * 10));
document.write("<br/>");
//計算機
var num1 = prompt("請輸入數字1");
var num2 = prompt("請輸入數字2");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
document.write(num1 + num2);
//index
var friends = ["none", 0, false];
//function
function add(num1, num2){
    return num1 + num2;
}
document.write(add(3, 4));
//objuct
//key value
var person = {
    name:"小白",
    age:23,
    is_male:true,
    print_name:function(){
        document.write(this.name);
    },
    fruits:[
        {
            name:"apple",
            years:4
        },
        {
            name:"banana",
            years:3
        }
    ]
};
document.write(person.fruits[0].name);
//密碼檢驗程式
alert("登入成功");
//class
class Phone {
    constructor(number, year, is_waterproof) {
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2021 - this.year;
    }
}
var phone1 = new Phone("123", 2020, true);
var phone2 = new Phone("456", 2007, false);
//如何取得html元素
var aaa = document.getElementById("header");
aaa.innerText = "Hello";
aaa.style.backgroundColor = "red";
aaa.style.color = "blue";
var bbb = document.getElementById("link");
bbb.href = "https://amazon.com";
//event listener
var score = 0;
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    this.innerText = score;
    this.style.color = "white";
    this.style.backgroundColor = "red";
    score++;
})
var img = document.getElementById("img");
img.addEventListener("mouseover", function(){
    this.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaE2PF3XtVOyo7mqymhivxGjE_7f8IJ96vw&usqp=CAU ";
})
img.addEventListener("mouseout", function(){
    this.src="https://mpng.subpng.com/20180430/bge/kisspng-snake-vs-bricks-emoji-version-android-sms-text-m-golden-smiley-and-sad-face-masks-5ae7a8650af846.0098324015251313650449.jpg"
})
//blog
var title = document.getElementById("title");
var content = document.getElementById("content");
var btn2 = document.getElementById("btn2");
var list = document.getElementById("list");
btn2.addEventListener("click", function(){
    list.innerHTML = list.innerHTML + `
    <div class="article">
         <h2>${title.value}</h2>
          <p>${content.value}</p>
    </div>
    `;
    title.value="";
    content.value = "";
})

