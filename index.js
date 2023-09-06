const audioError = new Audio('./assets/sound/error.mp3');
const audioSuccess = new Audio('./assets/sound/success.mp3');
let countAge = document.getElementById('countAge').addEventListener("click", () => {
    let dayInput = document.getElementById('dayInput').value;
    let monthInput = document.getElementById('monthInput').value;
    let yearInput = document.getElementById('yearInput').value;
    let label = document.querySelectorAll('label');
    let input = document.querySelectorAll('input');
    let requiredDay = document.getElementById('requiredDay')
    let requiredMonth = document.getElementById('requiredMonth')
    let requiredYears = document.getElementById('requiredYear')
    if (dayInput == "" || monthInput == "" || yearInput == "") {
        audioError.play();
        for (let i = 0; i < label.length; i++) {
            label[i].style.color = "hsl(0,100%,67%)"
            input[i].style.borderColor = "hsl(0,100%,67%)"
            requiredDay.style.display = "block"
            requiredMonth.style.display = "block"
            requiredYears.style.display = "block"
        }
    }
    else {
        audioSuccess.play()
        let date = new Date()
        let dayInput2 = date.getDate()
        let monthInput2 = 1 + date.getMonth()
        let yearInput2 = date.getFullYear()
        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if (dayInput > dayInput2) {
            dayInput2 = dayInput2 + months[monthInput2 - 1];
            monthInput2 = monthInput2 - 1
        }
        if (monthInput > monthInput2) {
            monthInput2 = monthInput2 + 12;
            yearInput2 = yearInput2 - 1;
        }
        let d = dayInput2 - dayInput;
        let m = monthInput2 - monthInput
        let y = yearInput2 - yearInput

        if (dayInput > 31) {
            let requiredDay = document.getElementById('requiredDay')
            requiredDay.innerHTML = "Must be a valid day"
            requiredDay.style.display = 'block'
        }
        if (monthInput > 12) {
            let requiredMonth = document.getElementById('requiredMonth')
            requiredMonth.innerHTML = "Must be a valid month"
            requiredMonth.style.display = 'block'
        }
        if (yearInput > yearInput2) {
            let requiredYears = document.getElementById('requiredYear')
            requiredYears.innerHTML = "Must be in the pass"
            requiredYears.style.display = 'block'
        }
        if (dayInput < 31 && monthInput < 12 && yearInput < yearInput2) {
            for (let i = 0; i < label.length; i++) {
                label[i].style.color = "hsl(0,1%,44%)"
                input[i].style.borderColor = "hsl(0,0%,86%)"
                requiredDay.style.display = "none"
                requiredMonth.style.display = "none"
                requiredYears.style.display = "none"
            }
            document.getElementById('days').innerText = d
            document.getElementById('months').innerText = m
            document.getElementById('years').innerText = y
        }

    }

})
