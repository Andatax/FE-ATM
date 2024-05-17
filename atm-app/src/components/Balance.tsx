import { useAccountContext } from "../utils/GlobalState";
import { AccountState } from "../interfaces/AccountStateI";

type DepositProps = {
	setScreenStatus?: any;
};

export const Balance = ({ setScreenStatus }: DepositProps = {}) => {
	const state: AccountState | undefined = useAccountContext();
	const dispatch: any = useAccountContext();
	const handleScreenStatus = () => {
		setScreenStatus("Options");
	};
	return (
		<>
			<div>Your Balance is:{state?.balance} </div>
			{setTimeout(() => {
				handleScreenStatus();
			}, 3000)}
		</>
	);
};
