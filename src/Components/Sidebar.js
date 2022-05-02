import React from 'react'
import './Sidebar.css'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ShutterSpeedOutlinedIcon from '@mui/icons-material/ShutterSpeedOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';
import { Collapse } from '@mui/material';
const Sidebar = () => {
  return (
    <div className='cont'>
    <ul className='Main-icons'>
      <h5>Main</h5>
      <li><DashboardCustomizeOutlinedIcon className='icons1'/>&nbsp; Dashboard</li>
    
      <li><AppsOutlinedIcon className='icons1' />&nbsp; Apps</li>
      <li><BadgeOutlinedIcon className='icons1'/>&nbsp; Employees</li>
      <li><PeopleOutlineOutlinedIcon className='icons1'/>&nbsp; Clients</li>
      <li><RocketLaunchOutlinedIcon className='icons1'/>&nbsp; Projects</li>
      <li><LeaderboardOutlinedIcon className='icons1'/>&nbsp; Leads</li>
      <li> <ConfirmationNumberOutlinedIcon  className='icons1' />&nbsp; Tickets</li>
    </ul>
    <ul className='Main-icons'>
      <h5>HR</h5>
      <li><CopyAllOutlinedIcon className='icons1'/>&nbsp; Sales</li>
      <li><CopyAllOutlinedIcon className='icons1'/>&nbsp; Accounting</li>
      <li><LocalAtmOutlinedIcon className='icons1'/>&nbsp; Payroll</li>
      <li><PictureAsPdfOutlinedIcon className='icons1'/>&nbsp; Policies</li>
      <li><InsertChartOutlinedIcon className='icons1'/>&nbsp; Reports</li>
    </ul>
    <ul className='Main-icons'>
    <h5>Performance</h5>
      <li><SchoolOutlinedIcon className='icons1'/>&nbsp; Performance</li>
      <li><ShutterSpeedOutlinedIcon className='icons1'/>&nbsp; Goals</li>
      <li><BorderColorOutlinedIcon className='icons1'/>&nbsp; Training</li>
      <li><CampaignOutlinedIcon className='icons1'/>&nbsp; Promotions</li>
      <li><FileOpenOutlinedIcon className='icons1'/>&nbsp; Resignation</li>
      <li><CancelOutlinedIcon className='icons1'/>&nbsp; Termination</li>
    </ul>
    <ul className='Main-icons'>
      <h5>Administration</h5>
      <li><AutoStoriesOutlinedIcon className='icons1'/>&nbsp; Assets</li>
      <li><WorkOutlineOutlinedIcon className='icons1'/>&nbsp; Jobs</li>
      <li><QuestionMarkOutlinedIcon className='icons1'/>&nbsp; Knowledge</li>
      <li><NotificationsOutlinedIcon className='icons1'/>&nbsp; Activities</li>
      <li><PersonAddAltOutlinedIcon className='icons1'/>&nbsp; users</li>
      <li><SettingsOutlinedIcon className='icons1'/>&nbsp; Settings</li>
    </ul>
    <ul className='Main-icons'>
      <h5>Pages</h5>
      <li><PersonAddAltOutlinedIcon className='icons1'/>&nbsp; Profile</li>
      <li><KeyOutlinedIcon className='icons1'/>&nbsp; Authentication</li>
      <li><ErrorOutlineOutlinedIcon className='icons1' />&nbsp; Error Pages</li>
      <li><ThumbUpAltOutlinedIcon className='icons1'/>&nbsp; Subscriptions</li>
      <li><AutoStoriesOutlinedIcon className='icons1'/>&nbsp; pages</li>
    </ul>
    <ul className='Main-icons'>
      <h5>UI Interface</h5>
      <li><ExtensionOutlinedIcon className='icons1'/>&nbsp; Components</li>
      <li><AllInboxOutlinedIcon className='icons1'/>&nbsp; Forms</li>
      <li><GridOnOutlinedIcon className='icons1'/>&nbsp; Tables</li>
    </ul>
    <ul className='Main-icons'>
      <h5>Extras</h5>
      <li><FileOpenOutlinedIcon className='icons1'/>&nbsp; Documentation</li>
      <li><EditRoadOutlinedIcon className='icons1'/>&nbsp; Change Log</li>
    </ul>
    </div>
  )
}

export default Sidebar