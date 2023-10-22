// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let LicenceBadge;
  let licenseLink = renderLicenseLink(license);
  switch (license) {
    case 'MIT':
      LicenceBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseLink})`;
      break;
    case 'APACHE 2.0':
      LicenceBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${licenseLink})`;
      break;
    case 'GPL 3.0':
      LicenceBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${licenseLink})`;
      break;
    case 'BSD 3':
      LicenceBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](${licenseLink})`;
      break;
    default:
      LicenceBadge = '';
  }
return LicenceBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'APACHE 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  return `## License

  This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const readme = `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  
  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install the necessary dependencies, run the followinf commans:

  ${data.command}

  ## Usage 

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  ${data.tests}

  ## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.name}](http://github.com/${data.name}/).

`;

return readme;
}

module.exports = generateMarkdown;
