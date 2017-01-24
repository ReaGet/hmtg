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

		window.addEventListener('mousedown', mousedown, false);
		window.addEventListener('mouseup', mouseup, false);

		var popupName = null,
			openAcceptPerson = false
			acceptPosition = { x: null, y: null },
			downTimer = null,
			editingProduct = false;

		var current = {
				products: [],
				people: [],
				total_price: 0,
				index: 0
			}

		function mousedown(e) {
			var action = e.target.getAttribute('action');

			if (e.target.parentNode.getAttribute("action") == "edit" && !action)
				action = e.target.parentNode.getAttribute("action");

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
						acceptPosition.x = (e.pageX - rect.left);
						acceptPosition.y = (e.pageY - rect.top);
					} else {
						openAcceptPerson = false;
						$('accept-add-person').style.display = "none";
						acceptPosition.x = acceptPosition.y = null;
					}
				break;
				case "add-product":
					addProduct();
				break;
				case "save-product":
					saveProduct();
				break;
				case "add-person":
					addPerson(e);
				break;
				case "edit":
					clearTimeout(downTimer);
					downTimer = window.setTimeout(function() {
						var products = $('product-list').querySelectorAll('li');
						for (var i = 0; i < products.length - 1; i++) {
							var elem = products[i].querySelector('div');
							elem.style.display = "block";
						}
						editingProduct = true;
					}, 900);
				break;
				default:

				break;
			}

			if (editingProduct) {
				if (e.target.id == "popup-product-edit" || e.target.id == "popup-box" || e.target.className == "edit-btn")
					return;

				var products = $('product-list').querySelectorAll('li');
				for (var i = 0; i < products.length - 1; i++) {
					var elem = products[i].querySelector('div');
					elem.style.display = "none";
				}
				editingProduct = false;
			}
		}

		function mouseup(e) {
			var action = e.target.getAttribute('action');
			switch(action) {
				case "edit":
					clearTimeout(downTimer);
				break;
			}
		}

		function openPopup(e) {	
			popupName = e.target.getAttribute("popupName");

			if (!popupName || !$(popupName))
				return;

			switch (popupName) {
				case "popup-product":
					$("popup-box").style.display = "block";
					$(popupName).style["-webkit-transform"] = "translate3d(0, 0, 0)";

					$('popup-product').querySelector("input").focus()
				break;
				case "popup-person":
					$("popup-box").style.display = "block";
					$(popupName).style["-webkit-transform"] = "translate3d(0, 0, 0)";
				break;
				case "popup-product-edit":
					var inputs = $("popup-product-edit").querySelectorAll("input"),
						index = e.target.parentNode.getAttribute("index");

					current.index = index;

					inputs[0].value = current.products[index].name;
					inputs[1].value = current.products[index].price;

					$("popup-box").style.display = "block";
					$(popupName).style["-webkit-transform"] = "translate3d(0, 0, 0)";
				break;
				case "popup-person-edit":

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
				case "popup-product":
					$(popupName).style["-webkit-transform"] = "translate3d(-250px, 0, 0)";
				break;
				case "popup-product-edit":
					$("popup-product-edit").style["-webkit-transform"] = "translate3d(-250px, 0, 0)";
				break;
				case "popup-person":
					$(popupName).style["-webkit-transform"] = "translate3d(250px, 0, 0)";
					acceptPosition.x = acceptPosition.y = null;
				break;
			}

			popupName = null;
		}

		function addProduct() {
			var inputs = $('popup-product').querySelectorAll("input"),
				name = inputs[0].value,
				price = inputs[1].value;

			if (isFinite(price)) {
				$("popup-product").style["-webkit-transform"] = "translate3d(-250px, 0, 0)";
				$("popup-box").style.display = "none";

				var li = document.createElement('li'),
					div = document.createElement("div"),
					span = document.createElement("span");

				span.innerText = name;
				li.setAttribute("type", "product");
				li.setAttribute("action", "edit");
				li.setAttribute("index", current.products.length);

				div.className = "edit-btn";
				div.setAttribute("action", "open");
				div.setAttribute("popupName", "popup-product-edit");

				li.appendChild(span);
				li.appendChild(div);

				$('product-list').insertBefore(li, $('product-list').childNodes[0]);

				inputs[0].value = inputs[1].value = "";
				inputs[1].className = "";

				current.total_price += +price;
				$("total-price").innerText = current.total_price;

				current.products.push({ name: name, price: price });
			} else {
				inputs[1].className = "error";
			}
		}

		function saveProduct() {
			var inputs = $("popup-product-edit").querySelectorAll("input"),
				lis = $("product-list").querySelectorAll("li"),
				name = inputs[0].value,
				price = inputs[1].value;

			if (isFinite(price)) {
				$("popup-product-edit").style["-webkit-transform"] = "translate3d(-250px, 0, 0)";
				$("popup-box").style.display = "none";

				current.products[current.index].name = name;
				current.products[current.index].price = price;

				current.index = (current.products.length - current.index - 1);

				lis[current.index].querySelector("span").innerText = name;

				inputs[0].value = inputs[1].value = "";
				inputs[1].className = "";
			} else {
				inputs[1].className = "error";
			}
		}

		function addPerson(e) {
			var input = $('popup-person').querySelector("input"),
				name = input.value;

			$(popupName).style["-webkit-transform"] = "translate3d(250px, 0, 0)";
			$("popup-box").style.display = "none";

			var div = document.createElement('div');
			div.className = "person";
			div.innerText = name;
			div.style['-webkit-transform'] = "translate3d(" + (acceptPosition.x - 20) + "px, " + (acceptPosition.y - 20) + "px, 0)";
			div.setAttribute("type", "person");
			div.setAttribute("index", current.people.length);
			$('people').insertBefore(div, $('people').childNodes[0]);

			input.value = "";
			current.people.push({ name: name });
		}

		function $(id) {
			return document.getElementById(id);
		}
	};
})();