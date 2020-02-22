import React, { useState, createRef } from "react";
import FileUploadModal from "../../../models/fileUpload";

import FieldLabel from "../fieldLabel";

import Wrapper from "./filePicker.styles";
export default function FilePicker({ ...props }) {
  const {
    title,
    fieldLabel,
    errorMessage,
    helpToolTip,
    ToolTipText,
    OptionalLabel,
    accept,// arrray e.g - [".PDF", ".JPG", ".PNG"]
    maxFileSize,
    onChange,
    value,
    setFieldValue,
    name,
    ...rest
  } = props;

  let inputOpenFileRef = createRef()
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
          const base64Content = formatValue(fileType, formatedFile);
          const data = { base64Content, documentType: name, contentType: fileType }
          const fileData = new FileUploadModal(data);
          console.log(fileData);
          onChange(base64Content);
          setSelectedFileName(file.name);
          if (showFileSizeErrorMessage) setShowFileSizeErrorMessage(false);
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

  const getAcceptedFileFormatAndLabel = () => {
    if (accept && accept.length > 0) {
      const acceptedFileFormats = `${accept}`;
      const acceptedFilesList = accept.map(eachFormat => eachFormat.replace(".", ""))
      if (acceptedFilesList.length > 1) {
        const lastFileFormat = acceptedFilesList.pop()
        const acceptedFileFormatLabel = `${acceptedFilesList} or ${lastFileFormat}`
        return { acceptedFileFormats, acceptedFileFormatLabel }
      }
      return { acceptedFileFormats, acceptedFileFormatLabel: `${acceptedFilesList}` }
    }
    return { acceptedFileFormats: "", acceptedFileFormatLabel: "" }
  }

  const { acceptedFileFormats, acceptedFileFormatLabel } = getAcceptedFileFormatAndLabel()

  const openSelectFileModal = () => {
    inputOpenFileRef.current.click()
  }

  return <Wrapper {...props} >
    <div className="filePicker">
      <label className="filePicker-Label">
        {fieldLabel}</label>
      <div className="fileUpload-Container">
        <div className="fileDetails-Container">
          <div className="filePicker-Label-Container">
            <FieldLabel
              title={title}
              helpToolTip={helpToolTip}
              ToolTipText={ToolTipText}
              OptionalLabel={OptionalLabel}
            />
          </div>
          <div className="fileDetails">
            {acceptedFileFormatLabel && < div className="file-format" >{acceptedFileFormatLabel}</div>}
            {maxFileSize && <div className="maxFileSize-Label">{formatFileSize(maxFileSize)} Max</div>}
          </div>
        </div>
        <button type="button" name="upload" onClick={openSelectFileModal}> Upload
        <input {...rest} ref={inputOpenFileRef} style={{ display: 'none' }} type='file' value={value || ""} name={name} accept={acceptedFileFormats} onChange={handleFileSelect} />
        </button>
      </div>

      {selectedFileName && <span className="selectedFile-Label">{selectedFileName} <span onClick={removeSelectedFile}> x</span> </span>}
      {showFileSizeErrorMessage && <div className="message"> {fileSizeLimitsErrorMessage} </div>}
      {errorMessage && <div className="message"> {errorMessage} </div>}
    </div>
  </Wrapper >
}
