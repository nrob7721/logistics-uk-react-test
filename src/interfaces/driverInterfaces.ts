export interface driver
{
    id: number,
    surname: string,
    forename: string,
    vehicleRegistration: string,
    traces: trace[]
}

export interface trace 
{
    date: string,
    activity: activity[]
}

export interface activity
{
    startTime: string,
    type: ActivityType,
    duration: number
}

export enum ActivityType
{
    drive = 'drive',
    rest = 'rest',
    work = 'work',
    available = 'available'
}

export interface DriverRow
{
    driverId: number,
    driverName: string,
    vehicleRegistration: string,
    totalActivityDuration: number,
    activeDays: boolean[]
}