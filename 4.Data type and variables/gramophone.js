function gramophone(band, album, song){
    let time = (album.length * band.length) * song.length / 2
    let rotations = time / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');