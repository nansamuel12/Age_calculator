function calculateAge() {
    const birthYear = document.getElementById('birthYear').value;
    const birthMonth = document.getElementById('birthMonth').value;
    const birthDay = document.getElementById('birthDay').value;

    if (!birthYear || !birthMonth || birthMonth === "" || !birthDay) {
        document.getElementById('ageResult').textContent = "Please enter your birth year, month, and day.";
        return;
    }

    const birthDate = new Date(birthYear, birthMonth, birthDay);
    const currentDate = new Date();

    // Basic validation to catch invalid dates (e.g., Feb 30th)
    if (birthDate.getFullYear() != birthYear || birthDate.getMonth() != birthMonth || birthDate.getDate() != birthDay) {
        document.getElementById('ageResult').textContent = "Please enter a valid date of birth.";
        return;
    }

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('ageResult').textContent = `Your age is ${age} years.`;
}