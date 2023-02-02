import css from "../Contact/Contact.module.css"
import { deleteContacts } from "redux/contacts/operations";
import { useDispatch} from "react-redux";
import PropTypes from "prop-types"

const Contact = ({contact}) => {
const dispatch = useDispatch()
const onDeleteContact  = (id) => dispatch(deleteContacts(id))

	return (
	<li className={css.contact}>
		<p className={css.name}>{contact.name} :</p>
		<p className={css.number}>{contact.phone}</p>
		<button className={css.contact__button} type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
	</li>
	)
		
};

Contact.propTypes={
	contact:PropTypes.shape({
		 name:PropTypes.string,
		 number:PropTypes.string,
		 id:PropTypes.string
	})
}

export default Contact