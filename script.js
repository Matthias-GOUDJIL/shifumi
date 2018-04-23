  let btn = Array.from(document.getElementsByTagName('button'))
    , display = document.getElementById('display')
    , possibilities = ["pierre", "feuille", "ciseaux"]
    , result_player = ""
    , score_ia = 0
    , score_player = 0;
  
  btn.forEach( item => {
    item.addEventListener('click', function () {
    let index = Math.floor(Math.random() * 3)
      , result_ia = possibilities[index]
      , text_content = `choix player: ${this.value} \n choix bot: ${result_ia} \n
                          ********************************************* \n`
    
    if ((this.value === "pierre" && result_ia === "ciseaux")
    || (this.value === "ciseaux" && result_ia === "feuille")
    || (this.value === "feuille" && result_ia === "pierre")){

      text_content += `gagné!`
      score_player++

    } else if ((this.value === "pierre" && result_ia === "feuille")
    ||(this.value === "ciseaux" && result_ia === "pierre")
    ||(this.value === "feuille" && result_ia === "ciseaux")){

      text_content += `perdu!`
      score_ia++

    }else{
      text_content += `égalité!`
    }

    let score = ` \n *********************************************
                   bot: ${score_ia} \n player: ${score_player}`

    display.textContent = text_content + score;
    if (display.TEXT_NODE) {
      display.style.border = "2px solid rgb(170, 49, 49)";
    }
  })
});