function writefinalHtml(data) {

  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">

    <title>Script Tags and Console Log</title>
  </head>
  
  <body>
${createCards(data)}

  <p> DREAM TEAM </p>

  </body>
  </html>
  `
}


function createCards(dreamTeam) {
  const individuals = []
  dreamTeam.forEach(member => {
    if (member.getRole() == "Manager") {
      individuals.push(managerCard(member.name, member.id, member.email, member.office))
    }
    if (member.getRole() == "Engineer") {
      console.log(member.github)
      individuals.push(engineerCard(member.name, member.id, member.email, member.github))
    }
    if (member.getRole() == "Intern") {
      console.log(member.school)
      individuals.push(internCard(member.name, member.id, member.email, member.school))
    }
  });
  console.log(individuals)
  return individuals.join("")
}

function managerCard(name, id, email, office) {
  return`<div class="card">
  <div class="card-content">
    <div class="content">
      ${name}
      ${id}
      ${email}
      ${office}
    </div>
  </div>
</div>`
}

function engineerCard(name, id, email, github) {
  return `<card>
  ${name, id, email, github} </card>`
}

function internCard(name, id, email, school) {
  return `<card>
  ${name, id, email, school} </card>`
}

module.exports = writefinalHtml


