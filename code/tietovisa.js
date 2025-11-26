const questions = [
  { question: "Milloin ajoneuvon kuljettajan on käytettävä vilkkua?",
    options: [
      "Vain käännyttäessä risteyksessä",
      "Kaikissa suunnanmuutoksissa ja kaistanvaihdoissa",
      "Vain ohittaessa",
      "Vain pysäköitäessä"
    ],
    answer: 1,
    explanation: "Vilkkua on käytettävä kaikissa suunnanmuutoksissa ja kaistanvaihdoissa."
  },
  { question: "Mitä tarkoittaa, jos liikennevaloissa palaa vihreä nuoli oikealle?",
    options: [
      "Saa kääntyä oikealle, mutta väistettävä jalankulkijat",
      "Ajokielto oikealle",
      "Etuajo-oikeus oikealle",
      "Pakollinen ajosuunta oikealle"
    ],
    answer: 0,
    explanation: "Vihreä nuoli oikealle sallii kääntymisen, mutta jalankulkijat on väistettävä."
  },
  { question: "Milloin ajoneuvon kuljettaja saa käyttää varoitusvilkkuja?",
    options: [
      "Aina pysäköidessään",
      "Vain vaaratilanteessa tai poikkeuksellisessa pysähtymisessä",
      "Kun haluaa ohittaa",
      "Kun ajaa moottoritiellä"
    ],
    answer: 1,
    explanation: "Varoitusvilkkuja saa käyttää vain vaaratilanteessa tai poikkeuksellisessa pysähtymisessä."
  },
  { question: "Mitä tarkoittaa, jos ajoradalla on katkoviiva?",
    options: [
      "Kaistanvaihto on sallittu",
      "Kaistanvaihto kielletty",
      "Ajokielto",
      "Pysäköintikielto"
    ],
    answer: 0,
    explanation: "Katkoviiva tarkoittaa, että kaistanvaihto on sallittu."
  },
  { question: "Milloin ajoneuvon kuljettaja saa ohittaa oikealta?",
    options: [
      "Aina moottoritiellä",
      "Kun edellä ajava kääntyy vasemmalle",
      "Kun nopeusrajoitus on yli 80 km/h",
      "Ei koskaan"
    ],
    answer: 1,
    explanation: "Oikealta saa ohittaa vain, jos edellä ajava kääntyy vasemmalle ja tila oikealla riittää."
  },
  { question: "Mitä tarkoittaa, jos liikennemerkissä on sininen ympyrä ja valkoinen nuoli eteenpäin?",
    options: [
      "Ajokielto",
      "Pakollinen ajosuunta eteenpäin",
      "Etuajo-oikeus",
      "Pysäköintikielto"
    ],
    answer: 1,
    explanation: "Sininen ympyrä ja valkoinen nuoli eteenpäin tarkoittaa pakollista ajosuuntaa."
  },
  { question: "Milloin ajoneuvon kuljettaja saa käyttää kaukovaloja?",
    options: [
      "Aina kun haluaa",
      "Kun tie on valaistu",
      "Kun ei häikäise vastaantulijaa tai edellä ajavaa",
      "Vain moottoritiellä"
    ],
    answer: 2,
    explanation: "Kaukovaloja saa käyttää, jos ne eivät häikäise vastaantulijaa tai edellä ajavaa."
  },
  { question: "Mitä tarkoittaa, jos liikennevaloissa palaa keltainen valo yksinään?",
    options: [
      "Valot ovat pois käytöstä",
      "Valot vaihtuvat pian vihreäksi",
      "Valot vaihtuvat pian punaiseksi",
      "Varoitus: valo-ohjaus ei toimi normaalisti"
    ],
    answer: 3,
    explanation: "Yksinään palava keltainen valo tarkoittaa, että valo-ohjaus ei toimi normaalisti."
  },
  { question: "Milloin ajoneuvon kuljettaja saa käyttää sumuvaloja?",
    options: [
      "Aina kun haluaa",
      "Vain sumussa tai sateessa",
      "Vain moottoritiellä",
      "Kun nopeus on alle 50 km/h"
    ],
    answer: 1,
    explanation: "Sumuvaloja saa käyttää vain sumussa, sateessa tai muussa näkyvyyttä heikentävässä säässä."
  },
  { question: "Mitä tarkoittaa, jos tien reunassa on jatkuva keltainen viiva?",
    options: [
      "Pysäköinti kielletty",
      "Ajokielto",
      "Etuajo-oikeus",
      "Nopeusrajoitus"
    ],
    answer: 0,
    explanation: "Jatkuva keltainen viiva tien reunassa tarkoittaa pysäköintikieltoa."
  },
  { question: "Mitä tarkoittaa, jos liikennemerkissä on punainen kolmio ja sisällä junan kuva?",
    options: [
      "Varoitus tasoristeyksestä",
      "Ajokielto",
      "Etuajo-oikeus",
      "Pysäköintikielto"
    ],
    answer: 0,
    explanation: "Punainen kolmio junan kuvalla varoittaa tasoristeyksestä."
  },
  { question: "Mitä tarkoittaa, jos liikennemerkissä on punainen kolmio ja sisällä hirven kuva?",
    options: [
      "Varoitus eläimistä tiellä",
      "Ajokielto",
      "Etuajo-oikeus",
      "Pysäköintikielto"
    ],
    answer: 0,
    explanation: "Punainen kolmio hirven kuvalla varoittaa eläimistä tiellä."
  },
  { question: "Mitä tarkoittaa, jos liikennemerkissä on punainen kolmio ja sisällä liukas tie -kuva?",
    options: [
      "Tie voi olla liukas",
      "Ajokielto",
      "Etuajo-oikeus",
      "Pysäköintikielto"
    ],
    answer: 0,
    explanation: "Punainen kolmio liukas tie -kuvalla varoittaa liukkaasta tiestä."
  },
  { question: "Mitä tarkoittaa, jos liikennemerkissä on punainen kolmio ja sisällä tietyökuva?",
    options: [
      "Tietyö edessä",
      "Ajokielto",
      "Etuajo-oikeus",
      "Pysäköintikielto"
    ],
    answer: 0,
    explanation: "Punainen kolmio tietyökuvalla varoittaa tietyöstä."
  }
];

const questionContainer = document.getElementById("questionContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const currentIndexSpan = document.getElementById("currentIndex");
const totalCountSpan = document.getElementById("totalCount");
const resultSection = document.getElementById("result");
const scoreSpan = document.getElementById("score");
const scoreMaxSpan = document.getElementById("scoreMax");
const percentSpan = document.getElementById("percent");
const explanationsDiv = document.getElementById("explanations");
const summaryText = document.getElementById("summaryText");

let currentIndex = 0;
let userAnswers = new Array(questions.length).fill(null);

totalCountSpan.textContent = questions.length;

function showQuestion(index) {
  const q = questions[index];
  questionContainer.innerHTML = `
    <h3>${q.question}</h3>
    <ul>
      ${q.options.map((opt, i) => `
        <li>
          <label>
            <input type="radio" name="q${index}" value="${i}" ${userAnswers[index] === i ? "checked" : ""}>
            ${opt}
          </label>
        </li>`).join("")}
    </ul>
  `;
  currentIndexSpan.textContent = index + 1;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === questions.length - 1;
}

function tallennaTietovisaPisteet(score, maxQuestions) {
  const scores = JSON.parse(localStorage.getItem("gameScores")) || {};
  scores.tietovisa = {
    pisteet: score,
    yritykset: maxQuestions
  };
  localStorage.setItem("gameScores", JSON.stringify(scores));
}

function saveAnswer() {
  const selected = document.querySelector(`input[name="q${currentIndex}"]:checked`);
  if (selected) userAnswers[currentIndex] = parseInt(selected.value);
}

function calculateResults() {
  let score = 0;
  explanationsDiv.innerHTML = "";
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
    const correct = q.options[q.answer];
    const user = userAnswers[i] !== null ? q.options[userAnswers[i]] : "Ei vastausta";
    explanationsDiv.innerHTML += `
      <p><strong>Kysymys ${i + 1}:</strong> ${q.question}<br>
      Vastauksesi: ${user}<br>
      Oikea vastaus: ${correct}<br>
      Selitys: ${q.explanation}</p>
    `;
  });

  scoreSpan.textContent = score;
  scoreMaxSpan.textContent = questions.length;
  percentSpan.textContent = Math.round((score / questions.length) * 100);
  summaryText.textContent = score > questions.length / 2
    ? "Hyvin hallussa liikennemerkit!"
    : "Kannattaa vielä harjoitella lisää.";
  resultSection.hidden = false;

  // Tallennetaan viimeisin tulos koostesivulle
  tallennaTietovisaPisteet(score, questions.length);
}

nextBtn.addEventListener("click", () => {
  saveAnswer();
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion(currentIndex);
  }
});

prevBtn.addEventListener("click", () => {
  saveAnswer();
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion(currentIndex);
  }
});

submitBtn.addEventListener("click", () => {
  saveAnswer();
  calculateResults();
});

resetBtn.addEventListener("click", () => {
  currentIndex = 0;
  userAnswers.fill(null);
  resultSection.hidden = true;
  explanationsDiv.innerHTML = "";
  summaryText.textContent = "";
  percentSpan.textContent = "0";
  scoreSpan.textContent = "0";
  scoreMaxSpan.textContent = questions.length;
  showQuestion(currentIndex);
});

showQuestion(currentIndex);