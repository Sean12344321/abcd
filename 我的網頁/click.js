var s;
var num = 1;
var img = document.getElementById("img");
var btn = document.getElementById("btn");
var great = document.getElementById("good");
var hello = document.getElementById("hello");
img.addEventListener("mouseover", function(){
    this.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaE2PF3XtVOyo7mqymhivxGjE_7f8IJ96vw&usqp=CAU ";
    hello.innerHTML = "你好 ^ ^";
})
img.addEventListener("mouseout", function(){
    this.src = "https://mpng.subpng.com/20180430/bge/kisspng-snake-vs-bricks-emoji-version-android-sms-text-m-golden-smiley-and-sad-face-masks-5ae7a8650af846.0098324015251313650449.jpg";
    hello.innerHTML = "";
})

btn.addEventListener("click", function(){
    if(num == 0){
        great.innerHTML = "";
        btn.innerHTML = "Click me";
        num++;
    }
    else{
        btn.innerText = num;
        num++;
    }
    if(num > 10){
        great.innerHTML = "Well...";
        setTimeout(wait, 500);
        function wait(){
            if(num >= 15){
                great.innerHTML = "Be nice to your mouse!";
                btn.innerHTML = "` _ ˊ";
                num = 0;
            }
            else if(num > 10){
                s = Math.round(Math.random() * 10);
                if(s == 0)great.innerHTML = "I admire you!";
                if(s == 1)great.innerHTML = "You’re awesome!";
                if(s == 2)great.innerHTML = "You're incredible! ";
                if(s == 3)great.innerHTML = "You did a great job!";
                if(s == 4)great.innerHTML= "You're really talented!";
                if(s == 5)great.innerHTML = "You've just about mastered it.";
                if(s == 6)great.innerHTML = "Well played!";
                if(s == 7)great.innerHTML = "You’re really something!";
                if(s == 8)great.innerHTML = "I've never seen anyone do it better!";
                if(s == 9)great.innerHTML= "I like the way you handled that!"
                if(s == 10)great.innerHTML = "I admire you!";
                btn.innerHTML = ":)";
                num = 0;
            }
        }
    }
})