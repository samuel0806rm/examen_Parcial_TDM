// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log("Galería Virtual cargada correctamente.");

    // Ejemplo de interactividad: Suavizar el scroll hacia las secciones
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Validación opcional: Mostrar un mensaje al pasar el mouse por las obras
    const obras = document.querySelectorAll('.obra-card');
    obras.forEach((obra, index) => {
        obra.addEventListener('mouseenter', () => {
            console.log(`Explorando obra ${index + 1}`);
        });
    });
});