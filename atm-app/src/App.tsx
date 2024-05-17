import { ATM } from "./components/ATM";
import { AccountProvider } from "./utils/GlobalState";
import { AccountState } from "./utils/GlobalState";

function App() {
	const initialAccountState: AccountState = {
		isLoggedIn: true,
		balance: 3500,
		pin: 3245,
	};
	return (
		<>
			<AccountProvider value={initialAccountState}>
				<div className="bg-fuchsia-400 w-full h-screen flex justify-center">
					<ATM />
				</div>
			</AccountProvider>
		</>
	);
}

export default App;
