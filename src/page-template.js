// function to loop through team array and build 
function createElements(team){
  let finalHTML = '';
  console.log(team);

  for(let i = 0; i < team.length; i++){
    if(team[i].role === 'Manager'){
      finalHTML += createManagerCard(team[i]);
    }
    else if(team[i].role === 'Engineer'){
      finalHTML += createEngineerCard(team[i]);
    }
    else if(team[i].role === 'Intern'){
      finalHTML += createInternCard(team[i]);
    }
  }
  console.log(finalHTML);
  return(finalHTML);
}

// function to create manager card
function createManagerCard(manager){
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="card-text">ID: ${manager.id}</p>
    <a href="#" class="card-link">Email: ${manager.email}</a>
    <a href="#" class="card-link">Office: ${manager.office}</a>
  </div>
</div>
  `
}

// function to create engineer card
function createEngineerCard(engineer){
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <p class="card-text">${engineer.id}</p>
    <a href="#" class="card-link">Email: ${engineer.email}</a>
    <a href="#" class="card-link">GitHub: ${engineer.github}</a>
  </div>
</div>
  `
}

// function to create intern card
function createInternCard(intern){
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">${intern.id}</p>
    <a href="#" class="card-link">Email: ${intern.email}</a>
    <a href="#" class="card-link">School: ${intern.school}</a>
  </div>
</div>
  `
}

// function to be returned
function createHTML(team){
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./style.css">
  <title>Team Manager</title>
</head>
<body>
  <header>
    <h1>Employee Manager</h1>
  </header>
  <main class="employee-container">
    ${createElements(team)}
  </main>
</body>
</html>
  `
}

module.exports = team => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./style.css">
  <title>Team Manager</title>
</head>
<body>
  <header>
    <h1>Employee Manager</h1>
  </header>
  <main class="employee-container">
    ${createElements(team)}
  </main>
</body>
</html>
  `
}