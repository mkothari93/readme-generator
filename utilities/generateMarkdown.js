// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License !== 'None') {
    return `![badge](https://img.shields.io/badge/License-${License}-blue.svg)`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License !== 'None') {
    return `
    The application is covered under the following license:

    [${License}] (https://opensource.org/licenses/${License})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License !== 'None') {
    return `
      ${renderLicenseLink(License)}
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# <strong>${data.Title}</strong>

${renderLicenseBadge(data.License)}


## <strong>Table-of-Contents</strong>

---

*[Description](#description)

*[License](#license)

*[Installation](#installation)

*[Test](#test)

*[Usage](#usage)

*[Contributing](#contributing)


## <strong>Description</strong>

---

  ${data.Description}


## <strong>License</strong>

---

  ${renderLicenseSection(data.License)}


## <strong>Installation</strong>

---

  ${data.Installation}


## <strong>Test</strong>

---

  ${data.Test}


## <strong>Usage</strong>

---

  ${data.Usage}


## <strong>Contributing</strong>

---

  ${data.Contributing}

`;
}

module.exports = generateMarkdown;
