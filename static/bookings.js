$(function() {

  // test to ensure jQuery is working
  console.log("whee!")

  // disable refresh button
  // $("#refresh-btn").prop("disabled", true)
  
  var addrLookup = {
    "Anchorvale":"308 Anchorvale Road",
    "Boon Keng":"Blk 101 Towner Road",
    "Bukit Batok":"Blk 153 Bukit Batok Street 11",
    "Choa Chu Kang":"Blk 475 Choa Chu Kang Avenue 3",
    "Holland Drive":"41 Holland Drive",
    "Hougang Ave 8":"Blk 684 Hougang Ave 8",
    "Hougang Mall":"90 Hougang Ave 10",
    "Hougang Ave 1":"108 Hougang Avenue 1",
    "Jurong East	3":"Gateway Drive",
    "Kembangan":"Blk 110 Lengkong Tiga",
    "Novena":"238 Thomson Road",
    "Orchard":"176 Orchard Road",
    "Pasir Ris MRT":"10 Pasir Ris Central",
    "Pasir Ris Elias Mall":"Blk 625 Elias Road",
    "Punggol":"273C Punggol Place",
    "Sembawang":"30 Sembawang Drive (Sun Plaza)",
    "Toa Payoh Picton":"163 Lorong 1 Toa Payoh",
    "Toa Payoh Lorong 6":"190 Lorong 6 Toa Payoh",
    "Yishun Ave 5":"101 Yishun Ave 5",
    "Yishun St 72":"Blk 748 Yishun Street 72",
    "Yishun Ring Road":"Blk 846 Yishun Ring Road"}
  function getAddress(k){
    return addrLookup[k];
  }

  //$("#location_select").change(function() {
  $( document ).on("change", "#location_select", function() {

    // grab value
    var location_id = $("#location_select").val();
		var dataString = $("#htmbForm").serialize();

    // send value via POST to URL /<department_id>
    var get_request = $.ajax({
      type: 'GET',
			data: dataString,
      url: '/slotsfor/' + location_id + '/'
    });

    // handle response
    get_request.done(function(data){

      // data
      console.log(data)

      // add values to list 
      var option_list = [["", "Choose Date & Time"]].concat(data);
      $("#slot_select").empty();
        for (var i = 0; i < option_list.length; i++) {
          $("#slot_select").append(
            $("<option></option>").attr("value", option_list[i][0]).text(option_list[i][1]));
        }
      // show model list
      $("#slot_select").show();
    });
    //show address
    $('.addressText').text(getAddress(location_id));

  });
})
