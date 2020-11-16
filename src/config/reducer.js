export const getBasketTotal = (basket) => (
   basket?.reduce((amount, item) => item.price + amount, 0)
)

export const initialState = {
   basket: [],
   selectedProduct: null,
};

function reducer(state, action) {
   switch(action.type) {
      case "UPDATE_REG_PROD_IMAGE":
         return {
            ...state,
            url: action.url
         }
      case "SET_ATTRIBUTES":
         return {
            ...state,
            catagory: action.catagory
         }
      case "SET_USER":
         return {
            ...state,
            user: action.user
         }
      case 'ADD_TO_BASKET':
         // Logic for adding to basket
         return {
            ...state,
            basket: [...state.basket, action.item]
         }
      case 'REMOVE_FROM_BASKET':
         // Logic for removing item from basket.
         let newBasket = [...state.basket];

         const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

         if (index >= 0) {
            newBasket.splice(index, 1);
         } else {
            console.warn(`Cant remove product (id: ${action.id}) as it is not basket.`)
         }

         return {
            ...state, 
            basket: newBasket
         };

      default:
         return state;
   }
}

export default reducer;