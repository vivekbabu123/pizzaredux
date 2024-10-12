import React, { useState } from "react";

let Changeusername = () =>{
    let[username,setusername]= useState('');

    let updateInput = (e)=>{
        setusername (e.target.value)
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary actions with the new username here
    }
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <div className="h4">Change Username</div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                <input
                                            value={username}
                                            onChange={updateInput}
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                    
                                </div>
                                </form>
                                <div className="h3">{username}</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Changeusername;