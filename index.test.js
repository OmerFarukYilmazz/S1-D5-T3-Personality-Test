const myCharacter = require('./index.js');
// const myCharacter = require('./solution.js');

describe('Kişilik Testi Testleri', () => {
  test("['a', 'c', 'b', 'a', 'c'] için 'Düşünceli' dönüyor mu?", () => {
    expect(myCharacter(['a', 'c', 'b', 'a', 'c'])).toBe('Düşünceli');
  });

  test("['a', 'c', 'b', 'c', 'b'] için 'Cesur' dönüyor mu?", () => {
    expect(myCharacter(['a', 'c', 'b', 'c', 'b'])).toBe('Cesur');
  });

  test("Kişilik testi 'Cesur', 'Düşünceli', veya 'Sevimli'den birini dönüyor", () => {
    function randomChoice() {
      const choices = ['a', 'b', 'c'];
      const random = Math.floor(Math.random() * 3);
      return choices[random];
    }
    for (let i = 0; i < 100; i++) {
      const test = [
        randomChoice(),
        randomChoice(),
        randomChoice(),
        randomChoice(),
        randomChoice(),
      ];
      const result = myCharacter(test);
      expect(
        result === 'Cesur' || result === 'Düşünceli' || result === 'Sevimli'
      ).toBe(true);
    }
  });

  test('Fonksiyonun dönüş değeri string mi?', () => {
    const result = myCharacter(['a', 'c', 'b', 'a', 'c']);
    expect(typeof result).toBe('string');
  });

  test('Fonksiyonun dönüş değerinin ilk harfi büyük yazılmış mı?', () => {
    const result = myCharacter(['a', 'c', 'b', 'a', 'c']);
    expect(result[0].toUpperCase() === result[0]).toBe(true);
  });
});