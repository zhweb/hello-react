import React, {Component} from "react"

export default class Home extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.age=this.props.age;
    }

    onMakeOlder(){
        this.age +=3;
    }

    render() {

        this.state={
            data:{
                a:0
            }
        };
        console.log(this);
        return (
            <div className="row">
                <div className="col-xs-1 col-xs-offset-11">
                    <h1>Home</h1>
                <div>{this.props.children}</div>
                </div>
                <button className="btn btn-primary">Make me older</button>
            </div>
        );
    }
}

