class Background {
  constructor() {
    this.gameLevel = 1;

    this.levelOne = [
      {
        src: loadImage("Assets/background/lvl1/cluster.png"),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage("Assets/background/lvl1/nebula_rs.png"),
        x: 0,
        speed: 0.01
      },
      {
        src: loadImage("Assets/background/lvl1/planet.png"),
        x: 0,
        speed: 0.15
      },
      {
        src: loadImage("Assets/background/lvl1/planet2.png"),
        x: 0,
        speed: 0.15
      },
      {
        src: loadImage("Assets/background/lvl1/planet3.png"),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage("Assets/background/lvl1/planet_corner.png"),
        x: 0,
        speed: 0
      },
      {
        src: loadImage("Assets/background/lvl1/stars_bg1.png"),
        x: 0,
        speed: 0.2
      },
      {
        src: loadImage("Assets/background/lvl1/stars_bg2.png"),
        x: 0,
        speed: 0
      },
      {
        src: loadImage("Assets/background/lvl1/sun.png"),
        x: 0,
        speed: 0.03
      }
    ];
    this.levelTwo = [
      {
        src: loadImage(
          "Assets/background/lvl2/SpaceBackgrounds2_4_Cluster.png"
        ),
        x: 0,
        speed: 0
      },
      {
        src: loadImage("Assets/background/lvl2/SpaceBackgrounds2_4_Nebula.png"),
        x: 0,
        speed: 0
      },
      {
        src: loadImage("Assets/background/lvl2/SpaceBackgrounds2_4_Planet.png"),
        x: 0,
        speed: 0.15
      },
      {
        src: loadImage(
          "Assets/background/lvl2/SpaceBackgrounds2_4_Planet2.png"
        ),
        x: 0,
        speed: 0.15
      },
      {
        src: loadImage(
          "Assets/background/lvl2/SpaceBackgrounds2_4_Planet3.png"
        ),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage(
          "Assets/background/lvl2/SpaceBackgrounds2_4_Planet4.png"
        ),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage(
          "Assets/background/lvl2/SpaceBackgrounds2_4_PlanetCorner.png"
        ),
        x: 0,
        speed: 0
      },
      {
        src: loadImage(
          "Assets/background/lvl2/SpaceBackgrounds2_4_StarsBG1.png"
        ),
        x: 0,
        speed: 0.5
      },
      {
        src: loadImage(
          "Assets/background/lvl2/SpaceBackgrounds2_4_StarsBG2.png"
        ),
        x: 0,
        speed: 0.5
      },
      {
        src: loadImage("Assets/background/lvl2/SpaceBackgrounds2_4_Sun.png"),
        x: 0,
        speed: 0.03
      }
    ];
    this.levelThree = [
      {
        src: loadImage(
          "Assets/background/lvl3/SpaceBackgrounds2_5_Cluster.png"
        ),
        x: 0,
        speed: 0
      },
      {
        src: loadImage("Assets/background/lvl3/SpaceBackgrounds2_5_Nebula.png"),
        x: 0,
        speed: 0
      },
      {
        src: loadImage("Assets/background/lvl3/SpaceBackgrounds2_5_Planet.png"),
        x: 0,
        speed: 0.2
      },
      {
        src: loadImage(
          "Assets/background/lvl3/SpaceBackgrounds2_5_Planet2.png"
        ),
        x: 0,
        speed: 0.2
      },
      {
        src: loadImage(
          "Assets/background/lvl3/SpaceBackgrounds2_5_Planet3.png"
        ),
        x: 0,
        speed: 0.15
      },
      {
        src: loadImage(
          "Assets/background/lvl3/SpaceBackgrounds2_5_Planet4.png"
        ),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage(
          "Assets/background/lvl3/SpaceBackgrounds2_5_PlanetCorner.png"
        ),
        x: 0,
        speed: 0
      },
      {
        src: loadImage(
          "Assets/background/lvl3/SpaceBackgrounds2_5_StarsBG1.png"
        ),
        x: 0,
        speed: 0.5
      },
      {
        src: loadImage(
          "Assets/background/lvl3/SpaceBackgrounds2_5_StarsBG2.png"
        ),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage("Assets/background/lvl3/SpaceBackgrounds2_5_Sun.png"),
        x: 0,
        speed: 0.05
      }
    ];
    this.levelFour = [
      {
        src: loadImage(
          "Assets/background/lvl4/SpaceBackgrounds2_1_Cluster.png"
        ),
        x: 0,
        speed: 0.01
      },
      {
        src: loadImage("Assets/background/lvl4/SpaceBackgrounds2_1_Nebula.png"),
        x: 0,
        speed: 0.01
      },
      {
        src: loadImage(
          "Assets/background/lvl4/SpaceBackgrounds2_1_Planet1.png"
        ),
        x: 0,
        speed: 0.2
      },
      {
        src: loadImage(
          "Assets/background/lvl4/SpaceBackgrounds2_1_Planet2.png"
        ),
        x: 0,
        speed: 0.2
      },
      {
        src: loadImage(
          "Assets/background/lvl4/SpaceBackgrounds2_1_StarsBG1.png"
        ),
        x: 0,
        speed: 0.2
      },
      {
        src: loadImage(
          "Assets/background/lvl4/SpaceBackgrounds2_1_StarsBG2.png"
        ),
        x: 0,
        speed: 0.2
      },
      {
        src: loadImage("Assets/background/lvl4/SpaceBackgrounds2_1_Sun.png"),
        x: 0,
        speed: 0.1
      }
    ];
    this.levelSix = [
      {
        src: loadImage(
          "Assets/background/lvl6/SpaceBackgrounds2_6_Cluster.png"
        ),
        x: 0,
        speed: 0
      },
      {
        src: loadImage("Assets/background/lvl6/SpaceBackgrounds2_6_Nebula.png"),
        x: 0,
        speed: 0.02
      },
      {
        src: loadImage("Assets/background/lvl6/SpaceBackgrounds2_6_Planet.png"),
        x: 0,
        speed: 0.3
      },
      {
        src: loadImage(
          "Assets/background/lvl6/SpaceBackgrounds2_6_Planet2.png"
        ),
        x: 0,
        speed: 0.3
      },
      {
        src: loadImage(
          "Assets/background/lvl6/SpaceBackgrounds2_6_Planet3.png"
        ),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage(
          "Assets/background/lvl6/SpaceBackgrounds2_6_Planet4.png"
        ),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage(
          "Assets/background/lvl6/SpaceBackgrounds2_6_PlanetCorner.png"
        ),
        x: 0,
        speed: 0
      },
      {
        src: loadImage(
          "Assets/background/lvl6/SpaceBackgrounds2_6_StarsBG1.png"
        ),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage(
          "Assets/background/lvl6/SpaceBackgrounds2_6_StarsBG2.png"
        ),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage("Assets/background/lvl6/SpaceBackgrounds2_6_Sun.png"),
        x: 0,
        speed: 0
      }
    ];
    this.levelFive = [
      {
        src: loadImage(
          "Assets/background/lvl5/SpaceBackgrounds2_7_Cluster.png"
        ),
        x: 0,
        speed: 0.05
      },
      {
        src: loadImage("Assets/background/lvl5/SpaceBackgrounds2_7_Nebula.png"),
        x: 0,
        speed: 0.01
      },
      {
        src: loadImage("Assets/background/lvl5/SpaceBackgrounds2_7_Planet.png"),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage(
          "Assets/background/lvl5/SpaceBackgrounds2_7_Planet2.png"
        ),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage(
          "Assets/background/lvl5/SpaceBackgrounds2_7_Planet3.png"
        ),
        x: 0,
        speed: 0.1
      },
      {
        src: loadImage(
          "Assets/background/lvl5/SpaceBackgrounds2_7_Planet4.png"
        ),
        x: 0,
        speed: 0
      },
      {
        src: loadImage(
          "Assets/background/lvl5/SpaceBackgrounds2_7_PlanetCorner.png"
        ),
        x: 0,
        speed: 0
      },
      {
        src: loadImage(
          "Assets/background/lvl5/SpaceBackgrounds2_7_StarsBG1.png"
        ),
        x: 0,
        speed: 0.05
      },
      {
        src: loadImage(
          "Assets/background/lvl5/SpaceBackgrounds2_7_StarsBG2.png"
        ),
        x: 0,
        speed: 0.03
      },
      {
        src: loadImage("Assets/background/lvl5/SpaceBackgrounds2_7_Sun.png"),
        x: 0,
        speed: 0.03
      }
    ];
  }

  move(img) {
    image(img.src, img.x, 0);
    image(img.src, img.x + width, 0);

    img.x -= img.speed;
    if (img.x <= -width) {
      img.x = 0;
    }
  }

  draw() {
    clear();
    background("black");

    if (this.gameLevel === 1) {
      for (let i = 0; i < this.levelOne.length; i++) {
        this.move(this.levelOne[i]);
      }
    }

    if (this.gameLevel === 2) {
      for (let i = 0; i < this.levelTwo.length; i++) {
        this.move(this.levelTwo[i]);
      }
    }

    if (this.gameLevel === 3) {
      for (let i = 0; i < this.levelThree.length; i++) {
        this.move(this.levelThree[i]);
      }
    }

    if (this.gameLevel === 4) {
      for (let i = 0; i < this.levelFour.length; i++) {
        this.move(this.levelFour[i]);
      }
    }

    if (this.gameLevel === 5) {
      for (let i = 0; i < this.levelFive.length; i++) {
        this.move(this.levelFive[i]);
      }
    }

    if (this.gameLevel === 6) {
      for (let i = 0; i < this.levelSix.length; i++) {
        this.move(this.levelSix[i]);
      }
    }
  }
}
