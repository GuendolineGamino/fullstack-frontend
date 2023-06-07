import Header from "./Header";
import Footer from "./Footer";
import { Container, Link } from "@mui/material";

export default function Layout ({children}) {
    return (
        <>
        <Header title="Guen Gamino">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/admin">Admin</Link>
        </Header>
        <Container fixed>
            <main> {children}</main>

        </Container>
        <Footer />

        </>
    );


}