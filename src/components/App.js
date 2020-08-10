import React, {Component} from "react";
import UniqId from "uniqid";
import Heading from "./Heading";
import ListTile from "./ListTile";
import './style.css'
import InputField from "./InputField";
import EmptyImage from "./EmptyImage";
import AddButton from "./AddButton";

class App extends Component {
    textInput = '';
    myList = [];
    state = {myList: this.myList, textInput: this.textInput};

    addListItem = (item) => {
        this.myList.push(item);
        this.setState({textInput: '', myList: this.myList});
    }

    removeItem = (index) => {
        this.setState(() => {
            return this.state.myList.splice(index, 1);
        })
    }

    updateText = (item) => {
        this.setState({
            textInput: item,
        })
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            this.addListItem(this.state.textInput);
            this.setState({textInput: ''})
        }
    }

    render() {
        return (
            <div className=" col-lg-6 col-sm-12 outerDiv">
                <Heading/>
                {this.myList.length > 0 ?
                    <div className="listTileDiv">
                        {this.state.myList.map((name, index) => {
                            return <ListTile key={UniqId()} listTile={this.state.myList[index]} index={index + 1}
                                             onClick={this.removeItem}/>
                        })}
                    </div>
                    : null}

                <div className="input-group mb-3">
                    <InputField onKeyPress={this.handleKeyPress} value={this.state.textInput}
                                onChange={this.updateText}/>
                    <AddButton onClick={this.addListItem} textInputState={this.state.textInput}/>
                </div>
                {this.myList.length === 0 ? <EmptyImage/> : null}
            </div>
        );
    }
}

export default App;