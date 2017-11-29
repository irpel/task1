var number=prompt("Вкажіть число", "")

 if(number>=0 && number<=15){
	alert("це перша чверть")
}else if(number>15 && number<=30){
	alert("це друга чверть")
}else if(number>30 && number<=45){
	alert("це третя чверть")
}else if(number>45 && number<60){
	alert("це четверта чверть")
}else{
alert("ооо,ні! це число не підходить")}