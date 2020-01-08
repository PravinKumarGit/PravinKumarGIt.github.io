const actions = {
  START_UP: "START_UP",
  startUp: payload => {
    return {
      type: actions.START_UP,
      payload
    };
  }
};
export default actions;
