import React from 'react';
import { withNamespaces } from 'react-i18next';
import './style.scss';

const Resume = ({ t }) => {
  return (
    <div className='resume-wrapper'>
      <div className='page-title'>
        <h1>{t('title')}</h1>
        <div className='page-subtitle'>
          <h4>Full-stack Javascript</h4>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='block-title'>
              <h2>{t('education')}</h2>
            </div>
            <div className='timeline-item clearfix'>
              <h5 className='item-period '>{t('education.period')}</h5>
              <span className='item-company'>{t('education.school')}</span>
              <h4 className='item-title'>{t('education.major')}</h4>
              <p>{t('education.detail')}</p>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='block-title'>
              <h2>{t('experience')}</h2>
            </div>
            <div className='timeline-item clearfix'>
              <h5 className='item-period '>{t('experience.1.period')}</h5>
              <span className='item-company'>{t('experience.1.company')}</span>
              <h4 className='item-title'>{t('experience.1.position')}</h4>
              <p>- {t('experience.1.detail.1')}</p>
              <p>- {t('experience.1.detail.2')}</p>
            </div>
            <div className='timeline-item clearfix'>
              <h5 className='item-period '>{t('experience.2.period')}</h5>
              <span className='item-company'>{t('experience.2.company')}</span>
              <h4 className='item-title'>{t('experience.2.position')}</h4>
              <p>- {t('experience.2.detail.1')} <a href='https://smartthuanviet.cf/'> smartthuanviet.cf</a></p>
              <p>- {t('experience.2.detail.2')} <a href='https://homeskeys.net/'> homeskeys.net</a></p>
              <p>- {t('experience.2.detail.3')}</p>
              <p>- {t('experience.2.detail.4')}</p>
            </div>
            <div className='timeline-item clearfix'>
              <h5 className='item-period '>{t('experience.3.period')}</h5>
              <span className='item-company'>{t('experience.3.company')}</span>
              <h4 className='item-title'>{t('experience.3.position')}</h4>
              <p>- {t('experience.3.detail.1')}</p>
            </div>
            <div className='timeline-item clearfix'>
              <h5 className='item-period '>{t('experience.4.period')}</h5>
              <span className='item-company'>{t('experience.4.company')}</span>
              <h4 className='item-title'>{t('experience.4.position')}</h4>
              <p>- {t('experience.4.detail.1')}</p>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-12'>
            <div className='block-title'>
              <h2>{t('skills')}</h2>
            </div>
            <div className='timeline-item clearfix'>
              <p>- {t('skills.1')}</p>
              <p>- {t('skills.2')}</p>
              <p>- {t('skills.3')}</p>
              <p>- {t('skills.4')}</p>
              <p>- {t('skills.5')}</p>
              <p>- {t('skills.6')}</p>
              <p>- {t('skills.7')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces('resume')(Resume);
