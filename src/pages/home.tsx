import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Controls from "../components/Controls.tsx";
import SummaryContainer from "../components/SummaryContainer.tsx";
import LongTermForecast from "../components/LongTermForecast.tsx";

const HomePage = () => {
    return (
        <>
            <Header headline={"appTitle"} />
            <Controls />
            <main className={"main"}>
                <SummaryContainer />
                <LongTermForecast />
            </main>
            <Footer />
        </>
    )
}
export default HomePage;