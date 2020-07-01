import React, { useState } from 'react';
import bangdiem from '../../files/bangdiem.pdf';
import cv from '../../files/cv.pdf';
import { Modal, ModalBody } from 'reactstrap';
import { withNamespaces } from 'react-i18next';
import './style.scss';

const About = ({ t }) => {
  const [viewPDF, setViewPDF] = useState(false);
  return (
    <div className='about-wrapper container'>
      <div className='home-content'>
        <div className='row flex-v-align'>
          <div className='col-sm-12 col-md-5'>
            <div className='home-photo'>
              <div className='hp-inner'></div>
            </div>
          </div>
          <div className='col-sm-12 col-md-7 content'>
            <div className='home-text hp-left'>
              <div className='major'>
                <h4>Full-stack Javascript</h4>
              </div>
              <div className='full-name'>
                <h1>{t('name')}</h1>
              </div>
              <div className='profile'>
                <div className='birthday'>
                  <i className='fa fa-birthday-cake' aria-hidden='true'></i> {t('dob')}
                </div>
                <div className='space'>-</div>
                <div className='gender'>
                  <i className='fa fa-mars' aria-hidden='true'></i> {t('gender')}
                </div>
              </div>
              <div className='introduce'>
                <p>{t('introduce.1')}</p>
                <p>{t('introduce.2')}</p>
                <p>{t('introduce.3')}</p>
              </div>
              <div className='home-buttons'>
                <a
                  href={cv}
                  className='btn btn-primary download-button'
                  download
                >
                  {t('download')}
                </a>
                <button
                  className='btn btn-secondary contact-button'
                  onClick={() => {
                    setViewPDF(true);
                  }}
                >
                  {t('view')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='block-title'>
        <h2>{t('do')}</h2>
      </div>
      <div className='row'>
        <div className=' col-xs-12 col-sm-6 '>
          <div className='info-block-w-icon'>
            <div className='ci-icon'>
              <i className='fa fa-desktop' aria-hidden='true'></i>
            </div>
            <div className='ci-text'>
              <h4>{t('do.web')}</h4>
              <p>{t('do.web.content.1')}</p>
              <p>{t('do.web.content.2')}</p>
            </div>
          </div>
        </div>
        <div className=' col-xs-12 col-sm-6 '>
          <div className='info-block-w-icon'>
            <div className='ci-icon'>
              <i className="fa fa-server" aria-hidden="true"></i>
            </div>
            <div className='ci-text'>
              <h4>{t('do.admin')}</h4>
              <p>{t('do.admin.content')}</p>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={viewPDF} size='lg' centered>
        <ModalBody className='body-wrapper'>
          <div
            className='close-button'
            onClick={() => {
              setViewPDF(!viewPDF);
            }}
          >
            <button type='button' className='close' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <embed
            className='pdf-view'
            src={bangdiem}
            width='100%'
            height='500px'
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default withNamespaces('about')(About);
