// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title', 
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the project description?',
        name: 'description', 
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation', 
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What are the usage instructions?',
        name: 'usage', 
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage instructions.');
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Which license will your project use?',
        name: 'license', 
        choices: ['GNU', 'Apache 2.0', 'MIT', 'No License'],
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution', 
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'testing', 
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter testing instructions.');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/${fileName}', data, err => {
        if (err) {
            throw err
        };
        console.log('README.md Generated!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer){
            console.log(answer);
        let fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init();
