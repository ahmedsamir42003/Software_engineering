document.querySelectorAll('.add').forEach(function (addButton) {
	addButton.addEventListener('click', function () {
	    var sectionId = this.closest('.money-section').id;
	    var price = this.closest('.money-section').querySelector('.price').value;
	    if (!price)
			return;
	    var type = this.closest('.money-section').querySelector('.type').value;

	    // Create a new row
	    var newRow = document.createElement('tr');

	    // Create cells for price and type
	    var priceCell = document.createElement('td');
	    var typeCell = document.createElement('td');

	    // Set the text content of the cells
	    priceCell.textContent = price;
	    typeCell.textContent = type;

	    // Append cells to the new row
	    newRow.appendChild(priceCell);
	    newRow.appendChild(typeCell);

	    // Append the new row to the table's tbody
	    document.querySelector('#' + sectionId + ' .data-table tbody').appendChild(newRow);

	    // Clear input fields
	    this.closest('.money-section').querySelector('.price').value = '';
	    this.closest('.money-section').querySelector('.type').selectedIndex = 0;
	});
  });