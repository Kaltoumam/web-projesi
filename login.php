<?php
// Doğru kullanıcı bilgileri
$dogru_kullanici_adi = "kaltouma.mahamat@ogr.sakarya.edu.tr";
$dogru_sifre = "b221210593";

// Formdan gelen kullanıcı bilgilerini al
$kullanici_adi = $_POST['kullanici_adi'];
$sifre = $_POST['sifre'];

// Kullanıcı adı ve şifrenin doğruluğunu kontrol et
if ($kullanici_adi == $dogru_kullanici_adi && $sifre == $dogru_sifre) {
    header("Location: welcome.html");
    exit;
} else {
    // Giriş başarısız, hata mesajını ayarla
    $_SESSION['error'] = "Kullanıcı adı veya şifre yanlış!";
    header("Location: Giris sayfasi.html");
   
}
?>
