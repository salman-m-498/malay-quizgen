const fetchQuiz= () => {
    return JSON.parse(`{
        "q1": {
            "question": "Which one is correct team name in NBA?",
            "options": [
                "New York Bulls",
                "Los Angeles Kings",
                "Golden State Warriros",
                "Huston Rocket"
            ],
            "answer": "Huston Rocket"
        },
        "q2": {
            "question": "'Namaste' is a traditional greeting in which Asian language?",
            "options": [
                "Hindi",
                "Mandarin",
                "Nepalese",
                "Thai"
            ],
            "answer": "Hindi"
        },
        "q3": {
            "question": "The Spree river flows through which major European capital city?",
            "options": [
                "Berlin",
                "Paris",
                "Rome",
                "London"
            ],
            "answer": "Berlin"
        },
        "q4": {
            "question": "Which famous artist had both a 'Rose Period' and a 'Blue Period'?",
            "options": [
                "Pablo Picasso",
                "Vincent van Gogh",
                "Salvador Dalí",
                "Edgar Degas"
            ],
            "answer": "Pablo Picasso"
        }
    }`)
}

const createQuestion = ({ question, answer, options }, i) => {
  const field = document.createElement('fieldset')
  field.innerHTML = `<legend>Question ${i}</legend>
    <p>${question}</p>
    ${ options.map((option) => `<div>
      <input type="radio" id="option-${option}" name="answer${i}" value="${option}"
             ${ option === answer ? 'checked' : '' }>
      <label for="option-${option}">${option}</label>
    </div>`).join('') }
    `
    
    
    return field;
}

const createQuizz = () => {
  const form = document.getElementById('quizz')
  const quizz = fetchQuiz()
  const questions = Object.values(quizz)
  
  questions.forEach((question, i) => {
    const field = createQuestion(question, i + 1)
    form.appendChild(field)
  })
}

createQuizz()
