/**
 * Fetch API: Es una funcion JS que permite hacer peticiones HTTP, incluyendo, GET, POST, PUT, DELETE, etc.Es una API moderna.
 * 
 * 
 */

function getEmployees(){
    // fetch(Aqui se copia la URL,)
    // fetch("/data/employees.json");

    const file = "/data/employees.json";

    fetch(file)

    // 
    .then((result)=>{
        return result.json();
    })

    // Este then es para acceder alos datos
    .then(data =>{
        const {employees} = data;
        employees.forEach (employe => {
            console.log (employe.id)
            console.log (employe.user)
            console.log (employe.job)
        });
           
        document.querySelector(".content").textContent += employees.user;

        console.log (employees);
    });
};

getEmployees();