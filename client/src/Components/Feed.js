import React from 'react'
import { database } from '../firebaseApp.js'

class Feed extends React.Component{
    constructor(props) {
        super(props);
        

        this.state = {
            feed: [],
            user: this.props.user
            
        }
    }
    async componentDidMount() {
        let feedData = await database.ref(`/feed`).once('value').then(function (snapshot) {
            let postsLists = snapshot.val()

            return postsLists
        })
        this.setState({
            feed: feedData
        })
    }
    

    render(){
        return(
            <div id = "feed-display">
                <h1>Your Feed</h1>

                <ul id="blog-list">
                        {this.state.feed.map(item => (
                            <div id="button-feed-container" key={item}>{item}
                                    
                            </div>
                        ))}
                    </ul>
            </div>
        )
    }
}

export default Feed