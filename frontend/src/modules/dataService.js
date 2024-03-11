import { addNutrition, foodList } from "./foodCounter";
import { closePopUp } from "./popUp";

export function fetchData() {
    fetch('http://localhost:4000/api/meals', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        generateButtons(data);
    })
    .catch(error => console.error('Error', error));
}

export function sendData() {
    const createMealForm = document.querySelector(".createMealForm");

    createMealForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = createMealForm.elements.title.value;
        const kcal = createMealForm.elements.kcal.value;
        const protein = createMealForm.elements.protein.value;

        try {
            const response = await fetch('http://localhost:4000/api/meals', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ title, kcal, protein}),
            });

            if (response.ok) {
                closePopUp();
                fetchData();
                console.log('Maaltijd toegevoegd aan de database!');
                // Voer hier eventuele verdere acties uit, zoals het sluiten van het pop-upvenster
              } else {
                console.error('Fout bij het toevoegen van maaltijd aan de database.');
              }
            } catch (error) {
              console.error('Fout bij het verzenden van de aanvraag naar de server:', error);
            }
    });
}

export function deleteData(itemId) {
    fetch(`http://localhost:4000/api/meals/${itemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
        if (response.ok) {
            fetchData();
            console.log('verwijderd');
        } else {
            console.log('fout bij het verwijderen')
        }
    })
    .catch(error => console.error('Error', error));
    }


function generateButtons(data) {

    foodList.innerHTML = '';

    data.forEach(item => {
        console.log(item)
        const container = document.createElement('div');
        container.classList.add('button-container');
        
        const button = document.createElement('button');
        button.textContent = item.title;
        button.addEventListener('click', () => addNutrition(item));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => deleteData(item._id));

        container.appendChild(button);
        container.appendChild(deleteButton);

        foodList.appendChild(container);
    })
}

