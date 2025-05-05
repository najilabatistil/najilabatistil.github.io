var products = [
  {
    "category": "Coffee",
    "image": "coffee.png",
    "items": [
      {
        "name": "Americano",
        "isAvailable": true,
        "price": 100,
        "code": "HC-AMR",
        "image": "HC-AMR.jpg"
      },
      {
        "name": "Cafe Latte",
        "isAvailable": true,
        "price": 120,
        "code": "HC-LAT",
        "image": "HC-LAT.jpg"
      },
      {
        "name": "Cappuccino",
        "isAvailable": true,
        "price": 115,
        "code": "HC-CAP",
        "image": "HC-CAP.jpg"
      },
      {
        "name": "Mocha",
        "isAvailable": true,
        "price": 130,
        "code": "HC-MOC",
        "image": "HC-MOC.jpg"
      },
      {
        "name": "Caramel Macchiato",
        "isAvailable": false,
        "price": 130,
        "code": "HC-CAM",
        "image": "HC-CAM.jpg"
      },
      {
        "name": "Espresso",
        "isAvailable": true,
        "price": 90,
        "code": "HC-ESP",
        "image": "HC-ESP.jpg"
      },
      {
        "name": "Iced Americano",
        "isAvailable": true,
        "code": "CC-AMR",
        "image": "CC-AMR.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 105
          },
          {
            "code": "MD",
            "price": 110
          },
          {
            "code": "LG",
            "price": 120
          }
        ]
      },
      {
        "name": "Iced Latte",
        "isAvailable": true,
        "code": "CC-LAT",
        "image": "CC-LAT.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 125
          },
          {
            "code": "MD",
            "price": 135
          },
          {
            "code": "LG",
            "price": 150
          }
        ]
      },
      {
        "name": "Iced Mocha",
        "isAvailable": true,
        "code": "CC-MOC",
        "image": "CC-MOC.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 135
          },
          {
            "code": "MD",
            "price": 145
          },
          {
            "code": "LG",
            "price": 160
          }
        ]
      },
      {
        "name": "Iced Caramel Macchiato",
        "isAvailable": false,
        "code": "CC-CAM",
        "image": "CC-CAM.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 135
          },
          {
            "code": "MD",
            "price": 145
          },
          {
            "code": "LG",
            "price": 160
          }
        ]
      },
      {
        "name": "Cold Brew",
        "isAvailable": true,
        "code": "CC-BRW",
        "image": "CC-BRW.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 110
          },
          {
            "code": "MD",
            "price": 130
          },
          {
            "code": "LG",
            "price": 145
          }
        ]
      },
      {
        "name": "Coffee Frappe",
        "isAvailable": false,
        "code": "CC-FRP",
        "image": "CC-FRP.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 125
          },
          {
            "code": "MD",
            "price": 145
          },
          {
            "code": "LG",
            "price": 165
          }
        ]
      }
    ]
  },
  {
    "category": "Non-Coffee",
    "image": "drink.png",
    "items": [
      {
        "name": "Matcha Latte",
        "isAvailable": true,
        "price": 100,
        "code": "HDK-MAT",
        "image": "HDK-MAT.jpg"
      },
      {
        "name": "Chai Tea Latte",
        "isAvailable": false,
        "price": 125,
        "code": "HDK-CHL",
        "image": "HDK-CHL.jpg"
      },
      {
        "name": "Hot Chocolate",
        "isAvailable": true,
        "price": 100,
        "code": "HDK-CHO",
        "image": "HDK-CHO.jpg"
      },
      {
        "name": "Ginger Tea",
        "isAvailable": true,
        "price": 85,
        "code": "HDK-GNR",
        "image": "HDK-GNR.jpg"
      },
      {
        "name": "Iced Matcha Latte",
        "isAvailable": true,
        "code": "CDK-MAT",
        "image": "CDK-MAT.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 110
          },
          {
            "code": "MD",
            "price": 120
          },
          {
            "code": "LG",
            "price": 130
          }
        ]
      },
      {
        "name": "Iced Chai Latte",
        "isAvailable": false,
        "code": "CDK-CHL",
        "image": "CDK-CHL.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 130
          },
          {
            "code": "MD",
            "price": 140
          },
          {
            "code": "LG",
            "price": 150
          }
        ]
      },
      {
        "name": "Lemon Iced Tea",
        "isAvailable": true,
        "code": "CDK-LMN",
        "image": "CDK-LMN.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 110
          },
          {
            "code": "MD",
            "price": 115
          },
          {
            "code": "LG",
            "price": 130
          }
        ]
      },
      {
        "name": "Classic Milk Tea",
        "isAvailable": true,
        "code": "CDK-MLK",
        "image": "CDK-MLK.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 100
          },
          {
            "code": "MD",
            "price": 115
          },
          {
            "code": "LG",
            "price": 125
          }
        ]
      },
      {
        "name": "Iced Chocolate",
        "isAvailable": true,
        "code": "CDK-CHO",
        "image": "CDK-CHO.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 105
          },
          {
            "code": "MD",
            "price": 115
          },
          {
            "code": "LG",
            "price": 125
          }
        ]
      },
      {
        "name": "Mango Fruit Tea",
        "isAvailable": true,
        "code": "CDK-MNG",
        "image": "CDK-MNG.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 110
          },
          {
            "code": "MD",
            "price": 115
          },
          {
            "code": "LG",
            "price": 130
          }
        ]
      },
      {
        "name": "Chocolate Frappe",
        "isAvailable": false,
        "code": "CDK-FRP",
        "image": "CDK-FRP.jpg",
        "sizes": [
          {
            "code": "SM",
            "price": 125
          },
          {
            "code": "MD",
            "price": 145
          },
          {
            "code": "LG",
            "price": 165
          }
        ]
      }
    ]
  }, 
  {
    "category": "Sandwich",
    "image": "sandwich.png",
    "items": [
      {
        "name": "Ham & Cheese",
        "isAvailable": true,
        "price": 130,
        "code": "SND-HAM",
        "image": "SND-HAM.jpg"
      },
      {
        "name": "Chicken Pesto Panini",
        "isAvailable": false,
        "price": 150,
        "code": "SND-CKN",
        "image": "SND-CKN.jpg"
      },
      {
        "name": "Tuna Melt",
        "isAvailable": true,
        "price": 140,
        "code": "SND-TNA",
        "image": "SND-TNA.jpg"
      },
      {
        "name": "BLT",
        "isAvailable": true,
        "price": 130,
        "code": "SND-BLT",
        "image": "SND-BLT.jpg"
      },
      {
        "name": "Grilled Cheese",
        "isAvailable": true,
        "price": 120,
        "code": "SND-GRD",
        "image": "SND-GRD.jpg"
      }
    ]
  },
  {
    "category": "Pasta",
    "image": "pasta.png",
    "items": [
      {
        "name": "Spaghetti",
        "isAvailable": true,
        "price": 180,
        "code": "PTA-SPG",
        "image": "PTA-SPG.jpg"
      },
      {
        "name": "Carbonara",
        "isAvailable": true,
        "price": 185,
        "code": "PTA-CRB",
        "image": "PTA-CRB.jpg"
      },
      {
        "name": "Aglio e Olio",
        "isAvailable": true,
        "price": 150,
        "code": "PTA-AGL",
        "image": "PTA-AGL.jpg"
      },
      {
        "name": "Penne alla Vodka",
        "isAvailable": true,
        "price": 190,
        "code": "PTA-PEN",
        "image": "PTA-PEN.jpg"
      },
      {
        "name": "Lasagna",
        "isAvailable": false,
        "price": 200,
        "code": "PTA-LSG",
        "image": "PTA-LSG.jpg"
      },
      {
        "name": "Tuna Pesto",
        "isAvailable": true,
        "price": 185,
        "code": "PTA-TUN",
        "image": "PTA-TUN.jpg"
      }
    ]
  },
  {
    "category": "Pastry",
    "image": "dessert.png",
    "items": [
      {
        "name": "Choco Chip Cookie",
        "isAvailable": true,
        "price": 55,
        "code": "PTR-CCC",
        "image": "PTR-CCC.jpg"
      },
      {
        "name": "Blueberry Muffin",
        "isAvailable": true,
        "price": 65,
        "code": "PTR-BLU",
        "image": "PTR-BLU.jpg"
      },
      {
        "name": "Croissant",
        "isAvailable": true,
        "price": 70,
        "code": "PTR-CST",
        "image": "PTR-CST.jpg"
      },
      {
        "name": "Cheesecake",
        "isAvailable": true,
        "price": 65,
        "code": "PTR-CSK",
        "image": "PTR-CSK.jpg"
      },
      {
        "name": "Brownies",
        "isAvailable": true,
        "price": 55,
        "code": "PTR-BWN",
        "image": "PTR-BWN.jpg"
      },
      {
        "name": "Cinammon Roll",
        "isAvailable": true,
        "price": 70,
        "code": "PTR-CNM",
        "image": "PTR-CNM.jpg"
      },
      {
        "name": "Banana Bread",
        "isAvailable": true,
        "price": 65,
        "code": "PTR-BNN",
        "image": "PTR-BNN.jpg"
      }
    ]
  }
]