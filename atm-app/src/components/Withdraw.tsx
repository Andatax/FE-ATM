import { useAccountContext } from "../utils/GlobalState";
import { WITHDRAW } from "../utils/actions";
import  { ChangeEvent } from "react";

import { AccountState } from "../interfaces/AccountStateI";
type WithdrawProps = {
	setScreenStatus: any;
};
export const Withdraw = ({ setScreenStatus }: WithdrawProps) => {
	const state: AccountState | undefined = useAccountContext();
	const dispatch: any = useAccountContext();
	const handleWithdraw = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setScreenStatus("Balance");
		dispatch({ type: WITHDRAW, payload: e.target.value });
	};
	return (
		<>
			<div>
				<h1>Enter the amount you want to withdraw</h1>
				<input placeholder="Enter amount" type="number" onChange={handleWithdraw}>
					{" "}
				</input>
				<button type="submit">Withdraw</button>
			</div>
		</>
	);
};
