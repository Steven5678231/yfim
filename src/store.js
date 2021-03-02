import { createStore } from "redux";
import reducers from "./reducers";
const mapStoreToStorage = () =>
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {
      rooms: [],
      video: true,
      audio: true,
      controlParams: {
        occlusion_mask: false, //Switch
        feature_show: {
          eyes: {
            toggle: true,
            sliderIndex: 0,
          },
          mouth: {
            toggle: true,
            sliderIndex: 0,
          },
          nose: {
            toggle: true,
            sliderIndex: 0,
          },
        },
      },
    };
const store = createStore(reducers, persistedState);
store.subscribe(mapStoreToStorage);
export default store;
