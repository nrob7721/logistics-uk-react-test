import { IDriverService } from '../interfaces/service-interfaces'
import { driver } from '../interfaces/driverInterfaces.js'

export class JsonDriverService implements IDriverService
{
    async getDriverData(): Promise<driver[]>
    {
        try {
            const response = await fetch("/drivers.json");
            const responseJson = await response.json();
            return responseJson.data;
        } catch (error) {
            console.error('Error retrieving driver data', error);
            return [];
        }
    }
}