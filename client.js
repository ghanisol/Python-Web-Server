function submitForm() {
	var src1 = document.getElementById("srcip_1").value;
	var src2 = document.getElementById("srcip_2").value;
	var src3 = document.getElementById("srcip_3").value;
	var src4 = document.getElementById("srcip_4").value;

	var srcIp = src1 + "." + src2 + "." + src3 + "." + src4

	var dst1 = document.getElementById("dstip_1").value;
	var dst2 = document.getElementById("dstip_2").value;
	var dst3 = document.getElementById("dstip_3").value;
	var dst4 = document.getElementById("dstip_4").value;

	var dstIp = dst1 + "." + dst2 + "." + dst3 + "." + dst4

	var isProcess = document.getElementById("is_process").value;
	var processFlag = ""
	if (isProcess == "Yes")
	{
		processFlag = "1"
	}
	else
	{
		processFlag = "0"
	}

	
	var scrubData = document.getElementById("scrub_data").value;
	var scrubFlag = ""

	if (scrubData == "No Scrubing")
	{
		scrubFlag = "0"
	}
	else if (scrubData == "Mild Scrubing")
	{
		scrubFlag = "2"
	}
	else if (scrubData == "Intermediate Scrubing")
	{
		scrubFlag = "4"
	}
	else if (scrubData == "Excessive Scrubing")
	{
		scrubFlag = "6"
	}

	policy = srcIp + " " + scrubFlag + " " + processFlag + " " + dstIp
	alert("Your policy has been implemented")

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "policy.asp?" + policy)
	xhttp.send()
}