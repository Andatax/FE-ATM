import { useAccountContext } from "../utils/GlobalState";
import { Home } from "./Home";
import { AccountState } from "../interfaces/AccountStateI";
import { useEffect, useState } from "react";
import { Options } from "./Options";
import { Deposit } from "./Deposit";
import { Withdraw } from "./Withdraw";
import { Balance } from "./Balance";
type screenProps = {
	screenStatus: string;
	setScreenStatus: any;
};

export const Screen = ({ screenStatus, setScreenStatus }: screenProps) => {
	const state: AccountState | undefined = useAccountContext();
	const [loggedIn, setLoggedIn] = useState(false);

	if (state === undefined) {
		console.log("state is undefined");
		return null;
	}
	useEffect(() => {
		console.log("State has changed: ", screenStatus);
	}, [screenStatus]);
	if (!state.isLoggedIn) {
		return <Home />;
	} else {
		return (
			<div className="w-40 h-40">
				<div className="bg-blue-300 w-full h-full border-4 text-zinc-50 text-xs text-center">
					<Options />
					{screenStatus === "Withdraw" && <Withdraw setScreenStatus={setScreenStatus} />}
					{screenStatus === "Deposit" && <Deposit setScreenStatus={setScreenStatus} />}
					{screenStatus === "Balance" && <Balance setScreenStatus={setScreenStatus} />}
				</div>
			</div>
		);
	}
};
