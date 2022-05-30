// Soal nomor 2

const mtk = 60;
const bahasaIndonesia = 70;
const bahasaInggris = 89;
const ipa = 69;

let grade = "";

if (mtk&&bahasaIndonesia&&bahasaInggris&&ipa !== null){

    const nilai_rata_rata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4;

    if (nilai_rata_rata >= 90 && nilai_rata_rata <=100){
        grade = "A";
    } else if (nilai_rata_rata>=80 && nilai_rata_rata <=89){
        grade = "B";
    } else if (nilai_rata_rata>=70 && nilai_rata_rata <= 79){
        grade = "C";
    } else if (nilai_rata_rata>=60 && nilai_rata_rata <= 69){
        grade = "D";
    } else if (nilai_rata_rata>=0 && nilai_rata_rata <= 59){
        grade = "E";
    } else{
        console.log("Ada yang salah dari ujian anda")
        grade = "undefined"
    }
    console.log(`Rata-rata = ${nilai_rata_rata} \nGrade = ${grade}`);
 }else {
    console.log("Ada data yang belum diisi")
}
