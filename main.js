function createGame(player1, hour, player2){
    return `
    <li>
                        <img src="assets/icon-${player1}.ico" alt="Bandeira da ${player1}">
                        <strong>${hour}</strong>
                        <img src="assets/icon-${player2}.ico" alt="Bandeira do ${player2}">
                    </li>
    `
}

let delay = -0.5;
function createCard(date, day, games) {
    delay= delay + 0.5;
  return`
  <div class="card" style="animation-delay: .8s ${delay}s">
                <h2>${date}<span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
            </div>
  `
}

document.querySelector('#cards').innerHTML = 
          createCard("20/11", "domingo", 
          createGame("suica","13:00","camaroes")
          ) + 
          createCard("21/11", "segunda", 
          createGame("england","10:00","ira") + 
          createGame("senegal","13:00","holanda") +
          createGame("eua","13:00","wales")
          ) +
          createCard("22/11", "terça", 
          createGame("argentina","07:00","arabia") + 
          createGame("dinamarca","10:00","tunisia") +
          createGame("mexico","13:00","polonia") +
          createGame("franca","16:00","australia")
          ) +
          createCard("23/11", "quarta", 
          createGame("marrocos","07:00","croacia") + 
          createGame("alemanha","10:00","japao") +
          createGame("espanha","13:00","costarica") +
          createGame("belgica","16:00","canada")
          ) +
          createCard("24/11", "quinta", 
          createGame("suica","07:00","camaroes") + 
          createGame("uruguai","10:00","coreiadosul") +
          createGame("portugal","13:00","gana") +
          createGame("brazil","16:00","serbia")
          ) +
          createCard("25/11", "sexta", 
          createGame("wales", "07:00", "ira") +
          createGame("qatar", "10:00", "senegal") +
          createGame("holanda", "13:00", "equador") +
          createGame("england", "16:00", "eua")
          ) +
          createCard("26/11", "sábado", 
          createGame("tunisia", "07:00", "australia") +
          createGame("polonia", "10:00", "arabia") +
          createGame("franca", "13:00", "dinamarca") +
          createGame("argentina", "16:00", "mexico")
          ) +
          createCard("27/11", "domingo", 
          createGame("japao", "07:00", "costarica") +
          createGame("belgica", "10:00", "marrocos") +
          createGame("croacia", "13:00", "canada") +
          createGame("espanha", "16:00", "alemanha")
          ) +
          createCard("28/11", "segunda", 
          createGame("camaroes", "07:00", "serbia") +
          createGame("coreiadosul", "10:00", "gana") +
          createGame("brazil", "13:00", "suica") +
          createGame("portugal", "16:00", "uruguai")
          ) +
          createCard("29/11", "terça", 
          createGame("equador", "07:00", "senegal") +
          createGame("holanda", "10:00", "qatar") +
          createGame("ira", "13:00", "eua") +
          createGame("wales", "16:00", "england")
          ) +
          createCard("30/11", "quarta", 
          createGame("tunisia", "07:00", "franca") +
          createGame("australia", "10:00", "dinamarca") +
          createGame("polonia", "13:00", "argentina") +
          createGame("arabia", "16:00", "mexico")
          ) +
          createCard("01/12", "quinta", 
          createGame("croacia", "07:00", "belgica") +
          createGame("canada", "10:00", "marrocos") +
          createGame("japao", "13:00", "espanha") +
          createGame("costarica", "16:00", "alemanha")
          ) +
          createCard("02/12", "quinta", 
          createGame("coreiadosul", "07:00", "portugal") +
          createGame("gana", "10:00", "uruguai") +
          createGame("serbia", "13:00", "suica") +
          createGame("camaroes", "16:00", "brazil")
          )
