function setFormSettings() {
    $('input[type=text], input[type=input], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea').each(function (element, i) {
        if ((element.value !== undefined && element.value.length < 0) || $(this).attr('placeholder') !== null) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });
}

function toggleInPlaceOfSelection() {
    if (regInPlaceOfCheckbox.value == 'true') {
        regInPlaceOfCheckbox.value = 'false';
        $("#regInPlaceOfSelection").hide();
    } else {
        regInPlaceOfCheckbox.value = 'true';
        $("#regInPlaceOfSelection").show();
    }
}

//************ Save as Draft button actions ****************  
function saveDraftRequest() {
    createListItem();
}

function createListItem() {
    var clientContext = new SP.ClientContext.get_current();
    var titleValue = $("#formTitle").val();
    var needsStatementValue = $("#formNeedsStatement").val();
    var justificationValue = $("#formJustification").val();
    var needDateValue = $("#formNeedDate").val();
    var priorityValue = $("#formPriority").val();
    var dateValidatedValue = $("#formDateValidated").val();
    var deferExecuteValue = $("#formDeferExecute").val();
    var dateApprovedSRBValue = $("#formDateApprovedSRB").val();
    var fundedValue = $("#formFunded").val();
    var costEstimateValue = $("#formCostEstimate").val();
    var coreMETValue = $("#formCoreMET").val();
    var metValue = $("#formMET").val();
    var expectedOutcomeValue = $("#formExpectedOutcome").val();
    var opReqValue = $("#formOpReq").val();
    var currentCapabilityValue = $("#formCurrentCapability").val();
    var approachValue = $("#formApproach").val();
    var sponsorNameValue = $("#formSponsorName").val();
    var sponsorOrgValue = $("#formSponsorOrg").val();
    var sponsorEmailValue = $("#formSponsorEmail").val();
    var sponsorPhoneValue = $("#formSponsorPhone").val();
    var doctrineReqValue = $("#formDoctrineReq").val();
    var doctrineOprValue = $("#formDoctrineOpr").val();
    var doctrineEtcDateValue = $("#formDoctrineEtcDate").val();
    var doctrineTrackingNumValue = $("#formDoctrineTrackingNum").val();
    var doctrineFundedValue = $("#formDoctrineFunded").val();
    var orgReqValue = $("#formOrgReq").val();
    var orgOprValue = $("#formOrgOpr").val();
    var orgEtcDateValue = $("#formOrgEtcDate").val();
    var orgTrackingNumValue = $("#formOrgTrackingNum").val();
    var orgFundedValue = $("#formOrgFunded").val();
    var trainingReqValue = $("#formTrainingReq").val();
    var trainingOprValue = $("#formTrainingOpr").val();
    var trainingEtcDateValue = $("#formTrainingEtcDate").val();
    var trainingTrackingNumValue = $("#formTrainingTrackingNum").val();
    var trainingFundedValue = $("#formTrainingFunded").val();
    var materialReqValue = $("#formMaterialReq").val();
    var materialOprValue = $("#formMaterialOpr").val();
    var materialEtcDateValue = $("#formMaterialEtcDate").val();
    var materialTrackingNumValue = $("#formMaterialTrackingNum").val();
    var materialFundedValue = $("#formMaterialFunded").val();
    var leadershipReqValue = $("#formLeadershipReq").val();
    var leadershipOprValue = $("#formLeadershipOpr").val();
    var leadershipEtcDateValue = $("#formLeadershipEtcDate").val();
    var leadershipTrackingNumValue = $("#formLeadershipTrackingNum").val();
    var leadershipFundedValue = $("#formLeadershipFunded").val();
    var personnelReqValue = $("#formPersonnelReq").val();
    var personnelOprValue = $("#formPersonnelOpr").val();
    var personnelEtcDateValue = $("#formPersonnelEtcDate").val();
    var personnelTrackingNumValue = $("#formPersonnelTrackingNum").val();
    var personnelFundedValue = $("#formPersonnelFunded").val(); 
    var facilityReqValue = $("#formFacilityReq").val();
    var facilityOprValue = $("#formFacilityOpr").val();
    var facilityEtcDateValue = $("#formFacilityEtcDate").val();
    var facilityTrackingNumValue = $("#formFacilityTrackingNum").val();
    var facilityFundedValue = $("#formFacilityFunded").val();
    var policyReqValue = $("#formPolicyReq").val();
    var policyOprValue = $("#formPolicyOpr").val();
    var policyEtcDateValue = $("#formPolicyEtcDate").val();
    var policyTrackingNumValue = $("#formPolicyTrackingNum").val();
    var policyFundedValue = $("#formPolicyFunded").val();
    var oList = clientContext.get_web().get_lists().getByTitle('Capability Needs Form');
    var itemCreateInfo = new SP.ListItemCreationInformation();
    var oListItem = oList.addItem(itemCreateInfo);

    if ((titleValue !== "") && (needsStatementValue !== "") && (justificationValue !== "") && (sponsorNameValue !== "") && (sponsorOrgValue !== "") && (sponsorEmailValue !== "")&& (sponsorPhoneValue !== "")) {
        oListItem.set_item('CNF_x0020_Status', 'Draft');
        oListItem.set_item('Title', titleValue);       
        oListItem.set_item('Needs_x0020_Statement', needsStatementValue);
        oListItem.set_item('Justification', justificationValue);
        if (needDateValue == "") { // Set needDateValue  to null if its left blank
            oListItem.set_item('Need_x0020_Date', null);
        } else {
            oListItem.set_item('Need_x0020_Date', needDateValue);
        }
        oListItem.set_item('Priority', priorityValue);
        if (dateValidatedValue == "") { // Set dateValidatedValue  to null if its left blank
            oListItem.set_item('Date_x0020_Validated', null);
        } else {
            oListItem.set_item('Date_x0020_Validated', dateValidatedValue);
        }
        if (dateApprovedSRBValue == "") { // Set dateApprovedSRBValue to null if its left blank
            oListItem.set_item('Date_x0020_Approved_x0020_SRB', null);
        } else {
            oListItem.set_item('Date_x0020_Approved_x0020_SRB', dateApprovedSRBValue);
        }
        oListItem.set_item('Funded', fundedValue);
        oListItem.set_item('Cost_x0020_Estimate', costEstimateValue);
        if (coreMETValue == " ") { // Set coreMETValue to null if its left blank/as just a space     	
            oListItem.set_item('CoreMET', null);
        } else {
            oListItem.set_item('CoreMET', coreMETValue);
        }
        if (metValue == " ") { // Set metValue to null if its left blank/as just a space
            oListItem.set_item('MET', null);
        } else {
            oListItem.set_item('MET', metValue);
        }
        
        oListItem.set_item('Expected_x0020_Outcome', expectedOutcomeValue);
        oListItem.set_item('Operational_x0020_Requirement', opReqValue);
        oListItem.set_item('Current_x0020_Capability', currentCapabilityValue);
        oListItem.set_item('Approach', approachValue);
        oListItem.set_item('Sponsor_x0020_Name', sponsorNameValue);
        oListItem.set_item('Sponsor_x0020_Org', sponsorOrgValue);
        oListItem.set_item('Sponsor_x0020_Email', sponsorEmailValue);
        oListItem.set_item('Sponsor_x0020_Phone', sponsorPhoneValue);
        oListItem.set_item('Doctrine_x0020_Requirement', doctrineReqValue);
        oListItem.set_item('Doctrine_x0020_OPR', doctrineOprValue);
        oListItem.set_item('Doctrine_x0020_ETC_x0020_Date', doctrineEtcDateValue);
        oListItem.set_item('Doctrine_x0020_Tracking_x0020_Nu', doctrineTrackingNumValue);
        oListItem.set_item('Doctrine_x0020_Funded', doctrineFundedValue);
        oListItem.set_item('Org_x0020_Requirement', orgReqValue);
        oListItem.set_item('Org_x0020_OPR', orgOprValue);
        oListItem.set_item('Org_x0020_ETC_x0020_Date', orgEtcDateValue);
        oListItem.set_item('Org_x0020_Tracking_x0020_Number', orgTrackingNumValue);
        oListItem.set_item('Org_x0020_Funded', orgFundedValue);
        oListItem.set_item('Training_x0020_Requirement', trainingReqValue);
        oListItem.set_item('Training_x0020_OPR', trainingOprValue);
        oListItem.set_item('Training_x0020_ETC_x0020_Date', trainingEtcDateValue);
        oListItem.set_item('Training_x0020_Tracking_x0020_Nu', trainingTrackingNumValue);
        oListItem.set_item('Training_x0020_Funded', trainingFundedValue);
        oListItem.set_item('Material_x0020_Requirement', materialReqValue);
        oListItem.set_item('Material_x0020_OPR', materialOprValue);
        oListItem.set_item('Material_x0020_ETC_x0020_Date', materialEtcDateValue);
        oListItem.set_item('Material_x0020_Tracking_x0020_Nu', materialTrackingNumValue);
        oListItem.set_item('Material_x0020_Funded',materialFundedValue);
        oListItem.set_item('Leadership_x0020_Requirement', leadershipReqValue);
        oListItem.set_item('Leadership_x0020_OPR', leadershipOprValue);
        oListItem.set_item('Leadership_x0020_ETC_x0020_Date', leadershipEtcDateValue);
        oListItem.set_item('Leadership_x0020_Tracking_x0020_', leadershipTrackingNumValue);
        oListItem.set_item('Leadership_x0020_Funded', leadershipFundedValue);
        oListItem.set_item('Personnel_x0020_Requirement', personnelReqValue);
        oListItem.set_item('Personnel_x0020_OPR', personnelOprValue);
        oListItem.set_item('Personnel_x0020_ETC_x0020_Date', personnelEtcDateValue);
        oListItem.set_item('Personnel_x0020_Tracking_x0020_N', personnelTrackingNumValue);
        oListItem.set_item('Personnel_x0020_Funded', personnelFundedValue);
        oListItem.set_item('Facility_x0020_Requirement', facilityReqValue);
        oListItem.set_item('Facility_x0020_OPR', facilityOprValue);
        oListItem.set_item('Facility_x0020_ETC_x0020_Date', facilityEtcDateValue);
        oListItem.set_item('Facility_x0020_Tracking_x0020_Nu', facilityTrackingNumValue);
        oListItem.set_item('Facility_x0020_Funded', facilityFundedValue);
        oListItem.set_item('Policy_x0020_Requirement', policyReqValue);
        oListItem.set_item('Policy_x0020_OPR', policyOprValue);
        oListItem.set_item('Policy_x0020_ETC_x0020_Date', policyEtcDateValue);
        oListItem.set_item('Policy_x0020_Tracking_x0020_Numb', policyTrackingNumValue);
        oListItem.set_item('Policy_x0020_Funded', policyFundedValue);
        oListItem.update();
        clientContext.load(oListItem);
        clientContext.executeQueryAsync(Function.createDelegate(this, function() {
        	if (uploadedFileIDs.length > 0) {
        		var newItemID = oListItem.get_id();
	        	var documentCount = 0;
	        	
	        	uploadedFileIDs.forEach(function(item, index) {
	        		var updateObject = {
			            __metadata: {
			                type: "SP.Data.Capability_x0020_Needs_x0020_Form_x0020_AttachmentsItem"
			            },
			            CapabilityNeedsIDId: newItemID,   //Set the CapabilityNeedsID
			        };
			        
			        var webUrl = _spPageContextInfo.webAbsoluteUrl;
				    var documentLibrary="Capability Needs Form Attachments";
				    var apiUrl = webUrl + "/_api/Web/lists/getbytitle('"+documentLibrary+"')/items(" + item + ")";
			        
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
				            "IF-MATCH": "*",
				        },
				        success: function (data) {
				            documentCount += 1;
				            if (documentCount == uploadedFileIDs.length) {
				            	onQuerySucceeded();
				            }
				        },
				        error: function (data) {
				            alert("File upload done but meta data updating FAILED");
				        }
				    });
	        	});
        	} else {
        		onQuerySucceeded();
        	}

        }), onQueryFailed);
    } else {
        console.log('Developer - User did not enter a value for all required fields.');
        alert('Please complete all required fields before saving.');
    }
}
function onQuerySucceeded() {
	$(".overlay").show(); // Display the gray background overlay
	$('#saveDraftButton').hide(); // Hide Save as draft button
	$('#saveEditsButton').hide(); // Hide the edit button
	$('#submitRequestButton').hide(); // Hide Submit button
	createAlert('','Request Saved as Draft!','<a href="https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SitePages/Capability%20Needs%20Development%20Dashboard.aspx">Click here to return to the CNF Dashboard</a>','success',true,false,'pageMessages');
	console.log('successfull submition');
	setTimeout(function(){ // Redirect the user back to the homescreen after save as draft
            window.location.href = 'https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SitePages/Capability%20Needs%20Development%20Dashboard.aspx';
         }, 5000);
}
function onQueryFailed() {
	createAlert('Oops!','Save Failed','Please contact JC2RG.','danger',true,false,'pageMessages');
	console.log('Developer - createListItem() failed!');
}

// Get the URL search Parameters
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

// Get the ID from the URL parameter
// Get event CNF Detials from the Capability Needs Form list by filtering on ID
async function getCNFData() {
	getSupportingMetData();
	getMetData();
	await new Promise(resolve => setTimeout(resolve, 500)); // Wait .5 sec before executing the next function. The code needs the dropdown list to be generated before the selected entry is displayed.
	getAndDisplayCNFData();
}

function getAndDisplayCNFData(){
    var cnfId = getUrlParameter('ID');
    var cnfUrl = "https://intelshare.intelink.gov/sites/jfhq-dodin/J9/_api/web/lists/GetByTitle('Capability Needs Form')/items?$select=*,Capability_x0020_Requirements_x0/Full_x0020_Name,Capability_x0020_Requirements_x0/NIPR_x0020_Email,Capability_x0020_Requirements_x0/NIPR_x0020_Phone&$expand=Capability_x0020_Requirements_x0&$filter=(Id eq " + cnfId + ")";
    $.ajax({
        url: cnfUrl,
        type: "GET",
        headers: {
            "accept": "application/json; odata=verbose"
        },
        success: function (data) {
            var cnfData = data.d.results;
            for (i = 0; i < cnfData.length; i++) {				
                var titleValue = cnfData[i].Title;
                var statusValue = cnfData[i].CNF_x0020_Status;
                if (statusValue != ( null || 'Draft')) { //Hide the submit button if the form isnt in draft
                	$('#submitRequestButton').css('display','none');
                	$('#saveEditsButton').hide(); // Hide the user's edit button
                	$(".disabled-submitted :input").prop('disabled', true); // Disable all the fields that cant be displayed if the request isn't in draft.
                }
                var needsStatementValue = cnfData[i].Needs_x0020_Statement;
                var justificationValue = cnfData[i].Justification;
                var needDateValue = moment(cnfData[i].Need_x0020_Date).format('DD-MMM-YYYY');
                if (needDateValue == 'Invalid date') { // If the needDateValue is blank, moment.js will display "Invalid date". This will allow the field to remain blank.
                	needDateValue = null;
                } 
                var priorityValue = cnfData[i].Priority;
                var dateValidatedValue = moment(cnfData[i].Date_x0020_Validated).format('DD-MMM-YYYY');
                // If the dateValidatedValue is blank, moment.js will display "Invalid date". This will allow the field to remain blank.
                if (dateValidatedValue == 'Invalid date') {
                	dateValidatedValue = null;
                } 
                var deferExecuteValue = cnfData[i].Defer_x0020_Execute;
                var dateApprovedSRBValue = moment(cnfData[i].Date_x0020_Approved_x0020_SRB).format('DD-MMM-YYYY');
				// If the dateApprovedSRBValue is blank, moment.js will display "Invalid date". This will allow the field to remain blank.
                if (dateApprovedSRBValue == 'Invalid date') {
                	dateApprovedSRBValue = null;
                } 
                var fundedValue = cnfData[i].Funded;
                var costEstimateValue = cnfData[i].Cost_x0020_Estimate;
                var coreMETValue = cnfData[i].CoreMETId;
                var metValue = cnfData[i].METId;
                var expectedOutcomeValue = cnfData[i].Expected_x0020_Outcome;
                var opReqValue = cnfData[i].Operational_x0020_Requirement;
                var currentCapabilityValue = cnfData[i].Current_x0020_Capability;
                var approachValue = cnfData[i].Approach;
                var sponsorNameValue = cnfData[i].Sponsor_x0020_Name;
                var sponsorOrgValue = cnfData[i].Sponsor_x0020_Org;
                var sponsorEmailValue = cnfData[i].Sponsor_x0020_Email;                
                var sponsorPhoneValue = cnfData[i].Sponsor_x0020_Phone;
                var croNameValue = cnfData[i].Capability_x0020_Requirements_x0Id;
                var croEmailValue = cnfData[i].Capability_x0020_Requirements_x0.NIPR_x0020_Email;
				var croPhoneValue = cnfData[i].Capability_x0020_Requirements_x0.NIPR_x0020_Phone;               
                var doctrineReqValue = cnfData[i].Doctrine_x0020_Requirement;
                var doctrineOprValue = cnfData[i].Doctrine_x0020_OPR;
                var doctrineEtcDateValue = cnfData[i].Doctrine_x0020_ETC_x0020_Date;
                var doctrineTrackingNumValue = cnfData[i].Doctrine_x0020_Tracking_x0020_Nu;
                var doctrineFundedValue = cnfData[i].Doctrine_x0020_Funded;
                var orgReqValue = cnfData[i].Org_x0020_Requirement;
                var orgOprValue = cnfData[i].Org_x0020_OPR;
                var orgEtcDateValue = cnfData[i].Org_x0020_ETC_x0020_Date;
                var orgTrackingNumValue = cnfData[i].Org_x0020_Tracking_x0020_Number;
                var orgFundedValue = cnfData[i].Org_x0020_Funded;
                var trainingReqValue = cnfData[i].Training_x0020_Requirement;
                var trainingOprValue = cnfData[i].Training_x0020_OPR;
                var trainingEtcDateValue = cnfData[i].Training_x0020_ETC_x0020_Date;
                var trainingTrackingNumValue = cnfData[i].Training_x0020_Tracking_x0020_Nu;
                var trainingFundedValue = cnfData[i].Training_x0020_Funded;
                var materialReqValue = cnfData[i].Material_x0020_Requirement;
                var materialOprValue = cnfData[i].Material_x0020_OPR;
                var materialEtcDateValue = cnfData[i].Material_x0020_ETC_x0020_Date;
                var materialTrackingNumValue = cnfData[i].Material_x0020_Tracking_x0020_Nu;
                var materialFundedValue = cnfData[i].Material_x0020_Funded;
                var leadershipReqValue = cnfData[i].Leadership_x0020_Requirement;
                var leadershipOprValue = cnfData[i].Leadership_x0020_OPR;
                var leadershipEtcDateValue = cnfData[i].Leadership_x0020_ETC_x0020_Date;
                var leadershipTrackingNumValue = cnfData[i].Leadership_x0020_Tracking_x0020_;
                var leadershipFundedValue = cnfData[i].Leadership_x0020_Funded;
                var personnelReqValue = cnfData[i].Personnel_x0020_Requirement;
                var personnelOprValue = cnfData[i].Personnel_x0020_OPR;
                var personnelEtcDateValue = cnfData[i].Personnel_x0020_ETC_x0020_Date;
                var personnelTrackingNumValue = cnfData[i].Personnel_x0020_Tracking_x0020_N;
                var personnelFundedValue = cnfData[i].Personnel_x0020_Funded;
                var facilityReqValue = cnfData[i].Facility_x0020_Requirement;
                var facilityOprValue = cnfData[i].Facility_x0020_OPR;
                var facilityEtcDateValue = cnfData[i].Facility_x0020_ETC_x0020_Date;
                var facilityTrackingNumValue = cnfData[i].Facility_x0020_Tracking_x0020_Nu;
                var facilityFundedValue = cnfData[i].Facility_x0020_Funded;
                var policyReqValue = cnfData[i].Policy_x0020_Requirement;
                var policyOprValue = cnfData[i].Policy_x0020_OPR;
                var policyEtcDateValue = cnfData[i].Policy_x0020_ETC_x0020_Date;
                var policyTrackingNumValue = cnfData[i].Policy_x0020_Tracking_x0020_Numb;
                var policyFundedValue = cnfData[i].Policy_x0020_Funded;
                $("#pageTitle").text("CNF: " + cnfData[i].CR_x0020_ID);
                $("#formTitle").val(titleValue);
                $("#formStatus").val(statusValue);		
                $("#formNeedsStatement").val(needsStatementValue);
                $("#formJustification").val(justificationValue);
                $("#formNeedDate").val(needDateValue);
                $("#formPriority").val(priorityValue);
                $("#formDateValidated").val(dateValidatedValue);
                $("#formDeferExecute").val(deferExecuteValue);
                $("#formDateApprovedSRB").val(dateApprovedSRBValue);              
                $("#formFunded").val(fundedValue);
                $("#formCostEstimate").val(costEstimateValue);
                $("#formCoreMET").val(coreMETValue);
                $("#formMET").val(metValue);
                $("#formExpectedOutcome").val(expectedOutcomeValue);
                $("#formOpReq").val(opReqValue);
                $("#formCurrentCapability").val(currentCapabilityValue);
                $("#formApproach").val(approachValue);
                $("#formSponsorName").val(sponsorNameValue);
                $("#formSponsorOrg").val(sponsorOrgValue);
                $("#formSponsorEmail").val(sponsorEmailValue);
                $("#formSponsorPhone").val(sponsorPhoneValue);
                $("#formCroName").val(croNameValue);
                $("#formCroEmail").val(croEmailValue);
                $("#formCroPhone").val(croPhoneValue);
                $("#formDoctrineReq").val(doctrineReqValue);
                $("#formDoctrineOpr").val(doctrineOprValue);
                $("#formDoctrineEtcDate").val(doctrineEtcDateValue);
                $("#formDoctrineTrackingNum").val(doctrineTrackingNumValue);
                $("#formDoctrineFunded").val(doctrineFundedValue);
                $("#formOrgReq").val(orgReqValue);
                $("#formOrgOpr").val(orgOprValue);
                $("#formOrgEtcDate").val(orgEtcDateValue);
                $("#formOrgTrackingNum").val(orgTrackingNumValue);
                $("#formOrgFunded").val(orgFundedValue);
                $("#formTrainingReq").val(trainingReqValue);
                $("#formTrainingOpr").val(trainingOprValue);
                $("#formTrainingEtcDate").val(trainingEtcDateValue);
                $("#formTrainingTrackingNum").val(trainingTrackingNumValue);
                $("#formTrainingFunded").val(trainingFundedValue);
                $("#formMaterialReq").val(materialReqValue);
                $("#formMaterialOpr").val(materialOprValue);
                $("#formMaterialEtcDate").val(materialEtcDateValue);
                $("#formMaterialTrackingNum").val(materialTrackingNumValue);
                $("#formMaterialFunded").val(materialFundedValue);
                $("#formLeadershipReq").val(leadershipReqValue);
                $("#formLeadershipOpr").val(leadershipOprValue);
                $("#formLeadershipEtcDate").val(leadershipEtcDateValue);
                $("#formLeadershipTrackingNum").val(leadershipTrackingNumValue);
                $("#formLeadershipFunded").val(leadershipFundedValue);
                $("#formPersonnelReq").val(personnelReqValue);
                $("#formPersonnelOpr").val(personnelOprValue);
                $("#formPersonnelEtcDate").val(personnelEtcDateValue);
                $("#formPersonnelTrackingNum").val(personnelTrackingNumValue);
                $("#formPersonnelFunded").val(personnelFundedValue);
                $("#formFacilityReq").val(facilityReqValue);
                $("#formFacilityOpr").val(facilityOprValue);
                $("#formFacilityEtcDate").val(facilityEtcDateValue);
                $("#formFacilityTrackingNum").val(facilityTrackingNumValue);
                $("#formFacilityFunded").val(facilityFundedValue);
                $("#formPolicyReq").val(policyReqValue);
                $("#formPolicyOpr").val(policyOprValue);
                $("#formPolicyEtcDate").val(policyEtcDateValue);
                $("#formPolicyTrackingNum").val(policyTrackingNumValue);
                $("#formPolicyFunded").val(policyFundedValue);
                getCroData(croNameValue);
            }
 
        }
    })
}

function saveCnfEdits() {
    update(getUrlParameter('ID'));
}

function update(uId) {  
	//Fetch the values from the input elements
	var clientContext = new SP.ClientContext.get_current();
    var titleValue = $("#formTitle").val();
    var statusValue = $("#formStatus").val();
    var needsStatementValue = $("#formNeedsStatement").val();
    var justificationValue = $("#formJustification").val();
    var needDateValue = $("#formNeedDate").val();
    // Set the needDateValue to NULL if the field is left or changed to blank
    if (needDateValue == "") {
    	needDateValue = null;
    }
    var priorityValue = $("#formPriority").val();
    var dateValidatedValue = $("#formDateValidated").val();
	// Set the dateValidatedValue to NULL if the field is left or changed to blank
    if (dateValidatedValue == "") {
    	dateValidatedValue = null;
    }
    var deferExecuteValue = $("#formDeferExecute").val();
    var dateApprovedSRBValue = $("#formDateApprovedSRB").val();
    // Set the dateApprovedSRBValue to NULL if the field is left or changed to blank
    if (dateApprovedSRBValue == "") {
    	dateApprovedSRBValue = null;
    }
    var fundedValue = $("#formFunded").val();
    var costEstimateValue = $("#formCostEstimate").val();
    // Set the costEstimateValue to NULL if the field is left or changed to blank
    if (costEstimateValue == "") {
    	costEstimateValue = null;
    }
    var coreMETValue = $("#formCoreMET").val();
    var metValue = $("#formMET").val();
    var expectedOutcomeValue = $("#formExpectedOutcome").val();
    var opReqValue = $("#formOpReq").val();
    var currentCapabilityValue = $("#formCurrentCapability").val();
    var approachValue = $("#formApproach").val();
    var sponsorNameValue = $("#formSponsorName").val();
    var sponsorOrgValue = $("#formSponsorOrg").val();
    var sponsorEmailValue = $("#formSponsorEmail").val();
    var sponsorPhoneValue = $("#formSponsorPhone").val();
    var croNameValue = $("#formCroName").val(); 
    var doctrineReqValue = $("#formDoctrineReq").val();
    var doctrineOprValue = $("#formDoctrineOpr").val();
    var doctrineEtcDateValue = $("#formDoctrineEtcDate").val();
    var doctrineTrackingNumValue = $("#formDoctrineTrackingNum").val();
    var doctrineFundedValue = $("#formDoctrineFunded").val();
    var orgReqValue = $("#formOrgReq").val();
    var orgOprValue = $("#formOrgOpr").val();
    var orgEtcDateValue = $("#formOrgEtcDate").val();
    var orgTrackingNumValue = $("#formOrgTrackingNum").val();
    var orgFundedValue = $("#formOrgFunded").val();
    var trainingReqValue = $("#formTrainingReq").val();
    var trainingOprValue = $("#formTrainingOpr").val();
    var trainingEtcDateValue = $("#formTrainingEtcDate").val();
    var trainingTrackingNumValue = $("#formTrainingTrackingNum").val();
    var trainingFundedValue = $("#formTrainingFunded").val();
    var materialReqValue = $("#formMaterialReq").val();
    var materialOprValue = $("#formMaterialOpr").val();
    var materialEtcDateValue = $("#formMaterialEtcDate").val();
    var materialTrackingNumValue = $("#formMaterialTrackingNum").val();
    var materialFundedValue = $("#formMaterialFunded").val();
    var leadershipReqValue = $("#formLeadershipReq").val();
    var leadershipOprValue = $("#formLeadershipOpr").val();
    var leadershipEtcDateValue = $("#formLeadershipEtcDate").val();
    var leadershipTrackingNumValue = $("#formLeadershipTrackingNum").val();
    var leadershipFundedValue = $("#formLeadershipFunded").val();
    var personnelReqValue = $("#formPersonnelReq").val();
    var personnelOprValue = $("#formPersonnelOpr").val();
    var personnelEtcDateValue = $("#formPersonnelEtcDate").val();
    var personnelTrackingNumValue = $("#formPersonnelTrackingNum").val();
    var personnelFundedValue = $("#formPersonnelFunded").val(); 
    var facilityReqValue = $("#formFacilityReq").val();
    var facilityOprValue = $("#formFacilityOpr").val();
    var facilityEtcDateValue = $("#formFacilityEtcDate").val();
    var facilityTrackingNumValue = $("#formFacilityTrackingNum").val();
    var facilityFundedValue = $("#formFacilityFunded").val();
    var policyReqValue = $("#formPolicyReq").val();
    var policyOprValue = $("#formPolicyOpr").val();
    var policyEtcDateValue = $("#formPolicyEtcDate").val();
    var policyTrackingNumValue = $("#formPolicyTrackingNum").val();
    var policyFundedValue = $("#formPolicyFunded").val();
  
	if ((titleValue !== "") && (needsStatementValue !== "") && (justificationValue !== "") && (sponsorNameValue !== "") && (sponsorOrgValue !== "") && (sponsorEmailValue !== "") && (sponsorPhoneValue !== "")) {
	    $.ajax({  
	        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Capability Needs Form')/items(" + uId + ")",  
	        method: "POST",  
	        data: JSON.stringify({  
	            '__metadata': {  
	                'type': 'SP.Data.CapabilityNeedsFormListItem'  
	            },  
	            'Title': titleValue,
	            'CNF_x0020_Status': statusValue,
	            'Needs_x0020_Statement': needsStatementValue,
	            'Justification': justificationValue,
	            'Need_x0020_Date': needDateValue,
	            'Priority': priorityValue,
	            'Date_x0020_Validated': dateValidatedValue,
	            'Defer_x0020_Execute': deferExecuteValue,
	            'Date_x0020_Approved_x0020_SRB': dateApprovedSRBValue,
	            'Funded': fundedValue,
	            'Cost_x0020_Estimate': costEstimateValue,
	            'CoreMETId': coreMETValue,
	            'METId': metValue,
	            'Expected_x0020_Outcome': expectedOutcomeValue,
	           // 'MET': metValue,
	            'Expected_x0020_Outcome': expectedOutcomeValue,
	            'Operational_x0020_Requirement': opReqValue,
	            'Current_x0020_Capability': currentCapabilityValue,
	            'Approach': approachValue,
	            'Sponsor_x0020_Name': sponsorNameValue,
	            'Sponsor_x0020_Org': sponsorOrgValue,
	            'Sponsor_x0020_Email': sponsorEmailValue,
	            'Sponsor_x0020_Phone': sponsorPhoneValue,
	            'Capability_x0020_Requirements_x0Id': croNameValue,
	            'Doctrine_x0020_Requirement': doctrineReqValue,
	            'Doctrine_x0020_OPR': doctrineOprValue,
	            'Doctrine_x0020_ETC_x0020_Date': doctrineEtcDateValue,
	            'Doctrine_x0020_Tracking_x0020_Nu': doctrineTrackingNumValue,
	            'Doctrine_x0020_Funded': doctrineFundedValue,
	            'Org_x0020_Requirement': orgReqValue,
	            'Org_x0020_OPR': orgOprValue,
	            'Org_x0020_ETC_x0020_Date': orgEtcDateValue,
	            'Org_x0020_Tracking_x0020_Number': orgTrackingNumValue,
	            'Org_x0020_Funded': orgFundedValue,
	            'Training_x0020_Requirement': trainingReqValue,
	            'Training_x0020_OPR': trainingOprValue,
	            'Training_x0020_ETC_x0020_Date': trainingEtcDateValue,
	            'Training_x0020_Tracking_x0020_Nu': trainingTrackingNumValue,
	            'Training_x0020_Funded': trainingFundedValue,
	            'Material_x0020_Requirement': materialReqValue,
	            'Material_x0020_OPR': materialOprValue,
	            'Material_x0020_ETC_x0020_Date': materialEtcDateValue,
	            'Material_x0020_Tracking_x0020_Nu': materialTrackingNumValue,
	            'Material_x0020_Funded': materialFundedValue,
	            'Leadership_x0020_Requirement': leadershipReqValue,
	            'Leadership_x0020_OPR': leadershipOprValue,
	            'Leadership_x0020_ETC_x0020_Date': leadershipEtcDateValue,
	            'Leadership_x0020_Tracking_x0020_': leadershipTrackingNumValue,
	            'Leadership_x0020_Funded': leadershipFundedValue,
	            'Personnel_x0020_Requirement': personnelReqValue,
	            'Personnel_x0020_OPR': personnelOprValue,
	            'Personnel_x0020_ETC_x0020_Date': personnelEtcDateValue,
	            'Personnel_x0020_Tracking_x0020_N': personnelTrackingNumValue,
	            'Personnel_x0020_Funded': personnelFundedValue,
	            'Facility_x0020_Requirement': facilityReqValue,
	            'Facility_x0020_OPR': facilityOprValue,
	            'Facility_x0020_ETC_x0020_Date': facilityEtcDateValue,
	            'Facility_x0020_Tracking_x0020_Nu': facilityTrackingNumValue,
	            'Facility_x0020_Funded': facilityFundedValue,
	            'Policy_x0020_Requirement': policyReqValue,
	            'Policy_x0020_OPR': policyOprValue,
	            'Policy_x0020_ETC_x0020_Date': policyEtcDateValue,
	            'Policy_x0020_Tracking_x0020_Numb': policyTrackingNumValue,
	            'Policy_x0020_Funded': policyFundedValue
	        }),  
	        headers: {  
	            "accept": "application/json;odata=verbose",  
	            "content-type": "application/json;odata=verbose",  
	            "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
	            "IF-MATCH": "*",             //Overrite the changes in the sharepoint list item
	            "X-HTTP-Method": "MERGE"      // Specifies the update operation in sharepoint list
	        },  
	        success: function(data) {
	        	createAlert('','CNF Changes Saved!','<a href="https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SitePages/Capability%20Needs%20Development%20Dashboard.aspx">Click here to return to the CNF Dashboard</a>','success',true,false,'pageMessages');
				console.log('successful save');
	            //alert("Capability Need Request Updated", "success");
	        },  
	        error: function(error) {  
	        	createAlert('Oops!','Save Failed','Please contact JC2RG.','danger',true,false,'pageMessages');
				console.log('Developer - saveCnfEdits() failed!')
	            console.log(JSON.stringify(error));  
	        }    
	    }) 
    } else {
    	console.log('Developer - User did not enter a value for all required fields.');
        alert('Please complete all required fields before submitting.');
    } 
} 

// CustomEditForm.aspx submit button function //
function submitDraftCnf() {
    submitDraftCnfFromEditForm(getUrlParameter('ID'));
}

function submitDraftCnfFromEditForm(uId) {  
	//Fetch the values from the input elements
	var clientContext = new SP.ClientContext.get_current();
    var titleValue = $("#formTitle").val();
    var statusValue = "Submitted";
    var needsStatementValue = $("#formNeedsStatement").val();
    var justificationValue = $("#formJustification").val();
    var needDateValue = $("#formNeedDate").val();
    // Set the needDateValue to NULL if the field is left or changed to blank
    if (needDateValue == "") {
    	needDateValue = null;
    }
    var priorityValue = $("#formPriority").val();
    var dateValidatedValue = $("#formDateValidated").val();
	// Set the dateValidatedValue to NULL if the field is left or changed to blank
    if (dateValidatedValue == "") {
    	dateValidatedValue = null;
    }
    var deferExecuteValue = $("#formDeferExecute").val();
    var dateApprovedSRBValue = $("#formDateApprovedSRB").val();
    // Set the dateApprovedSRBValue to NULL if the field is left or changed to blank
    if (dateApprovedSRBValue == "") {
    	dateApprovedSRBValue = null;
    }
    var fundedValue = $("#formFunded").val();
    var costEstimateValue = $("#formCostEstimate").val();
    // Set the costEstimateValue to NULL if the field is left or changed to blank
    if (costEstimateValue == "") {
    	costEstimateValue = null;
    }
    var coreMETValue = $("#formCoreMET").val();
    var metValue = $("#formMET").val();
    var expectedOutcomeValue = $("#formExpectedOutcome").val();
    var opReqValue = $("#formOpReq").val();
    var currentCapabilityValue = $("#formCurrentCapability").val();
    var approachValue = $("#formApproach").val();
    var sponsorNameValue = $("#formSponsorName").val();
    var sponsorOrgValue = $("#formSponsorOrg").val();
    var sponsorEmailValue = $("#formSponsorEmail").val();
    var sponsorPhoneValue = $("#formSponsorPhone").val();
    var croNameValue = $("#formCroName").val(); 
    var doctrineReqValue = $("#formDoctrineReq").val();
    var doctrineOprValue = $("#formDoctrineOpr").val();
    var doctrineEtcDateValue = $("#formDoctrineEtcDate").val();
    var doctrineTrackingNumValue = $("#formDoctrineTrackingNum").val();
    var doctrineFundedValue = $("#formDoctrineFunded").val();
    var orgReqValue = $("#formOrgReq").val();
    var orgOprValue = $("#formOrgOpr").val();
    var orgEtcDateValue = $("#formOrgEtcDate").val();
    var orgTrackingNumValue = $("#formOrgTrackingNum").val();
    var orgFundedValue = $("#formOrgFunded").val();
    var trainingReqValue = $("#formTrainingReq").val();
    var trainingOprValue = $("#formTrainingOpr").val();
    var trainingEtcDateValue = $("#formTrainingEtcDate").val();
    var trainingTrackingNumValue = $("#formTrainingTrackingNum").val();
    var trainingFundedValue = $("#formTrainingFunded").val();
    var materialReqValue = $("#formMaterialReq").val();
    var materialOprValue = $("#formMaterialOpr").val();
    var materialEtcDateValue = $("#formMaterialEtcDate").val();
    var materialTrackingNumValue = $("#formMaterialTrackingNum").val();
    var materialFundedValue = $("#formMaterialFunded").val();
    var leadershipReqValue = $("#formLeadershipReq").val();
    var leadershipOprValue = $("#formLeadershipOpr").val();
    var leadershipEtcDateValue = $("#formLeadershipEtcDate").val();
    var leadershipTrackingNumValue = $("#formLeadershipTrackingNum").val();
    var leadershipFundedValue = $("#formLeadershipFunded").val();
    var personnelReqValue = $("#formPersonnelReq").val();
    var personnelOprValue = $("#formPersonnelOpr").val();
    var personnelEtcDateValue = $("#formPersonnelEtcDate").val();
    var personnelTrackingNumValue = $("#formPersonnelTrackingNum").val();
    var personnelFundedValue = $("#formPersonnelFunded").val(); 
    var facilityReqValue = $("#formFacilityReq").val();
    var facilityOprValue = $("#formFacilityOpr").val();
    var facilityEtcDateValue = $("#formFacilityEtcDate").val();
    var facilityTrackingNumValue = $("#formFacilityTrackingNum").val();
    var facilityFundedValue = $("#formFacilityFunded").val();
    var policyReqValue = $("#formPolicyReq").val();
    var policyOprValue = $("#formPolicyOpr").val();
    var policyEtcDateValue = $("#formPolicyEtcDate").val();
    var policyTrackingNumValue = $("#formPolicyTrackingNum").val();
    var policyFundedValue = $("#formPolicyFunded").val();
    var submissionDate = new Date();
  
	if ((titleValue !== "") && (needsStatementValue !== "") && (justificationValue !== "") && (sponsorNameValue !== "") && (sponsorOrgValue !== "") && (sponsorEmailValue !== "") && (sponsorPhoneValue !== "")) {
	    $.ajax({  
	        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Capability Needs Form')/items(" + uId + ")",  
	        method: "POST",  
	        data: JSON.stringify({  
	            '__metadata': {  
	                'type': 'SP.Data.CapabilityNeedsFormListItem'  
	            },  
	            'Title': titleValue,
	            'CNF_x0020_Status': statusValue,
	            'Needs_x0020_Statement': needsStatementValue,
	            'Justification': justificationValue,
	            'Need_x0020_Date': needDateValue,
	            'Priority': priorityValue,
	            'Date_x0020_Validated': dateValidatedValue,
	            'Defer_x0020_Execute': deferExecuteValue,
	            'Date_x0020_Approved_x0020_SRB': dateApprovedSRBValue,
	            'Funded': fundedValue,
	            'Cost_x0020_Estimate': costEstimateValue,
	            'CoreMETId': coreMETValue,
	            'METId': metValue,
	            'Expected_x0020_Outcome': expectedOutcomeValue,
	            'Expected_x0020_Outcome': expectedOutcomeValue,
	            'Operational_x0020_Requirement': opReqValue,
	            'Current_x0020_Capability': currentCapabilityValue,
	            'Approach': approachValue,
	            'Sponsor_x0020_Name': sponsorNameValue,
	            'Sponsor_x0020_Org': sponsorOrgValue,
	            'Sponsor_x0020_Email': sponsorEmailValue,
	            'Sponsor_x0020_Phone': sponsorPhoneValue,
	            'Capability_x0020_Requirements_x0Id': croNameValue,
	            'Doctrine_x0020_Requirement': doctrineReqValue,
	            'Doctrine_x0020_OPR': doctrineOprValue,
	            'Doctrine_x0020_ETC_x0020_Date': doctrineEtcDateValue,
	            'Doctrine_x0020_Tracking_x0020_Nu': doctrineTrackingNumValue,
	            'Doctrine_x0020_Funded': doctrineFundedValue,
	            'Org_x0020_Requirement': orgReqValue,
	            'Org_x0020_OPR': orgOprValue,
	            'Org_x0020_ETC_x0020_Date': orgEtcDateValue,
	            'Org_x0020_Tracking_x0020_Number': orgTrackingNumValue,
	            'Org_x0020_Funded': orgFundedValue,
	            'Training_x0020_Requirement': trainingReqValue,
	            'Training_x0020_OPR': trainingOprValue,
	            'Training_x0020_ETC_x0020_Date': trainingEtcDateValue,
	            'Training_x0020_Tracking_x0020_Nu': trainingTrackingNumValue,
	            'Training_x0020_Funded': trainingFundedValue,
	            'Material_x0020_Requirement': materialReqValue,
	            'Material_x0020_OPR': materialOprValue,
	            'Material_x0020_ETC_x0020_Date': materialEtcDateValue,
	            'Material_x0020_Tracking_x0020_Nu': materialTrackingNumValue,
	            'Material_x0020_Funded': materialFundedValue,
	            'Leadership_x0020_Requirement': leadershipReqValue,
	            'Leadership_x0020_OPR': leadershipOprValue,
	            'Leadership_x0020_ETC_x0020_Date': leadershipEtcDateValue,
	            'Leadership_x0020_Tracking_x0020_': leadershipTrackingNumValue,
	            'Leadership_x0020_Funded': leadershipFundedValue,
	            'Personnel_x0020_Requirement': personnelReqValue,
	            'Personnel_x0020_OPR': personnelOprValue,
	            'Personnel_x0020_ETC_x0020_Date': personnelEtcDateValue,
	            'Personnel_x0020_Tracking_x0020_N': personnelTrackingNumValue,
	            'Personnel_x0020_Funded': personnelFundedValue,
	            'Facility_x0020_Requirement': facilityReqValue,
	            'Facility_x0020_OPR': facilityOprValue,
	            'Facility_x0020_ETC_x0020_Date': facilityEtcDateValue,
	            'Facility_x0020_Tracking_x0020_Nu': facilityTrackingNumValue,
	            'Facility_x0020_Funded': facilityFundedValue,
	            'Policy_x0020_Requirement': policyReqValue,
	            'Policy_x0020_OPR': policyOprValue,
	            'Policy_x0020_ETC_x0020_Date': policyEtcDateValue,
	            'Policy_x0020_Tracking_x0020_Numb': policyTrackingNumValue,
                'Policy_x0020_Funded': policyFundedValue,
                'Submission_x0020_Date' : submissionDate
	        }),  
	        headers: {  
	            "accept": "application/json;odata=verbose",  
	            "content-type": "application/json;odata=verbose",  
	            "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
	            "IF-MATCH": "*",             //Overrite the changes in the sharepoint list item
	            "X-HTTP-Method": "MERGE"      // Specifies the update operation in sharepoint list
	        },  
	        success: function(data) {
                $(".overlay").show(); // Display the gray background overlay
                createAlert('','Thank you for submitting your request!','<a href="https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SitePages/Capability%20Needs%20Development%20Dashboard.aspx">Click here to return to the CNF Dashboard</a>','success',true,false,'pageMessages');
				console.log('CNF Successfully Submitted');
	            setTimeout(function(){ // Redirect the user back to the homescreen after save as draft
                    window.location.href = 'https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SitePages/Capability%20Needs%20Development%20Dashboard.aspx';
                 }, 5000);
	        },  
	        error: function(error) {  
	        	createAlert('Oops!','Save Failed','Please contact JC2RG.','danger',true,false,'pageMessages');
				console.log('Developer - submitDraftCnfFromEditForm() failed!')
	            console.log(JSON.stringify(error));  
	        }    
	    }) 
    } else {
    	console.log('Developer - User did not enter a value for all required fields.');
        alert('Please complete all required fields before submitting.');
    } 
}  


// CustomNewForm.aspx submit button function //
function submitUnsavedCnfFromNewForm() {
    var clientContext = new SP.ClientContext.get_current();
    var titleValue = $("#formTitle").val();
    var needsStatementValue = $("#formNeedsStatement").val();
    var justificationValue = $("#formJustification").val();
    var needDateValue = $("#formNeedDate").val();
    var priorityValue = $("#formPriority").val();
    var dateValidatedValue = $("#formDateValidated").val();
    var deferExecuteValue = $("#formDeferExecute").val();
    var dateApprovedSRBValue = $("#formDateApprovedSRB").val();
    var fundedValue = $("#formFunded").val();
    var costEstimateValue = $("#formCostEstimate").val();
    var coreMETValue = $("#formCoreMET").val();
    var metValue = $("#formMET").val();
    var expectedOutcomeValue = $("#formExpectedOutcome").val();
    var opReqValue = $("#formOpReq").val();
    var currentCapabilityValue = $("#formCurrentCapability").val();
    var approachValue = $("#formApproach").val();
    var sponsorNameValue = $("#formSponsorName").val();
    var sponsorOrgValue = $("#formSponsorOrg").val();
    var sponsorEmailValue = $("#formSponsorEmail").val();
    var sponsorPhoneValue = $("#formSponsorPhone").val();
    var doctrineReqValue = $("#formDoctrineReq").val();
    var doctrineOprValue = $("#formDoctrineOpr").val();
    var doctrineEtcDateValue = $("#formDoctrineEtcDate").val();
    var doctrineTrackingNumValue = $("#formDoctrineTrackingNum").val();
    var doctrineFundedValue = $("#formDoctrineFunded").val();
    var orgReqValue = $("#formOrgReq").val();
    var orgOprValue = $("#formOrgOpr").val();
    var orgEtcDateValue = $("#formOrgEtcDate").val();
    var orgTrackingNumValue = $("#formOrgTrackingNum").val();
    var orgFundedValue = $("#formOrgFunded").val();
    var trainingReqValue = $("#formTrainingReq").val();
    var trainingOprValue = $("#formTrainingOpr").val();
    var trainingEtcDateValue = $("#formTrainingEtcDate").val();
    var trainingTrackingNumValue = $("#formTrainingTrackingNum").val();
    var trainingFundedValue = $("#formTrainingFunded").val();
    var materialReqValue = $("#formMaterialReq").val();
    var materialOprValue = $("#formMaterialOpr").val();
    var materialEtcDateValue = $("#formMaterialEtcDate").val();
    var materialTrackingNumValue = $("#formMaterialTrackingNum").val();
    var materialFundedValue = $("#formMaterialFunded").val();
    var leadershipReqValue = $("#formLeadershipReq").val();
    var leadershipOprValue = $("#formLeadershipOpr").val();
    var leadershipEtcDateValue = $("#formLeadershipEtcDate").val();
    var leadershipTrackingNumValue = $("#formLeadershipTrackingNum").val();
    var leadershipFundedValue = $("#formLeadershipFunded").val();
    var personnelReqValue = $("#formPersonnelReq").val();
    var personnelOprValue = $("#formPersonnelOpr").val();
    var personnelEtcDateValue = $("#formPersonnelEtcDate").val();
    var personnelTrackingNumValue = $("#formPersonnelTrackingNum").val();
    var personnelFundedValue = $("#formPersonnelFunded").val(); 
    var facilityReqValue = $("#formFacilityReq").val();
    var facilityOprValue = $("#formFacilityOpr").val();
    var facilityEtcDateValue = $("#formFacilityEtcDate").val();
    var facilityTrackingNumValue = $("#formFacilityTrackingNum").val();
    var facilityFundedValue = $("#formFacilityFunded").val();
    var policyReqValue = $("#formPolicyReq").val();
    var policyOprValue = $("#formPolicyOpr").val();
    var policyEtcDateValue = $("#formPolicyEtcDate").val();
    var policyTrackingNumValue = $("#formPolicyTrackingNum").val();
    var policyFundedValue = $("#formPolicyFunded").val();
    var oList = clientContext.get_web().get_lists().getByTitle('Capability Needs Form');
    var itemCreateInfo = new SP.ListItemCreationInformation();
    var oListItem = oList.addItem(itemCreateInfo);
    var submissionDate = new Date();

    if ((titleValue !== "") && (needsStatementValue !== "") && (justificationValue !== "") && (sponsorNameValue !== "") && (sponsorOrgValue !== "") && (sponsorEmailValue !== "")&& (sponsorPhoneValue !== "")) {
        oListItem.set_item('CNF_x0020_Status', 'Submitted');
        oListItem.set_item('Title', titleValue);       
        oListItem.set_item('Needs_x0020_Statement', needsStatementValue);
        oListItem.set_item('Justification', justificationValue);
        if (needDateValue == "") { // Set needDateValue  to null if its left blank
            oListItem.set_item('Need_x0020_Date', null);
        } else {
            oListItem.set_item('Need_x0020_Date', needDateValue);
        }
        oListItem.set_item('Priority', priorityValue);
        if (dateValidatedValue == "") { // Set dateValidatedValue  to null if its left blank
            oListItem.set_item('Date_x0020_Validated', null);
        } else {
            oListItem.set_item('Date_x0020_Validated', dateValidatedValue);
        }
        if (dateApprovedSRBValue == "") { // Set dateApprovedSRBValue to null if its left blank
            oListItem.set_item('Date_x0020_Approved_x0020_SRB', null);
        } else {
            oListItem.set_item('Date_x0020_Approved_x0020_SRB', dateApprovedSRBValue);
        }
        oListItem.set_item('Funded', fundedValue);
        oListItem.set_item('Cost_x0020_Estimate', costEstimateValue);
        if (coreMETValue == " ") { // Set coreMETValue to null if its left blank/as just a space     	
            oListItem.set_item('CoreMET', null);
        } else {
            oListItem.set_item('CoreMET', coreMETValue);
        }
        if (metValue == " ") { // Set metValue to null if its left blank/as just a space
            oListItem.set_item('MET', null);
        } else {
            oListItem.set_item('MET', metValue);
        }
        oListItem.set_item('Expected_x0020_Outcome', expectedOutcomeValue);
        oListItem.set_item('Operational_x0020_Requirement', opReqValue);
        oListItem.set_item('Current_x0020_Capability', currentCapabilityValue);
        oListItem.set_item('Approach', approachValue);
        oListItem.set_item('Sponsor_x0020_Name', sponsorNameValue);
        oListItem.set_item('Sponsor_x0020_Org', sponsorOrgValue);
        oListItem.set_item('Sponsor_x0020_Email', sponsorEmailValue);
        oListItem.set_item('Sponsor_x0020_Phone', sponsorPhoneValue);
        oListItem.set_item('Doctrine_x0020_Requirement', doctrineReqValue);
        oListItem.set_item('Doctrine_x0020_OPR', doctrineOprValue);
        oListItem.set_item('Doctrine_x0020_ETC_x0020_Date', doctrineEtcDateValue);
        oListItem.set_item('Doctrine_x0020_Tracking_x0020_Nu', doctrineTrackingNumValue);
        oListItem.set_item('Doctrine_x0020_Funded', doctrineFundedValue);
        oListItem.set_item('Org_x0020_Requirement', orgReqValue);
        oListItem.set_item('Org_x0020_OPR', orgOprValue);
        oListItem.set_item('Org_x0020_ETC_x0020_Date', orgEtcDateValue);
        oListItem.set_item('Org_x0020_Tracking_x0020_Number', orgTrackingNumValue);
        oListItem.set_item('Org_x0020_Funded', orgFundedValue);
        oListItem.set_item('Training_x0020_Requirement', trainingReqValue);
        oListItem.set_item('Training_x0020_OPR', trainingOprValue);
        oListItem.set_item('Training_x0020_ETC_x0020_Date', trainingEtcDateValue);
        oListItem.set_item('Training_x0020_Tracking_x0020_Nu', trainingTrackingNumValue);
        oListItem.set_item('Training_x0020_Funded', trainingFundedValue);
        oListItem.set_item('Material_x0020_Requirement', materialReqValue);
        oListItem.set_item('Material_x0020_OPR', materialOprValue);
        oListItem.set_item('Material_x0020_ETC_x0020_Date', materialEtcDateValue);
        oListItem.set_item('Material_x0020_Tracking_x0020_Nu', materialTrackingNumValue);
        oListItem.set_item('Material_x0020_Funded',materialFundedValue);
        oListItem.set_item('Leadership_x0020_Requirement', leadershipReqValue);
        oListItem.set_item('Leadership_x0020_OPR', leadershipOprValue);
        oListItem.set_item('Leadership_x0020_ETC_x0020_Date', leadershipEtcDateValue);
        oListItem.set_item('Leadership_x0020_Tracking_x0020_', leadershipTrackingNumValue);
        oListItem.set_item('Leadership_x0020_Funded', leadershipFundedValue);
        oListItem.set_item('Personnel_x0020_Requirement', personnelReqValue);
        oListItem.set_item('Personnel_x0020_OPR', personnelOprValue);
        oListItem.set_item('Personnel_x0020_ETC_x0020_Date', personnelEtcDateValue);
        oListItem.set_item('Personnel_x0020_Tracking_x0020_N', personnelTrackingNumValue);
        oListItem.set_item('Personnel_x0020_Funded', personnelFundedValue);
        oListItem.set_item('Facility_x0020_Requirement', facilityReqValue);
        oListItem.set_item('Facility_x0020_OPR', facilityOprValue);
        oListItem.set_item('Facility_x0020_ETC_x0020_Date', facilityEtcDateValue);
        oListItem.set_item('Facility_x0020_Tracking_x0020_Nu', facilityTrackingNumValue);
        oListItem.set_item('Facility_x0020_Funded', facilityFundedValue);
        oListItem.set_item('Policy_x0020_Requirement', policyReqValue);
        oListItem.set_item('Policy_x0020_OPR', policyOprValue);
        oListItem.set_item('Policy_x0020_ETC_x0020_Date', policyEtcDateValue);
        oListItem.set_item('Policy_x0020_Tracking_x0020_Numb', policyTrackingNumValue);
        oListItem.set_item('Policy_x0020_Funded', policyFundedValue);
        oListItem.set_item('Submission_x0020_Date', submissionDate);
        oListItem.update();
        clientContext.load(oListItem);
        clientContext.executeQueryAsync(Function.createDelegate(this, function() {
        	if (uploadedFileIDs.length > 0) {
        		var newItemID = oListItem.get_id();
	        	var documentCount = 0;
	        	
	        	uploadedFileIDs.forEach(function(item, index) {
	        		var updateObject = {
			            __metadata: {
			                type: "SP.Data.Capability_x0020_Needs_x0020_Form_x0020_AttachmentsItem"
			            },
			            CapabilityNeedsIDId: newItemID,   //Set the CapabilityNeedsID
			        };
			        
			        var webUrl = _spPageContextInfo.webAbsoluteUrl;
				    var documentLibrary="Capability Needs Form Attachments";
				    var apiUrl = webUrl + "/_api/Web/lists/getbytitle('"+documentLibrary+"')/items(" + item + ")";
			        
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
				            "IF-MATCH": "*",
				        },
				        success: function (data) {
				            documentCount += 1;
				            if (documentCount == uploadedFileIDs.length) {
				            	onSubmitSucceeded();
				            }
				        },
				        error: function (data) {
				            alert("File upload done but meta data updating FAILED");
				        }
				    });
	        	});
        	} else {
        		onSubmitSucceeded();
        	}
        	   	
        }), onSubmitFailed);
    } else {
        console.log('Developer - User did not enter a value for all required fields.');
        alert('Please complete all required fields before submitting.');
    }
}

function onSubmitSucceeded() {
	$(".overlay").show(); // Display the gray background overlay
	createAlert('','Thank you for submitting your request!','<a href="https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SitePages/Capability%20Needs%20Development%20Dashboard.aspx">Click here to return to the CNF Dashboard</a>','success',true,false,'pageMessages');
	console.log('Successful Submition!');
	setTimeout(function(){ // Redirect the user back to the homescreen after save as draft
            window.location.href = 'https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SitePages/Capability%20Needs%20Development%20Dashboard.aspx';
         }, 5000);
}

function onSubmitFailed() {
	createAlert('Oops!','Submission Failed','Please contact JC2RG.','danger',true,false,'pageMessages');
	console.log('Developer - submitUnsavedListItem()) failed!');
}




//End - THIS IS THE WORKING BLOCK//



function createAlert(title, summary, details, severity, dismissible, autoDismiss, appendToId) {
  var iconMap = {
    success: "fa fa-thumbs-up",
    danger: "fa ffa fa-exclamation-circle"
  };

  var iconAdded = false;

  var alertClasses = ["alert", "animated", "flipInX"];
  alertClasses.push("alert-" + severity.toLowerCase());

  if (dismissible) {
    alertClasses.push("alert-dismissible");
  }

  var msgIcon = $("<i />", {
    "class": iconMap[severity] // you need to quote "class" since it's a reserved keyword
  });

  var msg = $("<div />", {
    "class": alertClasses.join(" ") // you need to quote "class" since it's a reserved keyword
  });

  if (title) {
    var msgTitle = $("<h4 />", {
      html: title
    }).appendTo(msg);
    
    if(!iconAdded){
      msgTitle.prepend(msgIcon);
      iconAdded = true;
    }
  }

  if (summary) {
    var msgSummary = $("<strong />", {
      html: summary
    }).appendTo(msg);
    
    if(!iconAdded){
      msgSummary.prepend(msgIcon);
      iconAdded = true;
    }
  }

  if (details) {
    var msgDetails = $("<p />", {
      html: details
    }).appendTo(msg);
    
    if(!iconAdded){
      msgDetails.prepend(msgIcon);
      iconAdded = true;
    }
  }
  

  if (dismissible) {
    var msgClose = $("<span />", {
      "class": "close", // you need to quote "class" since it's a reserved keyword
      "data-dismiss": "alert",
      html: "<i class='fa fa-times-circle'></i>"
    }).appendTo(msg);
  }
  
  $('#' + appendToId).prepend(msg);
  
  if(autoDismiss){
    setTimeout(function(){
      msg.addClass("flipOutX");
      setTimeout(function(){
        msg.remove();
      },1000);
    }, 5000);
  }
}

// Get the CNO list and populate the dropdown column
 function getCroData(croNameValue){
        $.ajax({
            url: "https://intelshare.intelink.gov/sites/jfhq-dodin/J9/_api/web/lists/GetByTitle('Capability Requirements Officers')/items?$filter=(Remove_x0020_CNO_x0020_Access eq false)",
            type: "GET",
            headers: {"accept":  "application/json; odata=verbose"},
	        success: function(data){
	               var croData = data.d.results;
	               var emailArray = [];
	               for(i=0; i < croData.length; i++){
	               		var croId = croData[i].ID;
						var croName = croData[i].Full_x0020_Name;
						var croNiprEmail = croData[i].NIPR_x0020_Email;
						html='';
						html += '<option id="' + croId + '" value="' + croId + '">' + croName  + '</option>';					
						$('#formCroName').append(html);	
						emailArray.push(croNiprEmail); //Building the array to be used for checking if the current user is an authorized CRO in getUserDetails()
						$("#formCroName").val(croNameValue);
					}
					getUserDetails(emailArray);
	        }
    })
} 

// Get the MET list and populate the dropdown column
function getMetData(){
        $.ajax({
            url: "https://intelshare.intelink.gov/sites/jfhq-dodin/J9/_api/web/lists/GetByTitle('METs')/items?$filter=Core_x002f_Support eq 'Core'&$orderby=Title",
            type: "GET",
            headers: {"accept":  "application/json; odata=verbose"},
	        success: function(data){
	               var metData = data.d.results;
	               for(i=0; i < metData.length; i++){
	               		var metId = metData[i].ID;
						var metTitle = metData[i].Title;
						html='';
						html += '<option id="' + metId + '" value="' + metId + '">' + metTitle + '</option>';					
						$('#formCoreMET').append(html);	
					}
	        }
   		})
}

// Get the Supporting MET list and populate the dropdown column
function getSupportingMetData(){
        $.ajax({
            url: "https://intelshare.intelink.gov/sites/jfhq-dodin/J9/_api/web/lists/GetByTitle('METs')/items?$filter=Core_x002f_Support eq 'Support'&$orderby=Title",
            type: "GET",
            headers: {"accept":  "application/json; odata=verbose"},
	        success: function(data){
	               var supportingMetData = data.d.results;
	               for(i=0; i < supportingMetData.length; i++){
	               		var metId = supportingMetData[i].ID;
						var metTitle = supportingMetData[i].Title;
						html='';
						html += '<option id="' + metId + '" value="' + metId + '">' + metTitle + '</option>';					
						$('#formMET').append(html);
					}
	        }
    })
}

// 3/23/21 - BLS - Check if the user is a CRO
// Used to find the current user's email and compare it agaist the CRO list's emails
// If the user is a CRO, enable the form fields. If the user is not, keep the fields grayed out.  
function getUserDetails(emailArray) {
	var clientContext;
	var user;
	var userEmail;
	
	SP.SOD.executeFunc('sp.js', 'SP.ClientContext', sharePointReady);
	
	function sharePointReady() {
	    clientContext = SP.ClientContext.get_current();
	    user = clientContext.get_web().get_currentUser();	
	    clientContext.load(user);
	    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
	}
	function onQuerySucceeded() {
		console.log(emailArray);
		userEmail = user.get_email();
		if (emailArray.includes(userEmail)) {
	    	console.log('You are a CRO and everything should be enabled');
	      	$(".disabled-submitted :input").prop('disabled', false); // Enable all the fields if the user is a CRO.
	        $('.cro-only :input').attr('disabled', false); 
	        $('#saveEditsButton').hide(); // Hide the user's edit button   
	        console.log(userEmail + ' is an approved CRO');
	    } else {    	
	    	console.log('This is a NOT CRO and everything should be Closed');
	     	$('.cro-only :input'). attr('disabled', true);
	      	$('#saveCROEditsButton').hide(); // Hide the CRO edit button
	   }
	    console.log('The email address of the current user is ' + user.get_email());
	    console.log('The account name is ' + user.get_loginName());
	}
	function onQueryFailed(sender, args) {
	    console.log('Error: ' + args.get_message());
	}
}
