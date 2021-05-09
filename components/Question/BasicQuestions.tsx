import React from 'react';
import SingleQuestion from './SingleQuestion';
import firebase from "firebase";
import firebaseConfig from "../../configs/firebaseConfigs";
import {get10Days} from "../../common/helpers";

interface BasicsQuestionsState {
  database: any;
  basics: any;
  lastTenDays: any;
}

export default class BasicQuestions extends React.Component <{}, BasicsQuestionsState>{

  constructor(props){
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    else {
      firebase.app(); // if already initialized, use that one
    }

    this.state={
      database: firebase.database(),
      basics: [], lastTenDays: get10Days()
    }
   
   
  }
  
  componentDidMount = async () => {
    var lastTenDays=get10Days();
    let data=[]
    this.state.database.ref("basics").get().then(snapshot => {
      var lastTenQuestions=snapshot.val().filter(

        function(item){
          return lastTenDays.includes(item.questionDate)
        }
      )
      this.setState({
        basics: lastTenQuestions.reverse()
      })
    });
  }
  
  
  
  render(){
    return (
    <>
      <div className="w-full px-2 md:px-12 my-4" id="basic-questions">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="sm:flex items-center justify-between">
            <div className="flex text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              <img className="h-12" src="assets/svg/basic.svg" alt="" />
              <p className="ml-4 py-3 self-center">TechHub Basic Questions</p>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-16 flex flex-col gap-8">
        {this.state.basics.map(item => (
          <SingleQuestion date={item.questionDate} details={item}/>))}
        </div>
      </div>
    </>
  );
}

}