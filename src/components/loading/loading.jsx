import React from 'react';
import styles from './loading.css'

export class Loading extends React.Component {
	constructor(props) {
		super(props);
	}

	getRect() {
		const items = [];
		
		for (let i = 1; i <= this.props.reactNumber; i++) {
			items.push(<div key={i} className={'react' + i} style={{
				'backgroundColor': this.props.reactColor,
				'WebkitAnimationDelay': (-1.2 + this.props.reactDelay * i) + 's',
    			'animationDelay': (-1.2 + this.props.reactDelay * i) + 's'
			}} ></div>);
		}

		return items;
	}

	componentDidMount() {
		/** give it 1 sec to render */
		setTimeout(function () {
			this.refs.loading.style.display = 'block';
			setTimeout(function () {
				this.refs.loading.style.opacity = 1;
			}.bind(this), 500);
		}.bind(this), 1000);
	}

	render() {
		return (
			<div className="loading" ref="loading" style={{ height: this.props.height }}>
				{this.getRect()}
			</div>
		);
	}
}

Loading.defaultProps = {
	height: 50,
	reactNumber: 5,
	reactDelay: 0.12,
	reactColor: '#000'
};
