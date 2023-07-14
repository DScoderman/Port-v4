import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";

const ButtonMailto = ({ email, label }) => {
    const mailtoLink = `mailto:${email}`;

    return (
        <div style={{ marginTop: "20px",display: "flex",
        justifyContent: "center", }}>
            <Link
                to="#"
                onClick={(e) => {
                    window.location.href = mailtoLink;
                    e.preventDefault();
                }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    textDecoration: "none",
                }}
            >
                <MdOutlineEmail style={{ marginRight: "5px" }} />
                {label}
            </Link>
        </div>
    );
};

export default ButtonMailto;
