export const loggerMiddleware = (store) => (next) => (action) => {
    console.log(" Dispatching the current action:", action);
    if(action.type === "Counter/decrement"  && store.getState().counter.count <= 0 ){
        console.log("less than 0 it cannot go");
        return;
    }
    const result = next(action);
    console.log("Updated state after the reducer function being called", store.getState());
    return result;
}