import React, {Component} from 'react';
import firebase from './firebase';
import Header from './components/Header';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    const db = firebase.firestore();
    const roomsRef = db.collection('rooms');
    const allRooms = roomsRef.get()
                             .then(collection => {
                               collection.forEach(doc => {
                                 console.log(doc.id, '=>', doc.data());
                               })
                             })
                             .catch(err => {
                                console.log('Error getting documents', err);
                              });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
