document.querySelector("h1").addEventListener("click", roll);

function roll(){
    var RandomNumber1=Math.floor(Math.random()*6)+1;
    console.log(RandomNumber1);
    document.querySelector(".dice .img1").setAttribute("src", "./images/dice"+RandomNumber1+".png");

    var RandomNumber2=Math.floor(Math.random()*6)+1;
    console.log(RandomNumber2);
    document.querySelector(".dice .img2").setAttribute("src", "./images/dice"+RandomNumber2+".png");

    if (RandomNumber1===RandomNumber2){
        document.querySelector("h1").textContent="Draw👌";
    }
    else if(RandomNumber1>RandomNumber2){
        document.querySelector("h1").textContent="Player 1 Wins!✌️";
    }
    else{
        document.querySelector("h1").textContent="Player 2 Wins!🤩";
    }
}