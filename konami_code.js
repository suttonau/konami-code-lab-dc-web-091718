const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let indx = 0

  document.body.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key === codes[indx]) {
      indx++;

      if (indx === codes.length) {
        alert("Hurray!");
        indx = 0;
      }
    } else {
      index = 0;
    }
  })

}
