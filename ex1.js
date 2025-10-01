// ex1.js

// Check baggage function
let check = () => {
    let weight = parseInt(document.getElementById('weight').value);
    if (isNaN(weight)) {
        alert("Please enter a valid baggage weight!");
        return;
    }

    alert('Checking Baggage weight: ' + weight);

    if (weight > 20) { // Example limit 20kg
        document.getElementById('removed').style.display = 'inline';
        document.getElementById('remB').style.display = 'inline';
        document.getElementById('result').textContent = '';
    } else {
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
        document.getElementById('result').textContent = 
            'Baggage weight is OK to proceed!';
    }
};

// Remove weight function
let remove = () => {
    let weight = parseInt(document.getElementById('weight').value);
    let removeVal = parseInt(document.getElementById('removed').value);

    if (isNaN(weight) || isNaN(removeVal)) {
        alert("Please enter valid numbers!");
        return;
    }

    let remaining = weight - removeVal;
    document.getElementById('weight').value = remaining;

    if (remaining > 20) {
        document.getElementById('result').textContent = 
            'Still overweight! Remaining baggage: ' + remaining + ' kg';
    } else {
        document.getElementById('result').textContent = 
            'Now OK to proceed! Remaining baggage: ' + remaining + ' kg';
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
};