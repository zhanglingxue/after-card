	function choose(obj) {
	if(!obj[0].checked && !obj[1].checked && !obj[2].checked && !obj[3].checked) {
		alert("请填写完整选择题")
		return false;
	}
}
function judge(jud) {
	if(!jud[0].checked && !jud[1].checked) {
		alert("请填写完整判断题")
		return false;
	}
}
function total_score() {
	var score = 0;
	var answer1 = document.getElementsByName("answer1");
	var answer2 = document.getElementsByName("answer2");
	if(answer1[0].value == "统计建模语言") {
		score += 5;
	}
	if(answer1[0].value == "") {
		alert("请填写完整填空题")
		return false;
	}
	for(var i = 0;i < answer2.length;i ++) {
		if(answer2[i].value == "继承性") {
			score += 5;
		}else if(answer2[i].value == "封装性") {
			score += 5;
		}else if(answer2[i].value == "多态性") {
			score += 5;
		}else if(answer2[i].value == "") {
	 		alert("请填写完整填空题")
	 		return false;
	 	}
	}
	// if(answer2_1 == "继承性" || answer2_2 == "继承性" || answer2_3 == "继承性" ) {
	// 	score += 5;
	// }
	// if(answer2_2 == "封装性" || answer2_1 == "封装性" || answer2_3 == "封装性") {
	// 	score += 5;
	// }
	// if(answer2_3 == "多态性" || answer2_1 == "多态性" || answer2_2 == "多态性") {
	// 	score += 5;
	// }
	// if(answer1 == "" || answer2_1 == "" || answer2_2 == "" || answer2_3 == "") {
	// 	alert("请填写完整填空题")
	// }

	//单选
	var obj = document.getElementsByName("radioname");
	var obj_2 = document.getElementsByName("optionsRadios");
	if(obj[1].checked) {
		score += 10;
	}	
	if(obj_2[0].checked) {
		score += 10;
	}
    choose(obj);
    choose(obj_2);

	//多选
	var multiselect_1 = document.getElementsByName("checkbox1");
	if(multiselect_1[0].checked && multiselect_1[1].checked && !multiselect_1[2].checked && multiselect_1[3].checked) {
		score += 10;
	}
	var multiselect_2 = document.getElementsByName("checkbox2");
	if(multiselect_2[0].checked && multiselect_2[1].checked && multiselect_2[2].checked && !multiselect_2[3].checked) {
		score += 10;
	}
	choose(multiselect_1);
	choose(multiselect_2);

	//判断
	var judge_1 = document.getElementsByName("chance");
	var judge_2 = document.getElementsByName("chance1");
	if(judge_1[1].checked) {
		score += 10;
	}
	if(judge_2[0].checked) {
		score += 10;
	}
	judge(judge_1);
	judge(judge_2);

	//简答
    var text = document.getElementsByName("desc");
    if(text[0].value == "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。") {
    	score += 20;
    }
    if(text[0].value == "") {
    	alert("text不可为空")
    	return false;
    }
    bt = document.getElementById("btn");
    if(confirm("确定要提交吗"))
    {
    	bt.disabled = true;
 	}else {
 		return false;
 	}
	alert("最后得分为："+score);
}
