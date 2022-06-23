export default function hoHashLinks() {
  let hashLinks = document.querySelectorAll('[href="#"]');

  for (let index = 0; index < hashLinks.length; index++) {
    hashLinks[index].addEventListener('click', function(event) {
      event.preventDefault();
    });
  }
}
