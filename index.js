import './style';
import { Component } from 'preact';

import "./store.inline"
import "./store2.inline"
import "./store"
import "./store2"

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
			</div>
		);
	}
}
