import React, { useState } from "react";

let ShowPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card" style={{ marginTop: "20px" }}>
                            <div className="card-header">
                                <div className="h2">Show Password</div>
                            </div>
                            <div className="card-body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text" style={{ cursor: "pointer" }}>
                                            <input
                                                type="checkbox"
                                                aria-label="checkbox for following text"
                                                checked={showPassword}
                                                onChange={toggleShowPassword}
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        aria-label="Text input with "
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ShowPassword;
