const MS_MINUTE = 60 * 1000;
const MS_HOUR = 60 * MS_MINUTE;
const MS_DAY = 24 * MS_HOUR;
const MS_YEAR = 365 * MS_DAY;

const toYear = (ms) => Math.trunc(ms / MS_YEAR);
const toDay = (ms) => Math.trunc(ms / MS_DAY);

const asLengthString = (ms) => {
    const years = toYear(ms);
    const days = toDay(ms - (years * MS_YEAR));

    return `${toYear(ms)} year${years > 1 ? "s" : ""}, ${days} day${days > 1 ? "s" : ""} old`;
};

module.exports = ({ parent: parentBdayString, me: meBdayString }) => {
    if (
        typeof parentBdayString !== "string" || typeof meBdayString !== "string" ||
        Number.isNaN(Date.parse(parentBdayString)) || Number.isNaN(Date.parse(meBdayString))
    ) {
        throw new Error(`Invalid Input! Expected date string, received: ${parentBdayString}, ${meBdayString}`);
    }

    const parentBday = new Date(parentBdayString);
    const meBday = new Date(meBdayString);

    const pTime = parentBday.getTime();
    const mTime = meBday.getTime();

    const halfday = mTime + (mTime - pTime);

    return {
        // what date will this occur
        halfday: new Date(halfday),
        // how old will my parent be?
        parentAge: asLengthString(halfday - pTime),
        // how old will I be?
        myAge: asLengthString(halfday - mTime),
    };
};
