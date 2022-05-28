// Soal nomor 2

const mtk = 60;
const bahasaIndonesia = 70;
const bahasaInggris = 89;
const ipa = 69;

if (mtk&&bahasaIndonesia&&bahasaInggris&&ipa !== null){

    const nilai_rata_rata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4;
    console.log("Rata-rata = "+nilai_rata_rata);
    if (nilai_rata_rata >= 90 && nilai_rata_rata <=100){
        console.log("Grade A")
    } else if (nilai_rata_rata>=80 && nilai_rata_rata <=89){
        console.log("Grade B")
    } else if (nilai_rata_rata>=70 && nilai_rata_rata <= 79){
        console.log("Grade C")
    } else if (nilai_rata_rata>=60 && nilai_rata_rata <= 69){
        console.log("Grade D")
    } else if (nilai_rata_rata>=0 && nilai_rata_rata <= 59){
        console.log("Grade E")
    } else{
        console.log("Ada yang salah dari ujian anda")
    }
 }else {
    console.log("Ada data yang belum diisi")
}
