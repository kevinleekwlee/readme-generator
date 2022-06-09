// Creates a license badge based on the selected license. If there is no license, there will be no badge. 
function renderLicenseBadge(license) {
  let licenseBadge = ''
  if(license === 'None'){
    licenseBadge = ''
  } else {
    licenseBadge = `![license](https://img.shields.io/badge/LICENSE-${license}-blue)`
  }
  return licenseBadge;
}

// Creates a link under the license section based on the selected license. If there is no license, there will be no link.
function renderLicenseLink(license) {
  let licenseLink = ''
  if(license === 'MIT'){
    licenseLink = `License details: [${license}](https://choosealicense.com/licenses/mit/)`
  } else if (license === 'APACHE 2.0'){
    licenseLink = `License details: [${license}](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license === 'GPL 3.0'){
    licenseLink = `License details: [${license}](https://choosealicense.com/licenses/gpl-3.0/)`
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// Adds the license section if a license is selected. If none, there will be no license section rendered. 
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None'){
    licenseSection = ''
  } else {
    licenseSection =
`
## [License](#table-of-contents)
    
This project is licensed under the ${license} license.
`
  }
  return licenseSection;
}

// Generate license heading in the table of contents. If no license is selected, no heading is generated. 

function renderLicenseHeading(license) {
  let licenseHeading = ''
  if(license === 'None'){
    licenseHeading = ''
  } else {
    licenseHeading =
`* [License](#license)`
  }
  return licenseHeading;
}

// Generates the markdown file based on the user answers. 
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)
${renderLicenseHeading(data.license)}

## [Description](#table-of-contents)

${data.description}.

## [Installation](#table-of-contents)

${data.installation}.

## [Usage](#table-of-contents)

${data.usage}.

## [Contribution](#table-of-contents)

${data.contribution}.

## [Testing](#table-of-contents)

${data.testing}.

## [Questions](#table-of-contents)

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work on Github under the username [${data.github}](https://github.com/${data.github}).
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
