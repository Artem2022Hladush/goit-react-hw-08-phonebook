import { Container, Heading, Image } from '@chakra-ui/react';
import  img from '../img/phonebook.jpg'

const Home = () => {
	return (
		<main>
		<Container>
			<Heading as='h1' size='3xl' >Home</Heading>
			<Image src={img} alt='phonebook'/>
		</Container>
		</main>
	)
}

export default Home;