const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Esta línea es la clave: le dice a Node dónde están tus archivos front-end
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});