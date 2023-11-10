function checkAnswer(questionNumber, selectedOption) {
    var correctAnswer = getCorrectAnswer(questionNumber);

    // Restablece el estilo
    var options = document.getElementsByName("q" + questionNumber);
    for (var i = 0; i < options.length; i++) {
      options[i].parentNode.classList.remove("correct", "incorrect");
    }

    // Evalúa la respuesta seleccionada
    if (selectedOption === correctAnswer) {
      document.querySelector('input[name="q' + questionNumber + '"][value="' + correctAnswer + '"]').parentNode.classList.add("correct");
    } else {
      document.querySelector('input[name="q' + questionNumber + '"][value="' + selectedOption + '"]').parentNode.classList.add("incorrect");
      document.querySelector('input[name="q' + questionNumber + '"][value="' + correctAnswer + '"]').parentNode.classList.add("correct");
    }
  }

  function getCorrectAnswer(questionNumber) {
    // Agrega la respuesta correcta para cada pregunta
    switch (questionNumber) {
      case 1:
        return "C";
      case 2:
        return "A";
      case 3:
        return "B";
      case 4:
        return "B";
      case 5:
        return "C";
      case 6:
        return "A";
      case 7:
        return "B";
      case 8:
        return "C";
      case 9:
        return "C";
      case 10:
        return "B";
      default:
        return "";
    }
  }