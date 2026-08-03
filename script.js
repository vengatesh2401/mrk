const form = document.getElementById("regForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        college: document.getElementById("college").value,
        year: document.getElementById("year").value,
        department: document.getElementById("department").value
    };

    try {
        const response = await fetch("http://100.93.11.32:5678/webhook/symposium-register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {

            // ADD THESE LINES HERE
            formMsg.textContent =
                "Registration successful! Please check your email for the confirmation.";
            formMsg.className = "form-msg success";

            form.reset();

        } else {

            formMsg.textContent = "Registration failed!";
            formMsg.className = "form-msg error";

        }

    } catch (error) {

        formMsg.textContent = "Something went wrong!";
        formMsg.className = "form-msg error";

    }
});
