import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { reducer } from "./reducer";

export interface AccountState {
	isLoggedIn: boolean;
	balance: number;
	pin?: number;
	screenState?: string;
}

export const AccountContext = createContext<AccountState | undefined>(undefined);
const { Provider } = AccountContext;

interface AccountProviderProps {
	value: AccountState;
	children: ReactNode;
}

const AccountProvider: React.FC<AccountProviderProps> = ({ value, children }) => {
	const [state, dispatch] = useReducer(reducer, value);

	return <Provider value={state}>{children}</Provider>;
};

const useAccountContext = () => useContext(AccountContext);

export { AccountProvider, useAccountContext };
