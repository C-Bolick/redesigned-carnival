// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
  }
  return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`
  }
  return " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License \n This project is licensed under the ${license} license.`
  }
  return " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project} 
  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ##Table of Contents
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Testing
  ${data.testing}

  ## Contact
  ${data.email}
  ${data.username}
`;
}

module.exports = generateMarkdown;
