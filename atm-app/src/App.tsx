import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ATM } from "./components/ATM";

function App() {
	return (
		<>
			<div className="bg-fuchsia-400 w-full h-screen flex justify-center">
				<ATM />
			</div>
		</>
	);
}

export default App;
