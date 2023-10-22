const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs').promises;

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub username ?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address ?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project’s name ?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have ?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
        type: 'input',
        name: 'command',
        message: 'What command should be run to install dependencies ?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests ? ',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo ?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to repo ?',
    },
];

// TODO: Create a function to write README file
const promptUser = () => {
    inquirer.prompt(questions)
        .then(async (answers) => {
            const readmeContent = generateMarkdown(answers);

            try {
                try {
                    await fs.writeFile('README.md', readmeContent);
                    console.log('Successfully wrote to README.md');
                } catch (err) {
                    console.error(err);
                }
            } catch (err_1) {
                console.error(err_1);
            }
        });
}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
