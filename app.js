const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const employees = [];

const classes = {
    Manager,
    Engineer,
    Intern
}

const mainPrompt =  [
    {
        message: "What is their name?",
        name: "name"
    }, 
    {
        message: "what is thire id number?",
        name: "id"
    },
    {
        message: " what is their email?",
        name: "email"
    }
]

const prompts = {
    Engineer: mainPrompt.concat([{
        message: "What is their github?",
        name: "github"
    }]),
    Intern: mainPrompt.concat([{
        message: "what is their school?",
        name: "school"
    }]),
    Manager: mainPrompt.concat([{
        message: "what is their office number?",
        name: "officeNumber"
    }])
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function main() {
    inquirer.prompt({
        message: "what employee would like to add?",
        type: "list",
        choices: ["Engineer", "Intern", "Manager" , "Nothing I'm done."],
        name: "choice"
    }).then(({choice})=> {
        if(choice == "Nothing I'm done."){
            return fs.writeFile(outputPath, render(employees), err => console.log(err || "success! check your output directory for new page!"))
        }
        inquirer.prompt(prompts[choice])
        .then(data=> {
            const employee = new classes[choice](data.name, data.id,data.email, data.github || data.school || data.officeNumber )
            employees.push(employee);
            console.log(`New ${choice} created!`)
            setTimeout(main, 2000)
        })
    })
}


main()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
