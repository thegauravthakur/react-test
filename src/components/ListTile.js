import React, {Component} from "react";
import "./style.css"
import close from "./close.png"

class ListTile extends Component {

    render() {
        (this.props.index === 1) ? this.specialClass = "shadow singleListTile" : this.specialClass = "shadow singleListTile specialBorder";
        return (
            <div className={this.specialClass}>
                <div className="row text-center">
                    <div className="col-1 "><p className="center-vertically-index">{this.props.index}</p></div>
                    <div className="col-10 text-left"><p>{this.props.listTile}</p></div>
                    <div className="col-1">
                        <img onClick={this.props.onClick.bind(this, this.props.index - 1)} className="center-vertically-img"
                             src={close} alt="close"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTile;