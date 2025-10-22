document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();
    const type = document.querySelector('input[name="type"]:checked');
    const rating = document.querySelector('input[name="rating"]:checked');
  
    if (!name || !email || !feedback || !type || !rating) {
      alert("Please fill all fields before submitting!");
      return;
    }
  
    // Store in localStorage for next page
    localStorage.setItem("feedbackData", JSON.stringify({
      name, email, feedback, type: type.value, rating: rating.value
    }));
  
    // Redirect to response page
    window.location.href = "response.html";
  });
  