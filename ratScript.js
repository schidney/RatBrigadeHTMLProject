var ratCart = new Array();

function addRatToCart(ratName, ratPrice)
{
	ratCart.push({name=ratName, price=ratPrice})
	localStoreRatCart();
}

function localStoreRatCart()
{
	window.localStorage.setItem("ratCart", JSON.stringify(ratCart));
}

function populateCart()
{
	ratCart = JSON.parse(window.localStorage.getItem("ratCart"));

	ratCart.forEach(rat => {
		console.log("Rat Name: " + rat.name + " | Rat Price: " + rat.price);
	});
}