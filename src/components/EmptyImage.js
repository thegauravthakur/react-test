import React, {Component} from "react";
import empty from "./empty-img.png";

class EmptyImage extends Component {
    render() {
        return (
            <div className="empty-message-div">
                <img src={empty} alt="empty home screen"/>
                <h5>No List Found</h5>
                <p>Click on add button to create your list</p>
            </div>
        );
    }
}

export default EmptyImage;