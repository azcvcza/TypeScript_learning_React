import * as React from "react";

export class App extends React.Component<any,any>{
    render(){
        return <h1>Heelo,{this.props.name}</h1>
    }
}