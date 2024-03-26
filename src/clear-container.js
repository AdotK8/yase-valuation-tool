export default function clearWidget() {
  const container = document.querySelector(".container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
