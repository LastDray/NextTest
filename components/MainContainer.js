import Head from "next/head";
import styled from "styled-components"
import Link from "next/link";

const DivStyled = styled.div`
    background: orange;
    padding: 15px;
    a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        margin: 10px;
    }
`

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"lastdray, nextjs, " + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <DivStyled>
                <Link href="/">Главная</Link>
                <Link href="/users">Пользователи</Link>
            </DivStyled>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;