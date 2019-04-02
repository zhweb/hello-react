import React, {Component} from "react"

export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-1 col-xs-offset-11">
                    <h1>Header</h1>
                    <h2>{2 + 2}</h2>
                    <h3>{false ? 'hello' : 'word'}</h3>
                </div>
            </div>
        );
    }
}
