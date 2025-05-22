document.getElementById("checkBtn").addEventListener("click", async () => {
  const result = document.getElementById("result");
  result.textContent = "Checking...";

  try {
    const response = await fetch("https://commodify-backend.onrender.com/");
    const data = await response.json();
    result.textContent = `Backend says: ${data.message}`;
  } catch (error) {
    result.textContent = "❌ Error connecting to backend.";
    console.error(error);
  }
});
