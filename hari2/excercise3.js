var nama = 'Bolky'
var peran = '' 

if (!nama && !peran) {
    console.log('atribut harus di isi')
}
else if(nama && !peran) {
    console.log('Hallo'+ ' ' + nama + ' ' + 'Pilih peranmu untuk memulai game') 
}
else if(nama && peran === 'ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo ' +  peran + ' ' + nama +',' + ' kamu dapat menyerang dengan senjatamu!' )
}
else if(nama && peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo ' +  peran + ' ' + nama +',' + ' kamu akan membantu temanmu yang terluka.' )
}
else if(nama && peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo ' +  peran + ' ' + nama +',' + ' ciptakan keajaiban yang membantu kemenanganmu!' )
}
else {
    console.log('default')
}
