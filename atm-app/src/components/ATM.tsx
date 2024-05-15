import { ButtonTower } from "./ButtonTower";
import { Screen } from "./Screen";

export const ATM = () => {
	return (
		<div className="flex items-center justify-center w-1/4">
			<div className="flex flex-col w-full">
				<div className=" h-24"></div>
				<div className="bg-blue-600 flex h-28 rounded-md">
					<h1 className="text-5xl text-center">ATM</h1>
				</div>
				<div className="bg-zinc-200 flex w-5/6 h-96 rounded-b-sm">
					<div className="flex justify-between w-full">
						<ButtonTower />
						<Screen />
						<ButtonTower />
					</div>
				</div>
			</div>
		</div>
	);
};
