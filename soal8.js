const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function formatRupiah(amount) {
  return amount.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

function getInfoPenjualan(dataPenjualan) {
  const keuntungan = dataPenjualan.reduce((total, data) => {
    const laba = (data.hargaJual - data.hargaBeli) * data.totalTerjual;
    return total + laba;
  }, 0);

  const modal = dataPenjualan.reduce((total, data) => {
    const nilai = (data.sisaStok + data.totalTerjual) * data.hargaBeli;
    return total + nilai;
  }, 0);

  const persentaseKeuntungan = ((keuntungan / modal) * 100).toFixed(2) + "%";

  const penjualanNovel = {
    totalKeuntungan: formatRupiah(keuntungan),
    totalModal: formatRupiah(modal),
    persentaseKeuntungan,
    produkBukuTerlaris: "",
    penulisTerlaris: "",
  };

  let terjualTerbanyak = 0;
  let produkBukuTerlaris = "";
  let penulisTerlaris = "";

  dataPenjualan.forEach((data) => {
    if (data.totalTerjual > terjualTerbanyak) {
      terjualTerbanyak = data.totalTerjual;
      produkBukuTerlaris = data.namaProduk;
      penulisTerlaris = data.penulis;
    } else if (data.totalTerjual === terjualTerbanyak) {
      produkBukuTerlaris += `, ${data.namaProduk}`;
      penulisTerlaris += `, ${data.penulis}`;
    }
  });

  penjualanNovel.produkBukuTerlaris = produkBukuTerlaris;
  penjualanNovel.penulisTerlaris = penulisTerlaris;

  return penjualanNovel;
}

console.log(getInfoPenjualan(dataPenjualanNovel));
