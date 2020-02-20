import React, { useState } from "react";
import Image from "../../../theme/assets/icon-tooltip.svg";
import Wrapper from "./filePicker.styles";
export default function FilePicker({ ...props }) {
  const {
    title,
    errorMessage,
    helpToolTip,
    ToolTipText,
    OptionalLabel,
    optional,
    accept,
    maxFileSize,
    onChange,
    value,
    setFieldValue,
    name,
    ...rest
  } = props;


  const fileSizeLimitsErrorMessage = 'File size out of limit'
  const [showFileSizeErrorMessage, setShowFileSizeErrorMessage] = useState(false)
  const [selectedFileName, setSelectedFileName] = useState('')

  const handleFileSelect = (evt) => {
    const files = evt.target.files;
    const file = files[0];
    const isFileSizeOutOfLimit = () => maxFileSize && file.size > maxFileSize
    if (files && file) {
      if (isFileSizeOutOfLimit()) {
        setShowFileSizeErrorMessage(true)
        removeSelectedFile();
      } else {
        const reader = new FileReader();
        reader.onload = (readerEvt) => {
          const binaryString = readerEvt.target.result;
          const formatedFile = btoa(binaryString);
          const fileType = file.type || '';
          const value = formatValue(fileType, formatedFile);
          onChange(value);
          setSelectedFileName(file.name)
          if (showFileSizeErrorMessage) setShowFileSizeErrorMessage(false)
        };
        reader.readAsBinaryString(file);
      }
    }
  };

  const formatValue = (fileType, formatedFile) => formatedFile ? `data:${fileType};base64,${formatedFile}` : ''

  const formatFileSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const decimalValue = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, index)).toFixed(decimalValue)) + ' ' + sizes[index];
  }

  const removeSelectedFile = () => {
    setFieldValue(name, "")
    setSelectedFileName('')
  }

  return <Wrapper {...props} >
    <div className="filePicker">
      <div className="filePicker-Label-Container">
        {title && (
          <label className="filePicker-Label">
            {title}
            {helpToolTip && (
              <i className="toolTip-Icon">
                <img src={Image} alt="help icon" />
                {ToolTipText && (
                  <span className="toolTip-Text">{ToolTipText}</span>
                )}
              </i>
            )}
            {OptionalLabel && (
              <label className="filePicker-Label-Optional">optional</label>
            )}
          </label>
        )}
      </div>
      <label className="fileUpload-Container">
        <div style={{ fontSize: '30px', fontWeight: 'bold' }}>+</div>
        <input {...rest} type='file' value={value} name={name} accept={accept} onChange={handleFileSelect} />
      </label>
      {maxFileSize && <div className="maxFileSize-Label">* Max file size : {formatFileSize(maxFileSize)}</div>}
      {selectedFileName && <span className="selectedFile-Label">{selectedFileName} <span onClick={removeSelectedFile}> x</span> </span>}
      {showFileSizeErrorMessage && <div className="message"> {fileSizeLimitsErrorMessage} </div>}
      {errorMessage && <div className="message"> {errorMessage} </div>}
    </div>
  </Wrapper>
}
