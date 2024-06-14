const data = {
    TCMC: {
        'TIENDA 1': {
            'Rafael': '56465789'
        }
    },
    AZCP: {
        'TIENDA 2': {
            'Gabriela': '67895645'
        }
    },
    OAXC: {
        'TIENDA 3': {
            'Francisco': '67898765'
        }
    }
};

function updateStores() {
    const regionSelect = document.getElementById('region');
    const storeSelect = document.getElementById('store');
    const contactSelect = document.getElementById('contact');
    const phoneNumber = document.getElementById('phoneNumber');

    storeSelect.innerHTML = '<option value="">--Selecciona una Tienda--</option>';
    contactSelect.innerHTML = '<option value="">--Selecciona un Contacto--</option>';
    phoneNumber.textContent = '';

    if (regionSelect.value !== "") {
        const stores = Object.keys(data[regionSelect.value]);
        stores.forEach(store => {
            const option = document.createElement('option');
            option.value = store;
            option.textContent = store;
            storeSelect.appendChild(option);
        });
    }
}

function updateContacts() {
    const regionSelect = document.getElementById('region');
    const storeSelect = document.getElementById('store');
    const contactSelect = document.getElementById('contact');
    const phoneNumber = document.getElementById('phoneNumber');

    contactSelect.innerHTML = '<option value="">--Selecciona un Contacto--</option>';
    phoneNumber.textContent = '';

    if (storeSelect.value !== "") {
        const contacts = Object.keys(data[regionSelect.value][storeSelect.value]);
        contacts.forEach(contact => {
            const option = document.createElement('option');
            option.value = contact;
            option.textContent = contact;
            contactSelect.appendChild(option);
        });
    }
}

const contactSelect = document.getElementById('contact');
contactSelect.addEventListener('change', function() {
    const regionSelect = document.getElementById('region');
    const storeSelect = document.getElementById('store');
    const phoneNumber = document.getElementById('phoneNumber');

    if (contactSelect.value !== "") {
        phoneNumber.textContent = `Número telefónico: ${data[regionSelect.value][storeSelect.value][contactSelect.value]}`;
    } else {
        phoneNumber.textContent = '';
    }
});
