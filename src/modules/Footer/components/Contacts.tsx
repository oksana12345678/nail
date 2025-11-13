'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts: React.FC = () => {
  const { t } = useTranslation('footer');
  return (
    <div className="text-black">
      <h3>{t('contacts')}</h3>
      <p>{t('address')}</p>
      <p>{t('phone')}</p>
      <p>{t('email')}</p>
    </div>
  );
};

export default Contacts;
