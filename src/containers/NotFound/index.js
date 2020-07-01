import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import './style.scss';

const NotFound = ({ t }) => {
  return (
    <div className='not-found-wrapper'>
      <Helmet>
        <title>{t('title')}</title>
        <meta name='description' content={t('description')} />
      </Helmet>
      <h1 className='nf-page-title'>404</h1>
      <p>{t('content')}</p>
    </div>
  );
};

export default withNamespaces('notfound')(NotFound);
