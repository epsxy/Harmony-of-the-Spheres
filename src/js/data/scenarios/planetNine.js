export default {
  name: 'Planet Nine and the Detached Objects',
  g: 39.5,
  dt: 1.35,
  distMax: 1000,
  distMin: -1000,
  distStep: 2.3797035266666667e-6,
  velMax: 0.5,
  velMin: -0.5,
  velStep: 5e-6,
  rotatingReferenceFrame: 'Sun',
  cameraPosition: 'Free',
  cameraFocus: 'Origo',
  freeOrigoZ: 6500000000,
  massBeingModified: 'Sun',
  primary: 'Sun',
  maximumDistance: { name: 'Sun to Planet 9', value: 22000 },
  distanceStep: { name: 'Sun to Earth * 10', value: 200 },
  scenarioWikiUrl: 'https://en.wikipedia.org/wiki/Planet_Nine',
  masses: [
    {
      name: 'Sedna',
      x: 47.86245053182971,
      y: 68.76642523097426,
      z: -17.69797309937861,
      vx: -0.8786934171061775,
      vy: 0.2632429999008391,
      vz: 0.06283058581762681,
      trailVertices: 2e4
    },
    {
      name: '2012 VP113',
      type: 'asteroid',
      color: 'orange',
      m: 9.6e-10,
      x: 50.48048065616648,
      y: 62.3000366844507,
      z: -22.91767244353682,
      vx: -0.5111395588148426,
      vy: 0.6970250725047209,
      vz: 0.22374993379492533,
      trailVertices: 2e4
    },
    {
      name: '2015 RX245',
      type: 'asteroid',
      color: 'limegreen',
      x: 61.04988311908587,
      y: 10.4740609282675,
      z: 0.2627400347602091,
      vx: -0.6934022307643856,
      vy: 0.8158515667986989,
      vz: 0.19582132781023276,
      trailVertices: 2e4
    },
    {
      name: '2007 TG422',
      color: 'white',
      type: 'asteroid',
      x: 15.43468275809566,
      y: 32.59473931357567,
      z: -9.052446550011583,
      vx: -1.0842273041349613,
      vy: 0.9082669790407174,
      vz: 0.21704402810434492,
      trailVertices: 2e4
    },
    {
      name: '2013 RF98',
      type: 'asteroid',
      color: 'grey',
      x: 27.82371409570404,
      y: 21.79708290021343,
      z: -9.880907239769547,
      vx: -0.5261738597896148,
      vy: 1.2162644308278474,
      vz: 0.5379705831730853,
      trailVertices: 2e4
    },
    {
      name: '2013 SY99',
      type: 'asteroid',
      color: 'brown',
      x: 57.9565103343703,
      y: 13.8038576787334,
      z: -1.221569272246091,
      vx: -0.6709433971501547,
      vy: 0.9030773959704005,
      vz: 0.0824821132421107,
      trailVertices: 2e4
    },
    {
      name: '2010 GB174',
      type: 'asteroid',
      color: 'lightblue',
      x: -66.79767830584446,
      y: -8.860993685108655,
      z: 22.29179702779006,
      vx: -0.34734541075474157,
      vy: -0.8783881659553672,
      vz: 0.3304636744569901,
      trailVertices: 2e4
    },
    {
      name: '2004 VN112',
      type: 'asteroid',
      color: 'pink',
      x: 33.03984714824124,
      y: 33.44217032533931,
      z: -7.934030497291245,
      vx: -0.674746776160621,
      vy: 0.925698442234389,
      vz: 0.47451735847972515,
      trailVertices: 2e4
    },
    {
      name: 'Neptune',
      x: 28.15642521569249,
      y: -10.22276489665423,
      z: -0.4383752463170039,
      vx: 0.38350012707216175,
      vy: 1.084509054408742,
      vz: -0.03108004390475038,
      trailVertices: 2e4
    },
    {
      name: 'Planet 9',
      x: 484.97191459669574,
      y: 969.9499937546994,
      z: -279.9986653203301,
      vx: -0.08898721639544392,
      vy: 0.05936371301920076,
      vz: 0.05138621266882957,
      trailVertices: 2e4
    },
    {
      name: 'Sun',
      x: 0.003719032999249612,
      y: 0.002707758685991074,
      z: -1.625752508278521e-4,
      vx: -3.6503661615773487e-4,
      vy: 0.0025616755803073007,
      vz: 4.3659300823695635e-6,
      trailVertices: 2e4
    }
  ]
};
