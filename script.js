
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;

  if (name && email) {
    alert('Thank you, ' + name + '! I will reach out to you soon.');
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});
