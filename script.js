const baseURL = "http://localhost:8000";  // Change this if you deploy it elsewhere

// Function to handle simple interest calculation
function calculateSimpleInterest() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (!amount || !rate || !time) {
        alert("Please fill all the fields correctly.");
        return;
    }

    fetch(`${baseURL}/simple/${amount}/${rate}/${time}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = `Simple Interest: ${data}`;
        })
        .catch(err => {
            console.error(err);
            alert("Error calculating interest.");
        });
}

// Function to handle compound interest calculation
function calculateCompoundInterest() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (!amount || !rate || !time) {
        alert("Please fill all the fields correctly.");
        return;
    }

    fetch(`${baseURL}/compound/${amount}/${rate}/${time}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = `Compound Interest: ${data}`;
        })
        .catch(err => {
            console.error(err);
            alert("Error calculating interest.");
        });
}
