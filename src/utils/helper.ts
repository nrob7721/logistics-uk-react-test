import moment from 'moment'

export function parseDate(dateString: string): Date {
    const momentObj = moment(dateString, "YYYY-MM-DD");
    if(!momentObj.isValid())
        console.warn(`date string ${dateString} could not be parsed`)
    return momentObj.toDate();
}

export function formatMinutes(minutes: number): string {
    if(minutes === 0)
        return 'N/A';

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const hoursText = hours > 0 
        ? `${hours.toString()} hour${hours !== 1 ? 's' : ''}`
        : '';

    const minutesText = remainingMinutes > 0
        ? `${remainingMinutes.toString()} minute${remainingMinutes !== 1 ? 's' : ''}`
        : '';

    if (hoursText && minutesText)
        return `${hoursText}, ${minutesText}`;

    return hoursText || minutesText;
}