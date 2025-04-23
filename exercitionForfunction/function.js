// problema cu cuptor

const EXPECTED_MINUTES_IN_OVEN = 40

function remainingMinutesInOven(actualMinutesInOven) {
   console.log(EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven) 
}

remainingMinutesInOven(30); // Exemplu de apel corect

function preparationTimeInMinutes(numberOfLayers) {
    console.log( 2 * numberOfLayers )
}

function totalTimeInMinutes(numberOfLayers,actualMinutesInOven) {
    console.log( 2 * numberOfLayers + actualMinutesInOven )
}

// problema cu permis de conducere

function needsLicense(kind) {
    if ( kind==='car' || kind==='truck') {
        console.log(true)
    } else {
        console.log(false)
    }
}

function chooseVehicle(option1, option2) {
    if (option1<option2) {
        console.log(`${option1} is clearly the better choice`)
    } else {
        console.log(`${option2} is clearly the better choice`)
    }
}

function calculateResellPrice(originalPrice, age) {
    if ( age < 3) {
        console.log(originalPrice * 0.80)
    } else if (age <= 10) {
        console.log(originalPrice * 0.70)
    } else  {
        console.log(originalPrice * 0.50)
    }
}

// infinitate sau o bucla nu folosim asa ceva niciodata
function infinitate() {
    let number = 10
    let x = 2

    while (x < number) {
        console.log(x)
    }
}

function getRandomnumber(number) {
    var randomNumber = Math.random ();
    console.log(number)
}

// Operatori aritmetici

// calcularea tarifului
function dayRate(hourlyRate) {
    return hourlyRate * 8;
}

    console.log(dayRate(89));

// numarul de zi in functie de buget
function daysInBudget(budget, hourlyRate) {
    const dailyRate = dayRate(hourlyRate);
    return Math.floor(budget / dailyRate);
}

    console.log(daysInBudget(20000, 89));

// calcul de pret pentru proiect
function priceWithMonthlyDiscount(hourlyRate, totalDays, discount) {
    const dailyRate = dayRate(hourlyRate);
    const fullMonths = Math.floor(totalDays / 22); // Fiecare lună are 22 zile facturabile
    const remainingDays = totalDays % 22;

    const discountedMonthlyRate = dailyRate * 22 * (1 - discount); // Tarif lunar cu discount
    const remainingDaysRate = remainingDays * dailyRate; // Tarif pentru zilele rămase

    return Math.ceil(fullMonths * discountedMonthlyRate + remainingDaysRate);
}

    console.log(priceWithMonthlyDiscount(89, 230, 0.42)); 


// tema obligatorie

//  1 Funtia de verificaredaca se divizeaza un numar
function isDivisibleBy10(number) {
    return number % 10 === 0;
}
    console.log(isDivisibleBy10(100)); //  true
    console.log(isDivisibleBy10(23));  //  false

// 2 functia tellFortune
function tellFortune(numarCopii, numePartener, locatieGeografica, locMunca) {
    console.log(`Vei fi un ${locMunca} în ${locatieGeografica}, căsătorit cu ${numePartener} și vei avea ${numarCopii} copii.`);
}

tellFortune(3, "Emanuel", "Italia", "Programator");  

// 3 zilele saptamanii
function getDayOfWeek(day) {
    switch (day) {
        case 1:
            console.log("Luni");
            break;
        case 2:
            console.log("Marti");
            break;
        case 3:
            console.log("Miercuri");
            break;
        case 4:
            console.log("Joi");
            break;
        case 5:
            console.log("Vineri");
            break;
        case 6:
            console.log("Sambata");
            break;
        case 7:
            console.log("Duminica");
            break;
        default:
            console.log("Numar invalid pentru ziua saptamanii.");
    }
}

    console.log(getDayOfWeek(1)); // Output: Luni
    console.log(getDayOfWeek(5)); // Output: Vineri
    console.log(getDayOfWeek(8)); // Output: Număr invalid! Introdu un număr între 1 și 7.

