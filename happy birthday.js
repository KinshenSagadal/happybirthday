// Play birthday song
document.getElementById('playButton').addEventListener('click', function() {
  const song = document.getElementById('birthdaySong');
  song.play();
});

// Play Message
document.getElementById('playMessage').addEventListener('click', function() {
  const song = document.getElementById('birthdayMessage');
  song.play();
});

// Confetti animation
// Using a simple confetti library or custom implementation
// For example purposes, let's assume confetti.js handles the animation

// Birthday card flip
const card = document.getElementById('birthdayCard');
card.addEventListener('click', function() {
  card.classList.toggle('flipped');
});
