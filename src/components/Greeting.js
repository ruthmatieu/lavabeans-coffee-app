import React from "react";

class Greeting extends React.Component {

    render() {
        const today = new Date();
        const time = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;

        function getTime() {
            if (time <= '11:59:59') {
                return 'morning. ☀️';
            } else if(time <= '16:59:59') {
                return 'afternoon. 🌞';
            } else if (time >= '17:00:00'){
                return 'evening. 🌙';
            }
        }
        return (
            <div className="greeting">
                <h1>Good {getTime()} </h1>
            </div>
        )
    }
}

export default Greeting