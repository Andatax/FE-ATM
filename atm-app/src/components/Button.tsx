import { FC } from "react";
type ButtonProps = {
	onClick?: () => void;
};
export const Button: FC<ButtonProps> = () => {
	return (
		<>
			<div className="flex flex-wrap items-center">
				<button className="bg-zinc-300 hover:bg-zinc-500 w-8 h-4 font-bold my-1 shadow-md rounded-sm"></button>
			</div>
		</>
	);
};
