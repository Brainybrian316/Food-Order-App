import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		// shorter syntax for react fragment
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton />
			</header>
			{/* we cannot use . notation since there is a - for the two words so we have to write out like this */}
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="A table full of delicious food!" />
			</div>
		</>
	);
};

export default Header;
