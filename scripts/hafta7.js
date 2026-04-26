document.addEventListener("DOMContentLoaded", () => {
    const heroThemeBtn = document.getElementById("heroThemeBtn");
    const htmlTag = document.documentElement;

    if (heroThemeBtn) {
        heroThemeBtn.addEventListener("click", () => {
            const currentTheme = htmlTag.getAttribute("data-bs-theme");
            const isLight = currentTheme === "light";

            htmlTag.setAttribute("data-bs-theme", isLight ? "dark" : "light");

            // Temaya göre butonun üzerindeki yazıyı ve renk sınıflarını güncelliyoruz
            if (isLight) {
                // Koyu temaya geçildiğinde buton görünümü
                heroThemeBtn.textContent = "Açık Temaya Geç";
                heroThemeBtn.classList.replace("btn-outline-secondary", "btn-outline-light");
                heroThemeBtn.classList.replace("text-dark", "text-light");
            } else {
                // Açık temaya geri dönüldüğünde buton görünümü
                heroThemeBtn.textContent = "Koyu Temaya Geç";
                heroThemeBtn.classList.replace("btn-outline-light", "btn-outline-secondary");
                heroThemeBtn.classList.replace("text-light", "text-dark");
            }
        });
    }

    // 2. Form İşlemleri ve Özet Çıkarma
    const form = document.getElementById("appForm");
    const resultArea = document.getElementById("resultArea");
    const summaryText = document.getElementById("summaryText");

    form.addEventListener("submit", (event) => {
        // Sayfanın yenilenmesini durdur
        event.preventDefault();

        // Değerleri al ve boşlukları temizle
        const adSoyad = document.getElementById("adSoyad").value.trim();
        const eposta = document.getElementById("eposta").value.trim();

        // Eksik alan kontrolü
        if (!adSoyad || !eposta) {
            alert("Lütfen ad, soyad ve e-posta alanlarını eksiksiz doldurun.");
            return;
        }

        // Başvuru Özetini oluştur
        const ometin = `
            <strong>Katılımcı:</strong> ${adSoyad} <br>
            <strong>İletişim:</strong> ${eposta} <br><br>
            <em>WP Lab atölyesi için başvurunuz alınmıştır. Teşekkür ederiz.</em>
        `;

        // Özeti ekrana bas ve gizli div'i görünür yap
        summaryText.innerHTML = ometin;
        resultArea.style.display = "block";

        // Formu temizle
        form.reset();
    });
});
