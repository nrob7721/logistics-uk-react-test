import { driver } from './driverInterfaces.js'

export interface IDriverService
{
    getDriverData(): Promise<driver[]>;
}