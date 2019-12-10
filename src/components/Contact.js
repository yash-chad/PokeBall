import React from 'react';

const Contact = (props)=>{
    setTimeout(()=>{
        props.history.push("/about")
    },3000)
    
    return(
        <div className="container">
            <h3 className="center">Contact</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam repellat ipsam facere deserunt eum harum cum odio obcaecati culpa quae cumque consequuntur autem hic, ad nihil ab et alias.</p>
        </div>
    )
}


export default Contact