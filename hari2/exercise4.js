var hari = 2
var bulan = 8
var tahun = 2021

switch(bulan){

    case 1 :
        if (bulan == 1 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'Januari', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break

    case 2 :
        if (bulan == 2 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'Februari', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break

    case 3 :
        if (bulan == 3 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'Maret', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break

        case 4 :
        if (bulan == 4 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'April', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break

    case 5 :
        if (bulan == 5 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'Mei', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break

    case 6 :
        if (bulan == 6 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'Juni', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break
        
        case 7 :
        if (bulan == 7 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'Juli', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break

    case 8 :
        if (bulan == 8 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'Agustus', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break

    case 9 :
        if (bulan == 9 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'September', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break
        
        case 10 :
        if (bulan == 10 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'Oktober', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break

    case 11 :
        if (bulan == 11 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'November', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break

    case 12 :
        if (bulan == 12 && (hari >=1 && hari<=31) && (tahun >=1900 && tahun <=2200)){
            console.log(hari, 'Desember', tahun)
        }else {
            console.log("hari/bulan/tahun invalid")
        }
        break

    default:
        console.log("hari/bulan/tahun invalid")
        break
}