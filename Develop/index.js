// Calls the packages needed for this application. 
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions including validation if there is no response given. 
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
        choices: ['MIT','APACHE 2.0','GPL 3.0','None'],
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
    {
        type: 'input',
        message: 'What is your contact email?',
        name: 'email', 
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your contact email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github', 
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    },
];

// This function wrties the contents to the newly generated markdown. 
function writeToFile(data) {
    fs.writeFile(`./dist/generated_README.md`, data, err => {
        if (err) {
            throw err
        };
        console.log('README.md Generated!')
    });
};

// This function takes the answers from the questions and passes it to the writeToFile function. 
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
