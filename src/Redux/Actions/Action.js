export const ADD = (item) => {
    return {
        type: "ADD",
        payload: item
    }
}
export const DEL = (id) => {
    return {
        type: "DEL",
        payload: id
    }
}