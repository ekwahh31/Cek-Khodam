document
  .getElementById("nameform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("inputnama").value;
    const khodam = [
      "MACAN PUTIH",
      "KUAH SOTO",
      "KUTU LUMPUH",
      "MOBILE REMOTE",
      "CICAK SUMBING",
      "KUTU AIR",
      "KUDA STANDING",
      "TUYUL BIRU",
      "CUMI MULLET",
      "BULU HIDUNG",
      "KALENG KONG GUAN",
      "KUCING BIRAHI",
      "KULKAS DUA PINTU",
      "PEDAL SEPEDA",
      "TUTUP TOPLES",
      "BOTOL YAKULT",
      "KUCING DIARE",
    ];
    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];

    const hasilDiv = document.getElementById("hasil");
    hasilDiv.textContent = `${nama} , khodam kamu adalah ${randomKhodam}`;

    document.write("Jangan Lupa Follow @ekaabintang_");
  });
