import React from 'react';
import { Link } from 'react-router-dom';



const Counter = (props) => {
    //const Book = ({image, title, author, children})
    //just a different way to utilize props^^ destrucured in function paramater
    //children is a reserved name
    const clickHandler = () => {
      alert('aye')
    }
    return (
      <article className="book" onMouseOver={()=> console.log(props.title)}>
            <h2>{props.header}</h2>
                <h3>{props.title}</h3>
                <div style={{display:'flex'}}><div>
                    <Link to={`/menu/drinks/hot-coffees/${props.id}`}><img src={props.image} alt={props.name} className="menu-data-img"/></Link>
                    <Link to={`/menu/drinks/hot-coffees/${props.id}`}><p>{props.name}</p></Link>
                </div>
            </div>
      </article>
    )
  }

  export default Counter;