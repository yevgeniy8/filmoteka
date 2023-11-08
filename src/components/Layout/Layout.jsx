import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../images/Frame 770814.svg';
import temaLight from '../../images/desktop/Component 20.svg';
import temaDark from '../../images/desktop/Group 770844.svg';

import {
    LinkLogo,
    Container,
    Header,
    LogoName,
    Navigation,
    NavigationLink,
    Background,
    Footer,
} from './Layout.styled';

const Layout = () => {
    const [tema, setTema] = useState(true);
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
                        {tema ? (
                            <Background onClick={() => setTema(false)}>
                                <img src={temaLight} alt="" />
                            </Background>
                        ) : (
                            <Background onClick={() => setTema(true)}>
                                <img src={temaDark} alt="" />
                            </Background>
                        )}
                        {/* <button>Peremikach</button> */}
                    </div>
                </Header>
            </Container>

            <Outlet />

            <Container>
                <Footer>Yevgeniy Utkin github</Footer>
            </Container>
        </Background>
    );
};

export default Layout;
