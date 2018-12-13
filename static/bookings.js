$(function() {

  // test to ensure jQuery is working
  console.log("whee!")

  // disable refresh button
  // $("#refresh-btn").prop("disabled", true)
  
  var addrLookup = {
    "Alexandra Road":"460 Alexandra Road",
    "Boon Lay":"Jurong Point Shopping Centre",
    "Buangkok":"Buangkok MRT",
    "Bukit Panjang":"Bukit Panjang Plaza",
    "Changi Business Park":"UE Biz Hub East",
    "Clementi":"Blk 451 Clementi Avenue 3",
    "Esplanade":"Esplanade MRT Station",
    "Harbourfront":"1 Harbourfront Place",
    "Kovan":"Heartland Mall",
    "Marina Bay":"Marina Bay Link Mall",
    "Orchard":"333 Orchard Road",
    "Pasir Ris":"Blk 625 Elias Road",
    "Paya Lebar":"Singapore Post Centre",
    "Punggol":"Block 681 Punggol Dr",
    "Raffles Place":"1 Raffles Quay, North Tower",
    "Raffles Place (GP)":"11 Collyer Quay (#19-01)",
    "Raffles Place (HS)":"11 Collyer Quay (#18-01)",
    "Serangoon":"Blk 263 Serangoon Central Dr",
    "Shenton Way":"50 Robinson Road",
    "Tanjong Pagar":"10 Anson Road",
    "Woodlands":"Woodlands MRT",
    "Sentosa (RWS)":"26 Sentosa Gateway (#B2-01)"}
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
