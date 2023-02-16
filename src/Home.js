import React, { Fragment } from "react";

import { BoxCharacters } from "./components/BoxCharacters";
import { data } from "./data";
import "./home.css";

export class Home extends React.Component {
	state = {
		characters: data,
	};

	render() {
		const { characters } = this.state;

		return (
			<Fragment>
				<header>
					<h1>Carnaval VnW</h1>
				</header>

				<main>
					<section>
						{characters
							? characters.map(({ id, name, image }) => (
									<BoxCharacters name={name} image={image} key={id} />
							  ))
							: undefined}
					</section>
				</main>
			</Fragment>
		);
	}
}

export default Home;
