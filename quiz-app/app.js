const quizData = [
    {
        question: 'Çanakkale üniversitesinin en iyi fakültesi hangisidir?',
        a: 'Mühendislik Fakültesi',
        b: 'Hemşirelik Fakültesi (♥)',
        c: 'Ziraat Fakültesi',
        d: 'Siyasal Bilimler Fakültesi',
        e: 'Fen ve Edebiyat Fakültesi',
        correct: 'b',
    },
    {
        question: 'Dünyanın en iyi futbolcusu kimdir?',
        a: 'Cristiano Ronaldo',
        b: 'Kylian Mbappe',
        c: 'Erling Haland',
        d: 'Lionel Messi',
        e: 'İbrahim Ethem Öztürk',
        correct: 'e',
    },
    {
        question: 'En komik arkadaşımız kimdir?',
        a: 'Derviş Ethem Akpay',
        b: 'İdris Yıldırım',
        c: 'Mehmet Akif Artun',
        d: 'Ferhat Şık',
        e: 'Nevzat Oralı',
        correct: 'b',
    },
    {
        question: 'İnsanların her zaman arkasında dururum, ama asla onları takip etmem. Ne olduğumu bilir misin?',
        a: 'Yalan',
        b: 'Doğrular',
        c: 'Aşk',
        d: 'Sanat',
        e: 'RTE',
        correct: 'e',
    },
    {
        question: 'İngilterenin Kraliçesi II. Elizabethin tahta çıkış tarihi nedir?',
        a: '1952',
        b: 'Cuma Gecesi',
        c: '1 Mayıs',
        d: 'Londrada bir piknikte',
        e: '1.si öldüğü zaman',
        correct: 'b',
    },
    {
        question: 'Aramızdaki en uzun boylu kişi kim?',
        a: 'Shafak Zendelli',
        b: 'İbrahim Ethem Öztürk',
        c: 'Hasan Sülç',
        d: 'Ferhat Şık',
        e: 'İdris Yıldırım',
        correct: 'd',
    },
    {
        question: 'Türkiyenin başkenti neresidir?',
        a: 'İstanbul',
        b: 'Çanakkale',
        c: 'Gaziantep',
        d: 'Siirt',
        e: 'Trabzon',
        correct: 'c',
    },
    {
        question: 'Gözlükleri en güzel olan arkadaşımız kimdir?',
        a: 'Leonit Shabani',
        b: 'Derviş Ethem Akpay',
        c: 'İbrahim Ethem Öztürk',
        d: 'Mehmet Akif Artun',
        e: 'Hasan Sülç',
        correct: 'a',
    },
    {
        question: 'Dünyanın en güçlü insanı kimdir?',
        a: 'Mike Tyson',
        b: 'Khabib Nurmagomedov',
        c: 'Jhon Cena',
        d: 'Doğukan Kızılarslan',
        e: 'Rey Mysterio',
        correct: 'd',
    },
    {
        question: 'Ben kimim?',
        a: 'İsmi önemsiz',
        b: 'Cismi değersiz',
        c: 'Düşüncesi kıymetsiz',
        d: 'Varlığı yetersiz',
        e: 'Biriyim!',
        correct: 'e',
    },
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deSelectedAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deSelectedAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    if(answer){
        if(answer == quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `<h2>Test tamamlandı, ${score * 10} puan aldın.</h2>
                                <button class="submit" onClick="location.reload()">Tekrar Çöz</button>
            `
        }
    }
})
