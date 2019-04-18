let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add("field");

for (let i = 0; i < 100; i++) {
  let excel = document.createElement('div');
  field.appendChild(excel);
  excel.classList.add("excel");
}

let excel = document.getElementsByClassName('excel');
let x = 1,
    y = 10;

for (let i = 0; i < excel.length; i++) {
  if(x > 10){
    x = 1;
    y--;
  }
    excel[i].setAttribute("posX",x);
    excel[i].setAttribute("posY",y);
    x++;
}

  function createSnake(){
    let posX = Math.round(Math.random() * (10 - 3) + 3);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX,posY];
  }

  var coordinates = createSnake();
  var snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'),document.querySelector('[posX = "' + ( coordinates[0]-1) + '"][posY = "' + coordinates[1] + '"]'),document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' + coordinates[1] + '"]')];

  for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add("snakeBody");
  }
  snakeBody[0].classList.add("head");



let mouse;
function createMouse(){
  function generateMouse(){
    let posX = Math.round(Math.random() * (10 - 3) + 3);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX,posY];
  }
  let mouseCoordinates = generateMouse();
  mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');

  while(mouse.classList.contains('snakeBody') || mouse.classList.contains('stone') || mouse.classList.contains('mouse') || mouse.classList.contains('tree')){
    let mouseCoordinates = generateMouse();
    mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
  }
  mouse.classList.add('mouse');
}
createMouse();


let direction = 'right';
let steps = false;

let input = document.createElement('input');
document.body.appendChild(input);
input.classList.add('input');
input.setAttribute('disabled','');

let score = 0;
input.value = "Ваши очки:" + score;

let modalContainer = $(".modalQuestion2Level");
let modalWindow = $(".modalWindow");
let question = $(".question");


let zeroInp = $("#firstInp"),
    oneInp = $("#secondInp"),
    twoInp = $("#thirdInp"),
    threeInp = $("#fourthInp"),
    closeBtn = $("#closeBtn"),
    closeBtnProg = $("#closeBtnProg");

var programButton;

function move(){
  let snakeCoordinates = [snakeBody[0].getAttribute('posX'),snakeBody[0].getAttribute('posY')];
  snakeBody[0].classList.remove("head");
  snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
  snakeBody.pop();

  if(direction == 'right'){
    if(snakeCoordinates[0] < 10 ){
      snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0]+1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
    }else{
      snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
    }
  }else if(direction == 'left'){
    if(snakeCoordinates[0] > 1 ){
      snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0]-1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
    }else{
      snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' + snakeCoordinates[1] + '"]'));
    }
  }else if(direction == 'up'){
    if(snakeCoordinates[1] < 10 ){
      snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1]+1) + '"]'));
    }else{
      snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "1"]'));
    }
  }else if(direction == 'down'){
    if(snakeCoordinates[1] > 1 ){
      snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1]-1) + '"]'));
    }else{
      snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "10"]'));
    }
  }

  if(snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')){
         if(score <= 2){
      // firstLevel();
      // var question = prompt("Переведите число " + firstLevelAnswer[0] +" в двоичную систему счисления");
      // if(question == firstLevelAnswer[1]){
      // alert(userName[0] + ',поздравляю,ты на шаг ближе к сдаче ОГЭ по информатике!\nЛови плюс балл!');
      //   mouse.classList.remove('mouse');
      //   let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
      //   let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
      //   snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
      //   createMouse();
      //   score++;
      //   input.value = "Ваши очки: " + score;
      //   }else{
      //     if(question == ""){
      //     alert(userName[0] + ",вы не ввели ответ:(\nПробуйте заново и будьте внимательнее!");
      //       mouse.classList.remove('mouse');
      //       createMouse();
      //     }else{
      //     alert('Упс,ответ неверный,попробуйте еще:)');
      //     mouse.classList.remove('mouse');
      //     createMouse();
      //     userErrors++;
      //     }
      mouse.classList.remove('mouse');
      let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
      let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
      snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
      createMouse();
      score++;
      input.value = "Ваши очки: " + score;

        }else if(score > 2 && score <= 4){
        // nulls();
        // var question = prompt("Сколько нулей содержит число " + firstLevelNulls[1] +" в двоичной системе счисления?");
        // if(question == firstLevelNulls[0]){
        //   alert(userName[0] + ',поздравляю,ты на шаг ближе к сдаче ОГЭ по информатике!\nЛови плюс балл!');
        //   mouse.classList.remove('mouse');
        //   let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        //   let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        //   snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        //   createMouse();
        //   score++;
        //   input.value = "Ваши очки: " + score;
        // }else{
        //     if(question == ""){
        //       alert(userName[0] + ",вы не ввели ответ:(\nПробуйте заново и будьте внимательнее!");
        //       mouse.classList.remove('mouse');
        //       createMouse();
        //     }else{
        //       alert('Упс,ответ неверный,попробуйте еще:)');
        //       mouse.classList.remove('mouse');
        //       createMouse();
        //       userErrors++;
        //
        //     }
        mouse.classList.remove('mouse');
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        createMouse();
        score++;
        input.value = "Ваши очки: " + score;

        }else if(score == 5){
        let question = prompt("Посчитайте: " + objectOfQuestions.first + " \nОтвет дайте нулем или единицей:)");
        if(question == objectOfAnswers.first){
          alert( userName[0] + ',поздравляю,ты на шаг ближе к сдаче ОГЭ по информатике!\nЛови плюс балл!');
          mouse.classList.remove('mouse');
          let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
          let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
          snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
          createMouse();
          score++;
          input.value = "Ваши очки: " + score;
          }else{
            if(question == ""){
              alert(userName[0] + ",вы не ввели ответ:(\nПробуйте заново и будьте внимательнее!");
              mouse.classList.remove('mouse');
              createMouse();
            }else{
            userErrors++;
            alert('Упс,ответ неверный,попробуйте еще:)');
            mouse.classList.remove('mouse');
            createMouse();
            }
          }
        }else if(score == 6){
          let question = prompt("Посчитайте: " + objectOfQuestions.second + " \nОтвет дайте нулем или единицей:)");
          if(question == objectOfAnswers.second){
            alert(userName[0] + ',поздравляю,ты на шаг ближе к сдаче ОГЭ по информатике!\nЛови плюс балл!');
            mouse.classList.remove('mouse');
            let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
            let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
            snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
            createMouse();
            score++;
            input.value = "Ваши очки: " + score;
            }else{
              if(question == ""){
                alert(userName[0] + ",вы не ввели ответ:(\nПробуйте заново и будьте внимательнее!");
                mouse.classList.remove('mouse');
                createMouse();
              }else{
              alert('Упс,ответ неверный,попробуйте еще:)');
              mouse.classList.remove('mouse');
              createMouse();
              userErrors++;

              }
            }
        }else if(score == 7){
          let question = prompt("Посчитайте: " + objectOfQuestions.third + " \nОтвет дайте нулем или единицей:)");
          if(question == objectOfAnswers.third){
            alert(userName[0] + ',поздравляю,ты на шаг ближе к сдаче ОГЭ по информатике!\nЛови плюс балл!');

            score++;
            input.value = "Ваши очки: " + score;

              $('.modalQuestionMan').fadeIn(1000);
              mouse.classList.remove('mouse');
              clearInterval(interval);

            }else{
              if(question == ""){
                alert(userName[0] + ",вы не ввели ответ:(\nПробуйте заново и будьте внимательнее!");
                mouse.classList.remove('mouse');
                createMouse();
              }else{
              alert('Упс,ответ неверный,попробуйте еще:)');
              mouse.classList.remove('mouse');
              createMouse();
              userErrors++;
              }
            }



        }else if(score == 8) {

          modalContainer.show();
          modalWindow.fadeIn(800);
          mouse.classList.remove('mouse');
          clearInterval(interval);

          $(".level-2-img").attr("src","images/forSnakeSvg2/036-circuit.svg");

          modalWindow.append('<button type="submit" id="submButton" class="SubmButton" >Ответить!!!</button>');
          let submButton = $("#submButton");

          // zeroInp.attr('checked',"false");
          // oneInp.attr('checked',"false");
          // twoInp.attr('checked',"false");
          // threeInp.attr('checked',"false");

          submButton.on("click",function(){
              if(twoInp.attr('data-checked') == 'true'){
                let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
                let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
                snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
                score++;
                input.value = "Ваши очки: " + score;
                modalContainer.fadeOut();
                modalWindow.fadeOut(800);
                submButton.remove();
                twoInp.attr('data-checked','false');
                interval = setInterval(move,300);
                createMouse();
                createStone();
              }else if(twoInp.attr('data-checked') == 'false'){
                alert(userName[0] + ',не угадал!');
                userErrors++;

              }
            })


        }else if(score == 9){
                modalContainer.show();
                modalWindow.fadeIn(800);
                mouse.classList.remove('mouse');
                clearInterval(interval);

                $(".level-2-img").attr("src","images/forSnakeSvg2/020-microscope.svg");

                question.html(easyQuestionArr[1]);
                zeroInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[1].first);
                oneInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[1].second);
                twoInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[1].third);
                threeInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[1].fourth);

                // zeroInp.attr('checked','false');
                // oneInp.attr('checked','false');
                // twoInp.attr('checked','false');
                // threeInp.attr('checked','false');


                modalWindow.append('<button type="submit" id="submButton1" class="SubmButton" >Ответить!!!</button>');
                let submButton1 = $("#submButton1");
          submButton1.on("click",function(){
              if(threeInp.attr('data-checked') == 'true'){
                let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
                let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
                snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
                score++;
                input.value = "Ваши очки: " + score;
                modalContainer.fadeOut();
                modalWindow.fadeOut(800);
                threeInp.attr('data-checked','false');
                interval = setInterval(move,300);
                createStone();
                createMouse();
                submButton1.remove();
                twoInp.attr('checked',false);
              }else if(threeInp.attr('data-checked') == 'false'){
                alert(userName[0] + ',иди поучи логику!\nОбидно?\nНе думаю:)');
                userErrors++;
              }
            })
        }else if(score == 10){
            modalContainer.show();
            modalWindow.fadeIn(800);
            mouse.classList.remove('mouse');
            clearInterval(interval);

            // zeroInp.attr('checked','false');
            // oneInp.attr('checked','false');
            // twoInp.attr('checked','false');
            // threeInp.attr('checked','false');


            $(".level-2-img").attr("src","images/forSnakeSvg2/037-atom.svg");

            question.html(easyQuestionArr[2]);
            zeroInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[2].first);
            oneInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[2].second);
            twoInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[2].third);
            threeInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[2].fourth);


            modalWindow.append('<button type="submit" id="submButton2" class="SubmButton" >Ответить!!!</button>');
            let submButton2 = $("#submButton2");
      submButton2.on("click",function(){
          if(twoInp.attr('data-checked') == 'true'){
            let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
            let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
            snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
            score++;
            input.value = "Ваши очки: " + score;
            modalContainer.fadeOut();
            modalWindow.fadeOut(800);
            twoInp.attr('data-checked','false');
            interval = setInterval(move,300);
            createStone();
            createMouse();
            submButton2.remove();
            question.html(easyQuestionArr[0]);
            zeroInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[0].first);
            oneInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[0].second);
            twoInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[0].third);
            threeInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[0].fourth);

          }else if(twoInp.attr('data-checked') == 'false'){
            alert(userName[0] + ',иди поучи логику!\nОбидно?\nНе думаю:)');
            userErrors++;
          }
        })
        }else if(score == 11){
          $(".modal-Question-Programming").show();
          $(".user-Dialog").fadeIn(800);

          $(".h1Code").html("Time to code," + userName[0] + "!");

          programButton = $("#span1");

          mouse.classList.remove('mouse');
          clearInterval(interval);

          $("#programQuest").val("");

          programButton.on("click",function(){
            let questVal = $("#programQuest").val();
            if (questVal.trim() == programAnswerArr[0]) {
              let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
              let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
              snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
              score++;
              input.value = "Ваши очки: " + score;
              $(".modal-Question-Programming").fadeOut();
              $(".user-Dialog").fadeOut(800);
              interval = setInterval(move,300);
              createMouse();
            }else{
              alert(userName[0] + ',программирование это явно не твое)');
              userErrors++;
            }

          })
        }else if (score == 12){
          $(".codePole").html(programQuestionArr[0]);

          $(".program-img").attr("src","images/forSnakeSvg2/006-calculator.svg");

          programButton.remove();
          $(".span-block").append('<span class="span" id="span2" >Ответить!<img src="images/next.svg" alt=""></span>');
           let programButton1 = $("#span2");

          $(".modal-Question-Programming").show();
          $(".user-Dialog").fadeIn(800);

          mouse.classList.remove('mouse');
          clearInterval(interval);

          $("#programQuest").val("");

          programButton1.on("click",function(){
            let questVal = $("#programQuest").val();
            if (questVal.trim() == programAnswerArr[1]) {
              let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
              let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
              snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
              score++;
              input.value = "Ваши очки: " + score;
              $(".modal-Question-Programming").fadeOut();
              $(".user-Dialog").fadeOut(800);
              interval = setInterval(move,300);
              createMouse();
            }else{
              alert(userName[0] + ',программирование это явно не твое)');
              userErrors++;
            }
          })
        }else if(score == 13){
          $(".codePole").html(programQuestionArr[1]);

          $(".program-img").attr("src","images/forSnakeSvg2/028-programming.svg");

          $("#span2").remove();
          $(".span-block").append('<span class="span" id="span3" >Ответить!<img src="images/next.svg" alt=""></span>');

          let programButton2 = $("#span3");

          $(".modal-Question-Programming").show();
          $(".user-Dialog").fadeIn(800);

          $("#programQuest").val("");

          mouse.classList.remove('mouse');
          clearInterval(interval);

          programButton2.on("click",function(){
            let questVal = $("#programQuest").val();
            if (questVal.trim() == programAnswerArr[2]) {
              let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
              let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
              snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
              score++;
              input.value = "Ваши очки: " + score;
              $(".modal-Question-Programming").fadeOut();
              $(".user-Dialog").fadeOut(800);
              interval = setInterval(move,300);
              createMouse();
              $(".background-decision").fadeIn(800);
              clearInterval(interval);

                $(".codePole").html(programQuestionArr[2]);

                $(".program-img").attr("src","images/forSnakeSvg2/005-binary-code.svg");

                $("#span3").remove();
                $(".span-block").append('<span  class="span1" id="span1" >Ответить!</span>');

                $("#programQuest").val("");

            }else{
              alert(userName[0] + ',программирование это явно не твое:)');
              userErrors++;
            }
          })
        }
    }

  if(snakeBody[0].classList.contains('snakeBody') || snakeBody[0].classList.contains('stone') || snakeBody[0].classList.contains('tree')){
    clearInterval(interval);
    $(".modal-lose-dialog").fadeIn(800);
    $(".modal-lose").show();
    $(".modal-lose-dialog > h1").html("Для тебя игра закончена," + userName[0] + "!");
    $("#button-blue").on("click",function(){
      $(".modal-lose-dialog").fadeOut(800);
      $(".modal-lose").fadeOut(800);
      generateNewSnake();
      removeStone();
      score = 0;
      input.value = "Ваши очки:" + score;
    })

  }
  snakeBody[0].classList.add("head");
  for (let i = 0; i < snakeBody.length; i++) {
      snakeBody[i].classList.add("snakeBody");
    }
    steps = true;
  }

  closeBtn.on('click',function(){
    modalWindow.slideUp(800);
    modalContainer.hide();
    createMouse();
    interval = setInterval(move,300);
    zeroInp.attr('data-checked','false');
    oneInp.attr('data-checked','false');
    twoInp.attr('data-checked','false');
    threeInp.attr('data-checked','false');
  })
  closeBtnProg.on('click',function(){
    $(".user-Dialog").fadeOut(800);
    $(".modal-Question-Programming").hide();
    interval = setInterval(move,300);
    createMouse();
})
  zeroInp.on('click',function (){
    zeroInp.attr('data-checked','true');
    oneInp.attr('data-checked','false');
    twoInp.attr('data-checked','false');
    threeInp.attr('data-checked','false');
  });
  oneInp.on('click',function (){
    zeroInp.attr('data-checked','false');
    oneInp.attr('data-checked','true');
    twoInp.attr('data-checked','false');
    threeInp.attr('data-checked','false');
  });
  twoInp.on('click',function (){
    zeroInp.attr('data-checked','false');
    oneInp.attr('data-checked','false');
    twoInp.attr('data-checked','true');
    threeInp.attr('data-checked','false');
  });
  threeInp.on('click',function (){
    zeroInp.attr('data-checked','false');
    oneInp.attr('data-checked','false');
    twoInp.attr('data-checked','false');
    threeInp.attr('data-checked','true');
  });

  var index;

  $("#super-quest-btn").on("click",function(){
    $(".background-decision").fadeOut(800);
    $(".super-question-background").fadeIn(800);
      var randVal = superArrImg[Math.floor(Math.random() * superArrImg.length)];
      $("#super-img").attr("src",randVal);
      index = superArrImg.indexOf(randVal);
    timer();
  });
  $("#super-answ").on("click",function(){
     if(superArrAnsw[index] == $("#super").val().trim()){
        $(".super-question-background").fadeOut(800);
       superQuestion = true;
       endGame();
     }else{
       alert("Ну,ничего страшного," + userName[0] + "в другой раз:3");
       $(".super-question-background").fadeOut(800);
       endGame();
     }
  });
  $("#end-btn").on("click",function(){
    endGame();
    $(".background-decision").fadeOut(800);
  });

function endGame(){
  $(".end-game-background").fadeIn(2000);
  $(".mistakes").html("Количество ваших ошибок: " + userErrors);
  if (userErrors <=2) {
    $(".mark").html("Вы получили оценку: 5");
    $(".recommendations").html("ОГЭ сдашь на изи,из тебя получился бы годный прогер!");
  }else if(userErrors>2 && userErrors<6){
    $(".mark").html("Вы получили оценку: 4");
    $(".recommendations").html("ОГЭ сдашь,спасибо,что не три!");
  }else if(userErrors>6 && userErrors<=8){
    $(".mark").html("Вы получили оценку: 3");
    $(".recommendations").html("ОГЭ сдашь с божей помощью!");
  }else if(userErrors>8 && userErrors<=13){
    $(".mark").html("Вы получили оценку: 2");
    $(".recommendations").html("ОГЭ не сдашь,лучше иди в соцэк," + userName[0] + "!");
  }
  if (superQuestion == true) {
    $(".super-check").html(userName[0]+",лови пятерочку за ответ на супервопрос");
  }else{
    $(".super-check").html("Не ответил ты на супервопрос,"+ userName[0]);
  }
}

$("#confirmation").on("click",function(){
  $(".end-game-background").fadeOut(800);
  $(".modal-lose-dialog").fadeIn(800);
  $(".modal-lose").show();
  $(".modal-lose-dialog > h1").html("Для тебя игра закончена," + userName[0] + "!");
  $("#button-blue").on("click",function(){
    $(".modal-lose-dialog").fadeOut(800);
    $(".modal-lose").fadeOut(800);
    generateNewSnake();
    removeStone();
    score = 0;
    input.value = "Ваши очки:" + score;
  })

})

window.addEventListener('keydown',function(e){
    if (e.keyCode == 13 && $('.modalQuestionManStart').css("display") != "none") {
      if ($("#name").val() == "" || $("#name").val() == " ") {
        alert("Имячко не введено,введите,пжт!\nИначе ничего работать не будет!");
      }else{
        fadingOut();
      }
    }
    if (e.keyCode == 13 && score == 10 && modalWindow.css("display") != "none") {
      if(twoInp.attr('data-checked') == 'true'){
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        score++;
        input.value = "Ваши очки: " + score;
        modalContainer.fadeOut();
        modalWindow.fadeOut(800);
        twoInp.attr('data-checked','false');
        interval = setInterval(move,300);
        createStone();
        createMouse();
        submButton2.remove();
        question.html(easyQuestionArr[0]);
        zeroInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[0].first);
        oneInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[0].second);
        twoInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[0].third);
        threeInp.html('<input type="radio" name="question" class="question">' + easyVariantsArr[0].fourth);

      }else if(twoInp.attr('data-checked') == 'false'){
        alert(userName[0] + ',иди поучи логику!\nОбидно?\nНе думаю:)');
        userErrors++;
      }
    }
    if (e.keyCode == 13 && score == 9 && modalWindow.css("display") != "none") {
      if(threeInp.attr('data-checked') == 'true'){
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        score++;
        input.value = "Ваши очки: " + score;
        modalContainer.fadeOut();
        modalWindow.fadeOut(800);
        threeInp.attr('data-checked','false');
        interval = setInterval(move,300);
        createStone();
        createMouse();
        submButton1.remove();
      }else if(threeInp.attr('data-checked') == 'false'){
        alert(userName[0] + ',иди поучи логику!\nОбидно?\nНе думаю:)');
        userErrors++;
      }
    }
    if (e.keyCode == 13 && score == 8 && modalWindow.css("display") != "none") {
      if(twoInp.attr('data-checked') == 'true'){
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        score++;
        input.value = "Ваши очки: " + score;
        modalContainer.fadeOut();
        modalWindow.fadeOut(800);
        submButton.remove();
        twoInp.attr('data-checked','false');
        interval = setInterval(move,300);
        createMouse();
        createStone();
      }else if(twoInp.attr('data-checked') == 'false'){
        alert(userName[0] + ',не угадал!');
        userErrors++;

      }
      }
    if (e.keyCode == 13 && score == 11 && ($(".user-Dialog").css("display") != "none") && programButton.attr("id") == "span1"){
      let questVal = $("#programQuest").val();
      if (questVal.trim() == programAnswerArr[0]) {
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        score++;
        input.value = "Ваши очки: " + score;
        $(".modal-Question-Programming").fadeOut();
        $(".user-Dialog").fadeOut(800);
        interval = setInterval(move,300);
        createMouse();
      }else{
        alert(userName[0] + ',программирование это явно не твое)');
        userErrors++;
      }
    }
    if (e.keyCode == 13 && score == 12 && ($(".user-Dialog").css("display") != "none") && $("#span2").attr("id") == "span2"){
      let questVal = $("#programQuest").val();
      if (questVal.trim() == programAnswerArr[1]) {
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        score++;
        input.value = "Ваши очки: " + score;
        $(".modal-Question-Programming").fadeOut();
        $(".user-Dialog").fadeOut(800);
        interval = setInterval(move,300);
        createMouse();
      }else{
        alert(userName[0] + ',программирование это явно не твое)');
        userErrors++;
      }
    }
    if (e.keyCode == 13 && score == 13 && ($(".user-Dialog").css("display") != "none") && $("#span3").attr("id") == "span3"){
      let questVal = $("#programQuest").val();
      if (questVal.trim() == programAnswerArr[2]) {
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        score++;
        input.value = "Ваши очки: " + score;
        $(".modal-Question-Programming").fadeOut();
        $(".user-Dialog").fadeOut(800);
        interval = setInterval(move,300);
        createMouse();
        $(".background-decision").fadeIn(800);
        clearInterval(interval);

          $(".codePole").html(programQuestionArr[2]);

          $(".program-img").attr("src","images/forSnakeSvg2/005-binary-code.svg");

          $("#span3").remove();
          $(".span-block").append('<span  class="span1" id="span1" >Ответить!</span>');

          $("#programQuest").val("");

      }else{
        alert(userName[0] + ',программирование это явно не твое)');
        userErrors++;
      }
    }
    if (e.keyCode == 13 && score == 14 && ($(".super-question-backgroung").css("display") != "none")){
      if(superArrAnsw[index] == $("#super").val().trim()){
         $(".super-question-background").fadeOut(800);
        superQuestion = true;
        endGame();
      }else{
        $(".super-question-background").fadeOut(800);
        endGame();
      }
    }
  });

let objectOfAnswers = {
  first: 1,
  second: 1,
  third:1
};
let objectOfQuestions = {
  first: "F = ((С + В) =>  В) * (А * В) => В",
  second: "F = A + (B * C) <=> (A + B)*(A + C)",
  third:"F = (A + not B) * (not A + B) + not(A * B)"
};

let firstLevelAnswer = [];
let firstLevelNulls = [];

function getRandomNum(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function firstLevel(){
            let number = getRandomNum(3,300);
            let answer2 = number.toString(2);
              firstLevelAnswer.unshift(answer2);
            let answer10 = parseInt(answer2,2);
              firstLevelAnswer.unshift(answer10);
}
function nulls(){
    let nulls = 0;
    let number = getRandomNum(3,300);
    firstLevelNulls.unshift(number);
    let secondSS = number.toString(2);
        for (var i = 0; i < secondSS.length; i++) {
            if(secondSS[i] == 0){
              nulls++;
            }
        }
    firstLevelNulls.unshift(nulls);
}

let interval = setInterval(move,300);

window.addEventListener('keydown',function(e){
  if(steps == true){
    if(e.keyCode == 37 && direction != 'right'){
      direction = 'left';
      steps = false;
    }else if(e.keyCode == 38 && direction != 'down'){
      direction = 'up';
      steps = false;
    }else if(e.keyCode == 39 && direction != 'left'){
      direction = 'right';
      steps = false;
    }else if(e.keyCode == 40 && direction != 'up'){
      direction = 'down';
      steps = false;
    }
  }
})
