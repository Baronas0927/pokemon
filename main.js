let ballsWeHave = 5;

document.querySelector("#pokeballs").value = ballsWeHave; //hidden input value
document.querySelector("#pokeballsDisplay").innerText = ballsWeHave; //display in HTML
let pokeballsHolder = document.querySelector("#pokeballs");

document.querySelector("#btn").addEventListener("click", playGame);

function playGame(){
    let gameStatus = document.querySelector("#gameStart");
    switch (gameStatus.value){
        case "1":
            document.querySelector("#btn-container").innerHTML = '<button class="btn btn-info" id="btn">pagauk pokemona!</button>';
            document.querySelector("#pokemon-container").innerHTML = '<div id="pokemon"></div>';
            gameStatus.value = 2;
            break;
        case "2":
            pokeballsHolder.value = pokeballsHolder.value - 1;
            document.querySelector("#pokeballsDisplay").innerText = pokeballsHolder.value;
            if(Math.random() < 0.5){//50% tikimybe pagauti
                gameStatus.value = 3;
                document.querySelector("#btn-container").innerHTML = '<button class="btn btn-danger" id="btn">Perziureti laimiki</button>';

            }else {
                if(pokeballsHolder.value == 0){
                    console.log("baiges kamuoliai");
                    document.querySelector("#pokemon-container").innerHTML = "<h1>baiges kamuoliai</h1>";
                    document.querySelector("#btn-container").innerHTML = "";
                    return;
                }
                document.querySelector("#btn-container").innerHTML =  '<button disabled class="btn btn-info" id="btn">Pagauk pokemona!</button>';
                setTimeout(function (){
                    document.querySelector("#btn").disabled = false;
                }, 1000);
            }
            break;
        case "3":
            document.querySelector("#pokemon").innerHTML = '<h1>Pokemonas</h1>';
            document.querySelector("#btn-container").innerHTML = "";
            gameStatus.value = 3;
            break;
        default:
            break;
    }
    resetButton();

}

function resetButton(){
    if(document.querySelector("#btn") != null){
        document.querySelector("#btn").removeEventListener("click", playGame);
        document.querySelector("#btn").addEventListener("Click", playGame);
    }
}