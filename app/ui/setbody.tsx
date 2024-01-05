'use client';
import React, { useState } from 'react';
import Popup from '@/app/ui/popup';

const SetBody: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <h1>Next.js Popup Example</h1>
      <button onClick={openPopup}>Open Popup</button>

      {isPopupOpen && <Popup onClose={closePopup} />}
    </div>
  );
};

export default SetBody;
