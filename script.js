
/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
* A Bootstrap styled table representing your choice of data.
* A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit */



  



 
  const formButton = document.getElementById('formSubmit');
  if (formButton) {
    formButton.addEventListener('click', (event) => {
      event.preventDefault();
    // Get the form values
    let country = document.getElementById('country').value;
    let athleteName = document.getElementById('athlete-name').value;
    let age = document.getElementById('Age').value;
    let goldMedals = document.getElementById('GoldMedals').value;
  
    // Create a new table row
    let newTableRow = document.createElement('tr');
  
    // Create table data cells and append them to the new row
    let countryNode = document.createElement('td');
    countryNode.innerHTML = country;
    newTableRow.appendChild(countryNode);
  
    let athleteNameNode = document.createElement('td');
    athleteNameNode.innerHTML = athleteName;
    newTableRow.appendChild(athleteNameNode);
  
    let ageNode = document.createElement('td');
    ageNode.innerHTML = age;
    newTableRow.appendChild(ageNode);
    
    let TypeOfSportNode = document.createElement('td');
    TypeOfSportNode.innerHTML = age;
    newTableRow.appendChild(TypeOfSportNode);
  

    let goldMedalsNode = document.createElement('td');
    goldMedalsNode.innerHTML = goldMedals;
    newTableRow.appendChild(goldMedalsNode);
  
    // Get the table body and append the new row
    let tableBody = document.getElementById('tBody');
    tableBody.appendChild(newTableRow);
  
    // Clear the form values
    document.getElementById('add-form').reset();
    console.log(newTableRow)
 
  });

}
  