// script.js

document.getElementById('generate-btn').addEventListener('click', function() {
    const facts = [
        "The Eiffel Tower can be 15 cm taller during the summer.",
        "Bananas are berries, but strawberries aren't.",
        "There are more stars in the universe than grains of sand on Earth.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
        "Octopuses have three hearts and blue blood.",
        "A group of flamingos is called a 'flamboyance'.",
       " Japan has 23 vending machines per person.",
       "The largest pair of eyes in the world belongs to the giant squid.",
       "The Pokemon Rhydon was the first to ever be created.",
       "Super Mario Land was the most popular game on the Game Boy during its release.",
       "Soccer balls were once used for playing basketball.",
       "A candle's flame is hot and blue in zero gravity.",
      " Putting sugar on a cut will make it heal faster.",
       "The national flag of Libya was formerly just the color green.",
       "The plastic tips of shoelaces are called aglets.",
       "Penguins fly underwater."
     ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById('fact-display').innerText = randomFact;
});
