import { ButtonTower } from "./ButtonTower";
import { Screen } from "./Screen";
import { AccountState, useAccountContext } from "../utils/GlobalState";
import { useState } from "react";

export const ATM = () => {
	const state: AccountState | undefined = useAccountContext();
	const [screenStatus, setScreenStatus] = useState("Options");
	return (
		<div className="flex items-center justify-center w-1/4">
			<div className="flex flex-col justify-center items-center w-full">
				<div className=" h-24"></div>
				<div className="bg-blue-600 flex h-28 rounded-md w-fit">
					<img src="/src/assets/atm_sign.png" alt="ATM"></img>
				</div>
				<div className="bg-zinc-50 flex flex-col w-5/6 h-96 rounded-b-sm">
					<div className="flex justify-center mt-2">
						<img src="/src/assets/creditcard_sprite.png" alt="ATM" className="opacity-30" />
					</div>
					<div className="flex flex-wrap justify-between w-full">
						<div className="mt-16 w-12 ml-1">
							<ButtonTower left={true} setScreenStatus={setScreenStatus} />
						</div>
						<Screen screenStatus={screenStatus} setScreenStatus={setScreenStatus} />
						<div className=" mt-16 w-12 mr-1">
							<ButtonTower left={false} setScreenStatus={setScreenStatus} />
						</div>
					</div>
					<div className="flex flex-wrap ">
						<img src="/src/assets/sticker_graf.png" alt="sticker" />
						<img src="/src/assets/systems.png" alt="systems" className="h-1 mt-1 ml-4" />
					</div>
				</div>
			</div>
		</div>
	);
};
