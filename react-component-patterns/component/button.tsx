import React, { MouseEvent, ReactNode } from 'react';

type Props = {
    onClick(e: MouseEvent<HTMLElement>): void;
    children?: ReactNode
}
const Button: SFC<Props> = ({
    onClick: handleClick, children
}) => (<button onClick={handleClick}>{children}</button>)

const initialState = { clicksCount: 0 }
type State = Readonly<typeof initialState>
class ButtonCounter extends Component<object,State>{
    readonly state:State =initialState;
    doThings = ()=>{
        this.state = {clicksCount:12}
        this.state.clicksCount = 1232
    }
}

