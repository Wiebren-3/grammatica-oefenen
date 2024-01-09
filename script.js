const woorden = [
    // Grammatik A
    { "nederlands": "kunnen", "duits": "können" },
    { "nederlands": "moeten", "duits": "müssen" },
    { "nederlands": "mogen", "duits": "dürfen" },
    { "nederlands": "ik zou kunnen", "duits": "ich konnte" },
    { "nederlands": "jij zou kunnen", "duits": "du konntest" },
    { "nederlands": "hij zou kunnen", "duits": "er konnte" },
    { "nederlands": "zij zou kunnen", "duits": "sie konnte"},
    { "nederlands": "het zou kunnen", "duits": "es konnte"},
    { "nederlands": "wij zouden kunnen", "duits": "wir konnten"},
    { "nederlands": "u kon", "duits": "ihr konntet"},
    { "nederlands": "zij konden", "duits": "sie konnten"},
    { "nederlands": "zij konden", "duits": "Sie konnten"},
    { "nederlands": "ik heb gekunt", "duits": "ich habe gekonnt"}
    // Grammatik B
    

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
  