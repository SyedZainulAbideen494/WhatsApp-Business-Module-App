import React,{Fragment} from "react";
import './home.css'
import Navbar from "./navbar";

const Dashboard = () => {
    return<Fragment>
        <div className="div_main_dashboard">
            <div className="div_navbar_dashboard">
                <Navbar/>
            </div>
        </div>
    </Fragment>
}

export default Dashboard