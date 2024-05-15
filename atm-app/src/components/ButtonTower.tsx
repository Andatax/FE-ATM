import { Button } from "./Button";

export const ButtonTower = () => {
	return (
		<>
			<div className="flex justify-center w-16">
				<div className="flex flex-col">
					<Button />
					<Button />
					<Button />
					<Button />
				</div>
			</div>
		</>
	);
};
