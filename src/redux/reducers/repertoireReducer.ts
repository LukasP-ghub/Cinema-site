import { actionTypes } from "../constants/actionTypes"
import { repertoireStateType } from "../../types/types";

const initialState: repertoireStateType = {
  movies: [
    {
      title: 'Movie 1',
      labels: ['premiere', 'dream'],
      showTimes: ['8.40', '10.00'],
      img: 'https://cdn.pixabay.com/photo/2021/04/29/05/03/desert-6215514_960_720.jpg'
    },
    {
      title: 'Movie 2',
      labels: ['dream'],
      showTimes: ['12.20', '16.00'],
      img: 'https://images.freeimages.com/images/premium/previews/3702/37027234-retro-video-game-superhero.jpg'
    },
    {
      title: 'Movie 3',
      labels: [],
      showTimes: ['11.40', '15.00'],
      img: 'https://images.freeimages.com/images/premium/previews/2008/20088281-orc-smash.jpg'
    },
    {
      title: 'Movie 4',
      labels: ['premiere'],
      showTimes: ['18.40', '20.00'],
      img: 'https://images.freeimages.com/images/premium/previews/2267/22676827-game-over.jpg'
    }
  ]
}

export const repertoireReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
  // switch (type) {
  //   case actionTypes.SHOW_NAV:
  //     return { ...state, isVisibleNav: !state.isVisibleNav };
  //   default:
  //     return state;
  // }
  return state;
}