
    function selectorCreate(arg){

    let selector = document.getElementById('country_selector');
        for(let i=0;i<arg.length;i++){
            let item = document.createElement('option');
                item.innerHTML = arg[i].title;
                item.id = arg[i].id;
                selector.appendChild(item);
            }
        }
	selectorCreate(countryList);


let form = document.getElementById('myForm');
	form.onsubmit =  checkValidity;


	function checkValidity(){

		let checkList = form.elements;
		let counter = checkList.length;
		for(let i=0; i<checkList.length; i++){
			isValid(checkList[i]);
			checkList[i].oninput = checkValidity;
			event.preventDefault();
		}
		if(validate(checkList)) alert('Your data has been sended');
	}

	function isValid(elem){
		let msg = "";
		if(elem.value == ""&&elem.dataset.valid =="required"){
			if(elem.id !== "email"){
				msg = "This field is required";
			}
		}
		if(elem.id == 'email'&&(!reg.email.test(elem.value))){
			(elem.value=="")?msg="This field is required"
							:msg = "Your email is incorrect";
			}
		elem.setCustomValidity(msg);
	}

	function validate(arr){
		for(var el=0;el<arr.length;el++){
			if(arr[el].id =='email'&&arr[el].value!==""&&!reg.email.test(arr[el].value)) return false;;
			if(arr[el].value == ""&&arr[el].dataset.valid =="required") return false;
		}
		return true;
	}
	let reg = {
		email:/^[A-Za-z0-9][A-Za-z0-9\.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/
	}
