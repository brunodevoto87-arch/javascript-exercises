const musica = document.querySelector("#musica-fondo")
const btnCastle = document.querySelector(".btnIntro");
const sonidoLatigo = new Audio('./latigo.mp3');
btnCastle.addEventListener("click", ()=>{
    if (musica.paused){
        musica.play();
        musica.volume = 0.5;
        btnCastle.textContent = "Pause Music";
    }else{
        musica.pause();
        btnCastle.textContent = "Enter the Castle";
    } 
});
const botones = document.querySelectorAll("button");
sonidoLatigo.volume = 0.4;

botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
        sonidoLatigo.pause();
        sonidoLatigo.currentTime = 0;
        sonidoLatigo.play().catch(error => console.log("Audio interact/user gesture error:",error));
    });
});
// Seleccionamos todas las tarjetas de exploración
const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        const nombreSeccion = tarjeta.querySelector("p").textContent;
        alert(`¡Te estás adentrando en la sección: ${nombreSeccion}!`);
        // Aquí podrías en el futuro abrir un modal, hacer scroll o cambiar de página
    });
});
// ===== INTERACCIÓN CON PERSONAJES =====

const characterCards = document.querySelectorAll('.character-card');

const characterInfo = {
    alucard: {
        name: 'Alucard',
        role: 'Dhampyr',
        icon: '🦇',
        description: 'El hijo de Drácula. Mitad humano, mitad vampiro. Despierta para sellar el castillo de su padre y salvar a la humanidad de la oscuridad eterna.'
    },
    richter: {
        name: 'Richter Belmont',
        role: 'Cazador Vampiro',
        icon: '⚔️',
        description: 'El último descendiente del clan Belmont. Portador del látigo vampírico. Su destino está ligado a la caída de Drácula.'
    },
    maria: {
        name: 'Maria Renard',
        role: 'Invocadora',
        icon: '🕊️',
        description: 'Una joven con el poder de invocar animales sagrados. Su conexión con Richter la lleva a adentrarse en el castillo en busca de respuestas.'
    }
};

characterCards.forEach(card => {
    const character = card.dataset.character;
    
    card.addEventListener('click', () => {
        const info = characterInfo[character];
        
        // Remover clase activa de todos
        characterCards.forEach(c => c.classList.remove('active'));
        
        // Agregar clase activa al seleccionado
        card.classList.add('active');
        
        // Mostrar información en la notificación
        showNotification(
            `${info.icon} ${info.name}: ${info.description}`,
            info.icon,
            4000
        );
        
        // Pequeña animación de "pulso"
        card.style.transition = 'transform 0.1s ease';
        card.style.transform = 'scale(0.92)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// Efecto de brillo aleatorio en las tarjetas (opcional)
setInterval(() => {
    const randomCard = characterCards[Math.floor(Math.random() * characterCards.length)];
    randomCard.style.transition = 'box-shadow 0.5s ease';
    randomCard.style.boxShadow = '0 0 30px rgba(255, 0, 0, 0.3)';
    setTimeout(() => {
        randomCard.style.boxShadow = '';
    }, 500);
}, 5000);

// Función para mostrar notificaciones
function showNotification(message, icon = '', duration = 3000) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: rgba(139, 0, 0, 0.9);
        color: #e2e2e2;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        z-index: 1000;
        max-width: 300px;
        word-wrap: break-word;
        font-size: 14px;
        border-left: 4px solid #ff0000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Agregar animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }
    
    // Remover después del tiempo especificado
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}