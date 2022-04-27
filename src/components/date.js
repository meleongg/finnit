import { format } from "date-fns"
import { differenceInHours } from "date-fns"

const WEEKHOURSDIFF = 168;

const getMinDueDate = () => {
    const today = format(new Date(), "yyyy-MM-dd");
    return today;
}

const stringToDate = (string) => {
    let year = string.substring(0, 4);
    let month = string.substring(5, 7);
    month -= 1;
    let day = string.substring(8, 10);

    return new Date(year, month, day);
}

const checkWithinWeek = (date) => {
    const today = new Date();
    let difference = differenceInHours(date, today);

    if (difference <= WEEKHOURSDIFF) {
        return true;
    }

    return false; 
}

export { getMinDueDate, stringToDate, checkWithinWeek }