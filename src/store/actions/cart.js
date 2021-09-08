import { ADD_ITEM, DELETE_ITEM, REMOVE_ITEM } from "./actionTypes"

export const add = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const remove = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}

export const deleteItem = (item) => {
    return {
        type: DELETE_ITEM,
        payload:item
    }
}