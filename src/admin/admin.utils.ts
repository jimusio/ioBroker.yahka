export module Utils {
    export function getInputValue(input: HTMLInputElement | HTMLTextAreaElement, emptyStringAsUndefined: boolean = true) {
        if (input === undefined || input === null)
            return undefined;
        if ("valueAsDate" in input) {
            let dateValue = input.valueAsDate;
            if (dateValue)
                return dateValue;
        }

        if ("valueAsNumber" in input) {
            let numValue = input.valueAsNumber;
            if (!isNaN(numValue))
                return numValue;
        }

        let stringValue = input.value;
        if ((stringValue === "") && emptyStringAsUndefined)
            return undefined;

        if (stringValue !== "") {
            let strAsNumber = Number(stringValue);
            if (!isNaN(strAsNumber))
                return strAsNumber;
        }

        return stringValue;
    }

    export function getSelectInputValue(input: HTMLSelectElement) {
        if (input === undefined || input === null)
            return undefined;
        let dateValue = input.valueAsDate
        if (dateValue)
            return dateValue;
        let numValue = input.valueAsNumber;
        if (!isNaN(numValue))
            return numValue;

        let stringValue = input.value;
        let strAsNumber = Number(stringValue);
        if (!isNaN(strAsNumber))
            return strAsNumber;
        return stringValue;
    }

    export function setInputValue(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, value: any) {
        if (input === undefined || input === null)
            return;
        input.value = ((value !== undefined) && (value !== null)) ? value : "";
    }

}