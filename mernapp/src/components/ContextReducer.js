import { createContext, react, useContext, useReducer } from 'react'

// we are using useReducer hook instead of usestate hook and usereducer has dispatch function, dispatch has multiple no of action types; add to cart, delete from cart
const CartStateContext = createContext();  //state we can use globally
const CartDispatchContext = createContextContext();  //used to change state

//we'll mention in dispatch what actions to perform and what state to change

const reducer = (state, action) = {

}
export const Cartprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])    //initial value of state and dispatch functionality
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>


  )

}

const useCart = () => useContext(CartStateContext);
const useDispatchCart = () => useContext(CartDispatchContext);