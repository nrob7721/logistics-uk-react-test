import styles from './menu-item.module.css'
import { Link } from 'react-router-dom'

function MenuItem (props) {
    return (
        <Link to={props.menuItemUrl} 
            className={`${styles.menuitem} ${props.isSelected ? styles.selected : ''}`}
            onClick={props.onClick}>
            {props.menuItemTitle}
        </Link>
    )
}

export default MenuItem;