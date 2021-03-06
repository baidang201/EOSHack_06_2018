import {
  ADD,
  SET,
} from './../constant/buyList';

const initialState = [];

export default function sellListReducer(state = initialState, action) {
  switch (action.type) {
    case (SET): {
      return action.payload;
    }
    case (ADD): {
      return [
        ...state,
        action.payload
      ]
    }
  }

  return state;
}
