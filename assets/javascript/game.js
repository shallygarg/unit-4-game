$(document).ready(function(){
console.log("hello");


var playerOne = {
    name: 'aaa',
    health: 120,
    attack:8,
    //image:
}

var playerTwo = {
    name: 'bbb',
    health: 180,
    attack: 16,
    //image:
}

var playerThree = {
    name: 'ccc',
    health: 130,
    attack: 10,
    //image:
}

var playerFour = {
    name: 'bbb',
    health: 150,
    attack: 15,
    //image:
}
var players = [playerOne, playerTwo, playerThree, playerFour];

var count = 1;
var you ;
var defender;
var yourHealth;
var yourAttack;
var currentEnemieHealth;
var currentEnemieAttack;
var attack = 0;
var counterAttack = 0;
var remainingEnemies = false;
var totalEnemies = 0;

var p1Container = document.getElementById('player1');
var p2Container = document.getElementById('player2');
var p3Container = document.getElementById('player3');
var p4Container = document.getElementById('player4');
var enemies = [p1Container, p2Container, p3Container, p4Container];
var enemiesContainer = $("#enemies");
var defenderContainer = $("#defender");

startGame();
//start game
function startGame(){
    selectYourCharacter();
    selectDefender();
    //attack();
    //restart();
}


// Create character??
//select your character

function selectYourCharacter(){
   
        $('.players').on('click', function(){
            //selectPlayer(p4Container, p2Container, p3Container);
            if(count <= 1){
                count++;
                console.log(count);
            you = this;
            $('#title').text("Your Character");
            // $('.character').empty();
            // $('.character').append(you);
           console.log(you);
            for (var i = 0; i < enemies.length; i++) {
             // var newEnemieDiv = enemies[i];
              console.log(enemies[i]);
              //
            if(you != enemies[i]){                           
                $(enemies[i]).addClass('enemies'); 
                $(enemies[i]).removeClass('players');
               // $(newEnemieDiv).css("border-color", "black");
                enemiesContainer.append(enemies[i]);
                $(enemies[i]).attr('data_health', players[i].health);
                $(enemies[i]).attr('data_attack', players[i].attack);
              }else{
                  $(you).addClass('yourCharacter');
                  yourHealth = players[i].health;
                  yourAttack = players[i].attack;
                  console.log(yourAttack, yourHealth);
                    //yourHealth = parseInt($(you).attr('data_health'));
                //   yourAttack = parseInt($(you).attr('data_attack'));
              }
            }
        }
})

}

//select defender
function selectDefender(){
    totalEnemies ++;
    $(document).on('click', '.enemies', function(){ 
        
       // $('.character').empty();                 
       // $('.enemies').empty();
        selectedEnemie = this;
        console.log(selectedEnemie);
        $(selectedEnemie).attr("class", "defender");
        $(selectedEnemie).removeClass('enemies');
        defenderContainer.append(selectedEnemie);
        currentEnemieAttack = parseInt(selectedEnemie.getAttribute('data_attack'));
        console.log("currentEnemieAttack " + currentEnemieAttack);
        currentEnemieHealth = parseInt(selectedEnemie.getAttribute('data_health'));
        console.log("currentEnemieHealth " + currentEnemieHealth);
    })
}


//attack
$('#attack').on('click', function(){
    console.log('I have been clicked');
    //Attack doubles
    attack += yourAttack;
   // console.log(attack);
    currentEnemieHealth -= attack;

    counterAttack += currentEnemieAttack;
    yourHealth -= counterAttack;
   console.log("enemy attack:", currentEnemieAttack);
   console.log("enemy health:", currentEnemieHealth);
   console.log("your attack:", yourAttack);
   console.log("your health:", yourHealth);
   console.log("Attack", attack);
   console.log("CounterAttack:", counterAttack);
   $("#yourresult").html(yourHealth);
   $("#enemieresult").html(currentEnemieHealth);
    if(currentEnemieHealth<= 0 && yourHealth >0){
        defenderContainer.empty();
        yourHealth = yourHealth - currentEnemieAttack;
        console.log("Enemies defeted");
        alert("Select another defender");
        selectDefender();
        
    }else if (yourHealth <=0){
        alert("You lose");
    }else if (yourHealth>0 && totalEnemies == 4){
        console.log(totalEnemies);
        alert("You win");
    }
})
//restart
$('#restart').on('click', function(){
    location.reload();
})
});





