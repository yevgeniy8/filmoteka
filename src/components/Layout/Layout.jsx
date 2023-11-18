// import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../images/Frame 770814.svg';
// import temaLight from '../../images/desktop/Component 20.svg';
// import temaDark from '../../images/desktop/Group 770844.svg';

import {
    LinkLogo,
    Container,
    Header,
    LogoName,
    Navigation,
    NavigationLink,
    Background,
    Footer,
    GitHubRef,
    ScrollUp,
} from './Layout.styled';

import ScrollToTop from 'react-scroll-up';

const Layout = () => {
    // const [tema, setTema] = useState(true);

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
                    {/* <div>
                        {tema ? (
                            <Background onClick={() => setTema(false)}>
                                <img src={temaLight} alt="" />
                            </Background>
                        ) : (
                            <Background onClick={() => setTema(true)}>
                                <img src={temaDark} alt="" />
                            </Background>
                        )}
                    </div> */}
                </Header>
            </Container>

            <Outlet />

            <Container>
                <Footer>
                    Yevgeniy Utkin
                    <GitHubRef
                        target="_blank"
                        href="https://github.com/yevgeniy8"
                    >
                        github
                    </GitHubRef>
                </Footer>
            </Container>

            <ScrollToTop showUnder={160} easing="easeInOutQuad">
                <ScrollUp>Up</ScrollUp>
            </ScrollToTop>
        </Background>
    );
};

export default Layout;
