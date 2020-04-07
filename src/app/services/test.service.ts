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
  movies: Movie[] = [
    {
      num: 1,
      name: "6 Underground - 2019",
      stream_type: "movie",
      stream_id: 39618,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg",
      rating: "6.1",
      rating_5based: 3.1,
      added: "1583864564",
      category_id: "3",
      container_extension: "mp4",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 2,
      name: "47 Meters Down: Uncaged - 2019",
      stream_type: "movie",
      stream_id: 39619,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wmiC67ium8Is9Fg7PkTAK7cnHj0.jpg",
      rating: "4.9",
      rating_5based: 2.5,
      added: "1583864997",
      category_id: "33",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 3,
      name: "300: Rise of an Empire - 2014",
      stream_type: "movie",
      stream_id: 39620,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gWQf5j3ZqEfOdW2rIZnkuOOva78.jpg",
      rating: "6",
      rating_5based: 3,
      added: "1583866385",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 4,
      name: "Agora - 2009",
      stream_type: "movie",
      stream_id: 39621,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hZcl4TuZYTNWztIP8Zpvr6YLxiY.jpg",
      rating: "6.9",
      rating_5based: 3.5,
      added: "1583868690",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 5,
      name: "American Made - 2017",
      stream_type: "movie",
      stream_id: 39622,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/23ILgoPSO5ShKcTZOuiTVfqFAUB.jpg",
      rating: "6.8",
      rating_5based: 3.4,
      added: "1583870278",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 6,
      name: "Angel Has Fallen - 2019",
      stream_type: "movie",
      stream_id: 39623,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg",
      rating: "6.1",
      rating_5based: 3.1,
      added: "1583871417",
      category_id: "3",
      container_extension: "avi",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 7,
      name: "Armageddon - 1998",
      stream_type: "movie",
      stream_id: 39628,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/coINnuCzcw5FMHBty8hcudMOBnO.jpg",
      rating: "6.7",
      rating_5based: 3.4,
      added: "1583878491",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 8,
      name: "12 Years a Slave - 2013",
      stream_type: "movie",
      stream_id: 39629,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kb3X943WMIJYVg4SOAyK0pmWL5D.jpg",
      rating: "7.9",
      rating_5based: 4,
      added: "1583904426",
      category_id: "11",
      container_extension: "avi",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 9,
      name: "Atomic Blonde - 2017",
      stream_type: "movie",
      stream_id: 39630,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kV9R5h0Yct1kR8Hf8sJ1nX0Vz4x.jpg",
      rating: "6.3",
      rating_5based: 3.2,
      added: "1583904507",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 10,
      name: "Avengers: Endgame - 2019",
      stream_type: "movie",
      stream_id: 39631,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      rating: "8.3",
      rating_5based: 4.2,
      added: "1583904634",
      category_id: "3",
      container_extension: "avi",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 11,
      name: "Ben-Hur - 2016",
      stream_type: "movie",
      stream_id: 39632,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/c9CoGrBA5yw8A7YBMz0hGzfzpNq.jpg",
      rating: "5.6",
      rating_5based: 2.8,
      added: "1583904770",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 12,
      name: "Blood Diamond - 2006",
      stream_type: "movie",
      stream_id: 39633,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wRamTzV6udKaMXrspxqOuo02zk0.jpg",
      rating: "7.5",
      rating_5based: 3.8,
      added: "1583904884",
      category_id: "11",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 13,
      name: "Brotherhood of Blades - 2014",
      stream_type: "movie",
      stream_id: 39634,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/d2mXV6VXqpxxv5Zet9xc2rKVpJz.jpg",
      rating: "6.7",
      rating_5based: 3.4,
      added: "1583904949",
      category_id: "7",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 14,
      name: "Centurion - 2010",
      stream_type: "movie",
      stream_id: 39635,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lwQs5DNvy9RHTB0RWEScgZqPPiS.jpg",
      rating: "6.1",
      rating_5based: 3.1,
      added: "1583905018",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 15,
      name: "Creed - 2015",
      stream_type: "movie",
      stream_id: 39636,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hKzhV274pkZBSpXfCjUyzbyYKLl.jpg",
      rating: "7.4",
      rating_5based: 3.7,
      added: "1583905073",
      category_id: "11",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 16,
      name: "Creed II - 2018",
      stream_type: "movie",
      stream_id: 39637,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
      rating: "6.8",
      rating_5based: 3.4,
      added: "1583905183",
      category_id: "11",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 17,
      name: "Death Race: Beyond Anarchy - 2018",
      stream_type: "movie",
      stream_id: 39638,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1PrlKvPUbDQAqFQBCyyt68hLLl.jpg",
      rating: "5.8",
      rating_5based: 2.9,
      added: "1583905236",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 18,
      name: "Django Unchained - 2012",
      stream_type: "movie",
      stream_id: 39639,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eCt596Z4zkqxW5AHz1HEhGm1eif.jpg",
      rating: "8.1",
      rating_5based: 4.1,
      added: "1583905349",
      category_id: "32",
      container_extension: "avi",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 19,
      name: "El Camino: A Breaking Bad Movie - 2019",
      stream_type: "movie",
      stream_id: 39641,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
      rating: "6.9",
      rating_5based: 3.5,
      added: "1583905523",
      category_id: "11",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 20,
      name: "Fan-Fan the Tulip - 2003",
      stream_type: "movie",
      stream_id: 39642,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lm0II6tH8GfCZ4LLt6KtsPS5f93.jpg",
      rating: "5.4",
      rating_5based: 2.7,
      added: "1583905644",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 21,
      name: "Fast & Furious Presents: Hobbs & Shaw - 2019",
      stream_type: "movie",
      stream_id: 39643,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg",
      rating: "6.6",
      rating_5based: 3.3,
      added: "1583905824",
      category_id: "3",
      container_extension: "avi",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 22,
      name: "Fractured - 2019",
      stream_type: "movie",
      stream_id: 39644,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/paZNRffT3kUckuRFKbeDBuX1YcZ.jpg",
      rating: "6.6",
      rating_5based: 3.3,
      added: "1583905903",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 23,
      name: "Gemini Man - 2019",
      stream_type: "movie",
      stream_id: 39645,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
      rating: "5.9",
      rating_5based: 3,
      added: "1583905991",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 24,
      name: "Get the Gringo - 2012",
      stream_type: "movie",
      stream_id: 39646,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tHhJ5evvhy9G2g0NbkZHNeDz4UO.jpg",
      rating: "6.5",
      rating_5based: 3.3,
      added: "1583910629",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 25,
      name: "Gladiator - 2000",
      stream_type: "movie",
      stream_id: 39647,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
      rating: "8.1",
      rating_5based: 4.1,
      added: "1583910715",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 26,
      name: "Get Smart - 2008",
      stream_type: "movie",
      stream_id: 39648,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qWBln0B1Zxc24Lcuhqfhtu6coPR.jpg",
      rating: "6.1",
      rating_5based: 3.1,
      added: "1583910773",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 27,
      name: "Gods of Egypt - 2016",
      stream_type: "movie",
      stream_id: 39649,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uPqAW07bGoljf3cmT5gecdOvVol.jpg",
      rating: "5.4",
      rating_5based: 2.7,
      added: "1583917147",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 28,
      name: "Guardians of the Galaxy - 2014",
      stream_type: "movie",
      stream_id: 39650,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
      rating: "7.9",
      rating_5based: 4,
      added: "1583930223",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 29,
      name: "Haider - 2014",
      stream_type: "movie",
      stream_id: 39651,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/arOfGBo6IpyWsIyRNn4H7bgch06.jpg",
      rating: "7.1",
      rating_5based: 3.6,
      added: "1583933240",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 30,
      name: "Hercules - 1997",
      stream_type: "movie",
      stream_id: 39652,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eFlBFMAifj436QctX3akDkUnhlk.jpg",
      rating: "7.5",
      rating_5based: 3.8,
      added: "1583933321",
      category_id: "9",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 31,
      name: "Hitman - 1998",
      stream_type: "movie",
      stream_id: 39653,
      stream_icon: "https://m.media-amazon.com/images/M/MV5BMTk2Njk4OTQzNV5BMl5BanBnXkFtZTcwNDI5ODYxMQ@@._V1_.jpg",
      rating: "5.2",
      rating_5based: 2.6,
      added: "1583933518",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 32,
      name: "Home Alone 2: Lost in New York - 1992",
      stream_type: "movie",
      stream_id: 39654,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ezGcLFTvwR64I3Z7RqHnXRFet4r.jpg",
      rating: "6.5",
      rating_5based: 3.3,
      added: "1583934469",
      category_id: "4",
      container_extension: "avi",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 33,
      name: "Home Alone - 1990",
      stream_type: "movie",
      stream_id: 39655,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8IWPBT1rkAaI8Kpk5V3WfQRklJ7.jpg",
      rating: "7.3",
      rating_5based: 3.7,
      added: "1583934516",
      category_id: "4",
      container_extension: "avi",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 34,
      name: "Illang: The Wolf Brigade - 2018",
      stream_type: "movie",
      stream_id: 39656,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rqyAuWM56VBUDY9DUN75yllXhJe.jpg",
      rating: "6.3",
      rating_5based: 3.2,
      added: "1583934575",
      category_id: "34",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 35,
      name: "Inglourious Basterds - 2009",
      stream_type: "movie",
      stream_id: 39657,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ai0LXkzVM3hMjDhvFdKMUemoBe.jpg",
      rating: "8.2",
      rating_5based: 4.1,
      added: "1583934620",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 36,
      name: "In the Name of the King 2: Two Worlds - 2011",
      stream_type: "movie",
      stream_id: 39658,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nFH0lhU5NwWAlaYpcYEZXssKw2e.jpg",
      rating: "3.8",
      rating_5based: 1.9,
      added: "1583934681",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 37,
      name: "Iron Man - 2008",
      stream_type: "movie",
      stream_id: 39659,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/848chlIWVT41VtAAgyh9bWymAYb.jpg",
      rating: "7.6",
      rating_5based: 3.8,
      added: "1583934777",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 38,
      name: "Iron Man 2 - 2010",
      stream_type: "movie",
      stream_id: 39660,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
      rating: "6.8",
      rating_5based: 3.4,
      added: "1583934813",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 39,
      name: "Iron Man 3 - 2013",
      stream_type: "movie",
      stream_id: 39661,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/x6vjph1USM56MncpruT9jQP7xy2.jpg",
      rating: "6.9",
      rating_5based: 3.5,
      added: "1583934846",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 40,
      name: "Jack Reacher: Never Go Back - 2016",
      stream_type: "movie",
      stream_id: 39662,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",
      rating: "5.6",
      rating_5based: 2.8,
      added: "1583934890",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 41,
      name: "Jack Reacher - 2012",
      stream_type: "movie",
      stream_id: 39663,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mt0ELw83HIRgaKaDzhsDcIi0RnW.jpg",
      rating: "6.5",
      rating_5based: 3.3,
      added: "1583949379",
      category_id: "11",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 42,
      name: "Jack the Giant Slayer - 2013",
      stream_type: "movie",
      stream_id: 39664,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wn4aSJcKiQ0fPzJ92XEf6M9Kmlo.jpg",
      rating: "5.7",
      rating_5based: 2.9,
      added: "1583949654",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 43,
      name: "Jarhead: Law of Return - 2019",
      stream_type: "movie",
      stream_id: 39665,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6LlqyjAik3Kh68QQ9AchSJEF0Z5.jpg",
      rating: "6.2",
      rating_5based: 3.1,
      added: "1583949783",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 44,
      name: "Killers Anonymous - 2019",
      stream_type: "movie",
      stream_id: 39666,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wpFabJf2J82j4qJyYIMFexmJ8BT.jpg",
      rating: "4.6",
      rating_5based: 2.3,
      added: "1583949854",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 45,
      name: "Killing Gunther - 2017",
      stream_type: "movie",
      stream_id: 39667,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5jm2l2qRq8jEzXzOZgD2wEgFznq.jpg",
      rating: "4.6",
      rating_5based: 2.3,
      added: "1583949918",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 46,
      name: "Hancock - 2008",
      stream_type: "movie",
      stream_id: 39668,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dsCxSr4w3g2ylhlZg3v5CB5Pid7.jpg",
      rating: "6.3",
      rating_5based: 3.2,
      added: "1583950033",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 47,
      name: "King Arthur: Legend of the Sword - 2017",
      stream_type: "movie",
      stream_id: 39669,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gvSWdJN7peehxJYOugV9IwqiAFi.jpg",
      rating: "6.5",
      rating_5based: 3.3,
      added: "1583951884",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 48,
      name: "Kingsman: The Golden Circle - 2017",
      stream_type: "movie",
      stream_id: 39670,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
      rating: "6.9",
      rating_5based: 3.5,
      added: "1583951988",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 49,
      name: "Last Knights - 2015",
      stream_type: "movie",
      stream_id: 39671,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jKcbKy4C9bbwcBWGkMQR70vBNXJ.jpg",
      rating: "6.3",
      rating_5based: 3.2,
      added: "1583955701",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 50,
      name: "Lucky Day - 2019",
      stream_type: "movie",
      stream_id: 39672,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1vdymrm1d3IaYxIqGDObR8WnVb.jpg",
      rating: "5.8",
      rating_5based: 2.9,
      added: "1583955824",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 51,
      name: "Maleficent - 2014",
      stream_type: "movie",
      stream_id: 39673,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1cFVCUYKSBuEUDoVftKvqcfuIgc.jpg",
      rating: "7.1",
      rating_5based: 3.6,
      added: "1583958724",
      category_id: "10",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 52,
      name: "Men in Black 3 - 2012",
      stream_type: "movie",
      stream_id: 39674,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/l9hrvXyGq19f6jPRZhSVRibTMwW.jpg",
      rating: "6.4",
      rating_5based: 3.2,
      added: "1583958945",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 53,
      name: "Men in Black II - 2002",
      stream_type: "movie",
      stream_id: 39676,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qWjRfBwr4VculczswwojXgoU0mq.jpg",
      rating: "6.3",
      rating_5based: 3.2,
      added: "1583961621",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 54,
      name: "Minority Report - 2002",
      stream_type: "movie",
      stream_id: 39677,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dS5AHLt4DhZpisxryIxKJU6Urxb.jpg",
      rating: "7.3",
      rating_5based: 3.7,
      added: "1583961687",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 55,
      name: "Mission: Impossible - Fallout - 2018",
      stream_type: "movie",
      stream_id: 39678,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
      rating: "7.3",
      rating_5based: 3.7,
      added: "1583961751",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 56,
      name: "Mission: Impossible - Ghost Protocol - 2011",
      stream_type: "movie",
      stream_id: 39679,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/s58mMsgIVOFfoXPtwPWJ3hDYpXf.jpg",
      rating: "7",
      rating_5based: 3.5,
      added: "1583963163",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 57,
      name: "Kingsman: The Secret Service - 2014",
      stream_type: "movie",
      stream_id: 39680,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8x7ej0LnHdKUqilNNJXYOeyB6L9.jpg",
      rating: "7.6",
      rating_5based: 3.8,
      added: "1583995965",
      category_id: "3",
      container_extension: "mkv",
      custom_sid: "",
      direct_source: ""
    },    {
      num: 58,
      name: "Mission: Impossible - 1996",
      stream_type: "movie",
      stream_id: 39681,
      stream_icon: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1PVKS17pIBFsIhgFws2uagPDNLW.jpg",
      rating: "6.9",
      rating_5based: 3.5,
      added: "1583996250",
      category_id: "3",
      container_extension: "mkv",
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

  

  public extractMovieCards(movies: Movie[]) {
    for (var i = 0; i < movies.length; i++) {

    }
  }

  public makeArraywithDateAndId() {

  }
}
