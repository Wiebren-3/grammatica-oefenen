const woorden = [
    { "nederlands": "kunnen", "duits": "können" },
    { "nederlands": "moeten", "duits": "müssen" },
    { "nederlands": "mogen", "duits": "dürfen" },
    { "nederlands": "ik kon", "duits": "ich konnte" },
    { "nederlands": "jij kon", "duits": "du konntest" },
    { "nederlands": "moest", "duits": "musste" },
    { "nederlands": "mocht", "duits": "durfte" },
    { "nederlands": "jij/u", "duits": "du" },
    { "nederlands": "kon konnen", "duits": "konntest" },
    { "nederlands": "moest", "duits": "musstest" },
    { "nederlands": "mocht", "duits": "durftest" },
    { "nederlands": "hij/zij/het", "duits": "er / sie / es" },
    { "nederlands": "kon kunnen", "duits": "konnte" },
    { "nederlands": "moest", "duits": "musste" },
    { "nederlands": "mocht", "duits": "durfte" },
    { "nederlands": "wij", "duits": "wir" },
    { "nederlands": "konden", "duits": "konnten" },
    { "nederlands": "moesten", "duits": "mussten" },
    { "nederlands": "mochten", "duits": "durften" },
    { "nederlands": "jullie", "duits": "ihr" },
    { "nederlands": "konden", "duits": "konntet" },
    { "nederlands": "moesten", "duits": "musstet" },
    { "nederlands": "mochten", "duits": "durftet" },
    { "nederlands": "zij", "duits": "sie" },
    { "nederlands": "konden", "duits": "konnten" },
    { "nederlands": "moesten", "duits": "mussten" },
    { "nederlands": "mochten", "duits": "durften" },
    { "nederlands": "u (formeel)", "duits": "Sie" },
    { "nederlands": "konden", "duits": "konnten" },
    { "nederlands": "moesten", "duits": "mussten" },
    { "nederlands": "mochten", "duits": "durften" },
    { "nederlands": "Het voltooid deelwoord", "duits": "ich habe" },
    { "nederlands": "gekund", "duits": "gekonnt" }    
  ]
  
  let huidigeIndex = 0;
  
  function laadVraag() {
    const vraagElement = document.getElementById('vraag');
    vraagElement.textContent = woorden[huidigeIndex].duits;
  }
  
  function controleerAntwoord() {
    const antwoordInput = document.getElementById('antwoordInput');
    const feedbackElement = document.getElementById('feedback');
    const gebruikersAntwoord = antwoordInput.value.toLowerCase();
    const correctAntwoord = woorden[huidigeIndex].nederlands.toLowerCase();
  
    if (gebruikersAntwoord === correctAntwoord) {
      feedbackElement.textContent = 'Correct!';
    } else {
      feedbackElement.textContent = 'Fout. Probeer opnieuw.';
    }
  
    antwoordInput.value = '';
    huidigeIndex++;
  
    if (huidigeIndex < woorden.length) {
      laadVraag();
    } else {
      feedbackElement.textContent = 'Oefening voltooid!';
      huidigeIndex = 0;
      laadVraag();
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    laadVraag();
  
    const antwoordInput = document.getElementById('antwoordInput');
    antwoordInput.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        controleerAntwoord();
      }
    });
  });
  