import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../images/Frame 770814.svg';

import {
    LinkLogo,
    Container,
    Header,
    LogoName,
    Navigation,
    NavigationLink,
    Background,
} from './Layout.styled';

const Layout = () => {
    return (
        <Background>
            <Container>
                <Header>
                    <div>
                        <LinkLogo to="/">
                            <img src={logo} alt="logo" width={48} />
                            <LogoName>Filmoteka</LogoName>
                        </LinkLogo>
                    </div>
                    <Navigation>
                        <NavigationLink to="/">Home</NavigationLink>
                        <NavigationLink to="/catalog">Catalog</NavigationLink>
                        <NavigationLink to="/library">
                            My library
                        </NavigationLink>
                    </Navigation>
                    <div>
                        <button>Peremikach</button>
                    </div>
                </Header>
            </Container>

            <Container>
                <Outlet />
            </Container>
        </Background>
    );
};

export default Layout;
