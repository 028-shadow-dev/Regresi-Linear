// Kata terpanjang menggunakan function 
function kataTerpanjang(kalimat) {
  // Pisahkan kalimat menjadi array kata
  const kataArray = kalimat.split(" ");
  
  // Cari kata dengan panjang maksimal
  let kataTerpanjang = "";
  for (let kata of kataArray) {
    if (kata.length > kataTerpanjang.length) {
      kataTerpanjang = kata;
    }
  }
  return kataTerpanjang;
}

const kalimat = "Belajar JavaScript itu menyenangkan sekali";
console.log("Kata terpanjang:", kataTerpanjang(kalimat));


for (let i = 1; i <= 1; i++) {
  let output = "";

  if (i % 3 === 0) output += "Foo";
  if (i % 5 === 0) output += "Bar";
  if (i % 7 === 0) output += "Baz";

  // Jika tidak ada kondisi yang terpenuhi, tampilkan angka
  console.log(output || i);
}


//nested loop
function piramidAngka(baris) {
  let hasil = "";
  for (let i = 1; i <= baris; i++) {
    // Buat deretan angka dari 1 sampai i
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
    hasil += "\n"; // pindah baris
  }
  return hasil;
}

// Contoh penggunaan
console.log(piramidAngka(10));