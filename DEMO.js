function updateTableWithFormData() {
    var name = document.getElementById("name").value;
    var num = document.getElementById("Mobile").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var pin = document.getElementById("Pin").value;
    var check = getCheckboxValues();
    var select = getSelectedCity();
  
    // Create a table row with form data
    var table = document.getElementById("outTable");
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
  
    cell0.innerHTML = name;
    cell1.innerHTML = num;
    cell2.innerHTML = password;
    cell3.innerHTML = address;
    cell4.innerHTML = select;
    cell5.innerHTML = pin;
    cell6.innerHTML = check;
  }
  
  function getCheckboxValues() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var selectedValues = [];
  
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });
  
    return selectedValues;
  }
  
  function getSelectedCity() {
    var selectElement = document.getElementById("city");
    var selectedCity = selectElement.value;
    return selectedCity;
  }
  
  function validateForm() {
    var name = document.getElementById("name").value;
    var num = document.getElementById("Mobile").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var pin = document.getElementById("Pin").value;
    var check = getCheckboxValues();
    var select = getSelectedCity();
  
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
  
    if (!/^\d{5} \d{5}$/.test(num)) {
      alert("Please enter a valid contact number.");
      return false;
    }
  
    if (password === "") {
      alert("Please enter a password.");
      return false;
    }
  
    if (address === "") {
      alert("Please enter your address.");
      return false;
    }
  
    if (select === "") {
      alert("Please select your city.");
      return false;
    }
  
    if (pin === "" || isNaN(pin) || pin.length !== 6) {
      alert("Please enter a valid 6-digit pincode.");
      return false;
    }
  
    if (check.length === 0) {
      alert("Please select at least one food type.");
      return false;
    }
  
    // If all validation passes
    return updateTableWithFormData();
  }