// var products = [],
// 	people = [];

// function add_person() {
// 	var name = new_name.value,
// 		li = document.createElement("li"),
// 		div = document.createElement("div"),
// 		cbox = document.createElement("input");

// 	li.className = "person_box";
// 	div.className = "name";
// 	cbox.className = "cbox";
// 	cbox.type = "checkbox";

// 	people.push({ name: name, cbox: cbox, total: 0 });

// 	div.innerText = name;

// 	li.appendChild(div);
// 	li.appendChild(cbox);
// 	$("people_list").appendChild(li);
// 	new_name.value = "";

// 	$("new_name").focus();

// 	update();
// }

// function add_product() {
// 	var li = document.createElement("li"),
// 		pName = document.createElement("span"),
// 		pPrice = document.createElement("span"),
// 		btn = document.createElement("input")

// 	products.push({
// 		name: new_product.value,
// 		price: product_price.value, 
// 		people: [] 
// 	});
// 	pName.innerText = new_product.value;
// 	pPrice.innerText = product_price.value;
// 	pName.className = "pName";
// 	pPrice.className = "pPrice";
// 	btn.type = "submit";
// 	btn.value = "+";
// 	btn.onclick = open;
// 	btn.id = products.length - 1;
// 	// btn.style.float = "right"
// 	li.appendChild(pName);
// 	li.appendChild(pPrice);
// 	li.appendChild(btn);
// 	$("products_list").appendChild(li);

// 	// console.log(name + " added");
// 	new_product.value = product_price.value = "";
// 	new_product.focus();

// 	update();
// }

// function update() {
// 	for (var i = 0; i < products.length; i++) {
// 		products[i].people = [];
// 		for (var j = 0; j < people.length; j++) {
// 			var cbox = document.createElement("input");
// 			cbox.type = "checkbox";
// 			products[i].people.push({
// 				name: people[j].name,
// 				cbox: cbox
// 			});
// 		}
// 	}
// }

// function open() {
// 	var id = this.id;
// 	$("people_list_menu").innerText = "";

// 	var li = document.createElement("li"),
// 		mbox = document.createElement("input")

// 	li.className = "person_box";
// 	mbox.className = "cbox";
// 	mbox.type = "checkbox";
			
// 	li.appendChild(mbox);
// 	$("people_list_menu").appendChild(li);
	
// 	for (var i = 0; i < products[id].people.length; i++) {
// 		var li = document.createElement("li"),
// 			name = document.createElement("div"),
// 			cbox = products[id].people[i].cbox;

// 		li.className = "person_box";
// 		name.className = "name";
// 		cbox.className = "cbox";
// 		cbox.type = "checkbox";

// 		name.innerText = products[id].people[i].name;
				
// 		li.appendChild(name);
// 		li.appendChild(cbox);
// 		$("people_list_menu").appendChild(li);
// 	}

// 	mbox.onclick = function() {
// 		switch(mbox.checked) {
// 			case true:
// 				for (var i = 0; i < products[id].people.length; i++) {
// 					products[id].people[i].cbox.checked = true;
// 				}
// 			break;
// 			case false: 
// 				for (var i = 0; i < products[id].people.length; i++) {
// 					products[id].people[i].cbox.checked = false;
// 				}
// 			break;
// 		}
// 	}

// 	menu.style.display = "block";
// }

// function calc() {
// 	var total_cost = 0,
// 		people_total_cost = 0;

// 	for (var i = 0; i < people.length; i++) {
// 		people[i].total = 0;
// 		for (var j  = 0; j < products.length; j++) {
// 			var n = count(products[j]);
// 			if (products[j].people[i].cbox.checked) {
// 				people[i].total += (~~(products[j].price / n) * 100) / 100;
// 				people_total_cost += (~~(products[j].price / n) * 100) / 100;
// 			}
// 		}
// 	}
// 	$("people_list_menu").innerText = "";
// 	for (var i = 0; i < people.length; i++) {
// 		var li = document.createElement("li"),
// 			name = document.createElement("span"),
// 			total_price = document.createElement("span");

// 		// li.className = "person_box";
// 		name.className = "name";
// 		total_price.className = "total_price"

// 		name.innerText = people[i].name;
// 		total_price.innerText = people[i].total;
				
// 		li.appendChild(name);
// 		li.appendChild(total_price);
// 		$("people_list_menu").appendChild(li);
// 		console.log(people[i].name, people[i].total);
// 	}
// 	for (var i = 0; i < products.length; i++) {
// 		total_cost += +products[i].price;
// 	}
// 	var li = document.createElement("li"),
// 		name = document.createElement("span"),
// 		total_price = document.createElement("span");

// 	// li.className = "person_box";
// 	name.className = "name";
// 	total_price.className = "total_price"

// 	// name.innerText = total_cost;
// 	total_price.innerText = total_cost + " / " + people_total_cost;
				
// 	li.appendChild(name);
// 	li.appendChild(total_price);
// 	$("people_list_menu").appendChild(li);
// 	menu.style.display = "block";
// }

// function count(product) {
// 	var n = 0;
// 	for (var i = 0; i < product.people.length; i++) {
// 		var p = product.people[i];
// 			if (p.cbox.checked)
// 		n++;
// 	}
// 	return n;
// }

// $("close").onclick = function() {
// 	menu.style.display = "none";
// }

// function $(id) {
// 	return document.getElementById(id);
// }

// function reset() {
// 	menu.style.display = "none";
// 	products = [];
// 	people = [];
// 	$("people_list").innerText = "";
// 	$("products_list").innerText = "";
// 	$("people_list_menu").innerText = "";
// }

(function() {
	window.onload = function() {
		window.addEventListener('mousedown', mousedown);
		var popupName = null,
			openAcceptPerson = false;

		function mousedown(e) {
			var action = e.target.getAttribute('action');
			switch(action) {
				case "open":
					openPopup(e);
				break;
				case "close":
					closePopup(e);
				break;
				case "accept-add-person":
					if (!openAcceptPerson) {
						var rect = $('people').getBoundingClientRect();
						$('accept-add-person').style['-webkit-transform'] = "translate3d(" + (e.pageX - rect.left - 15) + "px, " + (e.pageY - rect.top - 15) + "px, 0)";
						$('accept-add-person').style.display = "block";
						openAcceptPerson = true;
					} else {
						openAcceptPerson = false;
						$('accept-add-person').style.display = "none";
					}
				break;
			}
		}

		function openPopup(e) {	
			popupName = e.target.getAttribute("popupName");		

			if (!popupName || !$(popupName))
				return;

			switch (popupName) {
				case "popup-add-product":
					$("popup-box").style.display = "block";
					$(popupName).style["-webkit-transform"] = "translate3d(0, 0, 0)";
				break;
				case "popup-add-person":
					$("popup-box").style.display = "block";
					$(popupName).style["-webkit-transform"] = "translate3d(0, 0, 0)";
				break;
			}

			$('accept-add-person').style.display = "none";
			openAcceptPerson = false;
		}

		function closePopup(e) {
			$("popup-box").style.display = "none";

			if (!popupName)
				return;

			switch (popupName) {
				case "popup-add-product":
					$(popupName).style["-webkit-transform"] = "translate3d(-250px, 0, 0)";
				break;
				case "popup-add-person":
					$(popupName).style["-webkit-transform"] = "translate3d(250px, 0, 0)";
				break;
			}

			popupName = null;
		}

		function addProduct() {

		}

		function $(id) {
			return document.getElementById(id);
		}
	};
})();