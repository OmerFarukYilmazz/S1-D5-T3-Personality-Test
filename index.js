function myCharacter(array) {
  /* kodlar buraya */
  const arrayScore = [
    [20, 10, 5],
    [10, 5, 20],
    [5, 20, 10],
    [5, 10, 20],
    [10, 20, 5],
  ];
  let totalScore = 0;
  let indexY = 0;
  for (let i = 0; i < array.length; i++) {
    /*if (array[i] == 'a') {
      indexY = 0;
    } else if (array[i] == 'b') {
      indexY = 1;
    } else {
      indexY = 2;
    }*/
    switch (array[i]) {
      case 'a':
        indexY = 0;
        break;
      case 'b':
        indexY = 1;
        break;
      case 'c':
        indexY = 2;
        break;
    }
    totalScore += arrayScore[i][indexY];
  }
  if (totalScore < 50) {
    return 'Sevimli';
  } else if (totalScore < 80) {
    return 'Düşünceli';
  } else {
    return 'Cesur';
  }
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = myCharacter;
