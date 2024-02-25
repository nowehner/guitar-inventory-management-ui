async function addGuitar() {
    let serialNumber = document.getElementById("serialNumber").value;
    let price = document.getElementById("price").value;
    let builder = document.getElementById("builder").value;
    let model = document.getElementById("model").value;
    let topWood = document.getElementById("topWood").value;
    let backWood = document.getElementById("backWood").value;
    let type = document.getElementById("type").value;

    
    if (!serialNumber || !price || !builder || !model || !topWood || !backWood || !type) {
        alert('Please enter a value for all fields.');
        return;
    }

    
    let guitar = {
        serialNumber: serialNumber,
        price: price,
        builder: builder,
        model: model,
        topWood: topWood,
        backWood: backWood,
        type: type
    };

    try {
        let response = await fetch('backend_api_url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(guitar),
        });

        let result = await response.json();

        if (result.success) {
            displayPopup('The guitar was added to the system');
        } else {
            displayPopup('Something went wrong. Please try again or contact the customer support team.');
        }
    } catch (error) {
        console.error('Error:', error);
        displayPopup('Something went wrong. Please try again or contact the customer support team.');
    }
}

function displayPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.innerText = message;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


let guitars = [ {
    serialNumber: "001",
    price: 999.99,
    builder: "Fender",
    model: "Stratocaster",
    topWood: "Maple",
    backWood: "Alder",
    type: "Electric"
},
{
    serialNumber: "002",
    price: 1299.99,
    builder: "Gibson",
    model: "Les Paul",
    topWood: "Mahogany",
    backWood: "Maple",
    type: "Electric"
},
{
    serialNumber: "003",
    price: 899.99,
    builder: "Martin",
    model: "D-28",
    topWood: "Sitka Spruce",
    backWood: "Rosewood",
    type: "Acoustic"
},
{
    serialNumber: "004",
    price: 599.99,
    builder: "Taylor",
    model: "214ce",
    topWood: "Sitka Spruce",
    backWood: "Rosewood",
    type: "Acoustic"
},
{
    serialNumber: "005",
    price: 1199.99,
    builder: "PRS",
    model: "Custom 24",
    topWood: "Maple",
    backWood: "Mahogany",
    type: "Electric"
}

];
async function searchGuitars() {
    
    var guitarBuilder = document.getElementById('builder').value.toLowerCase();
    var guitarModel = document.getElementById('model').value.toLowerCase();
    var guitarType = document.getElementById('type').value.toLowerCase();
    var guitarBackWood = document.getElementById('backWood').value.toLowerCase();
    var guitarTopWood = document.getElementById('topWood').value.toLowerCase();
    
    
    let searchCriteria = {
        builder: guitarBuilder,
        model: guitarModel,
        type: guitarType,
        backWood: guitarBackWood,
        topWood: guitarTopWood
    };

    try {
        
        let response = await fetch('your_backend_search_api_url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchCriteria),
        });

        let result = await response.json();

        
        if (result.success) {
            displaySearchResult(result.guitars);
        } else {
            displayPopup('Something went wrong. Please try again or contact the customer support team.');
        }
    } catch (error) {
        console.error('Error:', error);
        displayPopup('Something went wrong. Please try again or contact the customer support team.');
    }
}

function displaySearchResult(guitars) {
    let table = document.getElementById("result");
    table.innerHTML = "";

    for (let guitar of guitars) {
        let row = document.createElement("tr");

        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
        let cell4 = document.createElement("td");
        let cell5 = document.createElement("td");
        let cell6 = document.createElement("td");
        let cell7 = document.createElement("td");

        let builder = document.createTextNode(guitar.builder);
        let model = document.createTextNode(guitar.model);
        let type = document.createTextNode(guitar.type);
        let backWood = document.createTextNode(guitar.backWood);
        let topWood = document.createTextNode(guitar.topWood);
        let serialNumber = document.createTextNode(guitar.serialNumber);
        let price = document.createTextNode(guitar.price);

        cell1.appendChild(builder);
        cell2.appendChild(model);
        cell3.appendChild(type);
        cell4.appendChild(backWood);
        cell5.appendChild(topWood);
        cell6.appendChild(serialNumber);
        cell7.appendChild(price);

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
        row.appendChild(cell7);

        table.appendChild(row);
    }
}

function displayPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.innerText = message;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}