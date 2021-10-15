<%@ Page language="C#" MasterPageFile="~masterurl/default.master"    Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document"  %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	<SharePoint:ListFormPageTitle runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitleInTitleArea" runat="server">
	<span class="die">
		<SharePoint:ListProperty Property="LinkTitle" runat="server" id="ID_LinkTitle"/>
	</span>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageImage" runat="server">
	<img src="/_layouts/15/images/blank.gif?rev=23" width='1' height='1' alt="" />
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">

<link href="https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SiteAssets/css/CustomCnfForm.css" rel="stylesheet" />
<link href="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/MDB-Free_4.13.0/css/bootstrap.min.css" rel="stylesheet" />
<link href="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/MDB-Free_4.13.0/css/mdb.min.css" rel="stylesheet" />
<link href="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/Font%20Awesome/fontawesome-free-5.3.1-web/css/all.min.css" rel="stylesheet" />
<link href="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/Calendar/bootstrap/bootstrap-4.0.0-dist/css/datepicker.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/SPDialog.js"></script>
<script src="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/Calendar/bootstrap/bootstrap-4.0.0-dist/js/bootstrap.min.js" type="text/javascript"></script>
<script src="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/MDB-Free_4.13.0/js/modules/forms-free.min.js" type="text/javascript"></script>
<script src="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/Calendar/bootstrap/bootstrap-4.0.0-dist/js/bootstrap-datepicker.js" type="text/javascript"></script>
<script type="text/javascript" src="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/SPDialog.js"></script>
<script src="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/js/moment.js" type="text/javascript"></script>
<link rel="stylesheet" href="https://intelshare.intelink.gov/sites/jfhq-dodin/SiteAssets/css/removeSpLeftNav.css" />
<script type="text/javascript" src="https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SiteAssets/js/CapabilityRequestJs/CustomCnfForm.js"></script>
<script type="text/javascript" src="https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SiteAssets/js/CapabilityRequestJs/UploadAttachments.js"></script>
<script type="text/javascript" src="https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SiteAssets/js/CapabilityRequestJs/PopulateAttachmentsTable.js"></script>

<script type="text/javascript">
$(document).ready(function () {
    var WebAbsoluteURL = _spPageContextInfo.webAbsoluteUrl;
	var CurrentUserId = _spPageContextInfo.userid;
	var CurrentUserLoginName = _spPageContextInfo.userloginname;
	getCNFData();
    setFormSettings();
    $("#warningModal").modal('show');

});

$('.ms-cui-tts').css('display','none'); //Hide the edit and browse SharePoint tabs
$('#Ribbon.ListForm.Edit').css('display','none'); // Hide the edit ribbon
$('.ms-cui-tabBody').css('display','none'); // Hide the edit ribbon

$(function () {
  $("#datepicker1,#datepicker2,#datepicker3").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  });
});
</script>

<div id="pageMessages"></div> <!-- Used for displaying the success and error alert. -->
<div class="overlay"> <!-- Used for graying out the form when the user clicks save or submit. -->
    <div id="loading-img"></div>
</div>

<!-- Classification Warning Modal -->
<div class="modal" id="warningModal" tabindex="-1" role="dialog" aria-labelledby="warningModal" aria-hidden="">
	<div class="modal-dialog modal-notify modal-primary" role="document">
		<div class="modal-content">
			<div class="modal-header text-center align-content-center">
				<div class="modal-title col-12 row justify-content-center w-100" style="padding: 0px;">
					<p class="h4 text-white mt-2" id="modalTitle">Classification 
					Acknowledgement</p>
				</div>
			</div>
			<div class="modal-body">
				By entering information into the Capabilities Needs Form (CNF), 
				you acknowledge the information is UNCLASSIFIED and fully 
				understand that you will be held responsible/liable for any 
				CLASSIFIED information identified within the UNCLASSIFIED CNF.				<div class="d-flex pull-right col-12 justify-content-end">
				 <button type="button" class="btn btn-success" data-dismiss="modal">
					Acknowledge</button>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Tab Options -->
<ul class="nav nav-tabs md-tabs nav-justified" id="co-tab" role="tablist">
    <li class="nav-item">
        <a class="nav-link active" id="co-tab" data-toggle="tab" href="#co" role="tab" aria-controls="co"
            aria-selected="true">Capability Overview</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="cw-tab" data-toggle="tab" href="#cw" role="tab" aria-controls="cw"
            aria-selected="false">Capability Worksheet</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="attachments-tab" data-toggle="tab" href="#attachments" role="tab"
            aria-controls="attachment" aria-selected="false">Attachments</a>
    </li>
</ul>

<div class="tab-content disabled-submitted" id="myTabContent">
	<!-- Capability Overview Content -->  
    <div class="tab-pane show active" id="co" role="tabpanel" aria-labelledby="co-tab">
        <div class="text-center">
            <div class="form-row mb-0 pb-0 justify-content-around">
                <div class="md-form col-6">
                    <input type="text" class="form-control" id="formTitle" required></input>
                    <label for="formTitle">Title *</label>
                </div>
                <div class="col-1 cro-only">
                    <label style="color: #757575; transform: scale(.8);">Status</label>
                    <select id="formStatus" class="browser-default custom-select mb-4"
                        style="border-top: none; border-right: none; border-left: none;">
                        <option id="1" value=" " selected=""> </option>
                        <option id="2" value="Draft">Draft</option>
                        <option id="3" value="Submitted">Submitted</option>
                        <option id="4" value="In-Progress">In-Progress</option>
                        <option id="5" value="Rejected">Rejected</option>
                        <option id="6" value="Approved">Approved</option>
                        <option id="7" value="Deferred">Deferred</option>
                        <option id="8" value="OBE">OBE</option>  
                    </select>
                </div>
            </div>
            <div class="form-row mb-0 mt-0 pt-0 justify-content-around">
                <div class="md-form col-8 mb-0 pt-0 mt-0 blue-textarea active-blue-textarea">
                    <textarea id="formNeedsStatement" class="md-textarea form-control" rows="1" required></textarea>
                    <label for="formNeedsStatement">Capability Needs Statement *</label>
                </div>
            </div>
            <div class="form-row justify-content-around">
                <div class="md-form col-8 blue-textarea active-blue-textarea">
                    <textarea id="formJustification" class="md-textarea form-control" rows="1" required></textarea>
                    <label for="formJustification">Justification *</label>
                </div>
            </div>
            <div class="form-row justify-content-around card-body cro-only" style="background:#E1F6FF;" title="For CRO Use Only">   
                <div class="col-2 md-form input-group date" id="datepicker1" data-date-format="dd-M-yyyy" >
                    <input placeholder="Select a date" type="text" id="formNeedDate" class="form-control datepicker" autocomplete="off" />
                    <span class="input-group-addon" style="display:none;"><i class="glyphicon glyphicon-calendar"></i></span>
                    <label for="formNeedDate">Capability Needs Date</label>
                </div>
                <div class="col-1">
                    <label style="color: #757575; transform: scale(.8);">
					Priority</label>
                    <select id="formPriority" class="browser-default custom-select mb-4"
                        style="border-top: none; border-right: none; border-left: none;">
                        <option id="1" value=" " selected=""> </option>
                        <option id="2" value="Critical">Critical</option>
                        <option id="3" value="High">High</option>
                        <option id="4" value="Medium">Medium</option>
                        <option id="5" value="Low">Low</option>
                    </select>
                </div>
                <div class="col-2 md-form input-group date" id="datepicker2" data-date-format="dd-M-yyyy" >
                    <input placeholder="Select a date" type="text" id="formDateValidated" class="form-control datepicker" autocomplete="off"/>
                    <span class="input-group-addon" style="display:none;"><i class="glyphicon glyphicon-calendar"></i></span>
                    <label for="formDateValidated">Date Validated SRB</label>
                </div>                
                <div class="col-1">
                    <label style="color: #757575; transform: scale(.8);">
					Defer/Execute</label>
                    <select id="formDeferExecute" class="browser-default custom-select mb-4"
                        style="border-top: none; border-right: none; border-left: none;">
                        <option id="1" value=" " selected=""> </option>
                        <option id="2" value="Defer">Defer</option>
                        <option id="3" value="Execute">Execute</option>
                    </select>
                </div>
                <div class="col-2 md-form input-group date" id="datepicker3" data-date-format="dd-M-yyyy" >
                    <input placeholder="Select a date" type="text" id="formDateApprovedSRB" class="form-control datepicker" autocomplete="off" />
                    <span class="input-group-addon" style="display:none;"><i class="glyphicon glyphicon-calendar"></i></span>
                    <label for="formDateApprovedSRB">Date Approved SRB</label>
                </div>
                <div class="col-1">
                    <label style="color: #757575; transform: scale(.8);">Funded</label>
                    <select id="formFunded" class="browser-default custom-select mb-4"
                        style="border-top: none; border-right: none; border-left: none;">
                        <option id="1" value=" " selected=""> </option>
                        <option id="2" value="Yes">Yes</option>
                        <option id="3" value="No">No</option>
                        <option id="4" value="Pending">Pending</option>
                    </select>
                </div>
                <div class="md-form col-1 mb-1">
                    <input type="text" id="formCostEstimate" class="form-control"></input>
                    <label for="formCostEstimate">Cost Estimate</label>
                </div>
            </div>
            <div class="form-row justify-content-around">
                <div class="col-3">
                    <label style="color: #757575; transform: scale(.8);">Mission 
					Essential Task (MET)</label>
                    <select id="formCoreMET" class="browser-default custom-select mb-4"
                        style="border-top: none; border-right: none; border-left: none;">
                        <option id="1" value=" " selected=""> </option>
                    </select>
                </div>
                <div class="col-3">
                    <label style="color: #757575; transform: scale(.8);">Supporting MET</label>
                    <select id="formMET" class="browser-default custom-select mb-4"
                        style="border-top: none; border-right: none; border-left: none;">
                        <option id="1" value=" " selected=""> </option>
                    </select>
                </div>

                
             <!--   <div class="md-form col-3 mb-1">
                    <input type="text" id="formMET" class="form-control"></input>
                    <label for="formMET">Supporting MET</label>
                </div>-->
            </div>
            
            
            <div class="form-row justify-content-around">
                <div class="md-form col-4 mb-0 pt-0 mt-0 blue-textarea active-blue-textarea">
                    <textarea id="formExpectedOutcome" class="md-textarea form-control" rows="1"></textarea>
                    <label for="formExpectedOutcome">Expected Outcome</label>
                </div>
                <div class="md-form col-4 mb-0 pt-0 mt-0 blue-textarea active-blue-textarea">
                    <textarea id="formOpReq" class="md-textarea form-control" rows="1"></textarea>
                    <label for="formOpReq">Operational Requirement</label>
                </div>
            </div>
            <div class="form-row justify-content-around">
                <div class="md-form col-4 mb-0  blue-textarea active-blue-textarea">
                    <textarea id="formCurrentCapability" class="md-textarea form-control" rows="1"></textarea>
                    <label for="formCurrentCapability">Current Capability</label>
                </div>
                <div class="md-form col-4 mb-0 blue-textarea active-blue-textarea">
                    <textarea id="formApproach" class="md-textarea form-control" rows="1"></textarea>
                    <label for="formApproach">Approach</label>
                </div>
            </div>
            <div class="form-row justify-content-around">
                <div class="md-form col-2 mb-1">
                    <input type="text" id="formSponsorName" class="form-control" required />
                    <label for="formSponsorName">Sponsor Name *</label>
                </div>
                <div class="md-form col-2 mb-1">
                    <input type="text" id="formSponsorOrg" class="form-control" required />
                    <label for="formSponsorOrg">Sponsor Org *</label>
                </div>
                <div class="md-form col-2 mb-1">
                    <input type="text" id="formSponsorEmail" class="form-control" required />
                    <label for="formSponsorEmail">Sponsor Email *</label>
                </div>
                <div class="md-form col-2 mb-1">
                    <input type="text" id="formSponsorPhone" class="form-control" />
                    <label for="formSponsorPhone">Sponsor Phone</label>
                </div>
            </div>
            <div class="form-row justify-content-around cro-only" style="background:#E1F6FF;">
            	<div class="col-3" title="For CRO Use Only">
                    <label style="color: #757575; transform: scale(.8);">
					Assigned CRO</label>
                    <select id="formCroName" class="browser-default custom-select mb-4" style="border-top: none; border-right: none; border-left: none;">
                        <option id="0" value=" "> </option>
                     </select>
                </div>
                <div class="md-form col-3 mb-1" title="For CRO Use Only">
                    <input type="text" id="formCroEmail" class="form-control" disabled></input>
                    <label for="formSponsorOrg">CRO Email</label>
                </div>
                <div class="md-form col-2 mb-1" title="For CRO Use Only">
                    <input type="text" id="formCroPhone" class="form-control" disabled></input>
                    <label for="formSponsorEmail">CRO Phone</label>
                </div>
            </div>
        </div>
    </div>

	<!-- Capability Worksheet Content-->   
    <div class="tab-pane cro-only" id="cw" role="tabpanel" aria-labelledby="cw-tab" title="For CRO Use Only">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col"><b>Title</b></th>
                    <th scope="col"><b>Requirement</b></th>
                    <th scope="col"><b>OPR</b></th>
                    <th scope="col"><b>ETC Date</b></th>
                    <th scope="col"><b>Funding/Tracking #</b></th>
                    <th scope="col"><b>Funded</b></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Doctrine</th>
                    <td><textarea id="formDoctrineReq" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formDoctrineOpr" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formDoctrineEtcDate" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formDoctrineTrackingNum" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formDoctrineFunded" class="md-textarea form-control" rows="1"></textarea></td>
                </tr>
                <tr>
                    <th scope="row">Organization</th>
                    <td><textarea id="formOrgReq" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formOrgOpr" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formOrgEtcDate" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formOrgTrackingNum" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formOrgFunded" class="md-textarea form-control" rows="1"></textarea></td>
                </tr>
                <tr>
                    <th scope="row">Traning</th>
                    <td><textarea id="formTrainingReq" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formTrainingOpr" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formTrainingEtcDate" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formTrainingTrackingNum" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formTrainingFunded" class="md-textarea form-control" rows="1"></textarea></td>
                </tr>
                <tr>
                    <th scope="row">Material</th>
                    <td><textarea id="formMaterialReq" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formMaterialOpr" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formMaterialEtcDate" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formMaterialTrackingNum" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formMaterialFunded" class="md-textarea form-control" rows="1"></textarea></td>
                </tr>
                <tr>
                    <th scope="row">Leadership</th>
                    <td><textarea id="formLeadershipReq" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formLeadershipOpr" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formLeadershipEtcDate" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formLeadershipTrackingNum" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formLeadershipFunded" class="md-textarea form-control" rows="1"></textarea></td>
                </tr>
                <tr>
                    <th scope="row">Personnel</th>
                    <td><textarea id="formPersonnelReq" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formPersonnelOpr" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formPersonnelEtcDate" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formPersonnelTrackingNum" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formPersonnelFunded" class="md-textarea form-control" rows="1"></textarea></td>
                </tr>
                <tr>
                    <th scope="row">Facility</th>
                    <td><textarea id="formFacilityReq" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formFacilityOpr" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formFacilityEtcDate" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formFacilityTrackingNum" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formFacilityFunded" class="md-textarea form-control" rows="1"></textarea></td>
                </tr>
                <tr>
                    <th scope="row">Policy</th>
                    <td><textarea id="formPolicyReq" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formPolicyOpr" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formPolicyEtcDate" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formPolicyTrackingNum" class="md-textarea form-control" rows="1"></textarea></td>
                    <td><textarea id="formPolicyFunded" class="md-textarea form-control" rows="1"></textarea></td>
                </tr>
            </tbody>
        </table>	
    </div>
	<!-- Attachments Content -->
    <div class="tab-pane" id="attachments" role="tabpanel" aria-labelledby="attachments-tab">
   	<div class="text-center">
            <div class="form-row mt-2 pt-2 mb-2 pb-2 justify-content-center disabled-submitted">
    	 		<input type="File" class="col-5"id="inputTypeFiles" />
				<input type="" class="btn btn-success btn-sm"  id="btnUploadFiles" value="Attach Document" Text="Upload" />
            </div>
            <div class="col-8 offset-2">
	            <table class="table table-striped">
				  <thead class="blue white-text">
				    <tr>
				      <th scope="col">Document Name</th>
				      <th scope="col">Modified</th>
				    </tr>
				  </thead>
				  <tbody id="attachmentTable">
				  </tbody>
				</table>
			</div>
		</div>
    </div>
</div>
<br />
<!-- Bottom Button Section -->
<div class="d-flex pull-right col-12 justify-content-end">
	<button id="saveEditsButton" class="btn btn-info col-2" type="button" onclick="saveCnfEdits()">
	Save</button>
	<button id="saveCROEditsButton" class="btn btn-info col-2" type="button" onclick="saveCnfEdits()">
	Save Changes</button>
    <button id="submitRequestButton" class="btn btn-success col-2" type="button" onclick="submitDraftCnf()">
	Submit Request</button>
    <a class="btn-sm btn-link col-2" onclick="window.location.href='https://intelshare.intelink.gov/sites/jfhq-dodin/J9/SitePages/Capability%20Needs%20Development%20Dashboard.aspx'" style="color: red; margin-top: auto; margin-bottom: auto;" type="reset">
	Cancel</a>
</div>
<br />
<SharePoint:UIVersionedContent UIVersion="4" runat="server">
	<ContentTemplate>
	<div style="padding-left:5px">
	</div>
	</ContentTemplate>
</SharePoint:UIVersionedContent>
	<table class="ms-core-tableNoSpace" id="onetIDListForm">
	 <tr>
	  <td>
	 <WebPartPages:WebPartZone runat="server" FrameType="None" ID="Main" Title="loc:Main"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
	  </td>
	 </tr>
	</table>
<SharePoint:UIVersionedContent UIVersion="4" runat="server">
	<ContentTemplate>
	</ContentTemplate>
</SharePoint:UIVersionedContent>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
	<SharePoint:DelegateControl runat="server" ControlId="FormCustomRedirectControl" AllowMultipleControls="true"/>
	<SharePoint:UIVersionedContent UIVersion="4" runat="server"><ContentTemplate>
		<SharePoint:CssRegistration Name="forms.css" runat="server"/>
	</ContentTemplate></SharePoint:UIVersionedContent>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleLeftBorder" runat="server">
<table cellpadding="0" height="100%" width="100%" cellspacing="0">
 <tr><td class="ms-areaseparatorleft"><img src="/_layouts/15/images/blank.gif?rev=23" width='1' height='1' alt="" /></td></tr>
</table>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleAreaClass" runat="server">
<script type="text/javascript" id="onetidPageTitleAreaFrameScript">
	if (document.getElementById("onetidPageTitleAreaFrame") != null)
	{
		document.getElementById("onetidPageTitleAreaFrame").className="ms-areaseparator";
	}
</script>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderBodyAreaClass" runat="server">
<SharePoint:StyleBlock runat="server">
.ms-bodyareaframe {
	padding: 8px;
	border: none;
}
</SharePoint:StyleBlock>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderBodyLeftBorder" runat="server">
<div class='ms-areaseparatorleft'><img src="/_layouts/15/images/blank.gif?rev=23" width='8' height='100%' alt="" /></div>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleRightMargin" runat="server">
<div class='ms-areaseparatorright'><img src="/_layouts/15/images/blank.gif?rev=23" width='8' height='100%' alt="" /></div>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderBodyRightMargin" runat="server">
<div class='ms-areaseparatorright'><img src="/_layouts/15/images/blank.gif?rev=23" width='8' height='100%' alt="" /></div>
</asp:Content>
<asp:Content contentplaceholderid="PlaceHolderTitleAreaSeparator" runat="server" />
