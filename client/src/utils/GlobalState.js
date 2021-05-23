import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_MEET,
  REMOVE_MEET,
  UPDATE_MEETS,
  ADD_MEET,
  ADD_JOIN,
  UPDATE_JOINS,
  REMOVE_JOIN,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_MEET:
    return {
      ...state,
      currentMeet: action.meet,
      loading: false
    };

  case UPDATE_MEETS:
    return {
      ...state,
      meets: [...action.meets],
      loading: false
    };

  case ADD_MEET:
    return {
      ...state,
      meets: [action.meet, ...state.meets],
      loading: false
    };

  case REMOVE_MEET:
    return {
      ...state,
      meets: state.meets.filter((meet) => {
        return meet._id !== action._id; 
      })
    };

  case ADD_JOIN:
    return {
      ...state,
      joins: [action.meet, ...state.joins],
      loading: false
    };

  case UPDATE_JOINS:
    return {
      ...state,
      joins: [...state.joins],
      loading: false
    };

  case REMOVE_JOIN:
    return {
      ...state,
      joins: state.joins.filter((meet) => {
        return meet._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    meets: [],
    currentMeet: {
      _id: 0,
      title: "",
      description: "",
      location: "",
      username: "",
    },
    joins: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };