// ES6 OOP classes

class Mascota {
    constructor(title, author, raza) {
        this.title = title;
        this.author = author;
        this.raza = raza;
    }
}

class UI {
    // function for UI class to add book to list;
    addMascotaToList(mascota) {
        const list = document.getElementById('mascota-list');
        // Create table row element
        const row = document.createElement('tr');
        // Insert columns
        row.innerHTML = `
            <td>${mascota.title}</td>
            <td>${mascota.author}</td>
            <td>${mascota.raza}</td>
            <td><a href="#" class="delete">X</a> </td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        // create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        //Add alert text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#mascota-form');
        // Insert alert
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 5000);
    }

    deleteMascota(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('raza').value = '';
    }
}

// Local Storage class
class Store {
    // Get books from local storage
    static getMascotas() {
        let mascotas;
        if (localStorage.getItem('mascotas') === null) {
            mascotas = [];
        } else {
            mascotas = JSON.parse(localStorage.getItem('mascotas'));
        }
        return mascotas;
    }

    // Display mascotas in UI
    static displayMascotas() {
        const mascotas = Store.getMascotas();

        mascotas.forEach(function (mascota) {
            const ui = new UI();
            // Add mascota to list
            ui.addMascotaToList(mascota);
        })
    }

    // Add mascota details to local storage
    static addMascota(mascota) {
        const mascotas = Store.getMascotas();
        mascotas.push(mascota);

        // Store to local storage
        localStorage.setItem('mascotas', JSON.stringify(mascotas));
    }

    static removeMascota(raza) {
        const mascotas = Store.getMascotas();
        mascotas.forEach(function (mascota, index) {
            if (mascota.raza === raza) {
                mascotas.splice(index, 1);
            }
        });
        localStorage.setItem('mascotas', JSON.stringify(mascotas));
    }
}

// DOM Load event 
document.addEventListener('DOMContentLoaded', Store.displayMascotas());

// Event listeners for Add mascota
document.getElementById('mascota-form').addEventListener('submit',
    function (e) {
        // Get form values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const raza = document.getElementById('raza').value;

        // Function to validate if a string contains only numbers
        function isNumbersOnly(input) {
            return /^[0-9]+$/.test(input);
        }

        // Instantiate UI object
        const ui = new UI();

        // Validate 
        if (isNumbersOnly(title) || isNumbersOnly(author) || isNumbersOnly(raza)) {
            // Error alert if any field contains numbers
            ui.showAlert('Solo se permiten letras en los campos', 'error');
        } else if (title === '' || author === '' || raza === '') {
            // Error alert if any field is empty
            ui.showAlert('Por favor rellenar todos los campos', 'error');
        } else {
            // Add mascota to list
            ui.addMascotaToList(new Mascota(title, author, raza))

            // Show success alert
            ui.showAlert('Mascota agregada', 'success');
            // Add to local storage
            Store.addMascota(new Mascota(title, author, raza));

            // Clear UI fields
            ui.clearFields();
        }

        e.preventDefault();
    });

// Event listener for Delete    
document.getElementById('mascota-list').addEventListener('click', function (e) {
    // Instantiate UI
    const ui = new UI();

    // Delete mascota
    ui.deleteMascota(e.target);

    // Remove from local storage using raza
    Store.removeMascota(e.target.parentElement.previousElementSibling.textContent)

    // Show alert
    ui.showAlert('Mascota borrada', 'success');

    e.preventDefault();
})
