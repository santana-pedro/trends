function winner(){
    var x = document.querySelector('td');
    var achouVencedor = false;
    /*HORIZONTAL*/
    while(achouVencedor === false){
        
    }
}
function alternatePlayer(){
    var currentPlayer = document.getElementById('currentPlayer');
    if(currentPlayer.textContent === 'O'){currentPlayer.textContent = 'X';}
    else if(currentPlayer.textContent === 'X'){currentPlayer.textContent = 'O';}
}
function playerSelection(){
    var currentPlayer = document.getElementById('currentPlayer');
    document.querySelector('tbody').addEventListener('click', function(e){
        var x = e.target;
        if(x.textContent === ''){
            x.textContent += currentPlayer.textContent;
            alternatePlayer();
        }
        else{return;}
    })
}
function restart(){
    window.location.reload();
}

/*OUTRAS COISAS*/

function isNumPrimo(num){
    var cont = 0;
    for(var i = 1; i <= num; i++){
        if(num % i === 0){
            cont++;
        }
    }
    if(cont > 2){
        return 'não é primo';
    }else{
        return 'é primo';
    }
}

var calculadora = {
    sum: function(num1, num2){
        return num1 + num2;
    },
    minus: function(num1, num2){
        return num1 - num2;
    },
    division: function(num1, num2){
        return num1 / num2;
    },
    multiply: function(num1, num2){
        return num1 * num2;
    },
}

function smallNumber(numbers){
    for(var i = 0; i < numbers.length; i++){
        for(var j = i; j < numbers.length; j++){
            if(numbers[i] > numbers[j]){
                var troca = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = troca;
            }
        }
    }
    var min = numbers[0];
    return min;
}

var elevador = {
    floors: [1, 2, 3, 4, 5],
    actual: 1,
    up: function(){
        var maxFloor = this.floors.length;
        if(this.actual <= this.floors[maxFloor - 2]){
            this.actual++;
        }else{
            console.log('não há mais andares para subir');
        }
    },
    down: function(){
        if(this.actual >= this.floors[1]){
            this.actual--;
        }else{
            console.log('não há mais andares para descer');
        }
    },
}

function lettersMissing(myStr){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    myStr = myStr.toLowerCase();
    let missingLetters = '';
    for(let i = 0; i < alphabet.length; i++){
        let compair = alphabet[i];
        let validate = false;
        for(let j = 0; j < myStr.length; j++){
            if(compair === myStr[j]){
                validate = true;
                break
            }
        }
        if(validate === false){
            missingLetters += compair;
        }
    }
    return missingLetters;
}

function weekDay(year, month, day){
    let date = (new Date(year, month-1,day)).getDay();
    let days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    return days[date];
}

