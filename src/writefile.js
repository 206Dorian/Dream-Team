function writefinalHtml (dreamTeam){
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">

    <title>Script Tags and Console Log</title>
  </head>
  
  <body>

   ${engineerCards}

  <p> DREAM TEAM</p>

  </body>
  </html>
  `
}
module.exports = writefinalHtml



// function generateCards (dreamTeam){
//   //separate team based on employee type *how to split up array  by type?*

//   //generte a separate card for each employee type 
// //push all cards into an array
// //return that array
// }

// function managerCards  ()
// return a card

function engineerCards (){
    `<card>
${name, id, email, github} </card>`
}

// function internCards ()


// const generateHTMLFile = ({ title, description, installation, usage, license, contributing, tests, email, github }) =>
//   `# ${title}
// ${renderLicenseBadge(license)}
// ## Table of Contents -
// * [Description](#description)
// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Contributing](#contributing)
// * [Test](#tests)
// * [Questions](#questions)

// ## Engineer -
// ${description}

// ## Installation -
// ${installation}
