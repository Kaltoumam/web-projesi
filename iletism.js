const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// İletişim formu gönderimini işleyen route
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Dosya yolu
    const filePath = path.join(__dirname, 'iletişim.txt');

    // Mevcut dosya içeriklerini oku, varsa
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Bir hata oluştu.');
        }

        let jsonData = [];
        if (data) {
            jsonData = JSON.parse(data);
        }

        // Yeni form verilerini ekle
        jsonData.push(formData);

        // Dosyaya yaz
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Bir hata oluştu.');
            }

            res.status(200).send('Form verileri başarıyla kaydedildi.');
        });
    });
});

// Statik dosyalar için route (HTML dosyanız burada olacak)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
