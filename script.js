// Sample pets data
const pets = [
    {
        name: 'Buddy',
        type: 'Dog',
        breed: 'Golden Retriever',
        age: '6 months',
        image:'http://ts4.mm.bing.net/th?id=OIP.mL3Vg5ykETf75oW9AiB2fwHaFj&pid=15.1'
        
    },
    {
        name: 'Mittens',
        type: 'Cat',
        breed: 'Siamese',
        age: '1 year',
        image:'https://th.bing.com/th/id/OIP.dY3AAJfRysMpKAKDumWsXgHaE8?w=252&h=180&c=7&r=0&o=5&pid=1.7'
        
    },
    {
        name: 'Milo',
        type: 'Dog',
        breed: 'Beagle',
        age: '1 year',
        image: 'https://th.bing.com/th?id=OIP.vpENuVG6_Ke79c0shGAHMQHaFn&w=287&h=217&c=8&rs=1&qlt=90&o=6&cb=13&pid=3.1&rm=2'
    },
    {
        name: 'Nemo',
        type: 'Fish',
        breed: 'Clownfish',
        age: '6 months',
        image:'https://th.bing.com/th/id/OIP.upTzhkNBIdp4Mm88JnxbWgHaFj?w=227&h=180&c=7&r=0&o=5&pid=1.7'
        },
    {
        name: 'Falcon',
        type: 'Bird',
        breed: 'Eagle',
        age: '1 year',
        image:'https://th.bing.com/th/id/OIP.QXsSUKQ03SoTVPVE32zxRgHaE5?w=259&h=180&c=7&r=0&o=5&pid=1.7'
    }
  
];

// Function to display pets
function displayPets() {
    const petContainer = document.getElementById('pet-container');
    const petSelect = document.getElementById('pet-select');
    
    pets.forEach((pet, index) => {
        // Create pet card
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Age: ${pet.age}</p>
        `;
        petContainer.appendChild(petCard);
        
        // Add pet to the adoption form dropdown
        const option = document.createElement('option');
        option.value = index;
        option.textContent = pet.name;
        petSelect.appendChild(option);
    });
}

// Function to handle form submission
document.getElementById('adoption-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedPetIndex = document.getElementById('pet-select').value;
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;
    
    if (selectedPetIndex === "") {
        alert("Please select a pet to adopt.");
        return;
    }
    
    const selectedPet = pets[selectedPetIndex].name;
    alert(`Thank you, ${userName}! You have applied to adopt ${selectedPet}. We will contact you at ${userEmail}.`);
    
    // Clear the form after submission
    document.getElementById('adoption-form').reset();
});

// Initialize the pet listing on page load
displayPets();