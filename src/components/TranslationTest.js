/* eslint-disable linebreak-style */
import React from 'react';
import {useTranslation} from 'react-i18next';
import '../translations/i18n';

// for translating content of website(not used now)
const TranslationTest = () => {
  const {t} = useTranslation();
  return (
    <div>
      <p>{t('welcome')}</p>
    </div>
  );
};

export default TranslationTest;
