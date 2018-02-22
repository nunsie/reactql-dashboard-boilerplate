import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import HeaderLinks from '../Header/HeaderLinks';

import imagine from '../../theme/img/sidebar-3.jpg';
import logo from '../../theme/img/reactlogo.png';

// import appRoutes from 'routes/app.jsx';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    render(){
        const sidebarBackground = {
            backgroundImage: 'url(' + imagine + ')'
        };
        return (
            <div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
                <div className="sidebar-background" style={sidebarBackground}></div>
                    <div className="logo">
                        <a href="https://www.creative-tim.com" className="simple-text logo-mini">
                            <div className="logo-img">
                                <img src={logo} alt="logo_image"/>
                            </div>

                        </a>
                        <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                            ReactQL Admin
                        </a>
                    </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        { this.state.width <= 991 ? (<HeaderLinks />):null }
                        {/* <li className={this.activeRoute(prop.path)} key={key}> */}
                        <li>
                            <NavLink to='/dashboard' className="nav-link" activeClassName="active">
                                <i className='pe-7s-graph'></i>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/user' className="nav-link" activeClassName="active">
                                <i className='pe-7s-user'></i>
                                <p>User</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/table' className="nav-link" activeClassName="active">
                                <i className='pe-7s-note2'></i>
                                <p>Table</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/typography' className="nav-link" activeClassName="active">
                                <i className='pe-7s-news-paper'></i>
                                <p>Typography</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/icons' className="nav-link" activeClassName="active">
                                <i className='pe-7s-science'></i>
                                <p>Icons</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/maps' className="nav-link" activeClassName="active">
                                <i className='pe-7s-map-marker'></i>
                                <p>Maps</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/notifications' className="nav-link" activeClassName="active">
                                <i className='pe-7s-bell'></i>
                                <p>Notifications</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
