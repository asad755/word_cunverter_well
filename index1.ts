#!/usr/bin/env node

// wordCounter.ts
import readline from 'readline';

// Function to count words and characters
function countWordsAndChars(text: string): { words: number, characters: number } {
    const words = text.trim().split(/\s+/).length;
    const characters = text.replace(/\s/g, '').length;
    return { words, characters };
}

// Function to get user input
async function getUserInput(): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question('Enter a paragraph: ', (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Main function
async function main() {
    const paragraph = await getUserInput();
    const { words, characters } = countWordsAndChars(paragraph);
    console.log(`Words: ${words}`);
    console.log(`Characters (excluding whitespaces): ${characters}`);
}

// Execute main function
main();
