console.log('script.js');

//Gobal variables

let submitButton = 0;

function submitButton(event) {
    // console.log('#submitButton');
    // Stop the page from refreshing
    event.parentDefault();

        // Select all five employee inputs:
        const firstNameInput = document.querySelector('#firstNameInput').value;
        console.log(firstNameInput);
        const lastNameInput = document.querySelector('#lastNameInput').value;
        console.log(lastNameInput);
        const idInput = document.querySelector('#idInput').value;
        console.log(idInput);
        const titleInput = document.querySelector('#titleInput').value;
        console.log(titleInput);
        const annualInput = document.querySelector('#annualSalaryInput').value;
        console.log(annualSalaryInput);
        
        // Find the input filed and assign the value to the variable
        // let firstNameVal = document.querySelector('#firstName');
        // console.log(firstNameVal);
        // let lastNameVal = document.querySelector('#lastName');
        // let idVal = document.querySelector('#id');
        // let titleVal = document.querySelector('#title');
        // let annualSalaryVal = document.querySelector('#annualSalary');

        // Montly Cost
        const monthlyCost = annualSalary / 12;
}
      
        // New row
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${firstNameInput}</td>
            <td>${lastNameInput}</td>
            <td>${idInput}</td>
            <td>${titleInput}</td>
            <td>${annualInput}</td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;
    
        //Append Rows
        document.getElementById("salaryCalculator").appendChild(newRow);

         // Update total monthly cost
         updateTotalMonthlyCost(monthlyCost);

         // Clear form inputs
         document.getElementById("employeeForm").reset();

         function deleteRow(this) {
            // Get the row to be deleted
            const row = button.parentNode.parentNode;

            // Remove the row from the table
            row.remove();
        }

        function updateTotalMonthlyCost(cost) {
            // Get current total monthly cost
            const currentTotal = parseFloat(document.getElementById("totalMonthlyCost").innerText);

            // Update total monthly cost
            const newTotal = currentTotal + cost;
            document.getElementById("totalMonthlyCost").innerText = newTotal.toFixed(2);

            // Apply 'over-budget' class if total exceeds $20,000
            const footer = document.getElementById("footer");
            if (newTotal > 20000) {
                footer.classList.add("over-budget");
            } else {
                footer.classList.remove("over-budget");

        // Find the tbody on the page so that we can append to it
        let salaryCalculator = document.querySelector('#salaryCalculator');

            };
        };
        
        // delete button to remove each of the unwanted rows
    // function deleteButton(event){
    //     let tr =td.parentNode;
    //     console.log('deleteButton:',event.target); 
    //     let td = event.target.parentNode;
    //     td.parentNode.removeChild(td);    
    // };
// };

// let buttonCount = 0;

// function deletedButton(event) {
//     console.log(deletedButton)
//     let deletedButton= document.querySelector('#salaryCalculator');
    
//     buttonCount += 1;
//     tbody.innerHTML += `
//     <tbody id="salaryCalculator">
//         <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td> 
//             <button onClick="deletedButton(event)" class="deletedButton">Delete</button>
//         </tr>
//         </tbody>`

// function deletedButton(event) {
//     let parent = event.target.parentElement.parentElement;
//     parent.remove("Delete");
    // }: 

    // My code is too confusion for myself. It's not working the way I wanted. I am struggling on how to manipulate the DOM. I can't seem to get the code to work and append things to the dom to make it work. 