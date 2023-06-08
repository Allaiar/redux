const initialState = {
  customers: []
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-ALL-CUSTOMERS":
      return { ...state, customers: [...state.customers, ...action.payload.reverse()] };
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };
    case "DELETE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
