function checkPassword() {
    const passInput = document.getElementById('password');
    const pass = passInput.value.toLowerCase().trim();
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');
    const errorMsg = document.getElementById('error-msg');
    
    // Contraseñas válidas
    if (pass === '27-03-26' || pass === '270326' || pass === 'Babosa') {
        loginScreen.style.display = 'none';
        mainContent.style.display = 'block';
    } else {
        errorMsg.style.display = 'block';
        passInput.value = '';
        passInput.focus();
    }
}

// Función para cambiar de pestañas
function openTab(evt, tabName) {
    // 1. Ocultar todos los elementos con la clase "tab-content"
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // 2. Quitar la clase "active" de todos los botones "tab-btn"
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].className = tabBtns[i].className.replace(" active", "");
    }

    // 3. Mostrar la pestaña actual y añadir la clase "active" al botón que se hizo clic
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}