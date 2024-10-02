function calculateAge() {
    let userInput = document.getElementById('dateOfBirth').value;
    if (!userInput) {
        document.getElementById('result').innerText = "Please enter your date of birth.";
        return;
    }
   
    let birthDate = new Date(userInput);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    if (days < 0) {
        months--;
        
        let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerHTML =  `You are <span class="years">${years}</span> years,
     <span class="months">${months}</span> months, and <span class="days">${days}</span> days old.`;
}
