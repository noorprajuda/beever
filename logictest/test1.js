let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

//=====ALGOPRITMA=====
// Buat sebuah variable penampung "output"
// Loop sejumlah panjang kata words
// Tambahkan setiap huruf dari awal words ke variable output
// Tampilkan variable output di dalam loop

let output = "";
for (let i = 0; i < words.length; i++) {
  output += words[i];
  console.log(output);
}
