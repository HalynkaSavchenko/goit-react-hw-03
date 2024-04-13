import css from './SearchBox.module.css';

export default function SearchBox({value, onSearch}) {
    return(
        <div className={css.searchBox}>
            <label htmlFor='search' className={css.label}>Find contacts by name</label>
            <input 
            className={css.search}
            type="text"
            value={value}
            onChange={(e) => onSearch(e.target.value)}
            id='search' />
        </div>
    )
}