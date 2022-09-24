// slither
var gameInterval;
var Block_size = 30;
var Block_count = 20;
var slither = document.getElementById("button_id");
var snake;
var apple;
var score;
var speed = 100;
var high = 0;
var high1 = 0;
var high2 = 0;
var high3 = 0;
var a = document.getElementById("s1");
var b = document.getElementById("s2");
var c = document.getElementById("s3");
a.addEventListener("change", function(){
    speed = 150;
    document.getElementById("high_id").innerHTML = high1;
})
b.addEventListener("change", function(){
    speed = 100;
    document.getElementById("high_id").innerHTML = high2;
})
c.addEventListener("change", function(){
    speed = 50;
    document.getElementById("high_id").innerHTML = high3;
})
slither.addEventListener("click", function(){
    slither.style.display = "none";
    clearInterval(gameInterval);
    snake = {
        body:[
            {x: Block_count / 2, y: Block_count / 2}
        ],//用陣列是因為要算長度及更新
        size: 5,
        direction:{x: 0, y: -1}//y: 1是向下
    }
    gameInterval = setInterval(gameRoutine, speed);
    putApple();
    updateScore(0);
})

function updateScore(newScore){
    if(speed == 150){
        if(newScore >= high1)high1 = newScore;
        document.getElementById("high_id").innerHTML = high1;
    }
    else if(speed == 100){
        if(newScore >= high2)high2 = newScore;
        document.getElementById("high_id").innerHTML = high2;
    }
    else if(speed == 50){
        if(newScore >= high3)high3 = newScore;
        document.getElementById("high_id").innerHTML = high3;
    }
    score = newScore;
    document.getElementById("score_id").innerHTML = score;
}

function gameRoutine(){
    moveSnake();
    if(snakeIsDead()){
        ggler();
        return;
    }
    if(snake.body[0].x == apple.x && snake.body[0].y == apple.y){
        eatApple();
    }
    updateCanvas();
}

function putApple(){
    apple = {
        x: Math.floor(Math.random() * Block_count),
        y: Math.floor(Math.random() * Block_count)
    }
    for(var i=0; i<snake.body.length; i++){
        if(snake.body[i].x == apple.x && snake.body[i].y == apple.y){
            putApple();
            break;
        }
    }
}

function eatApple(){
    snake.size += 1;
    putApple();
    updateScore(score + 1);
}

function moveSnake(){
    var newBlock = {
        x: snake.body[0].x + snake.direction.x,
        y: snake.body[0].y + snake.direction.y
    }

    snake.body.unshift(newBlock);

    while(snake.body.length > snake.size){
        snake.body.pop();
    }
} 

function updateCanvas(){
    var canvas = document.getElementById("canvas_id");
    var context = canvas.getContext("2d");
    context.fillStyle = "rgb(58, 238, 58)";
    context.fillRect(0, 0, canvas.width, canvas.height);//(區塊左上角x和y座標，區塊要填滿的寬度和高度)
    //snake
    context.fillStyle = "blue";
    for(var i=0;i<snake.body.length;i++){
        context.fillRect(
            snake.body[i].x * Block_size,
            snake.body[i].y * Block_size,
            Block_size - 1,
            Block_size - 1
        )
    }
    //apple
    context.fillStyle = "red";
    context.fillRect(
        apple.x * Block_size,
        apple.y * Block_size,
        Block_size,
        Block_size
    )
}
window.onload = onPageLoaded;//當頁面被執行，執行onPageLoaded
function onPageLoaded(){
    document.addEventListener("keydown", handleKeyDown);
}
var d = new Date();
function handleKeyDown(event){
    var originX = snake.direction.x;
    var originY = snake.direction.y;
    var first_key = d.getTime();// 紀錄第1個鍵按的時間
    d = new Date(); // 更新時間
    var second_key = d.getTime();// 紀錄第2個鍵按的時間
    setTimeout(delay,speed - (second_key - first_key) + 100 );// speed為畫面更一次的時間(毫秒)，若2鍵按太快則直到畫面再次更新再執行第2個鍵
    function delay(){
        if(originX == 0){
            if(event.keyCode == 37){
                snake.direction.x = -1;
                snake.direction.y = 0;
            }
            if(event.keyCode == 39){
                snake.direction.x = 1;
                snake.direction.y = 0;
            }
        } // 37:left arrow 38:up arrow 39:right arrow 40:down arrow
        else if(originY == 0){
            if(event.keyCode == 38){
                snake.direction.x = 0;
                snake.direction.y = -1;
            }
            if(event.keyCode == 40){
                snake.direction.x = 0;
                snake.direction.y = 1;
            }
        }
    }
    
        
}

function snakeIsDead(){
    // hit walls
    if(snake.body[0].x < 0){
        return true;
    }
    else if(snake.body[0].x >= Block_count){
        return true;
    }
    else if(snake.body[0].y < 0){
        return true;
    }
    else if(snake.body[0].y >= Block_count){
        return true;
    }
    // hit body
    for(var i=1; i<snake.body.length;i++){
        if(snake.body[0].x == snake.body[i].x && snake.body[0].y == snake.body[i].y){
            return true;
        }
    }

    return false;
}
function ggler(){
    slither.style.display = "block";
    document.getElementById("score_id").innerHTML = 0;
    clearInterval(gameInterval);
}