import { type } from "@testing-library/user-event/dist/type";
import { BUY_PIZZA } from "./pizzaActionTypes"

export const buypizza = () =>{
    return {
        type : BUY_PIZZA,
        payload:'purchase a Pizza'
    }
};