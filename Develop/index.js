// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 
import colors from 'colors'; 
import fs from 'fs';

// TODO: Create an array of questions for user input
const userResponses = ({userInstall, userUsage, userLicense, userContributing, userTests, userQuestions}) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<header>
 <h1 style="background-color: black;text-align: center;color:azure;">${userTitle}</h1>
 <h3 id="projDesc">${userDescription}</h3>
</header>
<body>
    <h2 style="background-color: black;text-align: center;color:azure;">Table of Contents</h2>
    <ul id="tableContents">
        <a href="#installation">Installation</a>
        <a href="#usage">Usage</a>
        <a href="#license">License</a>
        <a href="#contributing">Contributing</a>
        <a href="#tests">Tests</a>
        <a href="#questions">Questions</a>
    </ul>

    <h3 style="background-color: black;text-align: center;color:azure;" id="installation">Installation</h3>
        <p id="installEntry">${userInstall}</p>
    <h3 style="background-color: black;text-align: center;color:azure;" id="usage">Usage</h3>
        <p id="usageEntry">${userUsage}</p>
    <h3 style="background-color: black;text-align: center;color:azure;" id="license">License</h3>
        <p id="licenseEntry">${userLicense}</p>
    <h3 style="background-color: black;text-align: center;color:azure;" id="contributing">Contributing</h3>
        <p id="contribEntry">${userContributing}</p>
    <h3 style="background-color: black;text-align: center;color:azure;" id="tests">Tests</h3>
        <p id="testsEntry">${userTests}</p>
    <h3 style="background-color: black;text-align: center;color:azure;" id="questions">Questions</h3>
        <p id="questionsEntry">${userQuestions}</p>
    <footer>

    </footer>
</body>
</html>`;

inquirer

    .prompt([
        {
            type: 'input',
            message: colors.bgCyan('Enter Install Information'),
            name: 'userInstall',
        },
        {
            type: 'input',
            message: colors.bgCyan('Enter Usage Information'),
            name: 'userUsage',
        },
        {
            type: 'input',
            message: colors.bgCyan('Enter License Information'),
            name: 'userLicense',
        },
        {
            type: 'input',
            message: colors.bgCyan('Enter Contributing Credits'),
            name: 'userContributing',
        },
        {
            type: 'input',
            message: colors.bgCyan('Describe Tests for Program'),
            name: 'userTests',
        },
        {
            type: 'input',
            message: colors.bgCyan('Enter Concluding Questions'),
            name: 'userQuestions',
        },
    ]) 

// TODO: Create a function to write README file
.then((answers) => {
    const userReadme = userResponses(answers);
    
    fs.writeToFile('README.md', userReadme, (err) =>
    err ? console.log(err) : console.log ('Succesfully created README.md')
);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
