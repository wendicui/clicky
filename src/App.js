import React, { Component } from 'react';
import people from "./people.json";
import PeopleCard from "./components/PeopleCard";
// import Header from "./Header";
// import Footer from "./Footer";
// import Panel from "./Panel";



class App extends Component {
    //set state of people
    state = {
        data:people,
        score: 0,
        topScore: 0
    };
    //function to mark it has been clicked
    clicked = id =>{
        //if the card has not been clicked before
        const list = this.state.data
        if(list[id - 1].chosen !== true){
            //mark it being clicked;
            list[id - 1].chosen  = true;

            //add earned newScore
            let newScore = this.state.score + 1;
            if(newScore > this.state.topScore){
                //set new score and new topscore
                this.setState({ data:list,
                                topScore:newScore,
                                score: newScore})
                console.log(list)
            }else{
                //just set new score
                this.setState({ data:list,
                                score:newScore})
                console.log(this.state.data)}
        }else{
            this.newGame()
        }
    };

    //set newGame
    newGame = ()=> {
        //change all clicked to false;
        let newData = this.state.data.map(people => (people.chosen = false));
        console.log(newData)
        this.setState({
            data:newData,
            score:0
        })
    }

    //render stuff
    render(){
        return(
            <div>
                {this.state.data.map(people =>(
                    <PeopleCard
                        name = {people.name}
                        clicked = {this.clicked}
                        id = {people.id}
                        image = {people.image}
                        key = {people.id}
                    />
                ))}

            </div>
        )
    }
}


export default App;
