function camelCaseWithSpaces(str) {
  return str.toLowerCase().replace(/(?:^\w|\s\w)/g, function(match, index) {
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

console.log(camelCaseWithSpaces("")); 

let teks = "Entry Meeting Pemantauan Tindak Lanjut Rekomendasi Hasil Pemeriksaan (TLRHP) BPK RI dan Pemantauan Tindak Lanjut Kerugian Negara (Keruneg) lingkup Kementerian Kehutanan"
;
let hasil = teks.toUpperCase();
console.log(hasil); 
// Output: "INI ADALAH CONTOH TEKS"
