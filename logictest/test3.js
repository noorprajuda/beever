/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(listHarga, history) {
  // Write your code here
  history = history.split(".");

  let obj = {};
  let arr = [];

  for (let i = 0; i < history.length; i++) {
    arr.push(history[i].split("-"));
  }
  console.log(arr);

  for (let j = 0; j < arr.length; j++) {
    arr[j][1] = arr[j][1].split(",");
  }

  for (let k = 0; k < arr.length; k++) {
    for (let l = 0; l < arr[k][1].length; l++) {
      for (let m = 0; m < listHarga.length; m++) {
        if (arr[k][1][l] === listHarga[m].nama) {
          arr[k][1][l] = listHarga[m].harga;
        }
      }
    }
  }

  console.log(arr);

  let TotalTabungan = 0;

  for (let n = 0; n < arr.length; n++) {
    let TabunganHarian = 10000 - arr[n][1].reduce((a, b) => a + b, 0);
    if (!obj[`${arr[n][0]}`]) {
      obj[`${arr[n][0]}`] = TabunganHarian;
    }
    TotalTabungan += TabunganHarian;
  }

  obj.TotalTabungan = TotalTabungan;

  return obj;
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000,
  },
  {
    nama: "nasi",
    harga: 2000,
  },
  {
    nama: "cola",
    harga: 1000,
  },
  {
    nama: "chiki",
    harga: 1500,
  },
  {
    nama: "hotdog",
    harga: 3000,
  },
  {
    nama: "aqua",
    harga: 2000,
  },
];

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;
console.log(jumlahTabungan(hargaMakanan, historyPembelian));
