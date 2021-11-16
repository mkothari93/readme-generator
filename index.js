// TODO: Include packages needed for this application
// npm install inquirer in terminal to install inquirer

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utilities/generateMarkdown');
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput){
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter a description for your project: ',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {   
        type: 'list',
        name: 'License',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE-2.0', 'GPL-3.0', 'BSD-3', 'None']
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'What command should be run to run tests',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What does the user need to know about using the repo?',
        validate: usageInput => {
            if (usageInput){
                return true;
            } else {
                console.log('Please enter usage instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What does the user need to know about contributing to the repo?',
        validate: contributingInput => {
            if (contributingInput){
                return true;
            } else {
                console.log('Please enter contribution instructions for your project!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile (fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {    
    inquirer.prompt(questions).then((responses) => {
        writeToFile('ReadMe.md', generateMarkdown({ ...responses}))
    })
};


// Function call to initialize app
init();
