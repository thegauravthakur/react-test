import React, {Component} from "react";

class InputField extends Component {
    render() {
        return (
            <input type="text" className="form-control" onKeyPress={this.props.onKeyPress}
                   value={this.props.value}
                   placeholder="Enter new item.."
                   aria-describedby="basic-addon2"
                   onChange={(event => this.props.onChange(event.target.value))}/>
        );
    }
}

export default InputField;