import { connect } from 'react-redux';
import Sidebar from '../component/SideBar/NavBar';
/* eslint-disable import/prefer-default-export */
export const SidebarContainer = connect((state) => ({
  users: state.users,
}), {})(Sidebar);
