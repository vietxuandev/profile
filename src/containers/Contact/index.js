import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import './style.scss';

const Contact = ({ t }) => {
  return (
    <div className='contact-wrapper'>
      <Helmet>
        <title>{t('title')}</title>
        <meta name='description' content={t('description')} />
      </Helmet>
      <div className='page-title'>
        <h1>{t('contact')}</h1>
        <div className='page-subtitle'>
          <h4>{t('contact.detail')}</h4>
        </div>
      </div>
      <div className='container'>
        <div id='gmap' className='contact-map'>
          <iframe
            title='address'
            src='https://maps.google.com/maps?q=Linh Chiểu Thủ Đức&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed'
            frameBorder='0'
            style={{ apsborder: '0' }}
            allowFullScreen=''
          ></iframe>
        </div>
        <div className='row'>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-mobile' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>{t('phone')}</h4>
                <p>
                  <a href='tel:0869 123 020'>0869 123 020</a>
                </p>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-envelope-o' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>Email</h4>
                <p>
                  <a href='mailto:vietxuandev@gmail.com'>
                    vietxuandev@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-map-marker' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>{t('address')}</h4>
                <p>{t('address.detail')}</p>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-facebook' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>Facebook</h4>
                <p>
                  <a
                    href='https://www.facebook.com/VietXuanDev'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    fb.com/VietXuanDev
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-instagram' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>Instagram</h4>
                <p>
                  <a
                    href='https://www.instagram.com/vietxuandev/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    instagram.com/vietxuandev
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-globe' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>Website</h4>
                <p>
                  <a
                    href='https://vietxuandev.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    vietxuandev.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces('contact')(Contact);
