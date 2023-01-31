import Filter from "components/Filter/Filter"
import ContactEditor from "components/ContactEditor/ContactEditor"
import ContactList from "components/ContactList/ContactList"

import { useSelector } from "react-redux"
import { isLoading } from "redux/contacts/selectors"

const ContactPage = () => {
	const isLoadindg = useSelector(isLoading);

	return (
		<main>
			<ContactEditor/>
			<Filter/>
			{isLoadindg && <p>Loading...</p>}
			<ContactList/>
		</main>
	)
};

export default ContactPage;