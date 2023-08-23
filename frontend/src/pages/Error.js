import NavBar from "../components/Navbar";

function ErrorPage() {
    return(
        <>
        <NavBar />
        <main>
            <h1>An error occured!</h1>
            <p>Please try again later.</p>
        </main>
        </>
    );
}

export default ErrorPage;