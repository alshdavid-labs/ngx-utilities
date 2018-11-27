import { IStoreAction } from "../models";
import { cloneDeep } from "lodash";

export const createReducer = <T = any, Y = any>(initialState, actions: any) => {
    return function(state: T = initialState, action: IStoreAction<Y>): T {
        const fn = actions[action.type]
        if (!fn) {
            return state
        }
        const newState = cloneDeep(state)
        return fn(newState, action.payload)
    }
}