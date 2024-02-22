// An array that contains all the information needed to create city and state markers
// Population Data Source: U.S. 2020 Decennial Census
let counties = [
  {
    coordinates: [37.6504930265, -121.917998966],
    county: {
      name: "Alameda",
      population: 1671329,
      density: 2261.61
    }
  },
  {
    coordinates: [38.5972506332, -119.82065303],
    county: {
      name: "Alpine",
      population: 1129,
      density: 1.53
    }
  },
  {
    coordinates: [38.446389504, -120.651115621],
    county: {
      name: "Amador",
      population: 39752,
      density: 66.81
    }
  },
  {
    coordinates: [39.6669293633, -121.600671735],
    county: {
      name: "Butte",
      population: 219186,
      density: 133.98
    }
  },
  {
    coordinates: [38.204606803, -120.554132098],
    county: {
      name: "Calaveras",
      population: 45905,
      density: 45
    }
  },
  {
    coordinates: [39.177573113, -122.237029616],
    county: {
      name: "Colusa",
      population: 21547,
      density: 18.72
    }
  },
  {
    coordinates: [37.9233794475, -121.951073113],
    county: {
      name: "Contra Costa",
      population: 1153526,
      density: 1595.47
    }
  },
  {
    coordinates: [41.744942366, -123.957801356],
    county: {
      name: "Del Norte",
      population: 27812,
      density: 27.65
    }
  },
  {
    coordinates: [38.7787375794, -120.524649929],
    county: {
      name: "El Dorado",
      population: 192843,
      density: 112.91
    }
  },
  {
    coordinates: [36.7581801263, -119.649322632],
    county: {
      name: "Fresno",
      population: 999101,
      density: 167.66
    }
  },
  {
    coordinates: [39.5984047698, -122.392206808],
    county: {
      name: "Glenn",
      population: 28393,
      density: 21.61
    }
  },
  {
    coordinates: [40.7050090829, -123.915819446],
    county: {
      name: "Humboldt",
      population: 135558,
      density: 37.99
    }
  },
  {
    coordinates: [33.0395904342, -115.365336962],
    county: {
      name: "Imperial",
      population: 181215,
      density: 43.38
    }
  },
  {
    coordinates: [36.5111268089, -117.410789686],
    county: {
      name: "Inyo",
      population: 18039,
      density: 1.77
    }
  },
  {
    coordinates: [35.3428473738, -118.729900424],
    county: {
      name: "Kern",
      population: 900202,
      density: 110.7
    }
  },
  {
    coordinates: [36.0753604529, -119.815502709],
    county: {
      name: "Kings",
      population: 152940,
      density: 110.11
    }
  },
  {
    coordinates: [39.0996453445, -122.753183909],
    county: {
      name: "Lake",
      population: 64386,
      density: 51.26
    }
  },
  {
    coordinates: [40.6735903894, -120.594332834],
    county: {
      name: "Lassen",
      population: 30573,
      density: 6.73
    }
  },
  {
    coordinates: [34.1979978627, -118.26101385],
    county: {
      name: "Los Angeles",
      population: 10039107,
      density: 2473.91
    }
  },
  {
    coordinates: [37.2180440575, -119.762644507],
    county: {
      name: "Madera",
      population: 157327,
      density: 73.62
    }
  },
  {
    coordinates: [38.05518334, -122.748858563],
    county: {
      name: "Marin",
      population: 258826,
      density: 497.74
    }
  },
  {
    coordinates: [37.5815223099, -119.905517029],
    county: {
      name: "Mariposa",
      population: 17203,
      density: 11.87
    }
  },
  {
    coordinates: [39.4336238198, -123.431553907],
    county: {
      name: "Mendocino",
      population: 86749,
      density: 24.74
    }
  },
  {
    coordinates: [37.191870471, -120.717688],
    county: {
      name: "Merced",
      population: 277680,
      density: 143.5
    }
  },
  {
    coordinates: [41.5898335739, -120.725028959],
    county: {
      name: "Modoc",
      population: 8841,
      density: 2.26
    }
  },
  {
    coordinates: [37.938990343, -118.886709262],
    county: {
      name: "Mono",
      population: 14444,
      density: 4.74
    }
  },
  {
    coordinates: [36.2397743956, -121.308901554],
    county: {
      name: "Monterey",
      population: 434061,
      density: 132.3
    }
  },
  {
    coordinates: [38.5064964441, -122.330538465],
    county: {
      name: "Napa",
      population: 137744,
      density: 184.15
    }
  },
  {
    coordinates: [39.301369579, -120.768752113],
    county: {
      name: "Nevada",
      population: 99755,
      density: 104.13
    }
  },
  {
    coordinates: [33.6769134328, -117.776142822],
    county: {
      name: "Orange",
      population: 3175692,
      density: 4014.78
    }
  },
  {
    coordinates: [39.0634313879, -120.717645936],
    county: {
      name: "Placer",
      population: 398329,
      density: 283.11
    }
  },
  {
    coordinates: [40.0046824769, -120.838597596],
    county: {
      name: "Plumas",
      population: 18807,
      density: 7.37
    }
  },
  {
    coordinates: [33.7436800499, -115.993845895],
    county: {
      name: "Riverside",
      population: 2470546,
      density: 342.85
    }
  },
  {
    coordinates: [38.4493208547, -121.344253814],
    county: {
      name: "Sacramento",
      population: 1552058,
      density: 1608.35
    }
  },
  {
    coordinates: [36.6057058971, -121.074995529],
    county: {
      name: "San Benito",
      population: 62808,
      density: 45.22
    }
  },
  {
    coordinates: [34.8414378315, -116.17846142],
    county: {
      name: "San Bernardino",
      population: 2180085,
      density: 108.69
    }
  },
  {
    coordinates: [33.028186394, -116.770204664],
    county: {
      name: "San Diego",
      population: 3338330,
      density: 793.52
    }
  },
  {
    coordinates: [37.7597150131, -122.693975573],
    county: {
      name: "San Francisco",
      population: 881549,
      density: 18756.36
    }
  },
  {
    coordinates: [37.9347459676, -121.271403235],
    county: {
      name: "San Joaquin",
      population: 762148,
      density: 547.91
    }
  },
  {
    coordinates: [35.38741848, -120.452196945],
    county: {
      name: "San Luis Obispo",
      population: 283111,
      density: 85.77
    }
  },
  {
    coordinates: [37.4362097341, -122.355663195],
    county: {
      name: "San Mateo",
      population: 766573,
      density: 1711.1
    }
  },
  {
    coordinates: [34.5383440862, -120.030786183],
    county: {
      name: "Santa Barbara",
      population: 446499,
      density: 163.25
    }
  },
  {
    coordinates: [37.2324840341, -121.696278854],
    county: {
      name: "Santa Clara",
      population: 1927852,
      density: 1494.46
    }
  },
  {
    coordinates: [37.0216059108, -122.009787403],
    county: {
      name: "Santa Cruz",
      population: 273213,
      density: 613.96
    }
  },
  {
    coordinates: [40.7637666014, -122.040521531],
    county: {
      name: "Shasta",
      population: 180080,
      density: 47.7
    }
  },
  {
    coordinates: [39.5804001016, -120.515996378],
    county: {
      name: "Sierra",
      population: 3005,
      density: 3.15
    }
  },
  {
    coordinates: [41.5926866339, -122.540367763],
    county: {
      name: "Siskiyou",
      population: 43539,
      density: 6.94
    }
  },
  {
    coordinates: [38.2669127871, -121.940024418],
    county: {
      name: "Solano",
      population: 447643,
      density: 544.58
    }
  },
  {
    coordinates: [38.525292575, -122.922544658],
    county: {
      name: "Sonoma",
      population: 494336,
      density: 313.66
    }
  },
  {
    coordinates: [37.5591374435, -120.997682895],
    county: {
      name: "Stanislaus",
      population: 550660,
      density: 368.33
    }
  },
  {
    coordinates: [39.0345595213, -121.694849665],
    county: {
      name: "Sutter",
      population: 96971,
      density: 161.08
    }
  },
  {
    coordinates: [40.1257361849, -122.233884853],
    county: {
      name: "Tehama",
      population: 65084,
      density: 22.06
    }
  },
  {
    coordinates: [40.6506935615, -123.112627727],
    county: {
      name: "Trinity",
      population: 12285,
      density: 3.86
    }
  },
  {
    coordinates: [36.220156659, -118.80047248],
    county: {
      name: "Tulare",
      population: 466195,
      density: 96.64
    }
  },
  {
    coordinates: [38.0276014047, -119.95475358],
    county: {
      name: "Tuolumne",
      population: 54478,
      density: 24.53
    }
  },
  {
    coordinates: [34.3575285169, -119.126027193],
    county: {
      name: "Ventura",
      population: 846006,
      density: 459.04
    }
  },
  {
    coordinates: [38.6866603948, -121.90161702],
    county: {
      name: "Yolo",
      population: 220500,
      density: 217.24
    }
  },
  {
    coordinates: [39.2690076722, -121.351262732],
    county: {
      name: "Yuba",
      population: 78668,
      density: 124.47
    }
  },
];
