// Sanalista ja vihjeet
const liikennesanat = [
  { sana: "suojatie", vihje: "Ylityspaikka, jossa autoilijan on väistettävä jalankulkijaa" },
  { sana: "liikennemerkki", vihje: "Visuaalinen ohje tien käyttäjälle" },
  { sana: "turvavyö", vihje: "Pakollinen varuste, joka suojaa törmäyksessä" },
  { sana: "risteys", vihje: "Kohta, jossa kaksi tai useampi tie kohtaa" },
  { sana: "stop", vihje: "Käsky, joka vaatii täydellistä pysähtymistä" },
  { sana: "kolmio", vihje: "Muoto, joka usein liittyy väistämisvelvollisuuteen" },
  { sana: "valot", vihje: "Ohjaavat liikennettä väreillä" },
  { sana: "ylinopeus", vihje: "Rikkomus, jossa nopeusraja ylittyy" },
  { sana: "pyörätie", vihje: "Väylä, joka on tarkoitettu kahdelle pyörälle" },
  { sana: "ajokortti", vihje: "Virallinen lupa kuljettaa ajoneuvoa" },
  { sana: "nopeusrajoitus", vihje: "Suurin sallittu vauhti tietyllä tieosuudella" },
  { sana: "jalankulkija", vihje: "Liikenteen osapuoli ilman ajoneuvoa" },
  { sana: "väistämisvelvollisuus", vihje: "Tilanne, jossa et saa mennä ensin" },
  { sana: "kaista", vihje: "Ajolinjan osa, jota pitkin kuljetaan" },
  { sana: "moottoritie", vihje: "Vain moottoriajoneuvoille tarkoitettu nopea väylä" },
  { sana: "pysäköinti", vihje: "Ajoneuvon jättäminen tilapäisesti" },
  { sana: "ajoneuvo", vihje: "Yleisnimitys kulkuvälineelle tiellä" },
  { sana: "kypärä", vihje: "Pään suoja, erityisesti kaksipyöräisillä" },
  { sana: "tieliikenne", vihje: "Kaikki liikkuminen tiellä sääntöjen mukaan" },
  { sana: "varoituskolmio", vihje: "Heijastava esine, joka asetetaan tien varteen hätätilanteessa" },
  { sana: "ajovalot", vihje: "Näkyvyyden parantaja pimeällä" },
  { sana: "perävaunu", vihje: "Ajoneuvon perässä kulkeva lisäosa" },
  { sana: "liikenneympyrä", vihje: "Rengasmainen risteys, jossa kiertosuunta ratkaisee etuuden" },
  { sana: "pakokaasu", vihje: "Moottorin toiminnan sivutuote" },
  { sana: "hätävilkut", vihje: "Käytetään varoittamaan muista poikkeavasta tilanteesta" }
];

// pelimuuttujat
let valittuSana = "";
let naytettavaSana = [];
let arvatutKirjaimet = [];
let yrityksiaJaljella = 6;
let pisteet = 10;
let vihjeKaytetty = false;

// Uusi peli
function aloitaPeli() {
  const satunnainen = liikennesanat[Math.floor(Math.random() * liikennesanat.length)];
  valittuSana = satunnainen.sana.toLowerCase();
  naytettavaSana = Array(valittuSana.length).fill("_");
  arvatutKirjaimet = [];
  yrityksiaJaljella = 6;
  pisteet = 10;
  vihjeKaytetty = false;

  document.getElementById("vihje").textContent = satunnainen.vihje;
  document.getElementById("vihje").style.visibility = "hidden";
  document.getElementById("viesti").textContent = "";

  paivitaHirsipuuKuva();
  paivitaNaytto();
}

// pelinäkymän päivitys edetessä
function paivitaNaytto() {
  document.getElementById("wordDisplay").textContent = naytettavaSana.join(" ");
  document.getElementById("arvatutKirjaimet").textContent = arvatutKirjaimet.join(", ");
  document.getElementById("yrityksiaJaljella").textContent = yrityksiaJaljella;
  document.getElementById("pisteet").textContent = pisteet;
}

// arvatun kirjaimen käsittely
function arvaaKirjain() {
  const syote = document.getElementById("syotakirjain");
  const kirjain = syote.value.toLowerCase();
  syote.value = "";

  if (!kirjain.match(/^[a-zåäö]$/i) || arvatutKirjaimet.includes(kirjain)) return;

  arvatutKirjaimet.push(kirjain);

  let oikein = false;
  for (let i = 0; i < valittuSana.length; i++) {
    if (valittuSana[i] === kirjain) {
      naytettavaSana[i] = kirjain;
      oikein = true;
    }
  }

  if (!oikein) {
    yrityksiaJaljella--;
    pisteet--;
  }

  paivitaNaytto();
  paivitaHirsipuuKuva();
  tarkistaPelitilanne();
}

// Vihje ja pisteiden vähennys
function naytaVihje() {
  const vihjeElementti = document.getElementById("vihje");
  vihjeElementti.style.visibility = "visible";

  if (!vihjeKaytetty) {
    pisteet -= 2;
    vihjeKaytetty = true;
    paivitaNaytto();
  }
}

// Hirsipuukuvan päivitys
function paivitaHirsipuuKuva() {
  const virheita = 6 - yrityksiaJaljella;
  document.getElementById("hangmanImage").src = `./images/hirsipuu/hangman${virheita}.png`;
}

// Tarkistaa pelitilanteen (voitto vai häviö)
function tarkistaPelitilanne() {
  if (!naytettavaSana.includes("_")) {
    document.getElementById("viesti").textContent = `🎉 Voitit! Sana oli "${valittuSana}". Pisteet: ${pisteet}`;
    tallennaPisteet(pisteet);
  } else if (yrityksiaJaljella === 0) {
    document.getElementById("viesti").textContent = `😢 Hävisit! Sana oli "${valittuSana}". Pisteet: 0`;
    tallennaPisteet(0);
  }
}

// Enter-nappi syöttämään valittu kirjain
document.addEventListener("DOMContentLoaded", () => {
  const syote = document.getElementById("syotakirjain");
  if (syote) {
    syote.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        arvaaKirjain();
      }
    });
  }
});
//pisteiden tallennus
function tallennaPisteet(pisteet) {
  const scores = JSON.parse(localStorage.getItem("gameScores")) || {};
  scores.hirsipuu = {
    pisteet: pisteet
  };
  localStorage.setItem("gameScores", JSON.stringify(scores));
}

// Itse pelin käynnistys kun se ladattu
window.onload = aloitaPeli;