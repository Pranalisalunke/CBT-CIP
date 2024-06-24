const inputBox = document.getElementById("inp");
const listContainer = document.getElementById("list-container");

function cal() {
	if(inputBox.value == "") 
		 	{
		 		alert("Please Enter Your Task!");		//alert message	
		 	}
			else{
				let li = document.createElement("li");		//task input
				li.innerHTML = inputBox.value;
				listContainer.appendChild(li);

				let span = document.createElement("span");		//cross icon
				span.innerHTML = "\u00d7";
				li.appendChild(span);
			}
			inputBox.value = "";
			saveData();		//data save in browser
}

listContainer.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");		//task completed line checked
		saveData();									//data save in browser
	}	
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();			//task completed line removed
		saveData();									//data save in browser
	}
}, false);

function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);		//data save in browser function
}

function showtask(){
	listContainer.innerHTML = localStorage.getItem("data"); //refresh the browser page as it is task show
}
showtask();