export function setupCounter(element) {
  let counter = 0
  function increment(count) {
    element.textContent = `count is ${count}`
    count++
  }
  increment(0);
  element.addEventListener('click', increment)
}
