import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({contact, onDelete}) {
    return(
        <ul className={css.list}>
            {contact.map((card) => (
                <li className={css.card} key={card.id}>
                  <Contact data={card} onDelete={onDelete}/>
               </li>
            ))}
        </ul>
    )
}