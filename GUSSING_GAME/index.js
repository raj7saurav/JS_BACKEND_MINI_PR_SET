let max = prompt ("PLEASE ENTER THE MAX RANDOM NUMBER");

console.log(max);

const random=Math.floor(Math.random() * max) +1;


console.log(random)

let guess = prompt ( "guess the random number");



while(true){
    if(guess =="quiet"){
        console.log("user quit")
        break;
    }
    if(guess == random){
        console.log("Congrats You guess the right number",random)
        break;
    }
    else if(guess < random){
        guess = prompt ( " Your number is to Small")
    }
    else{
        guess = prompt  ("Your Number Is Too large ")
    }


}
