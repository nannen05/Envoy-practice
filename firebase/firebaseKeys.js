import { databaseRef } from "./firebase";

let FIREBASE_DATA = []

let featuredWorkData
let mainSliderData

const featuredWorkRef = databaseRef.ref('flamelink/environments/production/content/featuredWork/en-US');
const mainSliderRef = databaseRef.ref('flamelink/environments/production/content/mainSlider/en-US');

// featuredWorkRef.on("value", function(snapshot) {
//    featuredWorkData = snapshot.val()
//    FIREBASE_DATA.push("featuredWork": featuredWorkData)
// }, function (error) {
//    console.log("Error: " + error.code);
// });

mainSliderRef
  .once('value')
  .then(data => {
      let mainSlider = data.val() || []
      FIREBASE_DATA.push(mainSlider)
  })

// mainSliderRef.on("value", function(snapshot) {
//    mainSliderData = snapshot.val()
//    FIREBASE_DATA.push("mainSlider": mainSliderData)
// }, function (error) {
//    console.log("Error: " + error.code);
// });
//

export default FIREBASE_DATA;
