import './driver-data-field.css'

interface DriverDataFieldProps {
    fieldTitle: string,
    fieldValue: string
}

function DriverDataField(props: DriverDataFieldProps) {
    return (
        <div className="driver-data-field-container">
            <div className="driver-data-field-title">
                {props.fieldTitle}
            </div>
            <div className="driver-data-field-value">
                {props.fieldValue}
            </div>
        </div>
    )
}

export default DriverDataField;