import React from "react";
import "./styles.css";

export class BoxCharacters extends React.Component {
	render() {
		const { name, image } = this.props;

		return (
			<figure>
				<img src={image} alt={`Personagem de carnaval: ${name}`} />

				<figcaption>{name}</figcaption>
			</figure>
		);
	}
}
