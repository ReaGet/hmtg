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
		var tabs = $("tabs").getElementsByTagName("li"),
			pages = $("pages").getElementsByTagName("li");

		tabs = toArray(tabs);
		pages = toArray(pages);

		window.addEventListener('mousedown', setActive);

		utils.swipedetect($("pages"), function(direction) {
			if (direction == "up") {
				
				// header
				$('header').style.height = "85px";
				$('header').querySelector('h3').style['line-height'] = "50px";
				$('header').querySelector('h3').style['font-size'] = "20px";

				//container
				$('container').style['margin-top'] = "86px";
			}
		});

		function setActive(e) {
			var elem = e.target,
				index = tabs.indexOf(elem.parentNode),
				className = elem.className;

			if (elem.tagName.toLowerCase() == 'i') {
				index = tabs.indexOf(elem.parentNode.parentNode);
				elem = elem.parentNode;
			}

			if (index > -1) {
				if (elem.id == "active-tab")
					return;

				for (var i = 0; i < tabs.length; i++) {
					tabs[i].childNodes[0].id = "";
					tabs[i].childNodes[0].className = tabs[i].childNodes[0].querySelector("i").className;
				}

				elem.id = "active-tab";
				elem.className += "-active";

				for (var i = 0; i < pages.length; i++) {
					pages[i].id = "";
				}

				pages[index].id = "active-page";
			}
		}

		function toArray(arr) {
			var t = [];
			for (var i = 0; i < arr.length; i++) {
				t.push(arr[i]);
			}
			return t;
		} 

		function $(id) {
			return document.getElementById(id);
		}
	};
})();