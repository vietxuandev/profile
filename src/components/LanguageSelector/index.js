import React from 'react';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

function LanguageSelector({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div>
            <button onClick={() => changeLanguage('vn')}>VI</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <h1>{t('language')}</h1>
        </div>
    )
}

export default withNamespaces('nav')(LanguageSelector);