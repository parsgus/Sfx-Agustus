document.addEventListener('DOMContentLoaded', function () {
  const glowBox = document.getElementById('glowBox');

  if (glowBox) {
    glowBox.addEventListener('click', function () {
      glowBox.classList.toggle('active');
    });
  }
});
