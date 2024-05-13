let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slideInterval;

// Otomatik olarak slider'ı sağa doğru kaydıran fonksiyon
function autoSlide() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slidr').appendChild(items[0]);
}

// Otomatik kaydırma işlemi her 3 saniyede bir gerçekleşecek
slideInterval = setInterval(autoSlide, 3000);

// Sola gitme işlemini gerçekleştiren fonksiyon
function slideLeft() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slidr').appendChild(items[0]);
}

// Sağ butonuna tıklandığında otomatik kaydırma işlemini durdur
next.addEventListener('click', function() {
    clearInterval(slideInterval);
    autoSlide(); // Sağa doğru bir adım kaydır
    slideInterval = setInterval(autoSlide, 3000); // Otomatik kaydırmayı yeniden başlat
});
