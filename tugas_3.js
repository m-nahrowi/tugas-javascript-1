// soal nomor 3

const printSegitiga = 5
let hasil = "";

if (typeof(printSegitiga) === "number"){

    for (let i = printSegitiga; i>=1; i--){
        
        for ( let j = 1; j<=i; j++){

            hasil += j;
        }
        hasil += '\n';
    }
    console.log(hasil)
    
}else{
    console.log("Data Harus number")
}