import handleNumber from "./handleNumber.js";
import handleOperator from "./handleOperator.js";
import handleClear from "./handleClear.js";
import handleCaculate from "./handleCaculate.js";
export default function handleButton(prevState, button) {
	if (/[0-9.]/.test(button)) return handleNumber(prevState, button);
	else if (/[-+/x]/.test(button)) return handleOperator(prevState, button);
	else if (button === "AC") return handleClear();
	else return handleCaculate(prevState);
}
