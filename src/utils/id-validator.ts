/**
 * Checks if the given value is a valid id (number, greater than 0).
 * 
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a valid id.
 */
export const isIdValid = (value: string | undefined): boolean => {
    return !(value === undefined || isNaN(+value) || +value < 1);
}
