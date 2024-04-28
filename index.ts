import inquirer from "inquirer"
// declear constent
const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence count the words: "
    }
])
const words = answers.Sentence.trim().split(" ")
// print the array of the words to the console

console.log(`Your sentence has ${words.length} words`)

//console.log(words);
