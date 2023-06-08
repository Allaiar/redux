export const fetchCustomers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "GET-ALL-CUSTOMERS", payload: res }));
  };
};
