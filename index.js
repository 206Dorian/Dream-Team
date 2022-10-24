// Included packages needed for this application & all Const's
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const dreamTeam = []


//ADD MANAGER CREDENTIALS
start()
function start() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is your Office?',
      },
    ])
    .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
      dreamTeam.push(manager)
      buildTeam()
    }
    )
}

//*THIS WILL BE ASKING WHAT TYPE OF EMPLOYEE*
function buildTeam() {
  inquirer
    .prompt([
      //Pick Engineer, Employee, Intern. 
      {
        type: 'list',
        name: 'selection',
        message: 'What employee type are you adding?',
        choices: ['Engineer', new inquirer.Separator(), 'Employee', new inquirer.Separator(), 'Intern', new inquirer.Separator(), 'Finshed adding employees?']
      }
    ])
    .then((answers) => {
      switch (answers.selection) {
        case 'Engineer': engineerSelection();
          break;
        case 'Employee': employeeSelection();
          break;
        case 'Intern': internSelection()
        default:
          renderTeam()

      }
    })
}

start()
function start() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
    ])
    .then((answers) => {
      const employee = new Employee(answers.name, answers.id, answers.email)
      dreamTeam.push(employee)
      buildTeam()
    }
    )
}
start()
function start() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is your Github?',
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
      dreamTeam.push(engineer)
      buildTeam()
    }
    )
}

start()
function start() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is your School?',
      },
    ])
    .then((answers) => {
      const engineer = new Intern(answers.name, answers.id, answers.email, answers.school)
      dreamTeam.push(Intern)
      buildTeam()
    }
    )
}

function renderTeam() {
  fs.writeFile('index.html', writeHTMLFile, (dreramTeam), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}



























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

// ## Description -
// ${description}

// ## Installation -
// ${installation}

// ## Usage -
// ${usage}

// ## License -
// ${license}

// ## Contributing -
// ${contributing}

// ## Tests -
// ${tests}

// ## Questions? -
// Email me with any questions [${email}](mailto:${email}) <br/>

// [Here is a link to my Github](https://github.com/${github}) for other projects

// `
// fs.writeFile('README.md', readmeContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created README!')

//   )

// GIVEN a command-line application that accepts user input  **USING INQUIRER TO ACCEPT USER INPUT
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// **USING ALL THAT DATA CREATE AN HTML FILE


// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab  ***WILL OPEN EMAIL PROGRAM AND GITHUB WITH ANCHORS LIKE IN ACTIVITY 9***


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number   ***WHEN WE RUN NODE INDEX.JS  IN THE TERMINAL A PROMPT SHOULD APPEAR = MANAGERS NAME, EMPLYEE ID, EMAIL ADDRESS AND OFFICE NUMBER.


// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team  **DIFFERENT FUNCTION WITH MENU OPTIONS ** ONCE THATS ADDED MAKE MENU LIKE THE LICENSE MENU.  "ADD ENGINEER, INTERN OR FINISH TEAM?"
// **IF/ELSE STATEMENT **


// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu **SEPREATE FINCTION FOR ENGINEER OPTION - INQUIRER PROMPT ASKING FOR NAME, ID, EMAIL, GITHUB USERNAME


// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu  **SEPERATE FUNCTION LIKE THE OTHERS
// INQUIRERE PROMPT TO GET NAME, ID , EMAIL, SCHOOL


// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated  ** NEW FUNCTION WILL CREATE MY HTML FILE


// ** WILL BE AN ARRAY WITH OBJECTS  */  CREATE DIFFERENT SNIPPETS OF HTMLS  I.E. CARDS OR BOXES
// **INSIDE SOURCE FOLDER IS WHERE ILL BE RESPONSIBLE FOR CREATING THE CARDS, WILL NEED TO SPLIT UP ARRAY BASED ON THE TYPE OF EMPLOYEE


// CREATE AND SPLIT UP HTML CARD FOR EACH EMPLOYEE BASED ON THEIR TYPE, TAKE THOSE CARDS AND INJECT THEM INTO THE <BODY> OF A FINAL HTML TEMPLATE... .SPLIT??
// THAT TEMPLATE IS WHAT I'LL WRITE TO THE FINAL HTML FILE
