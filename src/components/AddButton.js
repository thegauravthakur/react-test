import React, {Component} from "react";

class AddButton extends Component {
    render() {
        return (
            <div className="input-group-append">
                <button className="btn btn-primary" type="button"
                        onClick={this.props.onClick.bind(this, this.props.textInputState)}>ADD
                </button>
            </div>
        );
    }
}

export default AddButton;