import React, { useState } from "react";
import Pizza from '../assets/img/pizza.jpg';


let Pizzahut = ()=>{

    let [pizzacount, setpizzacount] = useState ({
        count:'25',
    })

    let buypizza = () => {
        setpizzacount((prevState) => {
            const newCount = parseInt(prevState.count) - 1;
            return {
                count: newCount > 0 ? newCount.toString() : '0',
            };
        });
    };
    

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="h3 text-danger">PizzHut</div>
                        <div className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eos eligendi ex temporibus, aperiam neque eveniet animi. Sint ipsam magnam, maxime commodi est at consequuntur odit corporis culpa amet mollitia.</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Pizza} alt="pizza" className="img-fluid"></img>
                        </div>
                        <div className="col-md-8">
                            <p className="h5">Available:
                                <span className="text-danger font-weight-bold">{pizzacount.count}</span>
                            </p>
                            <button onClick={buypizza} className="btn btn-success">Buy Pizza</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Pizzahut;