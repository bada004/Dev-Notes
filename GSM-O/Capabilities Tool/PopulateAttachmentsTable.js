$(document).ready(function () {
    getAttachments();
});

function getAttachments() {
	if (getUrlParameter('ID')) {
		var cnfId = getUrlParameter('ID');
	    $.ajax({
	        url: "https://intelshare.intelink.gov/sites/jfhq-dodin/J9/_api/web/lists/GetByTitle('Capability Needs Form Attachments')/items?$select=EncodedAbsUrl,*,File/Name&$expand=File&$filter=(CapabilityNeedsID eq " + cnfId + ")",
	        type: "GET",
	        headers: { "accept": "application/json; odata=verbose" },
	        success: function (data) {
	            var html = '';
	            var attachmentData = data.d.results;
	            for (i = 0; i < attachmentData.length; i++) {
	                var attachmentName = attachmentData[i].File.Name;
	                if ((attachmentName.lastIndexOf("_")+14) == attachmentName.lastIndexOf(".")) {
	                	attachmentName = attachmentName.slice(0, attachmentName.lastIndexOf("_")) + attachmentName.slice(attachmentName.lastIndexOf("."));
	                }
	                var attachmentModified = moment(attachmentData[i].Modified).format('DD-MMM-YYYY');
	                var attachmentUrl = attachmentData[i].EncodedAbsUrl;
	                html = '';
	                html += '<tr>' +
	                    '<th scope="row"><a href="' + attachmentUrl +'" target="_blank">' + attachmentName + '</a></th>' +
	                    '<td>' + attachmentModified + '</td>' +
	                    '</tr>';
	                $('#attachmentTable').append(html);
	            }
	        }
	    });
	} else if (uploadedFileIDs.length > 0) {
		var filterString = "";
		uploadedFileIDs.forEach(function(item, index) {
			filterString += "(ID eq " + item + ")";
			if (index < (uploadedFileIDs.length - 1)) {
				filterString += " or "
			}
		});
		$.ajax({
	        url: "https://intelshare.intelink.gov/sites/jfhq-dodin/J9/_api/web/lists/GetByTitle('Capability Needs Form Attachments')/items?$select=EncodedAbsUrl,*,File/Name&$expand=File&$filter=" + filterString,
	        type: "GET",
	        headers: { "accept": "application/json; odata=verbose" },
	        success: function (data) {
	            var html = '';
	            var attachmentData = data.d.results;
	            for (i = 0; i < attachmentData.length; i++) {
	                var attachmentName = attachmentData[i].File.Name;
	                if ((attachmentName.lastIndexOf("_")+14) == attachmentName.lastIndexOf(".")) {
	                	attachmentName = attachmentName.slice(0, attachmentName.lastIndexOf("_")) + attachmentName.slice(attachmentName.lastIndexOf("."));
	                }
	                var attachmentModified = moment(attachmentData[i].Modified).format('DD-MMM-YYYY');
	                var attachmentUrl = attachmentData[i].EncodedAbsUrl;
	                html = '';
	                html += '<tr>' +
	                    '<th scope="row"><a href="' + attachmentUrl +'" target="_blank">' + attachmentName + '</a></th>' +
	                    '<td>' + attachmentModified + '</td>' +
	                    '</tr>';
	                $('#attachmentTable').append(html);
	            }
	        }
	    });

	}
}
