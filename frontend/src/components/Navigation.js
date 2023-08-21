import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import logo from '../static/batman-4-logo.png';
import "../App.css";


const Navigation = () => {
  return (
    <div>
    <Navbar bg="warning" variant="light" expand="lg" id="my-nav" >
        <Navbar.Brand className="app-logo" href="/">
            <img
              src={logo}
              width="140"
              height="115"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />{' '}
            Student Management Site
        </Navbar.Brand>
    </Navbar>
    <div className='sidebar'>
    <CDBSidebar textColor="#ffffff" backgroundColor="#000000">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Navigation
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/students" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Customer Data</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/manage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Loan Data</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    </div>
  );
};

export default Navigation;