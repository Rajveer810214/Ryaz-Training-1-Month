export const buyProduct = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'buyproduct',
      payload: amount
    });
  };
};
