// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 
import colors from 'colors'; 
import fs from 'fs';

// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
   
const userResponses = ({userTitle, userDescription, userInstall, userUsage, userLicense, userContribGuide, userTests, userGitHub, userEmail}) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<header>
 <h1 style="background-color: black;text-align: center;color:azure;">${userTitle}</h1>
 <h3 style="text-align: center" id="projDesc">${userDescription}</h3>
</header>
<body>
    <h2 style="background-color: black;text-align: center;color:azure;">Table of Contents</h2>
    <ul id="tableContents" style="text-align: center">
        <a href="#installation">Installation</a>
        <a href="#usage">Usage</a>
        <a href="#license">License</a>
        <a href="#contribGuide">Contributing</a>
        <a href="#tests">Tests</a>
        <a href="#questions">Questions</a>
    </ul>
    <h3 style="background-color: black;text-align: center;color:azure;" id="installation">Installation Instructions</h3>
    <p id="installEntry">${userInstall}</p>
    <h3 style="background-color: black;text-align: center;color:azure;" id="usage">Usage Information</h3>
    <p id="usageEntry">${userUsage}</p>
    <h3 style="background-color: black;text-align: center;color:azure;" id="license">License</h3>
    <p id="licenseEntry">${userLicense}</p>
    <h3 style="background-color: black;text-align: center;color:azure;" id="contribGuide">Contribution Guidelines</h3>
    <p id="contribEntry">${userContribGuide}</p>
    <h3 style="background-color: black;text-align: center;color:azure;" id="tests">Test Instructions</h3>
    <p id="testsEntry">${userTests}</p>
    <h3 style="background-color: black;text-align: center;color:azure;" id="questions">Further Questions</h3>
    <p id="questionsEntry">${userGitHub} ${userEmail}</p>
</body>
<footer>

</footer>

</html>`;

inquirer
    .prompt([
        {
            type:'text',
            name:'userTitle',
            message: colors.bgCyan('Enter Title for README')   
        },

        {
            type:'text',
            name:'userDescription',
            message: colors.bgCyan('Enter Project Description')
        },

        {
            type:'text',
            name:'userInstall',
            message: colors.bgCyan('Enter Install Information')
        },

        {
            type:'text',
            name:'userUsage',
            message: colors.bgCyan('Enter Usage Information')   
        },

        {
            type:'text',
            name:'userLicense',
            message: colors.bgCyan('Enter License Information')  
        },

        {
            type: 'text',
            name:'userContribGuide',
            message: colors.bgCyan('Enter Contribution Guidelines')   
        },

        {
            type: 'text',
            name: 'userTests',
            message: colors.bgCyan('Enter Testing information')
        },

        {
            type:'text',
            name:'userGitHub',
            message: colors.bgCyan('Enter GitHub Address') 
        },

        {
            type:'text',
            name:'userEmail',
            message: colors.bgCyan('Enter Email Address')
        },
    ])

    .then((answers) => {
    const userReadme = userResponses(answers);
    fs.writeFile('README.md', userReadme, (err) =>
    err ? console.log(err) : console.log ('Succesfully created README.md')
    );
    });


// TODO: Create a function to initialize app
function init() {
// initReadmeGen();
}

// Function call to initialize app
init();
