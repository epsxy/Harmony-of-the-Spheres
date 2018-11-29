export default {
  name: 'Oumuamua - Visitor From Afar',
  g: 39.5,
  dt: 0.001,
  distMax: 60,
  distMin: -60,
  distStep: 0.1,
  velMax: 12,
  velMin: -12,
  velStep: 5e-6,
  rotatingReferenceFrame: 'Sun',
  cameraPosition: 'Free',
  cameraFocus: 'Origo',
  freeOrigoZ: 9950000,
  massBeingModified: 'Sun',
  primary: 'Sun',
  maximumDistance: { name: 'Sun to Kuiper Belt', value: 55 },
  distanceStep: { name: 'Sun to Earth / 10', value: 0.1 },
  scenarioWikiUrl: 'https://en.wikipedia.org/wiki/ʻOumuamua',
  masses: [
    {
      name: 'Sun',
      x: -0.002032845625658788,
      y: -0.002206073207737345,
      z: -2.596538210853694e-5,
      vx: 0.0020869837917339754,
      vy: -9.759759745137204e-4,
      vz: -4.519598528871196e-5,
      trailVertices: 300
    },
    {
      name: 'Mercury',
      x: -0.0633228042515943,
      y: 0.3023360019376338,
      z: 0.0304805401051499,
      vx: -12.13355404048838,
      vy: -1.6528772889426246,
      vz: 0.9784692627549786,
      trailVertices: 600
    },
    {
      name: 'Venus',
      x: 0.6326315979272211,
      y: 0.3455745980292066,
      z: -0.03188913026127027,
      vx: -3.5713994857490308,
      vy: 6.445551271928175,
      vz: 0.29452473854502614,
      trailVertices: 1000
    },
    {
      name: 'Earth',
      x: 0.9197324105567349,
      y: -0.4147318273536994,
      z: -1.750037390352759e-5,
      vx: 2.4645428337894026,
      vy: 5.7097644117945805,
      vz: -3.3177815766459033e-4,
      trailVertices: 1300
    },
    {
      name: 'Mars',
      x: -0.574871406752105,
      y: -1.395455041953879,
      z: -0.01515164037265145,
      vx: 4.9225288800471425,
      vy: -1.5065904473191791,
      vz: -0.1524041758922603,
      trailVertices: 2000
    },
    {
      name: 'Oumuamua',
      color: 'yellow',
      type: 'asteroid',
      x: 3.679682868010402,
      y: -16.90385340779421,
      z: 26.32485723034872,
      vx: -0.8127258738687134,
      vy: 3.0458386360240897,
      vz: -4.839022858847442,
      trailVertices: 3e4
    },
    {
      name: 'Jupiter',
      x: 2.309580232081457,
      y: 4.460546846823553,
      z: -0.07028851829878795,
      vx: -2.4809040175054617,
      vy: 1.3993502897811834,
      vz: 0.04970829322871863,
      trailVertices: 4000
    },
    {
      name: 'Saturn',
      x: -8.417303721615914,
      y: -4.926388621921075,
      z: 0.4206428591233111,
      vx: 0.919151760170189,
      vy: -1.7631987893271037,
      vz: -0.005984764290193158,
      trailVertices: 4000
    },
    {
      name: 'Uranus',
      x: 19.94996398927053,
      y: 2.105545795789208,
      z: -0.250642112216617,
      vx: -0.16129339690269276,
      vy: 1.3616609675222109,
      vz: 0.007139790220137776,
      trailVertices: 4000
    },
    {
      name: 'Neptune',
      x: 26.3776735181941,
      y: -14.27426743109879,
      z: -0.3139485147556967,
      vx: 0.5381987172626345,
      vy: 1.015130164798585,
      vz: -0.033446435472504955,
      trailVertices: 4000
    }
  ]
};
