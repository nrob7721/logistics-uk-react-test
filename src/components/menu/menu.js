import './menu.css'
import { useState, useEffect } from 'react'
import MenuItem from './menu-item.js';

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
        .then(response => response.json())
        .then(responseJson => {
            setMenuItems(responseJson.data);
        })
        .catch(error => console.error('error fetching menu items: ', error));
    }, [])

    const [selectedMenuItem, setSelectedMenuItem] = useState(1);

    return (
        <div className="menu-container">
            <nav className="menu">
                {menuItems.map((item, index) => (
                <MenuItem menuItemUrl={item.url} 
                    menuItemTitle={item.title} 
                    isSelected={selectedMenuItem === item.id ? true : false} 
                    onClick={() => setSelectedMenuItem(item.id)}
                    key={item.id}></MenuItem>
                ))}
            </nav>        
        </div>
        
    )
}

export default Menu;