function buildManagerCard(manager){
    return `
    <div class="card" style="width: 18rem;">
    <div class ="card-header bg-success ">Manager:</div>
    <div class="card-body">
      <h5 class="card-title">${manager.getName()}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    
    `
    
}
//Engineer Card
function buildEngineerCard(engineer){
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title bg-danger">${engineer.getName()}</h5>
      <p class="card-text"> ${engineer.getId()} </br>${engineer.getEmail()} </br> ${engineer.getgitHub()}</p>
    </div>
    </div>
    
    `
    
}

function buildInternCard(intern){
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.getName()}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    
    `
    
}



function insertCards(team){
    console.log(team);
    const htmlArray = [];
    htmlArray.push(team.filter(employee => employee.getRoll()==="Manager").map(manager => buildManagerCard(manager)).join(""))
    htmlArray.push(team.filter(employee => employee.getRoll()==="Engineer").map(engineer => buildEngineerCard(engineer)).join(""))
    htmlArray.push(team.filter(employee => employee.getRoll()==="Intern").map(intern => buildInternCard(intern)).join(""))


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
    <header class="w-auto p-3 h-25 d-inline-block">
    My Team
    </header>
    <main>
       ${insertCards(team)} 
    </main>
    
</body>
</html>
    `

}
module.exports = createTemplate;