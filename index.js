const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8100;

// Statische Dateien aus dem "public"-Ordner bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

// Standardroute für die Startseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
