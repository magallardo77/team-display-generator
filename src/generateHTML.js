const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");


function generateCards(membersArray) {
    let HTMLcardsString = ''
    for (i = 0; i<membersArray.length; i++) {
        switch (membersArray[i].getRole()) {
            case "Manager":
                
                HTMLcardsString = HTMLcardsString + `
                <section id="memberCards" class="mainContent"> 
                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3> ${membersArray[i].name}</h3> 
                            <h4>${membersArray[i].getRole()}</h4><i class="material-icons"></i>
                        </div>
            
                        <div class="card-body">
                            <p class="id">ID: ${membersArray[i].id}</p> 
                            <p class="email">Email: <a href="mailto:${membersArray[i].email}"></a></p>
                            <p class="office">Office Number: ${membersArray[i].getOfficeNumber()}</p>
                        </div>
            
                    </div>
                </div>
            </section>`; 
            break;
            case "Engineer":

                HTMLcardsString = HTMLcardsString + `
                <section id="memberCards" class="mainContent"> 
                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>${membersArray[i].name}</h3>
                            <h4>${membersArray[i].getRole()}</h4><i class="material-icons"></i>
                        </div>
            
                        <div class="card-body">
                            <p class="id">ID: ${membersArray[i].id}</p>
                            <p class="email">Email: <a href="mailto:${membersArray[i].email}"></a></p>
                            <p class="github">Github: ${membersArray[i].getGithub()}<a href=""></a></p>
                        </div>
            
                    </div>
                </div>
            </section>`; 
            break;
            case "Intern":

                HTMLcardsString = HTMLcardsString + `
                <section id="memberCards" class="mainContent"> 
                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>${membersArray[i].name}</h3>
                            <h4>${membersArray[i].getRole()}</h4><i class="material-icons"></i>
                        </div>
            
                        <div class="card-body">
                            <p class="id">ID: ${membersArray[i].id}</p>
                            <p class="email">Email: <a href="mailto:${membersArray[i].email}"></a></p>
                            <p class="school">School: ${membersArray[i].getSchool()}</p>
                        </div>
                </div>
            </div>
            </section>`;
            break;
        }
    }
        return HTMLcardsString;
        }

    // function generateList(members)



function generateHTML(membersArray) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./dist/styles.css">
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <section id="memberCards" class="mainContent"> ${generateCards(membersArray)}`
}

module.exports = generateHTML