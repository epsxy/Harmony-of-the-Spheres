export default {
  name: 'Three Body Coreography',
  g: 100,
  dt: 0.01,
  elapsedTime: 0,
  rotatingReferenceFrame: 'Origo',
  cameraPosition: 'Free',
  cameraFocus: 'Origo',
  freeOrigoZ: 800000000,
  massBeingModified: 'Eva',
  distMax: 400,
  distMin: -400,
  distStep: 0.0000023797035266666667,
  velMax: 0.5,
  velMin: -0.5,
  velStep: 0.000005,
  primary: 'Arjuna',
  maximumDistance: { name: 'Sun to Neptune', value: 30.1 },
  distanceStep: { name: 'Sun to Earth / 10', value: 0.1 },
  scenarioWikiUrl: 'https://en.wikipedia.org/wiki/Three-body_problem',
  masses: [
    {
      name: 'Eva',
      type: 'star',
      trailVertices: 220,
      radius: 6000000,
      color: 'limegreen',
      m: 1e4,
      x: -100,
      y: 0,
      z: 0,
      vx: 34.7111,
      vy: 53.2728,
      vz: 0
    },
    {
      name: 'Sarada',
      type: 'star',
      trailVertices: 220,
      radius: 6000000,
      color: 'red',
      m: 1e4,
      x: 100,
      y: 0,
      z: 0,
      vx: 34.7111,
      vy: 53.2728,
      vz: 0
    },
    {
      name: 'Arjuna',
      type: 'star',
      trailVertices: 220,
      radius: 6000000,
      color: 'yellow',
      m: 1e4,
      x: 0,
      y: 0,
      z: 0,
      vx: -69.4222,
      vy: -106.5456,
      vz: 0
    }
  ]
};
