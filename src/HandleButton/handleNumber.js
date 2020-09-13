export default function handleNumber(prevState, button) {
	let length = prevState.operation.length;
	let endCharacter = prevState.operation[length - 1];
	if (button === ".") {
		if (prevState.decimal)
			if (prevState.operation === "" || /=/.test(prevState.operation))
				return {
					operation: "0.",
					display: "0.",
					decimal: false,
				};
			else if (!/[0-9.]/.test(endCharacter))
				return {
					operation: prevState.operation + "0.",
					display: "0.",
					decimal: false,
				};
			else if (endCharacter !== ".")
				return {
					operation: prevState.operation + ".",
					display: prevState.display + ".",
					decimal: false,
				};
	} else if (/=/.test(prevState.operation) || prevState.operation === "0")
		return {
			operation: button,
			display: button,
		};
	else
		return {
			operation: prevState.operation + button,
			display: /[0-9.]/.test(endCharacter)
				? prevState.display + button
				: button,
		};
}
