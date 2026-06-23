//regresi linear biasa
// y: penaksir variable independen
// a,b: parameter di taksir
// xᵢ: variable independen
// ε: kekeliruan

// rumus 
// yᵢ = a + BXᵢ + ε
const button = document.getElementById('btn');

function FindDetAandB(DataX,DataY, valueX) {
    const containerHasil = document.getElementById('result');
    const n = DataX.length;
    
    if (DataX.length !== DataY.length || n === 0) {
        alert("Jumlah data X dan Y harus sama dan tidak boleh kosong!");
        return null;
    }
    
    let TotalX =  DataX.reduce(function(sum, num) {
        return sum + Number(num);}, 0);
        console.log(`Total )DataX: ${TotalX}`);

        let TotalY =  DataY.reduce(function(sum, num) {
            return sum + Number(num);}, 0);
        console.log(`Total DataY: ${TotalY}`);

    let TotalXY = DataX.reduce(function(sum, num, index) {
        return sum + (Number(num) * DataY[index])}, 0);
        console.log(`Hasil XY: ${TotalXY}`);
    
    let TotalX2 = DataX.reduce((sum, num) => sum + (Number(num) ** 2), 0);
        console.log(`Hasil Total X²: ${TotalX2}`);
    
    let TotalY2 = DataY.reduce((sum, num) => sum + (Number(num) ** 2), 0);
        console.log(`Hasil Total Y²: ${TotalY2}`);
    
    let det = (n * TotalX2) - (TotalX * TotalX);
    let detA = (TotalY * TotalX2) - (TotalX * TotalXY);
    let detB = (n * TotalXY) - (TotalY * TotalX);

    let a = detA / det;
    let b = detB / det;

    console.log(`nilai det: ${det}`);
    console.log(`nilai detA: ${detA}`);
    console.log(`nilai detB: ${detB}`);
    console.log(`nilai A: ${a}`);
    console.log(`nilai B: ${b}`);
    console.log(`Persamaan: Y = ${a.toFixed(4)} + (${b.toFixed(4)})X`);
    let prediksiYMurni = a + (b * valueX);
    let prediksiY = Math.max(0,Math.min(100, prediksiYMurni));
    
    const htmlKonten = `
        <div style="background-color: #1894b3; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <h3>Hasil Analisis Regresi Linear</h3>
            <hr>
            <p><b>Nilai X:</b> ${TotalX}</p>
            <p><b>Nilai Y:</b> ${TotalY}</p>
            <p><b>Nilai XY:</b> ${TotalXY}</p>
            <p><b>Nilai X²:</b> ${TotalX2}</p>
            <p><b>Nilai Y²:</b> ${TotalY2}</p>
            <p><b>Nilai Determinan Utama (det):</b> ${det}</p>
            <p><b>Nilai det A (Intercept):</b> ${detA}</p>
            <p><b>Nilai det B (Slope):</b> ${detB}</p>
            <br>
            <p><b>Nilai A (Konstanta):</b> ${a.toFixed(4)}</p>
            <p><b>Nilai B (Koefisien):</b> ${b.toFixed(4)}</p>
            <br>
            <hr>
            <p><b>Persamaan Regresi:</b> 
                <span style="color: blue; font-weight: bold;">Y = ${a.toFixed(4)} + (${b.toFixed(4)})X</span>
            </p>
            <p><b>Jika dianggap sebagai nilaimu:</b> 
            <br>
                <span style="color: blue; font-weight: bold;">Jika kamu belajar 0 jam  kamu mendapatkan nilai = ${a.toFixed(1)}</span>
                <br>
                <span style="color: blue; font-weight: bold;">setiap kamu belajar 1 jam nilai mu meningkat = ${b.toFixed(1)}</span>
                <br>
                <span style="color: blue; font-weight: bold;">karna kamu memasukan nilai X ${valueX} maka nilai akhir mu jika belajar ${valueX}  = ${prediksiY.toFixed(1)}</span>
            </p>
            <hr>
            <p><b>Prediksi:</b> Jika besar nilai X = <b>${valueX}</b>, maka prediksi nilai Y = <mark><b>${prediksiY.toFixed(4)}</b></mark></p>
        </div>
    `;
    containerHasil.innerHTML = htmlKonten;

    return {
        a: a,
        b: b,
    };

}


button.addEventListener('click', () => {
    const inputX = document.getElementById('DataX').value;
    const inputY = document.getElementById('DataY').value;
    let  X = document.getElementById('X').value;
    let valueX = Number(X);
    const DataX = inputX.split(',').map(item => item.trim());
    const DataY = inputY.split(',').map(item => item.trim());
    FindDetAandB(DataX, DataY, valueX);
});