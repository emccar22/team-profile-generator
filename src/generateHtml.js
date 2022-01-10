const generateManagerCard = function (manager) {
    return `
    <div class="col-4 mt-4 p-4">
        <div class="card h-100 shadow">
            <div class="card-header p-3 bg-dark text-white">
                <h3>${manager.name}</h3>
                <h4><i class="fas fa-coffee"></i> Manager</h4>
            </div>
            <div class="card-body p-3 bg-light text-dark">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

const generateEngineerCard = function (engineer) {
    return `
    <div class="col-4 mt-4 p-4">
        <div class="card h-100 shadow">
            <div class="card-header p-3 bg-dark text-white">
                <h3>${engineer.name}</h3>
                <h4><i class="fas fa-glasses"></i> Engineer</h4>
            </div>
            <div class="card-body p-3 bg-light text-dark">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

const geterateInternCard = function (intern) {
    return `
    <div class="col-4 mt-4 p-4">
        <div class="card h-100 shadow">
            <div class="card-header p-3 bg-dark text-white">
                <h3>${intern.name}</h3>
                <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
            </div>
            <div class="card-body p-3 bg-light text-dark">
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

generateHtml = (data) => {
    pageArray = []

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManagerCard(employee);
            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);
            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = geterateInternCard(employee);
            pageArray.push(internCard);
        }
    };

    const employeeCards = pageArray.join('');
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/0e52284223.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header class="w-100 text-center p-3 mb-2 bg-secondary text-white">
            <h1>Team Profile</h1>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${employeeCards}
                </div>
            </div>
        </main> 
    </body>
    </html>
    `
};

module.exports = generateHtml;