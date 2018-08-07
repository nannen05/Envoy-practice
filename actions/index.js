import { databaseRef } from "../firebase/firebase";

const featuredWorkRef = databaseRef.ref('flamelink/environments/production/content/featuredWork/en-US');
const mainSliderRef = databaseRef.ref('flamelink/environments/production/content/mainSlider/en-US');

export const fetchMainSlider = () => async dispatch => {
  mainSliderRef.on("value", snapshot => {
    dispatch({
      type: 'FETCH_MAINSLIDER',
      payload: snapshot.val()
    });
  });
};
