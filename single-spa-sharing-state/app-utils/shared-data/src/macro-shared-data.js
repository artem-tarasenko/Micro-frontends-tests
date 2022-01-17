// Anything exported from this file is importable by other in-browser modules.
import { BehaviorSubject } from "rxjs";
export const store = new BehaviorSubject({ state: 'initial state'});




export const getState = {
    isAuthenticated: false,
    set setAuthState(state) {
        this.isAuthenticated = state;
    }
}




