import './search-box.css'

function SearchBox(props) {
    return (
        <div className="search-box">
            <input type="text" 
                className="search-input" 
                name="driver-search"
                value={props.searchQuery}
                placeholder={props.placeholder}
                onChange={props.onChange}
            ></input>
        </div>
    )
}

export default SearchBox;