$(document).ready(function () {
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
        init();
    });
});
 
function init()
{
    $("#btnUploadFiles").click(function(){
        var files=$("#inputTypeFiles")[0].files;
        uploadFiles(files[0]); // uploading single file
    });
    $("#btnUploadFilesNewForm").click(function(){
        var files=$("#inputTypeFiles")[0].files;
        uploadFilesFromNew(files[0]); // uploading single file
    });
}
 
function uploadFiles (uploadFileObj) {
	var cnfId = getUrlParameter('ID');
    var fileName = uploadFileObj.name;
    fileName = fileName.slice(0,fileName.lastIndexOf(".")) + "_" + Date.now() + fileName.slice(fileName.lastIndexOf("."));
    var webUrl = _spPageContextInfo.webAbsoluteUrl;
    var documentLibrary="Capability Needs Form Attachments";
    var targetUrl = documentLibrary + "/";
    var url = webUrl + "/_api/Web/GetFolderByServerRelativeUrl('" + targetUrl + "')/Files/add(overwrite=true, url='" + fileName + "')?$expand=ListItemAllFields";
 
    uploadFileToFolder(uploadFileObj, url, function (data) {
        var file = data.d;
        var updateObject = {
            __metadata: {
                type: file.ListItemAllFields.__metadata.type
            },
            CapabilityNeedsIDId: cnfId,   //Set the CapabilityNeedsID
        };
 
        url = webUrl + "/_api/Web/lists/getbytitle('"+documentLibrary+"')/items(" + file.ListItemAllFields.Id + ")";
 
        updateFileMetadata(url, updateObject, file, function (data) {
            alert("Document Uploaded");
            $("#attachmentTable").empty();
            getAttachments();
        }, function (data) {
            alert("File upload done but meta data updating FAILED");
        });
    }, function (data) {
        alert("File uploading and meta data updating FAILED");
    });
}

var uploadedFileIDs = [];

function uploadFilesFromNew (uploadFileObj) {
	//var cnfId = getUrlParameter('ID');
    var fileName = uploadFileObj.name;
    fileName = fileName.slice(0,fileName.lastIndexOf(".")) + "_" + Date.now() + fileName.slice(fileName.lastIndexOf("."));
    var webUrl = _spPageContextInfo.webAbsoluteUrl;
    var documentLibrary="Capability Needs Form Attachments";
    var targetUrl = documentLibrary + "/";
    var url = webUrl + "/_api/Web/GetFolderByServerRelativeUrl('" + targetUrl + "')/Files/add(overwrite=true, url='" + fileName + "')?$expand=ListItemAllFields";
 
    uploadFileToFolder(uploadFileObj, url, function (data) {
    	file = data.d;
        uploadedFileIDs.push(file.ListItemAllFields.Id);
        alert("Document Uploaded");
        $("#attachmentTable").empty();
        getAttachments();
    }, function (data) {
        alert("File upload FAILED");
    });
}
 
function getFileBuffer(uploadFile) {
    var deferred = jQuery.Deferred();
    var reader = new FileReader();
    reader.onloadend = function (e) {
        deferred.resolve(e.target.result);
    }
    reader.onerror = function (e) {
        deferred.reject(e.target.error);
    }
    reader.readAsArrayBuffer(uploadFile);
    return deferred.promise();
}
 
function uploadFileToFolder(fileObj, url, success, failure) {
    var apiUrl = url;
    var getFile = getFileBuffer(fileObj);
    getFile.done(function (arrayBuffer) {
        $.ajax({
            url: apiUrl,
            type: "POST",
            data: arrayBuffer,
            processData: false,
            async: false,
            headers: {
                "accept": "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
            },
            success: function (data) {
                success(data);
            },
            error: function (data) {
                failure(data);
            }
        });
    });
}
 
function updateFileMetadata(apiUrl, updateObject, file, success, failure) {
    $.ajax({
        url: apiUrl,
        type: "POST",
        async: false,
        data: JSON.stringify(updateObject),
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "Content-Type": "application/json;odata=verbose",
            "X-Http-Method": "MERGE",
            "IF-MATCH": file.ListItemAllFields.__metadata.etag,
        },
        success: function (data) {
            success(data);
        },
        error: function (data) {
            failure(data);
        }
    });
}
