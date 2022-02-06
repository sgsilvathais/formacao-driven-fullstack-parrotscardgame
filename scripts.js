let nroCartas;
function ObterNroCartas(){
    do 
    {
        nroCartas = parseInt(prompt("Com quantas cartas você quer jogar? "));
    } while ((nroCartas% 2) !== 0 || nroCartas < 4 || nroCartas > 14)
}

ObterNroCartas();