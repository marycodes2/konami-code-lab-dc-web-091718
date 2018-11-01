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
  let index = 0
  let doc = document.body
  doc.addEventListener('keydown', function(event) {
    const key = event.key

    if (codes[index] === key) {
      index++ }
    else {
      index = 0
    }

    if (index === codes.length) {
      window.alert("Hurray!")
      index = 0
    }

  })
}
