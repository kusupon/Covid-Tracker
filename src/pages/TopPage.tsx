import Header from "../components/Header";
import Title from "../components/Title"
import Selector from "../components/Selector";
import Resuluts from "../components/Results";
import { TopPageType } from "../types";


const TopPage = ({ countriesJson, setCountry, countryData, loading }: TopPageType) => {
    return (
        <div className="top-page-container">
            <div>
                <Header />
                <Title />
                <Selector countriesJson={countriesJson} setCountry={setCountry} />
                <Resuluts countryData={countryData} loading={loading}/>
            </div>
        </div>
    )
}

export default TopPage;