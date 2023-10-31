document.querySelectorAll('#spalvos button').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const sectionElement = document.querySelector('#spalvos');
        const buttonColor = button.innerText.toLowerCase().trim();

        if (buttonColor === 'red') {
            sectionElement.style.backgroundColor = 'red';
        } else if (buttonColor === 'green') {
            sectionElement.style.backgroundColor = 'green';
        } else if (buttonColor === 'blue') {
            sectionElement.style.backgroundColor = 'blue';
        } else {
            sectionElement.style.backgroundColor = 'white';
        }
    });
});

// Practice assignments

// 1
let test = 'webmaster';

function webmaster(par1){
    const split = par1.split(''); // Atskiriam kiekvieną string'o raidę ir gauname raidžių masyvą;

    split.sort() // rūšiuoja masyvą pagal abecėlę

    const newString = split.join(''); // sujungia masyvą į vieną string'ą

    return newString;
}
console.log(webmaster(test));

// 2
let test2 = 'the quick brown fox'

function letters(par2){
    const words = par2.split(" "); // atskiriame kiekvieną string žodį ir sudedame juos į masyvą.
    // console.log(words)   
    const capital = words.map(word => {
        if(word.length > 0){
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    })
    return capital.join(" ");
}
console.log(letters(test2));

// 3

let test3 = 'Web Development Tutorial'

function words(par3){
    const words2 = par3.split(' ');
    let longest = "";
    // console.log(words2)
    for(let i=0; i < words2.length; i++){
        if(words2[i].length > longest.length){
            longest = words2[i];
        }
    }
    return longest;
}
const longestWord = words(test3);
console.log(longestWord)

// 4

let test4 = "Development"

function counting(par4, par5){
    let number = 0;
    for(let i=0; i < par4.length; i++){
        if(par4[i] === par5){
            number++;
        } 
    }
    return number
}
console.log(counting(test4, "e"));

// 5

let numbers = [1, 25, 13, 56]

function biggest(par6){
    return Math.max(...par6);
}
console.log(biggest(numbers))





