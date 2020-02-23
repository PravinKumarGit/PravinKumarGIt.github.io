import React from "react";

import Wrapper from "./modal.styles";
export default function Select({ ...props }) {
  const { header, children, footer, onClose, visible, closeable, size } = props;
  return (
    <Wrapper >
      {visible && (
        <div
          className="modal-Container"
          onClick={e => {
            if (closeable) onClose();
          }}
        >
          <div
            className={`${size || 'medium'} modal-Content`}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <header className="modal-Header">
              <div className="modal-Title">{header}</div>
              <div className="modal-Close-Icon" onClick={onClose}>
                ×
              </div>
            </header>
            <div className="modal-Body">{children}</div>
            <footer className="modal-Footer">{footer}</footer>
          </div>
        </div>
      )}
    </Wrapper>
  );
}
