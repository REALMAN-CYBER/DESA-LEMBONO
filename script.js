document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("berita-container");
  const berita = JSON.parse(localStorage.getItem("berita")) || [];

  if (berita.length === 0) {
    container.innerHTML = "<p>Belum ada berita.</p>";
  } else {
    berita.forEach(b => {
      container.innerHTML += `
        <article>
          <h3>${b.tanggal} - ${b.judul}</h3>
          <p>${b.isi}</p>
        </article>
      `;
    });
  }
});