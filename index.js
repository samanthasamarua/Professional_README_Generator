// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'what kind of license should your project have?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: 'input',
        name: 'installCommand',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'testCommand',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines and instructions for other developers who might want to contribute to your project.',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Successfully created README.md!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            const fileName = `${answers.title.toLowerCase().split(' ').join('_')}_README.md`;
            writeToFile(fileName, markdown);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
