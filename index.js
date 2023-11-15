//Imports required packages
import fs from 'fs';
import inquirer from 'inquirer';

//Purpose: To ask user questions and accept inputs in turn generate a README.md file using the information provideded
//Parameters: Inputs from user
//Returns: README.md file ( accomplished with fs.writeFile at the bottom but starts here)
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        message: 'Title of your project:',
        name: 'title',
      },
      {
        type: 'input',
        message: ' small description of project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'small description on how to install project:',
        name: 'install',
      },
      {
        type: 'input',
        message: 'small description on how to use project:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Describe how others can contribute to project:',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Describe brief instructions for testing:',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Select the license used for your project:',
        choices: [new inquirer.Separator(), "MIT", "GNU GPLv3", "Apache"],
        name: 'license',
      },
      {
        type: 'input',
        message: 'GitHub name:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Email best suited for people to reach you at:',
        name: 'email',
      },
  ])
  .then((answers) => {
    // Initilizes variables corresponding to each of the input responses for readability sake
    var title = answers.title;
    var description = answers.description;
    var install = answers.install;
    var usage = answers.usage;
    var contribute = answers.contribute;
    var test = answers.test;

    var license = answers.license;
    var licenseBadge = "";

    var github = answers.github;
    var email = answers.email;

    //a switch statement that determines which license was selected and adds a corresponding to badge link to the variable licenseBadge
    switch(license){
    case "MIT":
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT)](https://opensource.org/licenses/MIT)"
        break;
    case "GNU GPLv3":
        licenseBadge = "[![License: GPL v5](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;
    case "Apache":
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
    }


//Content of the readme file with variables added in throughout
var readmeContent = `
# ${title}

${licenseBadge}
    
## Description
    
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contrubuting](#contributing)
- [Testing](#testing)
- [License](#license)
- [Contact Me](#questions)

## Installation

${install}

## Usage

${usage}

## Contributing

${contribute}

## Testing

${test}

## License

The license used in project was the ${license} license! Please reference the LICENSE file inside of the repository.

## Questions?

You can find me here on GitHub at https://www.github.com/${github} <br><br>
Otherwise, feel free to reach me at ${email}
---
`;

//Function that actually writes the information to a file
    fs.writeFile('./README.md', readmeContent, err => {
        if (err) {
        console.error(err);
        }
        // file written successfully
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
