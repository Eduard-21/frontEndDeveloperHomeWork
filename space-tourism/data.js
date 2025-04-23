const sectionsData = [
    {
        id: "home",
        backgroundImage: "url('./img/img-home/background-home-desktop.jpg')", // Imagine de fundal pentru Home
        pageTitle: "Home - Space Tourism" // Titlul paginii pentru Home
    },
    {
        id: "destination",
        backgroundImage: "url('./img/img-destination/Background-desktop.png')", // Imagine de fundal pentru Destination
        pageTitle: "Destination - Space Tourism", // Titlul paginii pentru Destination
        content: `
        <p class="subtitle-destination mb-100 ml-230"><span class="number-2"> 01 </span>Pick your destination</p>
        <div class="flex">
            <img class="wh-450 mlr-150 mb-50" src="./img/img-destination/Moon-img.png" alt="Not found">
            <div class="wh-text ml-70">
                <div class="destination-buttons align-start">
                    <button class="destination-btn" data-planet="moon">Moon</button>
                    <button class="destination-btn" data-planet="mars">Mars</button>
                    <button class="destination-btn" data-planet="europa">Europa</button>
                    <button class="destination-btn" data-planet="titan">Titan</button>
                </div>
                <p class="title-destination">MOON</p>
                <p class="big-text-destination">See our planet as you’ve never seen it before. A perfect 
                    relaxing trip away to help regain perspective and come 
                    back refreshed. While you’re there, take in some 
                    history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div class="custom-line-destination " ></div>
                <div class="section-1">
                    <div class="mr-80">
                        <p class="small-text">Distance</p>
                        <p class="grand-text">384,400<span>KM</span></p>
                    </div>
                    <div>
                        <p class="small-text">tranvel time</p>
                        <p class="grand-text">3<span>Days</span></p>
                    </div>
                </div>
            </div>
        </div>
        `,
        planets: [
            {
                id: "moon",
                title: "Moon",
                description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
                distance: "384,400",
                travelTime: "3",
                image: "./img/img-destination/Moon-img.png"
            },
            {
                id: "mars",
                title: "Mars",
                description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
                distance: "225,000,000",
                travelTime: "9",
                image: "./img/img-destination/Mars-img.png"
            },
            {
                id: "europa",
                title: "Europa",
                description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for ice skating, curling, hockey, or simple relaxation in your snug winter cabin.",
                distance: "628,000,000",
                travelTime: "6",
                image: "./img/img-destination/Europa-img.png"
            },
            {
                id: "titan",
                title: "Titan",
                description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
                distance: "1,200,000,000",
                travelTime: "7",
                image: "./img/img-destination/Titan-img.png"
            }
        ]
    },
    {
        id: "crew",
        backgroundImage: "url('./img/img-crew/Background-desktop.png')", // Imagine de fundal pentru Crew
        pageTitle: "Crew - Space Tourism", // Titlul paginii pentru Crew
        content: `<p>Meet your crew here!</p>`
    },
    {
        id: "technology",
        backgroundImage: "url('./img/img-technology/Background-desktop.jpg')", // Imagine de fundal pentru Technology
        pageTitle: "Technology - Space Tourism", // Titlul paginii pentru Technology
        content: `<p>Learn about our technology here!</p>`
    }
];