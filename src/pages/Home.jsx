import { Container, Heading, Image } from '@chakra-ui/react';
import  img from '../img'

const Home = () => {
	return (
		<main>
		<Container>
			<Heading as='h1' size='3xl' ></Heading>
			<Image src={img} alt='phonebook'/>
		</Container>
		</main>
	)
}

export default Home;