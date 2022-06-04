import i18next from 'i18next'
import {languages} from '../i18n'
import {StyledLanguageLinks, StyledLinkButton} from "styles/LanguageMenu.style";
import LanguageLink from "components/LanguageLink";

const LanguageSelector = () => {
    const { t } = i18next;

    return <StyledLanguageLinks>
        {languages.map((lang, index) => <LanguageLink key={index} locale={lang}>
            <StyledLinkButton enabled={i18next.language === lang} type="button">
                {t<string>(lang)}
            </StyledLinkButton>
        </LanguageLink>)}
    </StyledLanguageLinks>;
}

export default LanguageSelector