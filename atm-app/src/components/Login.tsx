import { useAccountContext } from "../utils/GlobalState";
import { LOGGED_IN } from "../utils/actions";
import { ChangeEvent } from "react";
import { AccountState } from "../interfaces/AccountStateI";
type LoginProps = {
	setScreenStatus: any;
};
export const Login = ({ setScreenStatus }: LoginProps) => {
	const state: AccountState | undefined = useAccountContext();
	const dispatch: any = useAccountContext();
	const pin = state?.pin;
	const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setScreenStatus("Balance");
		dispatch({ type: LOGGED_IN, pin: e.target.value });
	};
	return (
		<>
			<div>
				<h1>Enter your 4 digit pin to acces to your account</h1>
				<input placeholder="Enter amount" type="number" onChange={handleLogin}>
					{" "}
				</input>
				<button type="submit">Access</button>
			</div>
		</>
	);
};
