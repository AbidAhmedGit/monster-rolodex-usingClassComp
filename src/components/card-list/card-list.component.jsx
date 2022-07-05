import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card/card.component'
class CardList extends Component {
    render() {
        console.log('render from cardList');

        console.log(this.props.monsters);
        const {monsters} = this.props
        return (
            <div className = "card-list">
                {monsters.map((monster) => {
                    // const { name, email, id } = monster;
                    // <h1 key={monster.id}>{monster.name}</h1>
                    // create a card component
                    return(

                        <Card monster= {monster}/>


                    );

                    })}
            </div>
        )
    }
}

export default CardList;