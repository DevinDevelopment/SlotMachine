const images = ['cherry.png', 'grapes.png', 'heart.png', 'lemon.png', 'orange.png', 'seven.png', 'strawberry.png'];

let bet = $("#moneyBet").text();
let amount = $("#moneyBalance").text();

$("#sub").click(decrement);
$("#add").click(increment);
$("#spin").click(play);
let counter = 0;

function increment(){
    if(amount > bet){
        $("#moneyBet").text(++bet);
    }
}

function decrement(){
    if(bet > 1){
        $("#moneyBet").text(--bet);
    }
}

function play() {
    if(bet > amount){
        $("#header").text("Invalid bet amount, you do not have enough money to bet $" + bet).fadeTo(100, 0.1).fadeTo(200, 1.0).css("color","red");
    }

//if you have enough money to play
    else{

        $('img').each(function (index, element) {
        $(element).attr("src", "img/"+ images[generateRandom()]);
    });

    if ($("#slot-1").attr("src") === $("#slot-2").attr("src") & $("#slot-2").attr("src") === $("#slot-3").attr("src")) {
        amount = (bet * 15 ) + amount;
        $("#moneyBalance").text(amount);
        $("#header").text("Congratulations! You won!").fadeTo(100, 0.1).fadeTo(200, 1.0).css("color","red");             

    }
    else{
        $("#header").text("You lost, spin again.").fadeTo(100, 0.1).fadeTo(200, 1.0).css("color","red");
        amount = amount - bet ;
        $("#moneyBalance").text(amount);
    }

    if(amount < 1){
        $("#header").text("You lost all your money!").fadeTo(100, 0.1).fadeTo(200, 1.0).css("color","red");
        }
    }
}
    function generateRandom() {
        return Math.floor( images.length * Math.random());
    } 
