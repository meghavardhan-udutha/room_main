document.getElementById('expense-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const category = document.getElementById('category').value;
    const item = document.getElementById('item').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;

    // Create a new row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${item}</td><td>₹${amount}</td><td>${date}</td>`;

    // Add new row to the correct table based on category
    let totalCell;
    if (category === 'room') {
        document.getElementById('room-expenses').querySelector('tbody').appendChild(newRow);
        totalCell = document.getElementById('room-total');
    } else if (category === 'combined') {
        document.getElementById('combined-expenses').querySelector('tbody').appendChild(newRow);
        totalCell = document.getElementById('combined-total');
    } else if (category === 'food') {
        document.getElementById('food-expenses').querySelector('tbody').appendChild(newRow);
        totalCell = document.getElementById('food-total');
    } else if (category === 'mart') {
        document.getElementById('mart-expenses').querySelector('tbody').appendChild(newRow);
        totalCell = document.getElementById('mart-total');
    }

    // Update the total amount for the selected category
    updateTotal(category);

    // Reset the form
    document.getElementById('expense-form').reset();
});

function updateTotal(category) {
    let total = 0;
    let table;

    if (category === 'room') {
        table = document.getElementById('room-expenses');
    } else if (category === 'combined') {
        table = document.getElementById('combined-expenses');
    } else if (category === 'food') {
        table = document.getElementById('food-expenses');
    } else if (category === 'mart') {
        table = document.getElementById('mart-expenses');
    }

    // Loop through the rows in the table and sum the amounts
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const amount = parseFloat(row.cells[1].innerText.replace('₹', ''));
        total += amount;
    });

    // Update the total cell
    let totalCell;
    if (category === 'room') {
        totalCell = document.getElementById('room-total');
    } else if (category === 'combined') {
        totalCell = document.getElementById('combined-total');
    } else if (category === 'food') {
        totalCell = document.getElementById('food-total');
    } else if (category === 'mart') {
        totalCell = document.getElementById('mart-total');
    }

    totalCell.innerText = `₹${total.toFixed(2)}`;
}
