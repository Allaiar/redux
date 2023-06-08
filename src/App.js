import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncAction/fetchCustomers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = () => {
    const amount = prompt("Введите сумму которую хотите добавить");
    dispatch({ type: "ADD_CASH", payload: Number(amount) });
  };

  const getCash = () => {
    const amount = prompt("Введите сумму которую хотите вычесть");
    dispatch({ type: "GET_CASH", payload: Number(amount) });
  };

  const addCustomer = () => {
    const name = prompt("Введите имя покупателя");
    const customer = {
      id: Date.now(),
      name: name,
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Счет: {cash}$</h1>
      <div className="flex flex-col">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 w-44"
            onClick={addCash}
          >
            Пополнить счет
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-44"
            onClick={getCash}
          >
            Снять со счета
          </button>
        </div>
        <div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 w-60"
            onClick={addCustomer}
          >
            Добавить покупателя
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-5 w-60"
            onClick={() => dispatch(fetchCustomers())}
          >
            Получить всех клиентов
          </button>
        </div>
      </div>
      <div>
        {customers.length <= 0 ? (
          <h1 className="text-2xl mt-4">Клиентов нет</h1>
        ) : (
          customers
            .map((customer) => (
              <div
                className="flex flex-col bg-gray-200 rounded-lg p-4 mt-4 max-w-lg mx-auto"
                key={customer.id}
              >
                <p className="text-lg font-semibold">{customer.name}</p>
                <p className="text-lg font-semibold">{customer.email}</p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                  onClick={() =>
                    dispatch({ type: "DELETE_CUSTOMER", payload: customer.id })
                  }
                >
                  Удалить
                </button>
              </div>
            ))
            .reverse()
        )}
      </div>
    </div>
  );
}

export default App;
