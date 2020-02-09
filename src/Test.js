import React from 'react';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[{"type": "Beverages", "sub_types": ["Water", "Coffee"]}],
            actives: []
        }
    }

    appendSecond = () => {
        this.setState(previousState => ({
            data: [...previousState.data,  {"type": "Beveragee"+Math.floor((Math.random() * 100) + 1), "sub_types": ["Water", "Coffee"]}]
        }));
        
    }

    handleToggle = (name) => {
        let actives = this.state.actives
        if(actives.includes(name)){
            for(let i=0; i<actives.length; i++){
             if(actives[i] === name){
                actives.splice(i, 1)
             }   
            }
            this.setState({
                actives: actives
            })
            return 
        }

        this.setState({
            actives:[...this.state.actives, name]
        });
    }

    render(){
        return (
            <div style={{ margin:'1cm' }}>
                <ul id="myUL">
                {
                    this.state.data.map((d, index) => (
                        <li><span class="caret" onClick={() => this.handleToggle(d.type)}>{d.type}</span>
                        <ul class={this.state.actives.includes(d.type) ? "nested active" : "nested"}>
                        {
                            d.sub_types.map(sub => (
                                <li>{sub}</li>
                            ))
                        }
                        </ul>
                    </li>
                    ))
                }
                </ul>
                <button type="button" onClick={this.appendSecond}>button</button>
            </div>
        )
    }
}

export default Test;

