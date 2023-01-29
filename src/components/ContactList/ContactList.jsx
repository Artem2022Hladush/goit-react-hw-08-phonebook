import css from "../ContactList/ContactLIst.module.css"
import Contact from "components/Contact/Contact";

import { getContacts, getFilter } from "redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchContacts}from 'redux/operations'

const ContactList = () => {
const contacts= useSelector(getContacts);
const filter = useSelector(getFilter);
const dispatch = useDispatch();

const filterNormal = filter.toLowerCase();

const visibleContacts = contacts.filter(contact =>
	contact.name.toLowerCase().includes(filterNormal)
);

useEffect(() => {
dispatch(fetchContacts())
}, [dispatch])

return (
	<ul className={css.contact__list}>{visibleContacts.map(contact => 
	<Contact key={contact.id} contact={contact} />
)}
</ul>
)
};

export default ContactList;