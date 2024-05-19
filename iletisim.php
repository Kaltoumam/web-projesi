<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Sonuçları</title>
    <style>
        body{
            background-color: #dedede;
        }
        .container {
            font-size: 25px;
            margin-left: 25%;
            margin-top: 100px;
            position: relative;
            width: 50%;
            border-radius: 5px;
            background-color: #f2f2f2;
            padding: 20px;
            box-shadow: 5px 20px 20px peru;
        }
    </style>
</head>

<body>
    <div class="container">
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $adsoyad = htmlspecialchars($_POST["firstname"] . " " . $_POST["lastname"]);
            $email = htmlspecialchars($_POST["email"]);
            $cinsiyet = htmlspecialchars($_POST["cinsiyet"]);
            $fikir = htmlspecialchars($_POST["fikir"]);
            $mesaj = htmlspecialchars($_POST["subject"]);

            echo "<h2>Gönderilen bilgiler</h2>";
            echo "<p><strong>Ad Soyad:</strong> $adsoyad</p>";
            echo "<p><strong>E-Posta:</strong> $email</p>";
            echo "<p><strong>Cinsiyet:</strong> $cinsiyet</p>";
            echo "<p><strong>Beğenilen Kısım:</strong> $fikir</p>";
            echo "<p><strong>Mesaj:</strong> $mesaj</p>";
        } else {
            echo "<p>Form verisi bulunamadı.</p>";
        }
        ?>
    </div>
</body>

</html>
