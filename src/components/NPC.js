import React, {
    Component
} from 'react';

export default class NPC extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameRevealed: false,
            hovered: false,
        }
    }

    onClick = () => {
        this.setState({nameRevealed: true});
    }

    onHover = () => {
        this.setState({hovered: true});
    }

    onUnHover = () => {
        this.setState({hovered: false});
    }

    render() {
        return (
            <div
                className = {
                    this.state.hovered 
                    ? 'npc hovered'
                    : 'npc'
                }
                onMouseEnter={this.onHover}
                onMouseLeave={this.onUnHover}
                onClick={this.onClick}
            >
                <img
                    src={this.props.src}
                    className='npc-image'
                    alt={this.props.npcName}
                />
                {this.state.nameRevealed && 
                    <h4 className='npc-name'>{this.props.npcName}</h4>
                }
                
            </div>
        )
    }
}