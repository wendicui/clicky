import React, { Component } from 'react';
import people from "./people.json";
import PeopleCard from "./components/PeopleCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Panel from "./components/Panel"

class App extends Component {
    //set state of people
    state = {
        data:people,
        score: 0,
        topScore: 0,
        alert:"white-text",
    };
    //function to mark it has been clicked
    clicked = (obj) =>{
        //get the corresponding obj in list
        let list = this.state.data
        let index = list.reduce(function(a,v,i){
            if(v.id === obj.id){
                a = i
            } return a
        },0)
        //console.log(list[index])

        if(list[index].chosen === false){

            //g mark it as being clicked
            list[index].chosen = true;
            //shuffle list
            this.shuffle(list);
            //console.log(list);
            //add earned newScore
            let newScore = this.state.score + 1;
            if(newScore > this.state.topScore){
                //set new score and new topscore
                this.setState({ data:list,
                                topScore:newScore,
                                score: newScore})
            //    console.log(list)
            }else{
                //just set new score, not top score
                this.setState({ data:list,
                                score:newScore})
            //    console.log(this.state.data)
            }
            //console.log(this.state.data)
        }else{
            console.log("wrong")
            this.alertUser();
            this.setState({alert: "red-text"})
            setTimeout(this.newGame, 100)
        }
    };
    //alert the user that same picture has been clicked before
    alertUser = ()=>{
        // $( ".red-text" ).effect("shake")
    }
    //set newGame
    newGame = ()=> {
        //change all clicked to false;
        let newData = this.state.data.map(people =>
            {let newPeople = people;
            newPeople.chosen = false
            return newPeople})
    //    console.log(newData)

        this.setState({
            data:newData,
            score:0,
            alert:"white-text"
        })
        console.log(this.state.alert)
    }

    //shuffle list
    shuffle = arr => (arr.sort(()=>(0.5 - Math.random())))

    //render stuff
    render(){
        return(
            <div>
                <Header
                    score = {this.state.score}
                    topScore = {this.state.topScore} />
                <Panel colors = {this.state.alert}/>

                <div className = "center" >
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

                <Footer />
            </div>

        )
    }
}


export default App;
