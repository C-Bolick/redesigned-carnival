const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Write a description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How to install',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'BSD 3', 'GPL 3.0', 'None'],
    },
    {
        type: 'input',
        message: 'Contributing',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How to test?',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Username',
        name: 'username',
    }
])

.then(data => {
    console.log(data);

    fs.writeFile('README.md', generateMarkdown(data), (err) => {
        if (err) console.log(err)
        console.log('Successful')
    })
});

