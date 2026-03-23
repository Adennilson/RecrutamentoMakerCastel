import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Suas informações reais conectadas
const firebaseConfig = {
    apiKey: "AIzaSyAo-P6CDEoZwDljmLOs9M4vyM8KVNpVNbQ",
    authDomain: "aplicativo-78b22.firebaseapp.com",
    databaseURL: "https://aplicativo-78b22-default-rtdb.firebaseio.com",
    projectId: "aplicativo-78b22",
    storageBucket: "aplicativo-78b22.firebasestorage.app",
    messagingSenderId: "284898522347",
    appId: "1:284898522347:web:878d040e8a3172e0cafaae"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const form = document.getElementById('afiliadoForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = document.getElementById('btnAcao');
    btn.disabled = true;
    btn.innerText = "Enviando...";

    // Coleta dos dados do formulário
    const dados = {
        nome: document.getElementById('nome').value,
        whatsapp: document.getElementById('whatsapp').value,
        email: document.getElementById('email').value,
        instagram: document.getElementById('instagram').value,
        pix: document.getElementById('pix').value,
        data_registro: new Date().toLocaleString()
    };

    // Referência da pasta no seu banco de dados
    const dbRef = ref(db, 'afiliados_maquiagem');
    const novoAfiliado = push(dbRef);

    set(novoAfiliado, dados)
        .then(() => {
            // Esconde o formulário e mostra a mensagem de sucesso
            form.style.display = 'none';
            document.getElementById('msgSucesso').classList.remove('hidden');
            document.getElementById('msgSucesso').style.display = 'block';
        })
        .catch((error) => {
            console.error(error);
            alert("Erro ao enviar! Verifique se você publicou as REGRAS no console do Firebase.");
            btn.disabled = false;
            btn.innerText = "ENVIAR";
        });
});
