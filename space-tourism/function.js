const buttons = document.querySelectorAll('.menu .botton-navbar');
const body = document.body; // Selectăm elementul <body> pentru a schimba fundalul
const defaultContent = document.getElementById('default-content'); // Conținutul default
const dynamicContent = document.getElementById('dynamic-content'); // Conținutul dinamic
const exploreButton = document.querySelector('.botton-section'); // Butonul din secțiune

// Setăm fundalul implicit pentru secțiunea "home"
const defaultSection = sectionsData.find(section => section.id === "home");
if (defaultSection) {
    body.style.backgroundImage = defaultSection.backgroundImage;
    body.style.backgroundSize = "cover"; // Asigurăm că imaginea acoperă întreaga pagină
    body.style.backgroundRepeat = "no-repeat"; // Prevenim repetarea imaginii
    body.style.backgroundPosition = "center"; // Centram imaginea
    document.title = defaultSection.pageTitle; // Setăm titlul implicit
}

// Adăugăm evenimente de click pentru butoane
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Eliminăm clasa 'active' de la toate butoanele
        buttons.forEach(btn => btn.classList.remove('active'));
        // Adăugăm clasa 'active' doar butonului apăsat
        button.classList.add('active');

        // Obținem ID-ul butonului apăsat
        const sectionId = button.getAttribute('data-content');

        // Găsim datele corespunzătoare din masiv
        const sectionData = sectionsData.find(section => section.id === sectionId);

        // Schimbăm fundalul paginii și titlul
        if (sectionData) {
            body.style.backgroundImage = sectionData.backgroundImage;
            body.style.backgroundSize = "cover";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundPosition = "center";
            document.title = sectionData.pageTitle;
        }

        // Gestionăm conținutul secțiunii
        if (sectionId === "home") {
            // Afișăm conținutul default și butonul
            defaultContent.style.display = "block";
            dynamicContent.style.display = "none";
            exploreButton.style.display = "block"; // Afișăm butonul
        } else {
            // Ascundem conținutul default și butonul
            defaultContent.style.display = "none";
            dynamicContent.style.display = "block";
            exploreButton.style.display = "none"; // Ascundem butonul

            // Actualizăm conținutul dinamic
            if (sectionData) {
                dynamicContent.innerHTML = sectionData.content;

                // Gestionăm butoanele din secțiunea "Destination"
                if (sectionId === "destination") {
                    const planetButtons = document.querySelectorAll('.destination-btn');
                    const planetContent = document.getElementById('planet-content');

                    // Simulăm un clic pe butonul "Moon" pentru a-l seta ca default
                    const moonButton = document.querySelector('.destination-btn[data-planet="moon"]');
                    if (moonButton) {
                        moonButton.click();
                    }

                    // Adăugăm evenimente pentru butoanele planetelor
                    planetButtons.forEach(planetButton => {
                        planetButton.addEventListener('click', () => {
                            // Obținem ID-ul planetei selectate
                            const planetId = planetButton.getAttribute('data-planet');
                            const planetData = sectionsData.find(section => section.id === 'destination').planets.find(planet => planet.id === planetId);

                            // Actualizăm conținutul pentru planeta selectată
                            if (planetData) {
                                planetContent.innerHTML = `
                                    <p class="title-destination">${planetData.title}</p>
                                    <p class="big-text-destination">${planetData.description}</p>
                                    <div class="custom-line-destination"></div>
                                    <div class="section-1">
                                        <div class="mr-80">
                                            <p class="small-text">Distance</p>
                                            <p class="grand-text">${planetData.distance}<span>KM</span></p>
                                        </div>
                                        <div>
                                            <p class="small-text">Travel time</p>
                                            <p class="grand-text">${planetData.travelTime}<span>Days</span></p>
                                        </div>
                                    </div>
                                `;
                            }
                        });
                    });
                }
            }
        }
    });
});

// Adăugăm eveniment pentru butonul EXPLORE
exploreButton.addEventListener('click', () => {
    // Simulăm un clic pe butonul "Destination"
    const destinationButton = document.querySelector('.menu .botton-navbar[data-content="destination"]');
    if (destinationButton) {
        destinationButton.click(); // Declanșăm evenimentul de clic pentru butonul "Destination"
    }
});

const navbar = document.querySelector('.navbar'); // Selectăm navbar-ul

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-content');

        // Găsim datele corespunzătoare din masiv
        const sectionData = sectionsData.find(section => section.id === sectionId);

        // Schimbăm fundalul paginii și titlul
        if (sectionData) {
            body.style.backgroundImage = sectionData.backgroundImage;
            body.style.backgroundSize = "cover";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundPosition = "center";
            document.title = sectionData.pageTitle;
        }

        // Gestionăm conținutul secțiunii
        if (sectionId === "destination") {
            // Adăugăm clasa pentru navbar când suntem în secțiunea "Destination"
            navbar.classList.add('destination-active');
        } else {
            // Eliminăm clasa pentru alte secțiuni
            navbar.classList.remove('destination-active');
        }
    });
});

// Selectăm toate butoanele din secțiunea Destination
const planetButtons = document.querySelectorAll('.destination-btn');

planetButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Eliminăm clasa 'active' de la toate butoanele
        planetButtons.forEach(btn => btn.classList.remove('active'));

        // Adăugăm clasa 'active' doar butonului apăsat
        button.classList.add('active');
    });
});


