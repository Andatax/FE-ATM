import { Button } from "./Button";
import { ButtonLine } from "./ButtonLine";
import { ReactNode, FC } from "react";

type ButtonTowerProps = {
	left: boolean;
	setScreenStatus: any;
};

export const ButtonTower: FC<ButtonTowerProps> = ({ left, setScreenStatus }) => {
	if (left) {
		return (
			<>
				<div className="flex justify-left w-16 ">
					<div className="flex flex-col">
						<div className="flex justify-center">
							<Button onClick={() => setScreenStatus("Options")} />
							<ButtonLine />
						</div>
						<div className="flex justify-center">
							<Button />
							<ButtonLine />
						</div>
						<div className="flex justify-center">
							<Button onClick={() => setScreenStatus("Balance")} />
							<ButtonLine />
						</div>
						<div className="flex justify-center">
							<Button />
							<ButtonLine />
						</div>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="flex justify-right w-16 ">
					<div className="flex flex-col">
						<div className="flex justify-center">
							<ButtonLine />
							<Button />
						</div>
						<div className="flex justify-center">
							<ButtonLine />
							<Button />
						</div>
						<div className="flex justify-center">
							<ButtonLine />
							<Button onClick={() => setScreenStatus("Withdraw")} />
						</div>
						<div className="flex justify-center">
							<ButtonLine />
							<Button onClick={() => setScreenStatus("Deposit")} />
						</div>
					</div>
				</div>
			</>
		);
	}
};
