import React from 'react';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>This is your popup content.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
