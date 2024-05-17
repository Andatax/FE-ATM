export const Home = () => {
	return (
		<div className="w-40 h-40">
			<div className="bg-blue-300 w-full h-full border-4 text-zinc-50  text-xs text-center">
				<div className="flex flex-col h-full justify-center">
					<div className="h-1/2">Welcome to the ATM!</div>
					<div className="h-1/2 flex items-end justify-end">
						<h4 className="text-right m-1">Enter your pin</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
