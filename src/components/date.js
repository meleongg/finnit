import { format } from "date-fns"

const getMinDueDate = () => {
    const today = format(new Date(), "yyyy-MM-dd");
    return today;
}

export { getMinDueDate }