import {useTranslation} from "react-i18next";

const Header = ({headline}:{headline:string}) => {
    const {t} = useTranslation();

    return (
        <h1 className="header">
            {t(headline.toLowerCase())}
        </h1>
    );
}

export default Header;