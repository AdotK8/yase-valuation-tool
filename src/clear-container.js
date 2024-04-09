export default function clearWidget() {
  return new Promise((resolve) => {
    // Simulate a 0.3s delay
    setTimeout(() => {
      const container = document.querySelector(".container");
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      resolve();
    }, 300);
  });
}
