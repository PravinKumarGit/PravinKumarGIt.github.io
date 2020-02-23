export default class FileUploadModal {
    constructor(data = {}, initModel = true) {
        if (initModel) {
            this.inIt(data);
        }
    }

    inIt(data) {
        this.base64Content = data.base64Content||"";
        this.documentType = data.documentType||"";
        this.contentType = data.contentType||"";
    }
}
