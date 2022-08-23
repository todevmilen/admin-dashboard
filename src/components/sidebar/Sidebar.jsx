import React from 'react'
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PollIcon from '@mui/icons-material/Poll';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className='logo'>todev-admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <PeopleOutlineIcon />
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreIcon />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardIcon />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon />
                        <span>Delivery</span>
                    </li>
                    <li>
                        <PollIcon />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <SettingsSystemDaydreamIcon />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon />
                        <span>Settings</span>
                    </li>
                    <li>
                        <AccountBoxIcon />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    )
}

export default Sidebar