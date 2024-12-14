// Texts for each memory
const memoryTexts = [
  "little packet of cuteness",
  "that's a baby bunny y'all!",
  "born photogenic •̀.̫ •́✧",
  "look at those damnn cheeksss!",
  "'naakem sambandham ledhu amma, anthaa thane chesindhi' face",
  "poolachokka eskunna kukkapilla",
  "ahhhsjdsgsbk how soo cuteeee!!(⁠╥⁠﹏⁠╥⁠)",
  "birthdayy boyyy<3",
  "birthday boy rocking his fit •̀.̫ •́✧",
  "yumyumyumyummm",
  //
  "tiny little bean in tiny little uniform",
  "FL(A)GPC",
  "mamba and baa",
  "handsome handsome •̀.̫ •́✧",
  "yass the couple pose ( ˘ ³˘)",
  "machaa-aloo",
  "one with teddybeaw",
  "one with the gang",
  "mamba-ramya",
  "tinytots",
  //
  "the trio •̀.̫ •́✧",
  "GRAPPHLIC!<3",
  "and taran adarsh",
  "beachhbabyyy",
  "baaga aadukunnam frands",
  "yarada is love<3",
  "FLAGPC",
  "one after a longgg time",
  "mini FLAGPC at the housewarming function ( ˘ ³˘)",
  "have a break, have kitktat",
  //
  "it's aloo-machaa again",
  "cake thinnamochhh",
  "merryy-go-roundd",
  "fotugraphew sotu",
  "the first overnight hackathon",
  "cheat day with boyfriends",
  "another overnight hackathon",
  "had momos, drank soda and enjoyed!",
  "buwgew kings",
  "workmode-on",
  //
  "'flowews baunnai, bwujjipapa ki pampidham'",
  "frooti kosam kotukuntunna machaa-aloo",
  "sidhaa and sowrii",
  "cheers to a perfect organized hackathon!",
  "kukkapilla's smoll toiny circle",
  "kurta day:D t'was dussehra btw",
  "the organizers •̀.̫ •́✧",
  "the DevFest dayy",
  "movie maniacs •̀.̫ •́✧",
  "and that's a kukkapilla holding another kukkapilla",
  //
  "umhmm subtle hints with paper rings and paper flowers (¬ ₃ ͡¬) ",
  "the best morning fr.",
  "always making his bwujjipapa crave for him more and more (⁠╥⁠﹏⁠╥⁠)",
  "we doodle doodlee ( ˘ ³˘)",
  "the fiwst surprise?",
  "beachbabiess<3",
  "favourite time of the day (⁠╥⁠﹏⁠╥⁠)",
  "couldn't have asked for a better first date. t'was the best!!!",
  "I like shiny things but i'd marry you with paper rings~~",
  "the first beach date ☼♒︎𓂁",
  //
  "bwujjjjiesttttt boyfriend!(⁠╥⁠﹏⁠╥⁠)",
  "take us back to this day please?(⁠╥⁠﹏⁠╥⁠)",
  "surprise at its best. and our first cuddle(⁠╥⁠﹏⁠╥⁠)",
  "miwwowwmazeee",
  "bwujjjibabyy and his bwujjjipapa ⋆. 𐙚 ˚",
  "happy boyfwends' day",
  "we had the perfect movie date<3"
];

// Timeline click events
document.querySelectorAll('.timeline-item').forEach((item) => {
  item.addEventListener('click', () => {
    const memoryId = parseInt(item.getAttribute('data-memory'), 10); // Get the memory ID (1-5)
    generateMemories(memoryId); // Call the function to generate the memory boxes
  });
});

// Generate memory boxes
function generateMemories(memoryId) {
  const container = document.querySelector('.memory-roadmap');
  container.innerHTML = ''; // Clear previous boxes

  let startImageIndex, endImageIndex;

  if (memoryId === 4) {
    // Fourth box generates 20 images (31–50)
    startImageIndex = 31;
    endImageIndex = 50;
  } else if (memoryId === 5) {
    // Fifth box generates 17 images (51–67)
    startImageIndex = 51;
    endImageIndex = 67;
  } else {
    // Other boxes generate 10 images each
    startImageIndex = (memoryId - 1) * 10 + 1;
    endImageIndex = startImageIndex + 9;
  }

  for (let i = startImageIndex; i <= endImageIndex; i++) {
    const box = document.createElement('div');
    box.className = 'memory-box';
    box.innerHTML = `
      <img src="memory${i}.jpg" alt="Memory ${i}">
      <p>${memoryTexts[i - 1]}</p>
    `;
    container.appendChild(box);
  }
}

// Unlock Overlay Logic
const validAnswers = [
  "5",
  "5 months",
  "5 Months",
  "five",
  "Five",
  "five months",
  "Five Months"
];
const overlay = document.getElementById('unlock-overlay');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-answer');
const feedbackMessage = document.getElementById('feedback-message');

submitButton.addEventListener('click', () => {
  const userAnswer = answerInput.value.trim();
  if (validAnswers.includes(userAnswer)) {
    feedbackMessage.style.color = 'green';
    feedbackMessage.textContent = "Hmm, gubboii<3";
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 1000);
  } else {
    feedbackMessage.style.color = 'red';
    feedbackMessage.textContent = "Ay! Correct answers only.";
  }
});
