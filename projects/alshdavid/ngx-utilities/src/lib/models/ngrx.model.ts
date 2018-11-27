export interface IStoreAction<T> {
    type: T,
    payload?: any
}

export class StoreAction<T> implements IStoreAction<T> {
    type: T
    payload: any

    constructor(
        type: T,
        payload?: any
    ) {
        this.type = type
        this.payload = payload
    }
}
