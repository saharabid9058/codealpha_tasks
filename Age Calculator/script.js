function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const resultElement = document.getElementById("result");

    if (!dobInput) {
        resultElement.innerText = "⚠️ Please enter your date of birth!";
        resultElement.classList.add("show");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    resultElement.innerText = `🎉 You are ${age} years old! 🎂`;
    resultElement.classList.add("show");
}
