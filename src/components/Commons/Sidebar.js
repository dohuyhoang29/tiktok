import React from "react";
import { Link } from "react-router-dom";
import '../../App.css'

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() { }
    componentDidUpdate() { }
    componentWillUnmount() { }

    render() {
        return (
            <div size="sm" className="d-flex flex-column flex-shrink-0 p-3 bg-light">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <span className="fs-4">Sidebar</span> 
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link fs-10" aria-current="page">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/list" className="nav-link link-dark fs-9">
                            User
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar