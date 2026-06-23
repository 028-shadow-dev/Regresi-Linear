const product = [
    {id:1,nama:"laptop", price: 1000, category:"tech"},
    {id:2,nama:"mouse", price: 50, category:"tech"},
    {id:3,nama:"keyboard", price: 150, category:"tech"},
    {id:4,nama:"buku", price: 20, category:"education"},
    {id:5,nama:"pulpen", price: 5, category:"education"},
];
let cart = [];

function SearchProduk(words) {
    const input = words.toLowerCase();
    const hasil = product.find((name) => name.nama.includes(input));
    // console.log(hasil.nama);
}
SearchProduk("MOU");

//2.
function FilterByCategory(c){
    const input = c.toLowerCase();
    const hasil = product.find((name) => name.category.includes(input));
    // console.log(hasil);
}
FilterByCategory("tech");

//3.
function addToCart(Uid){
    const hasil = product.find((input) => input.id === Uid);
    if (hasil) {
        cart.push(hasil);
        console.log(`berhasil memasukan ke cart id no: ${hasil.id}`);
    }else {
        console.log("input salah");
    }
}
addToCart(2);
addToCart(3);
addToCart(1);
console.log(cart);

//4.
function RemoveFromCart(Uid) {
    cart = cart.filter((item) => item.id !== Uid);
    console.log(cart);
}
RemoveFromCart(3);

