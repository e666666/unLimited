function beginAutomationRecording() {
	let good = true;
	if(player.automationArray[0]!=null) if(!confirm("You have a saved automation. Do you wish to overwrite it?")) good = false;
	if(good){
		player.automationArray = [];
		player.recording = true;
		player.energy = new Decimal(0);
		reset();
		$("recordingSymbol").style.opacity = 1;
		$("toggleAutomation").style.zIndex = 20;
		$("toggleAutomation").style.opacity = 1;
	}
}

function grabPiece(item) {	
	let automationPiece = [];
	let now = new Date().getTime();
	let difference = now - player.lastAutomationAction;
	player.lastAutomationAction = now;
	automationPiece.push(difference);
	automationPiece.push(item);
	console.log(automationPiece);
	player.automationArray.push(automationPiece);
}

function playAutomation(i) {
	setTimeout( function() {
		new Function(player.automationArray[i][0]));
		var j = i+1;
		if(player.automationArray[j]!=null) playAutomation(j);
	}, player.automationArray[i][1]);
}

function stopAutomation() {
	player.recording = false;
	$("recordingSymbol").style.opacity = 0;
	$("toggleAutomation").style.zIndex = 1;
	$("toggleAutomation").style.opacity = 0;
}
