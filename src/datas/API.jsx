// API
import axios from 'axios'

function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const addValuesToJson = (games) => {
  for (let game of games) {
    game.price = getRandomNumber(1, 69)
    game.gotIt = false
    game.note = getRandomNumber(0, 20)
  }
}

export const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': '894e1bfc3bmsh75229056e85c892p19174ejsnc0d08be616d8',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
}

export const fetchGames = async () => {
  const response = await axios.request(options)
  addValuesToJson(response.data)
  return response.data
}

// FAKE API RETOUR

export const fakeGames = [
  {
    id: 1,
    image:
      'https://actua.blog/wp-content/uploads/2021/12/Test-de-Farming-Simulator-22.jpg',
    favicon:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e87d432c-0c31-4673-912d-407d8ee09362/dezxdz8-1fa51f4f-0b71-43b7-9032-fc11cdeabc91.png/v1/fill/w_1280,h_1280/farming_simulator_22_v_2_icon_by_darknc831_dezxdz8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4N2Q0MzJjLTBjMzEtNDY3My05MTJkLTQwN2Q4ZWUwOTM2MlwvZGV6eGR6OC0xZmE1MWY0Zi0wYjcxLTQzYjctOTAzMi1mYzExY2RlYWJjOTEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lfRjhRnY9pCH8m-OwlZ_CgJKlH-RBDSgSOSBwJ4Fra0',
    title: 'Farming Simulator 2022',
    short_description:
      "Entrez dans la peau d'un agriculteur moderne ! La culture, l'élevage et la sylviculture offrent un large éventail d'activités agricoles quand vous affrontez le défi des quatre saisons, en particulier quand l'hiver s'installe.",
    note: 16,
    price: 29.99,
    onCart: false,
    gotIt: false,
    personalRank: null,
    genre: 'MMO',
    platform: 'PC',
  },
  {
    id: 2,
    image:
      'https://image.api.playstation.com/vulcan/img/rnd/202010/0918/8OwOHnpkwNQ5IgQkYSxI9xG4.jpg',
    favicon:
      'https://assets.materialup.com/uploads/e0bb5741-9616-4c22-8f08-7ad943116203/preview.png',
    title: 'Prison Architect',
    short_description:
      'Seuls les gardiens de prison les plus impitoyables seront capables de confiner les plus cruels des détenus. Dans Prison Architect, vous devrez concevoir et développer votre établissement pénitencier personnalisé.',
    note: 18,
    price: 24.99,
    onCart: false,
    gotIt: true,
    personalRank: null,
    genre: 'City Builer',
    platform: 'Mac',
  },
  {
    id: 3,
    image: 'https://www-origin.planetzoogame.com/images/og_image.jpg',
    favicon:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/557703a2-f0df-4e9e-8006-f1a8a0666122/ddmllz3-5f4bf06f-b9eb-4a42-9ef2-f8b12d7109a1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NzcwM2EyLWYwZGYtNGU5ZS04MDA2LWYxYThhMDY2NjEyMlwvZGRtbGx6My01ZjRiZjA2Zi1iOWViLTRhNDItOWVmMi1mOGIxMmQ3MTA5YTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.P02MRs0qX0r7HPx63BtRbQcapRnt6kBz9VhaaMwLMQU',
    title: 'Planet Zoo',

    short_description:
      "Avec Planet Zoo, construisez un monde idéal pour nos amies les bêtes ! Les développeurs de Planet Coaster et de Zoo Tycoon vous proposent la simulation de zoo ultime. Bâtissez des habitats, gérez votre zoo et prenez soin des animaux qui exploreront l'univers que vous leur aurez créé.",
    note: 16,
    price: 44.99,
    onCart: false,
    gotIt: true,
    personalRank: null,
    genre: 'Zoo',
    platform: 'Mac',
  },
  {
    id: 4,
    image:
      'https://ingyen-hatterkep.hu/hatterkepek_tablet/call-of-duty-black-ops-ii-hatterkep-60998.jpg',
    favicon:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d7gysqq-a9cd14d0-bd92-4854-b173-d4071f3aca71.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZDdneXNxcS1hOWNkMTRkMC1iZDkyLTQ4NTQtYjE3My1kNDA3MWYzYWNhNzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MGIN1ZbqNNwhmv7-eCRrFwxgdM23C8KROZOWs-lsNkc',
    title: 'Call Of Duty',
    short_description:
      'Call of Duty®: Modern Warfare® II plonge les joueurs dans un conflit mondial sans précédent, avec le retour des Opérateurs emblématiques de la Task Force 141.',
    note: 17,
    price: 69.99,
    onCart: false,
    gotIt: false,
    personalRank: null,
    genre: 'MMO',
    platform: 'Mac',
  },
  {
    id: 5,
    image:
      'https://cdn1.epicgames.com/e1055bf1e5654b93a27e19e6bb86cb2a/offer/EGS_Tropico6_LimbicEntertainment_S3-2560x1440-82bcd83b988a5c3230ff8f191113d9b2.jpg',
    favicon:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dd3p60i-e220c8a7-21f8-4c25-80a4-502269bf12bf.png/v1/fill/w_512,h_512/tropico_6___icon_by_blagoicons_dd3p60i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNDZiNjNkM2MtYWU2Ny00NjRjLTlhMzctNjcwODI5YjJhMTU3XC9kZDNwNjBpLWUyMjBjOGE3LTIxZjgtNGMyNS04MGE0LTUwMjI2OWJmMTJiZi5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.SWzQNIcj6k0Ig4BVgH1D7yuOGQNtgbfHUPj8hhdZ5sg',
    title: 'Tropico 6',
    short_description:
      'El Presidente est de retour! Endossez une nouvelle fois le rôle de dictateur sans pitié ou d’homme d’État pacifique sur l’île de Tropico, et forgez la destinée de votre nation à travers 4 ères distinctes.',
    note: 19,
    price: 39.99,
    onCart: false,
    gotIt: false,
    personalRank: null,
    genre: 'Plateau',
    platform: 'PC',
  },
  {
    id: 6,
    image:
      'https://cdn1.epicgames.com/6009be9994c2409099588cde6f3a5ed0/offer/EGS_CitiesSkylines_ColossalOrder_S3-2560x1440-14df106873c918591e49bd9604841e83.jpg',
    title: 'Cities Skylines',
    favicon:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d8m1bdf-a4747f70-5060-4cf5-89f2-bdb19e5d2cc9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZDhtMWJkZi1hNDc0N2Y3MC01MDYwLTRjZjUtODlmMi1iZGIxOWU1ZDJjYzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1neiaNQVMLObYai3Gg4MA9AEMgG6xTl1jArFhyreJxg',
    short_description:
      "Cities: Skylines est une version moderne de la simulation classique de ville. Le jeu propose de nouveaux éléments vous permettant de vivre les sensations grisantes et les contraintes de la création et de la gestion d'une ville réelle tout en enrichissant certains aspects bien connus de l'expérience de construction de ville.",
    note: 16,
    price: 28.99,
    onCart: false,
    gotIt: false,
    personalRank: null,
    genre: 'Plateau',
    platform: 'PC',
  },
  {
    id: 7,
    image:
      'https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S1-2560x1440-2fcd1c150ac6d8cdc672ae042d2dd179.jpg',
    favicon:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/da5zhgg-4e9b542c-7ee3-4def-b000-5149abd9e451.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGE1emhnZy00ZTliNTQyYy03ZWUzLTRkZWYtYjAwMC01MTQ5YWJkOWU0NTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gax9I2dATSYuDK_EJtko2JITH0H5Gyvfdejw1VcLgCM',
    title: 'Civilisation VI',
    short_description:
      "Civilization VI est le dernier épisode de la franchise éponyme, récompensée de nombreuses fois. Repoussez les frontières de votre empire, développez votre patrimoine culturel et affrontez les plus grands seigneurs de l'histoire. Votre civilisation tiendra-t-elle face aux ravages du temps ?",
    note: 15,
    price: 59.99,
    onCart: false,
    gotIt: false,
    personalRank: null,
    genre: 'Plateau',
    platform: 'Mac',
  },
  {
    id: 8,
    image:
      'https://cdn1.epicgames.com/7051eadbb8c2435caf32a9bc0dc17936/offer/EGS_Royalty_LudeonStudios_DLC_S1-2560x1440-c2d988da3d4ae505be7bc9739515a3ed.jpg',
    favicon:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dcond0g-e703d028-3e4a-4bed-8c50-aa1ca8dfef52.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGNvbmQwZy1lNzAzZDAyOC0zZTRhLTRiZWQtOGM1MC1hYTFjYThkZmVmNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0zFLFkZZky7RcZUmSlvBTjSx2rZFjf5MlFtkZeY3Bjw',
    title: 'RimWorld',
    short_description:
      'RimWorld suit trois survivants d’un écrasement de vaisseau spatial pendant qu’ils bâtissent leur colonie sur une planète à la frontière de l’espace exploré. Inspiré du genre space western de Firefly, la simulation profonde de Dwarf Fortress, et l’échelle grandiose de Dune et Warhammer 40,000.',
    note: 14,
    price: 31.99,
    onCart: false,
    gotIt: false,
    personalRank: null,
    genre: 'MMO',
    platform: 'PC',
  },
  {
    id: 9,
    image:
      'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_LeisureSuitLarryWetDreamsDontDry_image1600w.jpg',
    favicon:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51c2db2d-2c0c-46dd-ba77-2b328a74c6bb/de7dm6o-0f0005bc-40f9-4b66-9b02-795c199fc381.png/v1/fill/w_512,h_512/leisure_suit_larry___wet_dreams_dry_twice_icon_by_alexbleez_de7dm6o-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTFjMmRiMmQtMmMwYy00NmRkLWJhNzctMmIzMjhhNzRjNmJiXC9kZTdkbTZvLTBmMDAwNWJjLTQwZjktNGI2Ni05YjAyLTc5NWMxOTlmYzM4MS5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._uMKGAzLrrTVKcNBH6m2cadeT5BAotEJRMACSXbng20',
    title: 'Leasure Suit Larry',
    short_description:
      "Rien ne pourra m'empêcher de rejoindre ma bien-aimée, ma Faith, pas même les îles sauvages et farouches de Kalau'a. Ces jolies filles des îles ne détourneront mon regard que temporairement, car mon cœur n'appartient qu'à Faith !",
    note: 15,
    price: 34.99,
    onCart: false,
    gotIt: false,
    personalRank: null,
    genre: 'MMO',
    platform: 'PC',
  },
  {
    id: 10,
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/388210/capsule_616x353.jpg?t=1677883363',
    favicon:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f84e3ba7-1f3c-445a-9bbe-1a1aa70d27e7/d9w5usc-2e3503d9-ab80-4ed7-9ad5-355c1d16fc7f.png/v1/fill/w_400,h_400/day_of_the_tentacle__remastered__circular_icon_by_idanftf_d9w5usc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvZjg0ZTNiYTctMWYzYy00NDVhLTliYmUtMWExYWE3MGQyN2U3XC9kOXc1dXNjLTJlMzUwM2Q5LWFiODAtNGVkNy05YWQ1LTM1NWMxZDE2ZmM3Zi5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.nQbJxXxydH5WVeUzzPQQIWOWHkIpHj_qsnh52_1Ohao',
    title: 'Day of the tentacle',
    short_description:
      '20 ans plus tard, Day of the Tentacle est de retour en version remastérisée incluant des dessins haute définition inédits et faits à la main, ainsi que musiques, effets sonores et audio remastérisés.',
    note: 12,
    price: 14.99,
    onCart: false,
    gotIt: false,
    personalRank: null,
    genre: 'MMO',
    platform: 'Mac',
  },
]
