import { Title } from 'components/Title/Title';
import { Image } from 'components/Image/Image';
import  phonebook from '../img/phonebook.jpg'

const Home = () => {
	return (
		<main>
			<Title>Home Page</Title>
		
		<Image phonebook={phonebook}/>
		</main>
	)
}

export default Home;