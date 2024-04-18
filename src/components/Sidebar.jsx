import React ,{useState}from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import '../App.css'



const Sidebar = ({children}) => { 
    const [isOpen, serIsOpen]= useState(false);
    const toggle = () => serIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/service",
            name:"Service",
            icon:<MdMiscellaneousServices />
        },
        {
            path:"/team",
            name:"Team",
            icon:<RiTeamFill />
        },
        {
            path:"/user",
            name:"User",
            icon:<FaUser />
        }
    ]
    return (
        <div className="container">
             <div style={{width: isOpen ? "250px":"50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block":"none"}} className="logo">Meesho</h1>
                    <div style={{marginLeft: isOpen ? "50px":"0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) =>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active" >
                            <div className="icon">
                                {item.icon}
                            </div>
                            <div style={{display: isOpen ? "block":"none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }

             </div>
             <main>
                {children}
             </main>
        </div>
    );
};

export default Sidebar;