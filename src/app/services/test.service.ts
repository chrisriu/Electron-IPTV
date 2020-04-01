import { Injectable, Output, EventEmitter } from '@angular/core';

import { Movie } from '../models'
import { LiveTV } from '../models'
import { Serie } from '../models';

@Injectable({ providedIn: 'root' })
export class TestService {
  categories: Object = {
    "live_categories": [
      {
        category_id: "1",
        category_name: "Romania",
        parent_id: 0
      }, {
        category_id: "20",
        category_name: "Romania On Demand",
        parent_id: 0
      }, {
        category_id: "47",
        category_name: "United Kingdom VIP",
        parent_id: 0
      }, {
        category_id: "18",
        category_name: "United States",
        parent_id: 0
      }, {
        category_id: "23",
        category_name: "Canada EN + FR",
        parent_id: 0
      }, {
        category_id: "27",
        category_name: "Ex Yugoslavia",
        parent_id: 0
      }, {
        category_id: "26",
        category_name: "Arabia Saudita",
        parent_id: 0
      }, {
        category_id: "29",
        category_name: "Portugalia",
        parent_id: 0
      }, {
        category_id: "28",
        category_name: "Ntherland",
        parent_id: 0
      }, {
        category_id: "24",
        category_name: "Germania",
        parent_id: 0
      }, {
        category_id: "30",
        category_name: "Brazilia",
        parent_id: 0
      }, {
        category_id: "31",
        category_name: "Grecia",
        parent_id: 0
      }, {
        category_id: "19",
        category_name: "Spania",
        parent_id: 0
      }, {
        category_id: "21",
        category_name: "Italia",
        parent_id: 0
      }, {
        category_id: "22",
        category_name: "Franta",
        parent_id: 0
      }, {
        category_id: "25",
        category_name: "Turcia",
        parent_id: 0
      }, {
        category_id: "2",
        category_name: "Adult Live",
        parent_id: 0
      }
    ],
    "vod_categories": [
      {
        category_id: "3",
        category_name: "Actiune",
        parent_id: 0
      }, {
        category_id: "9",
        category_name: "Animatie",
        parent_id: 0
      }, {
        category_id: "10",
        category_name: "Aventura",
        parent_id: 0
      }, {
        category_id: "4",
        category_name: "Comedie",
        parent_id: 0
      }, {
        category_id: "11",
        category_name: "Drama",
        parent_id: 0
      }, {
        category_id: "7",
        category_name: "Romantice",
        parent_id: 0
      }, {
        category_id: "6",
        category_name: "Documentare",
        parent_id: 0
      }, {
        category_id: "13",
        category_name: "Adult VOD",
        parent_id: 0
      }, {
        category_id: "41",
        category_name: "Family",
        parent_id: 0
      }, {
        category_id: "14",
        category_name: "English VOD",
        parent_id: 0
      }, {
        category_id: "34",
        category_name: "Sci-Fi",
        parent_id: 0
      }, {
        category_id: "15",
        category_name: "Fantezie",
        parent_id: 0
      }, {
        category_id: "33",
        category_name: "Horror",
        parent_id: 0
      }, {
        category_id: "16",
        category_name: "Mister",
        parent_id: 0
      }, {
        category_id: "32",
        category_name: "Western",
        parent_id: 0
      }, {
        category_id: "50",
        category_name: "Filme 4K UHD",
        parent_id: 0
      }, {
        category_id: "8",
        category_name: "Filme Romanesti",
        parent_id: 0
      }
    ],
    "serie_categories": [
      {
        category_id: "40",
        category_name: "The Witcher",
        parent_id: 0
      }, {
        category_id: "42",
        category_name: "Chernobyl",
        parent_id: 0
      }, {
        category_id: "48",
        category_name: "Las Fierbinţi",
        parent_id: 0
      }, {
        category_id: "51",
        category_name: "Peaky Blinders",
        parent_id: 0
      }, {
        category_id: "43",
        category_name: "SEE",
        parent_id: 0
      }, {
        category_id: "53",
        category_name: "Vlad",
        parent_id: 0
      }
    ]
  }
  vods: Movie[] = [
    {
      num: 1614,
      name: "Zombieland - 2009",
      stream_type: "movie",
      stream_id: 40991,
      stream_icon: null,
      rating: null,
      rating_5based: 0,
      added: "1584342277",
      category_id: "14",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1615,
      name: "Zookeeper - 2011",
      stream_type: "movie",
      stream_id: 40992,
      stream_icon: null,
      rating: null,
      rating_5based: 0,
      added: "1584342277",
      category_id: "14",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1616,
      name: "G.I. Joe: The Rise of Cobra - 2009",
      stream_type: "movie",
      stream_id: 40994,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/29eW5c5DaCFQejdt9V14RrA51yD.jpg",
      rating: "5.7",
      rating_5based: 2.9,
      added: "1584386298",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1617,
      name: "Pay the Ghost - 2015",
      stream_type: "movie",
      stream_id: 40995,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3ZeaXFlRlZ3DzJ61akU2VotU80X.jpg",
      rating: "5.3",
      rating_5based: 2.7,
      added: "1584386656",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1618,
      name: "Pete's Dragon - 2016",
      stream_type: "movie",
      stream_id: 40996,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vxi7yxz41OUQH7ECEfQjYyLR6J1.jpg",
      rating: "6.3",
      rating_5based: 3.2,
      added: "1584386714",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1619,
      name: "Pirates of the Caribbean: At World's End - 2007",
      stream_type: "movie",
      stream_id: 40997,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bXb00CkHqx7TPchTGG131sWV59y.jpg",
      rating: "7.2",
      rating_5based: 3.6,
      added: "1584386791",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1620,
      name: "Pirates of the Caribbean: Dead Man's Chest - 2006",
      stream_type: "movie",
      stream_id: 40998,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iwvyZBRD7qfDQ8ylRmf5NbLC5Oi.jpg",
      rating: "7.2",
      rating_5based: 3.6,
      added: "1584387267",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1621,
      name: "Pirates of the Caribbean: Dead Men Tell No Tales - 2017",
      stream_type: "movie",
      stream_id: 40999,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xbpSDU3p7YUGlu9Mr6Egg2Vweto.jpg",
      rating: "6.6",
      rating_5based: 3.3,
      added: "1584387359",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1622,
      name: "Pirates of the Caribbean: The Curse of the Black Pearl - 2003",
      stream_type: "movie",
      stream_id: 41000,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tkt9xR1kNX5R9rCebASKck44si2.jpg",
      rating: "7.7",
      rating_5based: 3.9,
      added: "1584387497",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1623,
      name: "Poinsettias for Christmas - 2018",
      stream_type: "movie",
      stream_id: 41001,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/A3QJY2HzDnt7tCrNQNnH1wQ3sV9.jpg",
      rating: "6.3",
      rating_5based: 3.2,
      added: "1584387567",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1624,
      name: "Prey - 2019",
      stream_type: "movie",
      stream_id: 41002,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/13Wsjb9tnvwSZP6kllLxphiWZWh.jpg",
      rating: "5.3",
      rating_5based: 2.7,
      added: "1584387643",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1625,
      name: "Primeval - 2007",
      stream_type: "movie",
      stream_id: 41003,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iQjcisfGhoRSWJ15PWgnIrreIHs.jpg",
      rating: "4.9",
      rating_5based: 2.5,
      added: "1584387780",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1626,
      name: "Prisoner X - 2016",
      stream_type: "movie",
      stream_id: 41004,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/p4YobAREegYa6UVTdD0uIm37gEf.jpg",
      rating: "8",
      rating_5based: 4,
      added: "1584387936",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1627,
      name: "Quantum of Solace - 2008",
      stream_type: "movie",
      stream_id: 41005,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6mlNx0Jiqhg3D7NlANT9pidsgPJ.jpg",
      rating: "6.3",
      rating_5based: 3.2,
      added: "1584388080",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1628,
      name: "Ragnarok - 2013",
      stream_type: "movie",
      stream_id: 41006,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wzth1phazWxFEFYTsr8pAYlDvOw.jpg",
      rating: "5.7",
      rating_5based: 2.9,
      added: "1584388135",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1629,
      name: "Raiders of the Lost Ark - 1981",
      stream_type: "movie",
      stream_id: 41007,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/44sKJOGP3fTm4QXBcIuqu0RkdP7.jpg",
      rating: "7.9",
      rating_5based: 4,
      added: "1584388184",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1630,
      name: "Rampage - 2018",
      stream_type: "movie",
      stream_id: 41008,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg",
      rating: "6.2",
      rating_5based: 3.1,
      added: "1584388289",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1631,
      name: "Red Sparrow - 2018",
      stream_type: "movie",
      stream_id: 41009,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vLCogyfQGxVLDC1gqUdNAIkc29L.jpg",
      rating: "6.5",
      rating_5based: 3.3,
      added: "1584388402",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1632,
      name: "Reign of Fire - 2002",
      stream_type: "movie",
      stream_id: 41010,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/c9FlSkQ0EV2vzln4Bo5NCvzzxWm.jpg",
      rating: "6",
      rating_5based: 3,
      added: "1584388449",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1633,
      name: "River Queen - 2005",
      stream_type: "movie",
      stream_id: 41011,
      stream_icon: "",
      rating: "",
      rating_5based: 0,
      added: "1584388504",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1634,
      name: "River Runs Red - 2018",
      stream_type: "movie",
      stream_id: 41012,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8GsHFBf8uIZ5thXCGqKer9OOKkQ.jpg",
      rating: "5.1",
      rating_5based: 2.6,
      added: "1584388563",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1635,
      name: "Road to Nowhere - 2010",
      stream_type: "movie",
      stream_id: 41013,
      stream_icon: "",
      rating: "",
      rating_5based: 0,
      added: "1584389114",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1636,
      name: "Romancing the Stone - 1984",
      stream_type: "movie",
      stream_id: 41014,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3TqpkTYiltYsxYatdug6WDgdRKL.jpg",
      rating: "6.7",
      rating_5based: 3.4,
      added: "1584389313",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1637,
      name: "Rondo - 2018",
      stream_type: "movie",
      stream_id: 41015,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zq5KDq345YEvQn3PZFtUMWLo09o.jpg",
      rating: "6",
      rating_5based: 3,
      added: "1584389400",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1638,
      name: "Santa Buddies - 2009",
      stream_type: "movie",
      stream_id: 41016,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4du23VE8zJmyk9yJ2X7DQvKhF2L.jpg",
      rating: "5.7",
      rating_5based: 2.9,
      added: "1584389487",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1639,
      name: "Season of the Witch - 2011",
      stream_type: "movie",
      stream_id: 41017,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/71XUlmCSJomhBZoXDBBIMxzoLFx.jpg",
      rating: "5.3",
      rating_5based: 2.7,
      added: "1584389622",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1640,
      name: "Show Dogs - 2018",
      stream_type: "movie",
      stream_id: 41018,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2dvxCBUfDG2cAdkA921rERxhtcp.jpg",
      rating: "5.9",
      rating_5based: 3,
      added: "1584389677",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1641,
      name: "Sleepwalker - 2017",
      stream_type: "movie",
      stream_id: 41019,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/pyLCyJZr0jLYhuojFZn8kjkkSzH.jpg",
      rating: "4.5",
      rating_5based: 2.3,
      added: "1584392830",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1642,
      name: "Solomon Kane - 2009",
      stream_type: "movie",
      stream_id: 41020,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/n5SHBE4ulsDDVa9gYttUYwp1VZU.jpg",
      rating: "5.8",
      rating_5based: 2.9,
      added: "1584393181",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1643,
      name: "Stardust - 2017",
      stream_type: "movie",
      stream_id: 41021,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/A9gXvPOnMu961E36x5p3RT4FQ5E.jpg",
      rating: "7.2",
      rating_5based: 3.6,
      added: "1584393276",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1644,
      name: "Star Wars: Episode I - The Phantom Menace - 1999",
      stream_type: "movie",
      stream_id: 41022,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/n8V09dDc02KsSN6Q4hC2BX6hN8X.jpg",
      rating: "6.4",
      rating_5based: 3.2,
      added: "1584393483",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1645,
      name: "Stasis - 2017",
      stream_type: "movie",
      stream_id: 41023,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/b9vn7KJl5vsmJuCvTlZnQgZhWOI.jpg",
      rating: "3.5",
      rating_5based: 1.8,
      added: "1584393689",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1646,
      name: "Tai-Pan - 1986",
      stream_type: "movie",
      stream_id: 41024,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/inAgrq4xzZeMUb2OMViLTtwGRho.jpg",
      rating: "4.7",
      rating_5based: 2.4,
      added: "1584393730",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1647,
      name: "The 5th Wave - 2016",
      stream_type: "movie",
      stream_id: 41025,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/s7OVVDszWUw79clca0durAIa6mw.jpg",
      rating: "5.9",
      rating_5based: 3,
      added: "1584393822",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1648,
      name: "The Adventurer: The Curse of the Midas Box - 2013",
      stream_type: "movie",
      stream_id: 41026,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/symtByZWJj0wGsSoKQDKmgiQbce.jpg",
      rating: "5.3",
      rating_5based: 2.7,
      added: "1584393879",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1649,
      name: "The Amazing Spider-Man 2 - 2014",
      stream_type: "movie",
      stream_id: 41027,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mUjWof8LHDgCZC9mFp0UYKBf1Dm.jpg",
      rating: "6.4",
      rating_5based: 3.2,
      added: "1584393978",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1650,
      name: "The Barbarians - 1987",
      stream_type: "movie",
      stream_id: 41028,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2mcwKUkw9dvZHCZRlKxQvUtrAJR.jpg",
      rating: "5.6",
      rating_5based: 2.8,
      added: "1584394049",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1651,
      name: "The BFG - 2016",
      stream_type: "movie",
      stream_id: 41029,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xMvzfhXZdfeLBZZUIQRB4vw1EtA.jpg",
      rating: "6.2",
      rating_5based: 3.1,
      added: "1584394085",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1652,
      name: "The Bride - 2017",
      stream_type: "movie",
      stream_id: 41030,
      stream_icon: "https://m.media-amazon.com/images/M/MV5BZWIxNzQzYmEtMjIyZC00YTZkLTk3ZjYtNTY0YWNhYTY4YTM3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      rating: "5.5",
      rating_5based: 2.8,
      added: "1584394273",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1653,
      name: "The Divergent Series Allegiant- 2016",
      stream_type: "movie",
      stream_id: 41031,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tSFBh9Ayn5uiwbUK9HvD2lrRgaQ.jpg",
      rating: "6",
      rating_5based: 3,
      added: "1584394456",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1654,
      name: "The Fifth Element - 1997",
      stream_type: "movie",
      stream_id: 41032,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zaFa1NRZEnFgRTv5OVXkNIZO78O.jpg",
      rating: "7.5",
      rating_5based: 3.8,
      added: "1584394560",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1655,
      name: "The Golden Compass - 2007",
      stream_type: "movie",
      stream_id: 41033,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/97dPFOvgUb5Q8LjRNt8u6lbJSfp.jpg",
      rating: "6",
      rating_5based: 3,
      added: "1584394651",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1656,
      name: "The Goonies - 1985",
      stream_type: "movie",
      stream_id: 41034,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bZUbpjwnarSHJK40W9sGpyedWhx.jpg",
      rating: "7.5",
      rating_5based: 3.8,
      added: "1584394740",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1657,
      name: "The Karate Kid - 1984",
      stream_type: "movie",
      stream_id: 41035,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5kKor5pZ3ov08CAstSyk7FGDKVN.jpg",
      rating: "7",
      rating_5based: 3.5,
      added: "1584394805",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1658,
      name: "The Lord of the Rings: The Return of the King - 2003",
      stream_type: "movie",
      stream_id: 41036,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      rating: "8.4",
      rating_5based: 4.2,
      added: "1584394857",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1659,
      name: "The Lord of the Rings: The Two Towers - 2002",
      stream_type: "movie",
      stream_id: 41037,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
      rating: "8.3",
      rating_5based: 4.2,
      added: "1584394900",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1660,
      name: "The Mummy - 1999",
      stream_type: "movie",
      stream_id: 41038,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg",
      rating: "6.8",
      rating_5based: 3.4,
      added: "1584394981",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1661,
      name: "The Princess Switch - 2018",
      stream_type: "movie",
      stream_id: 41039,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/biRUM4CBgfJtEQDCttf3zca4epp.jpg",
      rating: "7.1",
      rating_5based: 3.6,
      added: "1584395033",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1662,
      name: "The Sorcerer's Apprentice - 2010",
      stream_type: "movie",
      stream_id: 41040,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ZNSrRpdJ6FjMy4Iu6JpRTJ5Q87.jpg",
      rating: "6",
      rating_5based: 3,
      added: "1584395144",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1663,
      name: "The Twilight Saga: Breaking Dawn - Part 1 - 2011",
      stream_type: "movie",
      stream_id: 41041,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dSSzv6JrlwS48pBeTNSswLJXOYF.jpg",
      rating: "6",
      rating_5based: 3,
      added: "1584395306",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1664,
      name: "The Twilight Saga: Eclipse - 2010",
      stream_type: "movie",
      stream_id: 41042,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sOpCY4by0bkEu9LbVXVCOpWWKzF.jpg",
      rating: "6.1",
      rating_5based: 3.1,
      added: "1584395414",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1665,
      name: "The Twilight Saga: Breaking Dawn - Part 2 - 2012",
      stream_type: "movie",
      stream_id: 41043,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kJQPygYB8aNEevZZHRifyYrAdU9.jpg",
      rating: "6.3",
      rating_5based: 3.2,
      added: "1584395575",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1666,
      name: "The Twilight Saga: New Moon - 2009",
      stream_type: "movie",
      stream_id: 41044,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4O6OCHVrXie2Th8asDn5utvlTwC.jpg",
      rating: "5.8",
      rating_5based: 2.9,
      added: "1584395688",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1667,
      name: "The Warriors Gate - 2016",
      stream_type: "movie",
      stream_id: 41045,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tordvGaBjmoANX6nMpeDdgvy4g3.jpg",
      rating: "5.9",
      rating_5based: 3,
      added: "1584395740",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1668,
      name: "The Water Horse - 2007",
      stream_type: "movie",
      stream_id: 41046,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gaUhhbLlDWD8DwXQtUTXENSLcPN.jpg",
      rating: "6.4",
      rating_5based: 3.2,
      added: "1584395803",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1669,
      name: "Thor - 2011",
      stream_type: "movie",
      stream_id: 41047,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9zDwvsISU8bR15R2yN3kh1lfqve.jpg",
      rating: "6.7",
      rating_5based: 3.4,
      added: "1584395912",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1670,
      name: "Trouble Is My Business - 2018",
      stream_type: "movie",
      stream_id: 41048,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2o4z89Q6YsEniOboIvRDKVNnuPw.jpg",
      rating: "7.8",
      rating_5based: 3.9,
      added: "1584395957",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1671,
      name: "Twilight - 2008",
      stream_type: "movie",
      stream_id: 41049,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lcMp3AONdNhjYE9MmTtMMTOiRDP.jpg",
      rating: "6",
      rating_5based: 3,
      added: "1584396011",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1672,
      name: "Underworld: Rise of the Lycans - 2009",
      stream_type: "movie",
      stream_id: 41050,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hZtK6fkusSKzGc0f7yQ2syo14Ze.jpg",
      rating: "6.4",
      rating_5based: 3.2,
      added: "1584396072",
      category_id: "15",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1673,
      name: "Universal Soldier: Regeneration - 2009",
      stream_type: "movie",
      stream_id: 41051,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cfrlspTWu1DDwpoAZjcrvWgcLfg.jpg",
      rating: "5.4",
      rating_5based: 2.7,
      added: "1584396125",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1674,
      name: "Valerian and the City of a Thousand Planets - 2017",
      stream_type: "movie",
      stream_id: 41052,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jfIpMh79fGRqYJ6PwZLCntzgxlF.jpg",
      rating: "6.5",
      rating_5based: 3.3,
      added: "1584396181",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1675,
      name: "Voyage to the Bottom of the Sea - 1961",
      stream_type: "movie",
      stream_id: 41053,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eBm2BUvRwGwxr3hfAaOJ8kVuuhw.jpg",
      rating: "6",
      rating_5based: 3,
      added: "1584396224",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1676,
      name: "Walking Out - 2017",
      stream_type: "movie",
      stream_id: 41054,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wK3l4ZfcRXFph6uop7yr7scM2SP.jpg",
      rating: "5.9",
      rating_5based: 3,
      added: "1584396267",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1677,
      name: "Thunder at the Border - 1966",
      stream_type: "movie",
      stream_id: 41055,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vSCNFy23xbnmEBONqGsd7p9DhOp.jpg",
      rating: "5.8",
      rating_5based: 2.9,
      added: "1584396316",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1678,
      name: "Wrath of the Titans - 2012",
      stream_type: "movie",
      stream_id: 41056,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/Albfq3ziSCQVyh5PzMSsFmmgHmy.jpg",
      rating: "5.6",
      rating_5based: 2.8,
      added: "1584396388",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1679,
      name: "X-Men Origins: Wolverine - 2009",
      stream_type: "movie",
      stream_id: 41057,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kqO36IYvWbRKMPiUeiVZUFH06Rc.jpg",
      rating: "6.2",
      rating_5based: 3.1,
      added: "1584396511",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1680,
      name: "X2 - 2003",
      stream_type: "movie",
      stream_id: 41058,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2ucMY4dPE4gGLPgDdYgyggYHBkF.jpg",
      rating: "7",
      rating_5based: 3.5,
      added: "1584396577",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 1681,
      name: "68 Kill - 2018",
      stream_type: "movie",
      stream_id: 41276,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/80ifMmWcNMQ8uD4DTyMFEuJbEJG.jpg",
      rating: "5.7",
      rating_5based: 2.9,
      added: "1584641385",
      category_id: "4",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    }, {
      num: 2254,
      name: "VOD-XXX Hot Splash(1991)",
      stream_type: "movie",
      stream_id: 38059,
      stream_icon: null,
      rating: null,
      rating_5based: 0,
      added: "1583349717",
      category_id: "13",
      container_extension: "avi",
      custom_sid: "",
      direct_source: ""
    },
    {
      num: 2255,
      name: "VOD-XXX how_its_done_big-720",
      stream_type: "movie",
      stream_id: 38060,
      stream_icon: null,
      rating: null,
      rating_5based: 0,
      added: "1583349717",
      category_id: "13",
      container_extension: "mp4",
      custom_sid: "",
      direct_source: ""
    }
  ];

  series: Serie[] = [
    {
      num: 1,
      name: "Las Fierbinţi",
      series_id: 7,
      cover: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cLQgMd9dWuMudKPJfPGNstQFTo8.jpg",
      plot: "A rural comedy where the intrigues caused by the upcoming elections in a small village give rise to a ridiculous war between the mayor and deputy mayor. Unfortunately, they have no clue that their struggle will prove to be in vain at the end of the election day.",
      cast: "",
      director: "",
      genre: "Comedy",
      releaseDate: "2012-03-01",
      last_modified: "1585512058",
      rating: "10",
      rating_5based: 5,
      backdrop_path: [
        "https://image.tmdb.org/t/p/w1280/c0xo9cxU2AdHD4vobLyx9ZeexOS.jpg"
      ],
      youtube_trailer: "",
      episode_run_time: "50",
      category_id: "48"
    },
    {
      num: 2,
      name: "See",
      series_id: 8,
      cover: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/g3JsScc7mQCfc3e5e5rXwu7xVVP.jpg",
      plot: "A virus has decimated humankind. Those who survived emerged blind. Centuries later when twins are born with the mythic ability to see, their father must protect his tribe against a threatened queen.",
      cast: "Jason Momoa, Sylvia Hoeks, Alfre Woodard, Hera Hilmar, Christian Camargo",
      director: "",
      genre: "Drama, Sci-Fi & Fantasy, Action & Adventure",
      releaseDate: "2019-11-01",
      last_modified: "1585520931",
      rating: "8",
      rating_5based: 4,
      backdrop_path: [
        "https://image.tmdb.org/t/p/w1280/8TOkxONO3TEeJRuZWb0hG7SboyV.jpg"
      ],
      youtube_trailer: "7Rg0y7NT1gU",
      episode_run_time: "60",
      category_id: "43"
    },
    {
      num: 3,
      name: "The Witcher",
      series_id: 9,
      cover: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
      plot: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
      cast: "Henry Cavill, Freya Allan, Anya Chalotra, Joey Batey, MyAnna Buring",
      director: "Matthew D’Ambrosio",
      genre: "Drama, Action & Adventure",
      releaseDate: "2019-12-20",
      last_modified: "1585481159",
      rating: "8",
      rating_5based: 4,
      backdrop_path: [
        "https://image.tmdb.org/t/p/w1280/bKETHQDD3QoIRTMOP4dfKwisL3g.jpg"
      ],
      youtube_trailer: "ndl1W4ltcmg",
      episode_run_time: "60",
      category_id: "40"
    },
    {
      num: 4,
      name: "Chernobyl",
      series_id: 10,
      cover: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
      plot: "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
      cast: "Jared Harris, Stellan Skarsgård, Emily Watson, Paul Ritter, Jessie Buckley",
      director: "Francesc Prat Duten",
      genre: "Drama",
      releaseDate: "2019-05-06",
      last_modified: "1585485685",
      rating: "9",
      rating_5based: 4.5,
      backdrop_path: [
        "https://image.tmdb.org/t/p/w1280/uL6Ad12W09L1sfuOE2pcTeak7bt.jpg"
      ],
      youtube_trailer: "s9APLXM9Ei8",
      episode_run_time: "70",
      category_id: "42"
    },
    {
      num: 5,
      name: "Peaky Blinders",
      series_id: 11,
      cover: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jeWoeUQyHdxGFNZCrzbOUP78FiZ.jpg",
      plot: "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.",
      cast: "Cillian Murphy, Paul Anderson, Sam Claflin, Finn Cole, Anya Taylor-Joy",
      director: "Jonathan Midlane",
      genre: "Drama, Crime",
      releaseDate: "2013-09-12",
      last_modified: "1585554651",
      rating: "8",
      rating_5based: 4,
      backdrop_path: [
        "https://image.tmdb.org/t/p/w1280/rWUC2x8q7Cu5Wrx2PKH0sYYmVx7.jpg"
      ],
      youtube_trailer: "EM12mcTEI88",
      episode_run_time: "60",
      category_id: "51"
    }]
  livetvs: LiveTV[] = [
    {
      num: 1,
      name: "Agro TV",
      stream_type: "live",
      stream_id: 19,
      stream_icon: "http://pro-picons.com/picons/agrotvsd.png",
      epg_channel_id: "Agro TV",
      added: "1572882542",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 2,
      name: "Alfa Omega TV",
      stream_type: "live",
      stream_id: 102,
      stream_icon: "http://pro-picons.com/picons/alfa_omega.png",
      epg_channel_id: "Alfa Omega TV",
      added: "1572885191",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 3,
      name: "Antena 1",
      stream_type: "live",
      stream_id: 8,
      stream_icon: "http://pro-picons.com/picons/antena1sd.png",
      epg_channel_id: "Antena 1",
      added: "1572875727",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 4,
      name: "Antena 1 FHD",
      stream_type: "live",
      stream_id: 9,
      stream_icon: "http://pro-picons.com/picons/antena1hd.png",
      epg_channel_id: "Antena 1 HD",
      added: "1572875830",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 5,
      name: "Antena 3",
      stream_type: "live",
      stream_id: 40,
      stream_icon: "http://pro-picons.com/picons/Antena%203-black.png",
      epg_channel_id: "Antena 3",
      added: "1572883336",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 6,
      name: "Antena 3 FHD",
      stream_type: "live",
      stream_id: 124,
      stream_icon: "http://pro-picons.com/picons/antena3_hd.png",
      epg_channel_id: "Antena 3 HD",
      added: "1572885739",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 7,
      name: "Antena Stars",
      stream_type: "live",
      stream_id: 38,
      stream_icon: "http://pro-picons.com/picons/antenastarssd.png",
      epg_channel_id: "Antena Stars",
      added: "1572883274",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 8,
      name: "Antena Stars FHD",
      stream_type: "live",
      stream_id: 125,
      stream_icon: "http://pro-picons.com/picons/antenastarshd-black.png",
      epg_channel_id: "Antena Stars",
      added: "1572885762",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 9,
      name: "AXN",
      stream_type: "live",
      stream_id: 33,
      stream_icon: "http://pro-picons.com/picons/AXN-black.png",
      epg_channel_id: "AXN",
      added: "1572883140",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 10,
      name: "AXN Black",
      stream_type: "live",
      stream_id: 37,
      stream_icon: "http://pro-picons.com/picons/AXN%20Black-black.png",
      epg_channel_id: "AXN Black",
      added: "1572883248",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    },
    {
      num: 11,
      name: "AXN FHD",
      stream_type: "live",
      stream_id: 34,
      stream_icon: "http://pro-picons.com/picons/axn_hd.png",
      epg_channel_id: "AXN HD",
      added: "1572883164",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 12,
      name: "AXN Spin",
      stream_type: "live",
      stream_id: 35,
      stream_icon: "http://pro-picons.com/picons/axn_spin_sd-black.png",
      epg_channel_id: "AXN Spin",
      added: "1572883199",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 13,
      name: "AXN White",
      stream_type: "live",
      stream_id: 36,
      stream_icon: "http://pro-picons.com/picons/AXN%20WHite-black.png",
      epg_channel_id: "AXN White",
      added: "1572883222",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 14,
      name: "B1 TV",
      stream_type: "live",
      stream_id: 73,
      stream_icon: "http://pro-picons.com/picons/B1%20TV-black%20.png",
      epg_channel_id: "B1 TV",
      added: "1572884350",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 15,
      name: "BBC Earth",
      stream_type: "live",
      stream_id: 29,
      stream_icon: "http://pro-picons.com/picons/BBC%20Earth-black.png",
      epg_channel_id: "BBC Earth",
      added: "1572883023",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 16,
      name: "BollyWood",
      stream_type: "live",
      stream_id: 70,
      stream_icon: "http://pro-picons.com/picons/BollywoodTvsd.png",
      epg_channel_id: "Bollywood TV",
      added: "1572884206",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 17,
      name: "Boomerang",
      stream_type: "live",
      stream_id: 14,
      stream_icon: "http://pro-picons.com/picons/Boomerang-black.png",
      epg_channel_id: "Boomerang",
      added: "1572882134",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 18,
      name: "Bucuresti TV",
      stream_type: "live",
      stream_id: 105,
      stream_icon: "http://pro-picons.com/picons/BUCURESTITVSD.png",
      epg_channel_id: "Bucuresti TV",
      added: "1572885257",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 19,
      name: "Capital TV",
      stream_type: "live",
      stream_id: 141,
      stream_icon: "http://pro-picons.com/picons/Capital%20TV%20SD-%20black.png",
      epg_channel_id: null,
      added: "1572886106",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 20,
      name: "Cartoon Network",
      stream_type: "live",
      stream_id: 39,
      stream_icon: "http://pro-picons.com/picons/cartoonnetworksd.png",
      epg_channel_id: "Cartoon Network",
      added: "1572883297",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 21,
      name: "Cinemaraton",
      stream_type: "live",
      stream_id: 131,
      stream_icon: "http://pro-picons.com/picons/cinemaratonsd.png",
      epg_channel_id: "Cinemaraton",
      added: "1572885907",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 22,
      name: "Cinemaraton FHD",
      stream_type: "live",
      stream_id: 120,
      stream_icon: "http://pro-picons.com/picons/cinemaraton1hd.png",
      epg_channel_id: "Cinemaraton",
      added: "1572885607",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 23,
      name: "CineMAX",
      stream_type: "live",
      stream_id: 87,
      stream_icon: "http://pro-picons.com/picons/CineMAX%20SD%20-%20black.png",
      epg_channel_id: "CineMAX",
      added: "1572884675",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 24,
      name: "Cinemax 2",
      stream_type: "live",
      stream_id: 132,
      stream_icon: "http://pro-picons.com/picons/cinemax2sd.png",
      epg_channel_id: "Cinemax 2",
      added: "1572885926",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }, {
      num: 25,
      name: "Cinemax FHD",
      stream_type: "live",
      stream_id: 148,
      stream_icon: "http://pro-picons.com/picons/cinemax_hd.png",
      epg_channel_id: "Cinemax HD",
      added: "1572886258",
      category_id: "1",
      custom_sid: "",
      tv_archive: 0,
      direct_source: "",
      tv_archive_duration: 0
    }
  ]

  public getLastMovies(count: number) {
    var i, j;
    var maxIndex, maxDate
    var tmp: Movie;
    let tmp_Object: Movie[] = []
    for (i = 0; i < count; i++) {
      maxIndex = i
      maxDate = this.vods[i].added
      for (j = i + 1; j < this.vods.length; j++) {
        if (this.vods[j].added > maxDate) {
          maxIndex = j
          maxDate = this.vods[j].added
          tmp = this.vods[i]
          this.vods[i] = this.vods[maxIndex]
          this.vods[maxIndex] = tmp
        }
      }
    }

    for (var k = 0; k < count; k++) {
      tmp_Object[k] = this.vods[k]
    }
    console.log(tmp_Object)
  }

  public makeArraywithDateAndId() {

  }
}
