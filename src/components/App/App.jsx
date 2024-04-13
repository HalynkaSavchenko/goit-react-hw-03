import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import initialData from '../../contacts.json';
import { useEffect, useState } from 'react';
import css from './App.module.css'

export default function App() {
    const[contact, setContact] = useState(() => {
        const savedContact = localStorage.getItem('saved-contact');  
        if(savedContact !== null) {
            return JSON.parse(savedContact);
        }
        return initialData
    });
    
    const[search, setSearch] = useState('');

    useEffect(() => {
        localStorage.setItem('saved-contact', JSON.stringify(contact));
    }, [contact]);

    const addContact = (newContact) => {
        setContact((prevCards) => {
            return[...prevCards, newContact]
        })
    };

    const deleteContact = (contactId) => {
        setContact((prevCards) =>{
            return prevCards.filter((card) => card.id !== contactId)
        })
    }

    const visibleCard = contact.filter((card) => 
    card.name.toLowerCase().includes(search.toLowerCase()));
    return(
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onAdd={addContact}/>
            <SearchBox value={search} onSearch={setSearch}/>
            <ContactList contact={visibleCard} onDelete={deleteContact}/>
        </div>
    )
}