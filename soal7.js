const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];
function hitungTotalPenjualan(dataPenjualan) {
  if (!Array.isArray(dataPenjualan) || dataPenjualan.length === 0) {
    return "Error: data penjualan tidak valid!";
  }

  const totalProdukTerjual = dataPenjualan.reduce((acc, curr) => {
    return acc + curr.totalTerjual;
  }, 0);

  return totalProdukTerjual;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
