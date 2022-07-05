import { Component } from "react";
import './search-box.styles.css';
class SearchBox extends Component {
    render() {
        return (
            <input
                className= {`search-box ${this.props.className}`}
                type= "search"
                placeholder= {this.props.placeholder}
                // instead of rerendering the same function over and over again it can just call the method.
                onChange= {this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox;