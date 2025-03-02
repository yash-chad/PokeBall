import React ,{Component} from 'react';
import axios from "axios"
import {Link } from "react-router-dom"
import Pokeball from  "../pokeball.png"

class Home extends Component{
    state ={
        posts : []
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then(res =>{ 
                this.setState({
                    posts : res.data.slice(0,10)
                })
             })
    }
   render(){
       const {posts} = this.state

       const postsList = posts.length ? (
        posts.map(post =>{
            return(
                <div className="post card" key={post.id}>
                <img src={Pokeball} alt="A Pokeball"></img>
                 <div className="card-content">
                   <Link to={"/" + post.id}>
                      <span className="card-title red-text">{post.title}</span>
                   </Link>
                   <p>{post.body}</p>
                 </div>
               </div>
             )
           })
       ) : (
          <div>You don not have any posts!!</div>
       )
       
       return (
        <div>
          <div className="container home">
            <h4 className="center">Home</h4>
            {postsList}
          </div>
        </div>
      )
       
   }
}


export default Home
