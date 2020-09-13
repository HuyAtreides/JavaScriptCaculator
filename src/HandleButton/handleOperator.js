export default function handleOperator(prevState, button) {
	let length = prevState.operation.length;
	let endCharacter = prevState.operation[length - 1];
	if (prevState.operation === "")
		return {
			operation: button,
			display: button,
			decimal: true,
		};
	else {
		if (/=/.test(prevState.operation))
			return {
				operation: prevState.display + button,
				display: button,
				decimal: true,
			};
		else if (
			/[0-9.]/.test(endCharacter) ||
			(button === "-" && endCharacter !== "-")
		)
			return {
				operation: prevState.operation + button,
				display: button,
				decimal: true,
			};
		else {
			let operation = prevState.operation;
			if (/[-+/x]/.test(operation[length - 2]))
				operation = operation.slice(0, length - 2);
			else operation = operation.slice(0, length - 1);
			return {
				operation: operation + button,
				display: button,
				decimal: true,
			};
		}
	}
}
