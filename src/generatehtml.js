function buildManagerCard(manager) {
    return `
    <div class="col-6">
    <div class="p-3">
    <div class="card" style="width: 18rem;">
    <div class ="card-header bg-success "> <h5 class="card-title">${manager.getName()}</br>${manager.getRoll()} </h5></div>
    <div class="card-body">
     
      <p class="card-text"> ID: ${manager.getId()} 
      </br> Email: ${manager.getEmail()} 
      </br>Office Number: ${manager.getOfficeNumber()}</p>
      </div>
    </div>
    </div>
    </div>
    </div>
    
    `

}
//Engineer Card
function buildEngineerCard(engineer) {
    return `
    <div class="col-6">
    <div class="p-3">
    <div class="card" style="width: 18rem;">
    <div class ="card-header bg-danger ">
    <h5 class="card-title">${engineer.getName()}</br>${engineer.getRoll()}</h5>
    </div>
    <div class="card-body">
      <p class="card-text"> ID: ${engineer.getId()} 
      </br> Email: ${engineer.getEmail()} 
      </br>GitHub ${engineer.getgitHub()}</p>
      </div>
    </div>
    </div>
    </div>
    <div>
    
    `

}

function buildInternCard(intern) {
    return `
    <div class="col-6">
    <div class="p-3">
    <div class="card" style="width: 18rem;">
    <div class ="card-header bg-info "> 
    <h5 class="card-title">${intern.getName()}</br>${intern.getRoll()}</h5>
    </div>
    <div class="card-body">
      <p class="card-text"> ID: ${intern.getId()} 
      </br> Email: ${intern.getEmail()} 
      </br>GitHub ${intern.getSchool()}</p>
      </div>
    </div>
    </div>
    </div>
    </div>
    
    `

}



function insertCards(team) {
    console.log(team);
    const htmlArray = [];
    htmlArray.push(team.filter(employee => employee.getRoll() === "Manager").map(manager => buildManagerCard(manager)).join(""))
    htmlArray.push(team.filter(employee => employee.getRoll() === "Engineer").map(engineer => buildEngineerCard(engineer)).join(""))
    htmlArray.push(team.filter(employee => employee.getRoll() === "Intern").map(intern => buildInternCard(intern)).join(""))


    return htmlArray.join("");
}



function createTemplate(team) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Team Builder</title>
</head>
<body>
    <header class="text-center p-3 h-25 bg-info text-light">
   <h5> My Team</h5>
    </header>
    <main>
    <div class="container overflow-hidden">
    <div class="row gy-5">
    <div class="d-grid gap-4">
       ${insertCards(team)} 
    </div>
    </div>
    </div>
    </main>
    
</body>
</html>
    `

}
module.exports = createTemplate;