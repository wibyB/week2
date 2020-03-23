// nomer 1
var n  = 0
var m = 600
var a = 2

n = m * a 

console.log (n)
 /* pesudo code */
// SET n VALUE WITH 0
//SET m VALUE  WITH 600
//SET a VALUE  WITH 2
//SET n to m TIMES a
//DISPLAY n 

// nomer 2

var tahun = 2020

if ((tahun % 4 == 0 && tahun % 100 != 0) || (tahun % 4 == 0 && tahun % 100 == 0 && tahun % 400 == 0 ))
console.log('tahun kabisat')
else
console.log('bukan kabisat')

//SET tahun VALUE WITH 2020
//IF (tahun MOD 4 IS 0 AND tahun MOD 100 is 0)OR(tahun MOD 4 is 0 AND tahun MOD 100 is 0 AND tahun MOD 400 is 0)
    //DISPLAY tahun kabisat
//ELSE 
    // DISPLAY bukan kabisat

//nomer 3
var baju = 20
var mesin = 0 
while (mesin < 20){
    mesin++
    console.log(mesin)
}

//SET baju VALUE WITH 20
//SET MESIN VALUE WITH 0 
//WHILE mesin VALUE LESS THEN 20
    //INCREMENT mesin VALUE 
//DISPLAY mesin


//nomer 4
var siswa = 40
var cek = 0
var kukupanjang = 10
var kukupendek = 30
while (cek < 40){
    cek++
    if (cek <= kukupanjang){
        console.log(cek )
        console.log('hukum')
    }else {
        console.log(cek)
        console.log('puji')
    }
}

//SET siswa VALUE WITH 40
//SET cek VALUE WITH 0
//SET kukupanjang VALUE WITH 10
//SET kukupendek VALUE WITH 30
//WHILE cek VALUE LESS THEN 40
    //INCREMENT cek VALUE
    //IF cek LESS THAN OR EQUAL TO kukupanjang
        //DISPLAY cek
        //DISPLAY hukum
    //ELSE
        //DISPLAY cek
        //DISPLAY puji