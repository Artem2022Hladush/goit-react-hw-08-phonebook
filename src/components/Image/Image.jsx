import css from "../Image/Image.module.css"

export const Image = ({phonebook}) => {
	return( 
		<div className={css.wrapper}>
			<img className={css.img} src={phonebook} alt={phonebook} />
		</div>
	)	
}