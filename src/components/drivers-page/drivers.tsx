import { useEffect, useState } from 'react'
import { driver } from '../../interfaces/driverInterfaces.js'
import { IDriverService } from '../../interfaces/service-interfaces.js';
import './drivers.css'
// @ts-ignore
import SearchBox from '../search-box/search-box.js'
import DriverTile from '../driver-tile/driver-tile';

interface DriversProps {
    driverService: IDriverService;
}

function Drivers(props: DriversProps) {
    const driverService: IDriverService = props.driverService;
    const [ driverData, setDriverData ] = useState<driver[]>([])

    useEffect(() => {
        const fetchDriverData = async () => 
        {
            try
            {
                const data: driver[] = await driverService.getDriverData();
                setDriverData(data);
            } catch(err)
            {
                console.error('error retrieving driver data', err);
            }            
        }
        
        fetchDriverData();
    }, [])

    const [driverSearchQuery, setDriverSearchQuery] = useState("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setDriverSearchQuery(e.target.value)
    }
    
    return (
        <div className="drivers-page-content">
            <SearchBox placeholder="Enter driver name or registration number..." 
                        onChange={handleSearchChange}
                        searchQuery={driverSearchQuery} />
            <div className='driver-tiles-container'>
                {driverData.map((driver) => <DriverTile driver={driver} isVisible={
                    driverSearchQuery === ""
                    || driver.surname.toLowerCase().includes(driverSearchQuery.toLowerCase())
                    || driver.forename.toLowerCase().includes(driverSearchQuery.toLowerCase())
                    || driver.vehicleRegistration.toLowerCase().includes(driverSearchQuery.toLowerCase())
                } /> )}
            </div>
        </div>        
    )
}

export default Drivers;