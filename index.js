// script.js
const facts = [
    "Honey never spoils.",
    "A day on Venus is longer than a year on Venus.",
    "Bananas are berries, but strawberries aren't.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Octopuses have three hearts.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Some cats are allergic to humans.",
    "A group of flamingos is called a 'flamboyance'.",
    "The unicorn is the national animal of Scotland.",
    "Bees sometimes sting other bees."
];

document.getElementById('generateFactButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
