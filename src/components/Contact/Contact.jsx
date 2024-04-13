import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({data: {id, name, number}, onDelete}) {
    return(
        <div className={css.card}>
            <div>
              <p className={css.name}><FaUser className={css.icon}/>{name}</p>
              <p className={css.number}><FaPhoneAlt className={css.icon}/>{number}</p>
            </div>
            <button className={css.button} onClick={() => {onDelete(id)}}>Delete</button>
        </div>
    )
}