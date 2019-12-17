$(document).ready(function(){
	var chessInfo, exerciseInfo, advocacyInfo;
	chessInfo = "<b>When:</b> Tuesdays at Noon<br><b>Where:</b> 123 Main St, Hamilton, ON (2nd floor)<br><b>Details:</b> All skill levels welcomed. Many chess boards available for your use. Bring a partner or meet one there!<br><img src='images/chess.png' alt='A rainbow chess board'>";
	exerciseInfo = "<b>When:</b> Tuesdays at 9am, Saturdays at 1pm<br><b>Where:</b> 1717 Walla Walla Ave., Hamilton, ON<br><b>Details:</b> Come for some light stretching and cardio exercise. Modifications can be made for all ability levels. These exercises are proven to improve balance and reduce falls. <br><img src='images/bandexercise.jpg' alt='Seniors enjoying band exercises'>";
	advocacyInfo = "<b>When:</b> Mondays at 5pm<br><b>Where:</b> 123 Main St, Hamilton, ON (2nd floor)<br><b>Details:</b> During this activity we learn about current LGBT2SQ+ issues and what we can do to be advocates for our fellow seniors and community.<br><img src='images/activists.jpg' alt='A group of seniors listening to a speaker'>"
	
	$(".chess").click(function(){
		$("#event_view").html(chessInfo)
	})
	$(".exercise").click(function(){
		$("#event_view").html(exerciseInfo)
	})
	$(".vote").click(function(){
		$("#event_view").html(advocacyInfo)
	})
})
