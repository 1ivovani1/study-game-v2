let stone;
let tree;
function createStone(){
      if ($(".area").css("background-color") == "rgb(113, 188, 120)") {
        tree = document.querySelector('[posX = "2"][posY = "7"]');
          tree.classList.add('tree');
        tree = document.querySelector('[posX = "2"][posY = "4"]');
          tree.classList.add('tree');
        tree = document.querySelector('[posX = "9"][posY = "7"]');
          tree.classList.add('tree');
        tree = document.querySelector('[posX = "9"][posY = "4"]');
          tree.classList.add('tree');
        tree = document.querySelector('[posX = "2"][posY = "8"]');
          tree.classList.add('tree');
        tree = document.querySelector('[posX = "9"][posY = "8"]');
          tree.classList.add('tree');
        tree = document.querySelector('[posX = "9"][posY = "3"]');
          tree.classList.add('tree');
        tree = document.querySelector('[posX = "2"][posY = "3"]');
          tree.classList.add('tree');

      }else{
        stone = document.querySelector('[posX = "2"][posY = "7"]');
          stone.classList.add('stone');
        stone = document.querySelector('[posX = "2"][posY = "4"]');
          stone.classList.add('stone');
        stone = document.querySelector('[posX = "9"][posY = "7"]');
          stone.classList.add('stone');
        stone = document.querySelector('[posX = "9"][posY = "4"]');
          stone.classList.add('stone');
        stone = document.querySelector('[posX = "2"][posY = "8"]');
          stone.classList.add('stone');
        stone = document.querySelector('[posX = "9"][posY = "8"]');
          stone.classList.add('stone');
        stone = document.querySelector('[posX = "9"][posY = "3"]');
          stone.classList.add('stone');
        stone = document.querySelector('[posX = "2"][posY = "3"]');
          stone.classList.add('stone');

      }
  }

function removeStone(){
  if ($(".area").css("background-color") == "rgb(113, 188, 120)") {
    tree = document.querySelector('[posX = "2"][posY = "7"]');
      tree.classList.remove('tree');
    tree = document.querySelector('[posX = "2"][posY = "4"]');
      tree.classList.remove('tree');
    tree = document.querySelector('[posX = "9"][posY = "7"]');
      tree.classList.remove('tree');
    tree = document.querySelector('[posX = "9"][posY = "4"]');
      tree.classList.remove('tree');
    tree = document.querySelector('[posX = "2"][posY = "8"]');
      tree.classList.remove('tree');
    tree = document.querySelector('[posX = "9"][posY = "8"]');
      tree.classList.remove('tree');
    tree = document.querySelector('[posX = "9"][posY = "3"]');
      tree.classList.remove('tree');
    tree = document.querySelector('[posX = "2"][posY = "3"]');
      tree.classList.remove('tree');
  }else{
    stone = document.querySelector('[posX = "2"][posY = "7"]');
      stone.classList.remove('stone');
    stone = document.querySelector('[posX = "2"][posY = "4"]');
      stone.classList.remove('stone');
    stone = document.querySelector('[posX = "9"][posY = "7"]');
      stone.classList.remove('stone');
    stone = document.querySelector('[posX = "9"][posY = "4"]');
      stone.classList.remove('stone');
    stone = document.querySelector('[posX = "2"][posY = "8"]');
      stone.classList.remove('stone');
    stone = document.querySelector('[posX = "9"][posY = "8"]');
      stone.classList.remove('stone');
    stone = document.querySelector('[posX = "9"][posY = "3"]');
      stone.classList.remove('stone');
    stone = document.querySelector('[posX = "2"][posY = "3"]');
      stone.classList.remove('stone');
  }


}

$(".end-game-background").hide();
$('.modalQuestionMan').hide();

$(".background-decision").hide();

$(".super-question-background").hide();

$('.modalQuestionManStart').hide();
$(".modalQuestion2Level").hide();
$(".modalWindow").hide();
 $(".modal-Question-Programming").hide();
 $(".user-Dialog").hide();
 $(".modal-lose").hide();
 $(".modal-lose-dialog").hide();

let easyQuestionArr = ['Для какого из приведённых значений числа X истинно высказывание: (X < 7) И НЕ (X < 6)?','Для какого из приведённых имён ложно высказывание: \nНЕ ((Первая буква гласная) И (Последняя буква согласная))?','Для какого из данных слов истинно высказывание: \nНЕ (есть шипящие) И (оканчивается на гласную)?'];
let easyVariantsArr = [{
    first:4,
    second:5,
    third:6,
    fourth:7
  },{
      first:"Валентина",
      second:"Герман",
      third:"Анастасия",
      fourth:"Яков"
    },{
        first:"Любовь",
        second:"Отвращение",
        third:"Забота",
        fourth:"Отчужденность"
      }];


let programAnswerArr = ["25","3","30"]
let programQuestionArr = [
    "В таблице Dat хранятся данные измерений среднесуточной температуры за 10 дней в градусах (Dat[1] — данные за первый день, Dat[2] — за второй и т. д.). Определите, какое число будет напечатано в результате работы следующей программы.<br><code><span>алг</span><br><span>нач</span><br><span>цел</span> таб Dat[<span>1:10</span>]<br>цел <span>k</span>,<span>m</span><br>Dat[<span>1</span>] := 12,Dat[<span>2</span>] := 15<br>Dat[<span>3</span>] := 17,Dat[<span>4</span>] := 15<br>Dat[<span>5</span>] := 14,Dat[<span>6</span>] := 12<br>Dat[<span>7</span>] := 10,Dat[<span>8</span>] := 13<br>Dat[<span>9</span>] := 14,Dat[<span>10</span>] := 15<br><span>m</span> := 0 <br><span>нц для</span> k от 1 до 10 <br><span>если</span> Dat[<span>k</span>]=15 то <br><span>m</span> := m + 1 <br><span>все</span> <br><span>кц</span> <br><span>вывод</span> m <br><span>кон</span></code>",
  "Запишите значение переменной <span>s</span>, полученное в результате работы следующей программы.<br> <span>алг</span><br><span> нач</span><br> <span>цел s</span>, <span>k</span> <br><span>s</span> := 0 <br><span>нц для</span> k от 3 до 7 <br><span>s</span> := <span>s</span> + 6<br><span> кц</span> <br><span>вывод</span> s <br><span>кон</span>","  В программе «:=» обозначает оператор присваивания, знаки «+», «-», «*» и «/» — соответственно операции сложения, вычитания, умножения и деления. Правила выполнения операций и порядок действий соответствуют правилам арифметики. Определите значение переменной <span>a</span> после выполнения алгоритма:<br><br><code><span>a</span> := 5  <br><span>b</span> := 4 <br><span>b</span> := 100 - <span>a</span>*<span>b</span> <br><span>a</span> := <span>b</span>/16*<span>a</span> <br></code><br>В ответе укажите одно целое число — значение переменной <span>a</span>."];



$("#nextBtn").click(function(){
  $(".text1").html("Сейчас я создам тебе камни!<br>И ты не сможешь пройти дальше!<br>Ведь вопросы усложняются!");
   $("#nextBtn1").css("display","flex");
   $("#nextBtn").hide();
})
$("#nextBtn1").click(function(){
  $(".text1").html("Штош удачи!<br>Надеюсь,ты сдашь ОГЭ!<br>Но это не точно!<br>И да,я люблю восклицательные знаки!");
   $("#nextBtn1").hide();
   $("#nextBtn2").css("display","flex");
  })
$("#nextBtn2").click(function(){
  $(".modalQuestionMan").fadeOut(800);
  setTimeout(()=>{
    $("#nextBtn").css("display","flex");
    $("#nextBtn2").hide();
    generateNewSnake();
  },800);
})

  $(document).ready(function(){
   $('.modalQuestionManStart').fadeIn(1000);
  });

 let userName = [];

clearInterval(interval);

$("#startBtn").on("click",function(){
    if ($("#name").val() == "" || $("#name").val() == " ") {
      alert("Имячко не введено,введите,пжт!\nИначе ничего работать не будет!");
    }else{
      fadingOut();
    }

});
function fadingOut(){
  $('.modalQuestionManStart').fadeOut();
  let userName1 = $("#name").val();
  userName.push(userName1.trim());
  interval = setInterval(move,300);
}

function generateNewSnake() {
  snakeBody[0].classList.remove('head');
  for (var i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.remove('snakeBody');
  }
  snakeBody = [];
  direction = 'right';
  coordinates = [4,5];
  snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'),document.querySelector('[posX = "' + ( coordinates[0]-1) + '"][posY = "' + coordinates[1] + '"]'),document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' + coordinates[1] + '"]',document.querySelector('[posX = "' + (coordinates[0]-3) + '"][posY = "' + coordinates[1] + '"]'))];
  for (let i = 1; i < snakeBody.length; i++) {
      snakeBody[i].classList.add("snakeBody");
    }
    clearInterval(interval);
    snakeBody[0].classList.add("head");
    createStone();
    mouse.classList.remove('mouse');
    createMouse();
    interval = setInterval(move,300);
}
let userErrors = 0,superQuestion = false;

let mode1 = $("#mode1");
let mode2 = $("#mode2");

mode1.on("click",function(){
  if (score >= 8) {
    $(".area").css("background","#71bc78");
    mode1.css("border","3px solid green");
    mode2.css("border","3px solid black");

    tree = document.querySelector('[posX = "2"][posY = "7"]');
      tree.classList.add('tree');
    tree = document.querySelector('[posX = "2"][posY = "4"]');
      tree.classList.add('tree');
    tree = document.querySelector('[posX = "9"][posY = "7"]');
      tree.classList.add('tree');
    tree = document.querySelector('[posX = "9"][posY = "4"]');
      tree.classList.add('tree');
    tree = document.querySelector('[posX = "2"][posY = "8"]');
      tree.classList.add('tree');
    tree = document.querySelector('[posX = "9"][posY = "8"]');
      tree.classList.add('tree');
    tree = document.querySelector('[posX = "9"][posY = "3"]');
      tree.classList.add('tree');
    tree = document.querySelector('[posX = "2"][posY = "3"]');
      tree.classList.add('tree');

      stone = document.querySelector('[posX = "2"][posY = "7"]');
        stone.classList.remove('stone');
      stone = document.querySelector('[posX = "2"][posY = "4"]');
        stone.classList.remove('stone');
      stone = document.querySelector('[posX = "9"][posY = "7"]');
        stone.classList.remove('stone');
      stone = document.querySelector('[posX = "9"][posY = "4"]');
        stone.classList.remove('stone');
      stone = document.querySelector('[posX = "2"][posY = "8"]');
        stone.classList.remove('stone');
      stone = document.querySelector('[posX = "9"][posY = "8"]');
        stone.classList.remove('stone');
      stone = document.querySelector('[posX = "9"][posY = "3"]');
        stone.classList.remove('stone');
      stone = document.querySelector('[posX = "2"][posY = "3"]');
        stone.classList.remove('stone');
  }else{
    $(".area").css("background","#71bc78");
    mode1.css("border","3px solid green");
    mode2.css("border","3px solid black");
  }
})
mode2.on("click",function(){
  if (score >= 8) {
    $(".area").css("background","#4e54c8");
    mode2.css("border","3px solid orange");
    mode1.css("border","3px solid black");
    stone = document.querySelector('[posX = "2"][posY = "7"]');
      stone.classList.add('stone');
    stone = document.querySelector('[posX = "2"][posY = "4"]');
      stone.classList.add('stone');
    stone = document.querySelector('[posX = "9"][posY = "7"]');
      stone.classList.add('stone');
    stone = document.querySelector('[posX = "9"][posY = "4"]');
      stone.classList.add('stone');
    stone = document.querySelector('[posX = "2"][posY = "8"]');
      stone.classList.add('stone');
    stone = document.querySelector('[posX = "9"][posY = "8"]');
      stone.classList.add('stone');
    stone = document.querySelector('[posX = "9"][posY = "3"]');
      stone.classList.add('stone');
    stone = document.querySelector('[posX = "2"][posY = "3"]');
      stone.classList.add('stone');

      tree = document.querySelector('[posX = "2"][posY = "7"]');
        tree.classList.remove('tree');
      tree = document.querySelector('[posX = "2"][posY = "4"]');
        tree.classList.remove('tree');
      tree = document.querySelector('[posX = "9"][posY = "7"]');
        tree.classList.remove('tree');
      tree = document.querySelector('[posX = "9"][posY = "4"]');
        tree.classList.remove('tree');
      tree = document.querySelector('[posX = "2"][posY = "8"]');
        tree.classList.remove('tree');
      tree = document.querySelector('[posX = "9"][posY = "8"]');
        tree.classList.remove('tree');
      tree = document.querySelector('[posX = "9"][posY = "3"]');
        tree.classList.remove('tree');
      tree = document.querySelector('[posX = "2"][posY = "3"]');
        tree.classList.remove('tree');

  }else{
    $(".area").css("background","#4e54c8");
    mode2.css("border","3px solid orange");
    mode1.css("border","3px solid black");
  }
})

let superArrImg = ["images/task1.jpg","images/task2.jpg","images/task3.jpg","images/task4.jpg","images/task5.jpg"];
let superArrAnsw = ["48","36","38","31","25"];



  var clock;
function timer(){
  clock = $('.clock').FlipClock(60, {
		        clockFace: 'MinuteCounter',
		        countdown: true,
		        callbacks: {
		        	stop: function() {
                if ($(".super-question-background").css("display") != "none") {
                  setTimeout(() =>{
                    alert("Не успел!")
                  },800)
                }
                $(".super-question-background").fadeOut(800);

              }
		        }
		    });
    }
