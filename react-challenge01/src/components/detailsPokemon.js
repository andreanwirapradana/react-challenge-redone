import React, {Component} from "react";

class Details extends Component {
    constructor() {
        super();
        this.state = {
            showDetail: false
        }

        this.handleDetail = this.handleDetail.bind(this)
    }

    handleDetail() {
        let bool = false;
        if (!this.state.showDetail) {
            bool = true;
        };
        this.setState({
            showDetail: bool
        })
    }

    render () {
        return (
            <>
                <button onClick={this.handleDetail}>See Detail</button>
                {
                    this.state.showDetail ?
                    <div>
                        <p>Types:</p>
                        {this.props.types.map((type, idx) => {
                            console.log(type, "ini")
                            return (
                                <ul>
                                    <li>{type.type.name}</li>
                                </ul>
                            )
                        })}
                        <p>Abilities:</p>
                        {this.props.abilities.map((ability, idx) => {
                            return (
                                <ul>
                                    <li>{ability.ability.name}</li>
                                </ul>
                            )
                        })}
                        <p>Stats:</p>
                        {this.props.stats.map((stat, idx) => {
                            return (
                            <ul>
                                <li>{stat.stat.name}: {stat.base_stat}</li>
                            </ul>
                        )})}
                    </div> :
                    null
                }
            </>
        )
    }
}

export default Details;