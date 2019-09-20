// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';
//import CustomRaycaster from "./src/controller/custom-raycaster";


function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const cylinderSurface = new Surface(
    800, /* width */
    450, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );
  //cylinderSurface.setAngle(-90, 0);

  r360.renderToSurface(
    r360.createRoot('Scene', { /* initial props */ }),
    cylinderSurface,
    'main'
  );
  //Scene.setAngle(-90, 0);


  const leftPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(90, 0);

  r360.renderToSurface(
    r360.createRoot('Home', { /* initial props */ }),
    leftPanel,
  );


  const Brain = new Surface(1100, 700, Surface.SurfaceShape.Flat);
   Brain.setAngle(-90, 0);

  r360.renderToSurface(
    r360.createRoot('Brain', { /* initial props */ }),
    Brain,
  );

  



  r360.compositor.setBackground(r360.getAssetURL('homebase.png'));

  // r360.controls.clearRaycasters();
  // r360.controls.addRaycaster(CustomRaycaster);


}

window.React360 = {init};
