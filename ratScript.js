var ratCart = new Array();
loadRatCart();

function loadRatCart()
{
	ratCart = JSON.parse(window.localStorage.getItem("ratCart"));

	if(ratCart == null)
	{
		ratCart = new Array();
	}
}

function addRatToCart(ratName, ratPrice)
{
	var noRepeat = true;

	ratCart.forEach(rat => {
		if(rat.name == ratName)
		{
			noRepeat = false;
		}
	});

	if(noRepeat)
	{
		ratCart.push({name: ratName, price: ratPrice})
		localStoreRatCart();
	}
}

function removeCartItem(ratName)
{
	ratCart.forEach((rat, index) => {
		if(rat.name == ratName)
		{
			ratCart.splice(index, 1);
		}
	});

	document.getElementsByName("ratCart")[0].innerHTML = "";

	localStoreRatCart();
	loadRatCart();
	populateCart();
}

function localStoreRatCart()
{
	window.localStorage.setItem("ratCart", JSON.stringify(ratCart));
}

function populateCart()
{
	ratCart.forEach(rat => {
		var divWrapper = document.createElement("div");
		divWrapper.className = "cartItemWrapper";

		var itemName = document.createElement("div");
		itemName.className = "cartItemName";
		itemName.innerHTML = rat.name;

		var itemPrice = document.createElement("div");
		itemPrice.className = "cartItemPrice";
		itemPrice.innerHTML = "$" + rat.price;

		var removeButtonWrapper = document.createElement("div");
		removeButtonWrapper.className = "cartItemRemoveButtonWrapper";

		var removeButton = document.createElement("button");
		removeButton.className = "cartItemRemoveButton";
		removeButton.setAttribute("onClick", 'removeCartItem("' + rat.name + '")');
		removeButton.innerHTML = "Remove from Cart"

		divWrapper.appendChild(itemName);
		divWrapper.appendChild(itemPrice);
		divWrapper.appendChild(removeButtonWrapper);

		removeButtonWrapper.appendChild(removeButton);

		document.getElementsByName("ratCart")[0].appendChild(divWrapper);
	});
}