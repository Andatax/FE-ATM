import { LOGGED_IN, LOGGED_OUT, DEPOSIT, WITHDRAW, CHECK_BALANCE } from "./actions";

export const reducer = (state: any, action: any) => {
	switch (action.type) {
		case LOGGED_IN:
			return {
				...state,
				loggedIn: true,
			};
		case LOGGED_OUT:
			return {
				...state,
				loggedIn: false,
			};
		case DEPOSIT:
			return {
				...state,
				balance: state.balance + action.payload,
			};
		case WITHDRAW:
			return {
				...state,
				balance: state.balance - action.payload,
			};
		case CHECK_BALANCE:
			return {
				...state,
				balance: action.payload,
			};
	}
};
