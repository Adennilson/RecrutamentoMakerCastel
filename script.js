document.getElementById('formRecrutamento').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura os dados
    const nome = document.getElementById('nome').value;
    const zap_user = document.getElementById('whatsapp_user').value;
    const email = document.getElementById('email').value;
    const insta = document.getElementById('instagram').value;

    // Seu WhatsApp de administrador
    const seuWhatsapp = "5562996563279";

    // Organiza a mensagem profissional
    const mensagem = `*SOLICITAÇÃO DE PARCERIA - MAKERCASTEL* 🚀
    
👤 *Nome:* ${nome}
📱 *Zap:* ${zap_user}
📧 *E-mail:* ${email}
📸 *Instagram:* ${insta}

---
💡 *Interesse:* Afiliado MakerCastel (10%)
📍 *Região:* Senador Canedo
💪 _O candidato possui força de vontade e internet!_`;

    // Redirecionamento
    const url = `https://wa.me/${seuWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
});
