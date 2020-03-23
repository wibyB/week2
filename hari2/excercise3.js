var nama = 'Bolky';
var peran = 'Ksatria' ;

if (nama === '' || peran === '') {
    console.log('nama harus di isi')
}
else if(nama === "Bolky" && peran === '') {
    console.log('Hallo'+ ' ' + nama + ' ' + 'Pilih peranmu untuk memulai game') 
}
else if(nama === 'Bolky' && peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo ' +  peran + ' ' + nama +',' + ' kamu dapat menyerang dengan senjatamu!' )
}
else if(nama === 'Bolky' && peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo ' +  peran + ' ' + nama +',' + ' kamu akan membantu temanmu yang terluka.' )
}
else if(nama === 'Bolky' && peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo ' +  peran + ' ' + nama +',' + ' ciptakan keajaiban yang membantu kemenanganmu!' )
}
else {
    console.log('Pilih peranmu untuk memulai game')
}
