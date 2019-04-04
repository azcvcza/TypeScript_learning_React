import * as React from 'react';

interface IProps{
    name?:string;
}

const Header: React.FC<IProps> = (props:IProps)=>{
    <h1>Hello,{props.name}! welcome to header</h1>
};

Header.defaultProps={
    name:"fuck you bitch",
}

export default Header;