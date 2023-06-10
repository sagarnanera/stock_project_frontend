import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 64px)",
                fontSize: "larger",
            }}
        >
            <div className="card">
                <div className="card-body text-center">
                    <h1 className="text-danger m-2">404 </h1>
                    <h3 className="text-danger">Error</h3>
                    <h3> page not found</h3>
                    <h4>
                        Please check your url or{" "}
                        <Button style={{ border: "none", backgroundColor: "none" }} onClick={() => navigate(-1)}>
                            Go Back.
                        </Button>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Error;
