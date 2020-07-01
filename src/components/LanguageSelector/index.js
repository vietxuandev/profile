import React, { useState, useEffect } from 'react';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';
import './style.scss';

const LanguageSelector = ({ t }) => {
    const [language, setLanguage] = useState('en');
    const toggleLanguage = () => {
        if (language === 'en') {
            setLanguage('vn');
        } else {
            setLanguage('en')
        }
    }
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    useEffect(() => {
        changeLanguage(language);
    }, [language]);

    return (
        <div className="language-selecter-wrapper" onClick={() => toggleLanguage()}>
            <img src={`/images/${language}.png`} alt='flag' /> <span>{t('language')}</span>
        </div>
    )
}

export default withNamespaces('nav')(LanguageSelector);