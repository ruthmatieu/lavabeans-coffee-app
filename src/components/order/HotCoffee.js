import React from 'react';
import { Link } from 'react-router-dom';



const HotCoffee = (props) => {
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

  export default HotCoffee;