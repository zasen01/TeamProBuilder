function buildManagerCard(manager){
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.getName()}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    
    `
    
}



function insertCards(team){
    console.log(team);
    const htmlArray = [];
    htmlArray.push(team.filter(employee => employee.getRoll()==="Manager").map(manager => buildManagerCard(manager)).join(""))
    team.filter(employee => employee.getRoll()==="Engineer").map(engineer => buildEngineerCard(engineer))
    team.filter(employee => employee.getRoll()==="Intern").map(intern => buildInternCard(intern))


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
    <title>Team Builder</title>
</head>
<body>
    <main>
       ${insertCards(team)} 
    </main>
    
</body>
</html>
    `

}
module.exports = createTemplate;