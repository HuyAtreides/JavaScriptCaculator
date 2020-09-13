export default function handleCaculate(prevState) {
	let operations = prevState.operation.replace("x", "*");
	if (!/=/.test(prevState.operation))
		if (/([0-9.]+[-+*/]{1,2}[0-9.]+|^[+-]*[0-9.]+$)/.test(operations)) {
			// eslint-disable-next-line
			let result = Function(`return ${operations}`)();
			return {
				operation:
					prevState.operation +
					"=" +
					Math.round(result * 100000000000000) / 100000000000000,
				display: Math.round(result * 100000000000000) / 100000000000000,
			};
		} else if (/^[0-9]+$[-*+/]*/.test(operations)) {
			operations = operations.replace(/[-+*/]+/, "");
			return {
				operation: operations + "=" + operations,
				display: operations,
			};
		}
}
