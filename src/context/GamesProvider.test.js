import { addValuesToJson } from '../datas/API'

test('addValuesToJson ajout les valeurs aux objets et renvoi le bon tableau', () => {
  const games = [
    { id: 1, name: 'Game 1' },
    { id: 2, name: 'Game 2' },
    { id: 3, name: 'Game 3' },
  ]

  addValuesToJson(games)

  games.forEach((game) => {
    expect(game).toHaveProperty('price')
    expect(game).toHaveProperty('gotIt')
    expect(game).toHaveProperty('note')
  })
})
