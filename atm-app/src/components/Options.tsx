export const Options = () => {
	return (
		<>
			<h4>Hi Peter Parker, choose one option</h4>
			<div className="flex justify-between w-full mt-8">
				<div className="flex flex-col">
					<div className="flex justify-center h-4"></div>
					<div className="flex justify-start mt-2 h-4"></div>
					<div className="flex justify-start ml-1 mt-2">Withdraw</div>
					<div className="flex justify-start mt-2 ml-1">Deposit</div>
				</div>
				<div className="flex flex-col">
					<div className="flex justify-center h-4"></div>
					<div className="flex justify-end mt-2 mr-1 text-end">Exit</div>
					<div className="flex justify-end mt-2 mr-1 text-end">Balance</div>
					<div className="flex justify-end mt-2  mr-1 text-end">Re-enter PIN</div>
				</div>
			</div>
		</>
	);
};
