// Données des slides
const slides = [
  { image: "slide1.jpg", tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" },
  { image: "slide2.jpg", tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
  { image: "slide3.jpg", tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>" },
  { image: "slide4.png", tagLine: "Autocollants <span>avec découpe laser sur mesure</span>" }
];

// Récupération des éléments du DOM
const left = document.getElementById('left');
const right = document.getElementById('right');
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

// Index courant
let currentIndex = 0;

// Fonction d'affichage d'une slide
function showSlide(index) {
  // 1) Changer l'image (penser au bon chemin)
  const slide = slides[index];
  bannerImg.src = "./assets/images/slideshow/" + slide.image;

  // 2) Changer le texte correspondant
  bannerText.innerHTML = slide.tagLine;

  // 3) Mettre à jour les bullet points
  for (let i = 0; i < dots.length; i++) {
    if (i === index) {
      dots[i].classList.add('dot_selected');
    } else {
      dots[i].classList.remove('dot_selected');
    }
  }
}

// Actions flèche droite
right.addEventListener('click', function () {
  // Aller au suivant
  currentIndex = currentIndex + 1;

  // Si on dépasse la dernière image, on revient à la première
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }

  showSlide(currentIndex);
});

// Actions flèche gauche
left.addEventListener('click', function () {
  // Aller au précédent
  currentIndex = currentIndex - 1;

  // Si on passe avant la première image, on va à la dernière
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  showSlide(currentIndex);
});

// Afficher la première slide au chargement
showSlide(currentIndex);
