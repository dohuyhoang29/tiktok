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
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    Project Name
                </div>
                <ul className="sidebar-navigation">
                    
                    <li>
                        <Link to="/">
                            Homepage
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/list">
                            User
                        </Link>
                    </li>
                  
                    <li>
                        <Link to="#">
                            Friends
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            Settings
                        </Link>
                    </li>
                    
                </ul>
            </div>
        )
    }
}

export default SideBar