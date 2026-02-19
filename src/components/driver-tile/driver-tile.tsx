import { driver, ActivityType } from '../../interfaces/driverInterfaces'
import './driver-tile.css'
import DriverDataField from './driver-data-field'
//@ts-ignore
import ActiveDay from './active-day.js'
import { parseDate, formatMinutes } from '../../utils/helper'

interface DriverTileProps {
    driver: driver,
    isVisible: boolean
}

function DriverTile(props: DriverTileProps) {
    const dayFlags = Array(7).fill(false);
    let totalActivityDurationMinutes = 0;

    const activityGroupDurations: Record<ActivityType, number> = {
        [ActivityType.drive]: 0,
        [ActivityType.rest]: 0,
        [ActivityType.work]: 0,
        [ActivityType.available]: 0,
    }

    props.driver.traces.forEach(trace => {
        const activityDayOfWeek = parseDate(trace.date).getDay();
        dayFlags[activityDayOfWeek] = true;
        totalActivityDurationMinutes += trace.activity.reduce((accumulator, currentActivity) => { 
            accumulator += currentActivity.duration;
            activityGroupDurations[currentActivity.type] += currentActivity.duration
            return accumulator;   
        }, 0);
    })

    return (
        <div key={props.driver.id} className={`driver-tile-container ${props.isVisible ? '' : 'hidden'}`}>
            <div className='driver-name-container'>
                <div className='driver-surname'>{props.driver.surname.toUpperCase()},&nbsp;</div>
                <div className='driver-firstname'>{props.driver.forename}</div>
            </div>
            <div className='driver-data-container'> 
                <div className='driver-data-container-grid'>
                    <DriverDataField fieldTitle='Vehicle Registration' fieldValue={props.driver.vehicleRegistration} />
                    <DriverDataField fieldTitle='Total Activity Duration' fieldValue={formatMinutes(totalActivityDurationMinutes)} />
                    <DriverDataField fieldTitle='Drive' fieldValue={formatMinutes(activityGroupDurations[ActivityType.drive])} />
                    <DriverDataField fieldTitle='Rest' fieldValue={formatMinutes(activityGroupDurations[ActivityType.rest])} />
                    <DriverDataField fieldTitle='Work' fieldValue={formatMinutes(activityGroupDurations[ActivityType.work])} />
                    <DriverDataField fieldTitle='Available' fieldValue={formatMinutes(activityGroupDurations[ActivityType.available])} />
                </div>
                <div className='active-days-container'>
                    <ActiveDay day='Mon' active={dayFlags[1]} />
                    <ActiveDay day='Tue' active={dayFlags[2]} />
                    <ActiveDay day='Wed' active={dayFlags[3]} />
                    <ActiveDay day='Thu' active={dayFlags[4]} />
                    <ActiveDay day='Fri' active={dayFlags[5]} />
                    <ActiveDay day='Sat' active={dayFlags[6]} />
                    <ActiveDay day='Sun' active={dayFlags[0]} />
                </div>
            </div>
        </div>
    )
}

export default DriverTile;