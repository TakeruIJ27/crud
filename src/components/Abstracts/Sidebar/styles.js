import styled from 'styled-components';
import { Button } from '@blueprintjs/core';

export const SidebarContainer = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    text-align: left;
    height: 100%;
    width: 100%;
    max-width: 250px;
    padding: 20px 10px;
    color: #fcfcfc;
    background: #222;
    z-index: 5000;
    overflow-y: auto;
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 0 1px rgba(16, 22, 26, 0.2);
`;

export const SidebarNav = styled.div`
    margin-top: 20px;
    height: auto;
`;

export const SidebarBrandLogo = styled.img`
    width: 100%;
    height: auto;
`;

export const SidebarList = styled.ul`
    list-style: none;
    padding: 0;
    height: auto;

    &:first-child.sidebar-sub--container {
        display: block;
    }

    .sidebar-sub--container {
        display: none;
    }

    .sidebar-sub--container--expand {
        display: block;
    }

    & .sidebar-sub--container--expand {
        background: rgb(12, 12, 12);
    }
`;


export const SidebarListItem = styled.li`
    &:not(:first-child) {
        margin-top: 5px;
    }

    &, & > button {
        line-height: 50px;
        display: block;
        width: 100%;
    }

    & > button {
        text-align: left;
    }

    & > * > img {
        margin-right: 10px;
    }

    & > *:not(ul) {
        display: block;
        text-decoration: none;
        background: transparent;
        border: none;
        color: #777777;
        padding: 0 15px;
        margin: 0;
        transition: all .15s ease;
        font-weight: 400;
        letter-spacing: 1.3px;
    }

    & > a {
        background: transparent;
        text-decoration: none;
        color: #777777;
    }

    & > * > span {
        margin-right: 10px;
    }

    & > a.activeLink {
        background-color: #333;
        color: #fff;
    }
`;

export const SidebarToggler = styled(Button)`

    & .bp3-icon:first-child:last-child, & .bp3-spinner + .bp3-icon:last-child {
        margin: 0;
    }

    & .bp3-button-text > span {
        margin-right: 10px !important;
    }

    position: relative;
    color: #ddd;
    display: block;
    width: 100%;
    background: none;
    cursor: pointer;
`;

export const SidebarLogoContainer = styled.figure`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
