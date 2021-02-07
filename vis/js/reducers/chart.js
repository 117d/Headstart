const chart = (
  state = {
    width: null,
    height: null,
  },
  action
) => {
  if (action.canceled) {
    return state;
  }
  
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        width: action.chartSize,
        height: action.chartSize,
      };
    case "RESIZE":
      return {
        ...state,
        width: action.chartSize,
        height: action.chartSize,
      };
    default:
      return state;
  }
};

export default chart;
