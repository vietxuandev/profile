import React from 'react';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

function LanguageSelector({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div>
            <button onClick={() => changeLanguage('vi')}>VI</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <h1>{t('Welcome to React')}</h1>
        </div>
    )
}

export default withNamespaces()(LanguageSelector);