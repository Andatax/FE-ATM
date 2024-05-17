import { useAccountContext } from "../utils/GlobalState";
import { DEPOSIT } from "../utils/actions";
import { ChangeEvent } from "react";
import { AccountState } from "../interfaces/AccountStateI";

type DepositProps = {
	setScreenStatus: any;
};

export const Deposit = ({ setScreenStatus }: DepositProps) => {
	const state: AccountState | undefined = useAccountContext();
	const dispatch: any = useAccountContext();
	const deposit = state?.balance;

	const handleDeposit = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setScreenStatus("Balance");
		dispatch({ type: DEPOSIT, deposit: e.target.value });
	};

	return (
		<>
			<div>
				<h1>Enter the amount you want to deposit</h1>
				<input placeholder="Enter amount" type="number" onChange={handleDeposit}>
					{" "}
				</input>
				<button type="submit">Deposit</button>
			</div>
		</>
	);
};
