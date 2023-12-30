import React, { useRef } from 'react';
import ClipboardJS from 'clipboard';
import { FaCopy } from 'react-icons/fa'; // Import the copy icon

const CopyToClipboard = ({ textToCopy }) => {
  const textAreaRef = useRef(null);

  const handleCopy = () => {
    const textArea = textAreaRef.current;

    if (textArea) {
      textArea.select();
      document.execCommand('copy');
    }
  };

  // Initialize ClipboardJS on component mount
  new ClipboardJS('.copy-icon');

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <textarea
        style={{ position: 'absolute', left: '-9999px' }}
        readOnly
        ref={textAreaRef}
        value={textToCopy}
      />
      <span style={{ marginRight: '15px' }}>{textToCopy}</span>
      <FaCopy className="copy-icon" onClick={handleCopy} style={{ cursor: 'pointer' , color : 'aqua'}} />
    </div>
  );
};

export default CopyToClipboard;
