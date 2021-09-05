import { actionTypes } from "../constants/actionTypes"
import { navStateType } from "../../types/types";

const initialState: navStateType = {
  isVisibleNav: false,
  categories: [
    {
      title: 'repertuar',
      subList: []
    },
    {
      title: 'cennik',
      subList: []
    },
    {
      title: 'projekty specjalne',
      subList: [
        {
          title: 'kino konesera',
          subList: []
        },
        {
          title: 'kino kobiet',
          subList: []
        },
        {
          title: 'maratony filmowe',
          subList: []
        },
      ]
    },
    {
      title: 'dream',
      subList: []
    },
    {
      title: 'szkoły',
      subList: [
        {
          title: 'kino na temat',
          subList: []
        },
        {
          title: 'kino na temat jr',
          subList: []
        },
      ]
    },
    {
      title: 'kino',
      subList: []
    },
  ],
}

export const navReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
  switch (type) {
    case actionTypes.SHOW_NAV:
      return { ...state, isVisibleNav: !state.isVisibleNav };
    default:
      return state;
  }
}