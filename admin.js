// admin.js

// Sample list of pets (this would be replaced by a database in a real app)
let pets = [];

// Function to render pets in the table
function renderPets() {
    const petTableBody = document.querySelector('#petTable tbody');
    petTableBody.innerHTML = ''; // Clear the table

    pets.forEach((pet, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pet.name}</td>
            <td>${pet.type}</td>
            <td>${pet.breed}</td>
            <td>${pet.age}</td>
            <td class="actions">
                <button onclick="deletePet(${index})">Delete</button>
            </td>
        `;
        petTableBody.appendChild(row);
    });
}

// Function to handle form submission and add a new pet
document.getElementById('addPetForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;

    const newPet = { name, type, breed, age };
    pets.push(newPet);

    // Clear form
    this.reset();

    // Re-render the table
    renderPets();
});

// Function to delete a pet
function deletePet(index) {
    pets.splice(index, 1);
    renderPets();
}
