let username = "";
let password = "";
let enter = false;

//Login
alert("Please sign in");

while (username === "" && password === ""){
    username = prompt("Enter a username: ");
    password = prompt("Enter a password: ");
    if(username !== "" && password !== ""){
        alert("Successful Login. Welcome "+ username + " to KNY Shop");
        enter = true;
    }else{
        alert("Please enter a valid username and password");
    }
}

//Purchase
let productPrice = 0;
let quantity = 0;

function showProducts() {
    let products = prompt("These are our products in stock: \n 1. Tops \n 2. Dresses \n 3. Jackets \n 4. Sweaters \n 5. Pants \n 6. Shorts \n 7. Skirts \n Press X to finish");
    while(products != "X" && products != "x") {
        switch(products) {
            case "1": 
                buyProducts();
                partialPrice(70);
                alert("The purchase price is $" + productPrice);
                break;
            case "2": 
                buyProducts();
                partialPrice(120);
                alert("The purchase price is $" + productPrice);
                break;
            case "3": 
                buyProducts();
                partialPrice(300);
                alert("The purchase price is $" + productPrice);
                break;
            case "4": 
                buyProducts();
                partialPrice(230);
                alert("The purchase price is $" + productPrice);
                break;
            case "5": 
                buyProducts();
                partialPrice(140);
                alert("The purchase price is $" + productPrice);
                break;
            case "6": 
                buyProducts();
                partialPrice(85);
                alert("The purchase price is $" + productPrice);
                break;
            case "7": 
                buyProducts();
                partialPrice(105);
                alert("The purchase price is $" + productPrice);
                break;
        }
        products = prompt("These are our products in stock: \n 1. Tops \n 2. Dresses \n 3. Jackets \n 4. Sweaters \n 5. Pants \n 6. Shorts \n 7. Skirts \n Press X to finish");
    }
}

function buyProducts(){
    quantity = parseInt(prompt("Enter the amount of products you want to buy: "));
    return quantity;
}

function partialPrice(price) {
    productPrice += price * quantity;
    return productPrice;
}

if(enter){
    showProducts()
    alert("The total price of your purchase is $"+productPrice);
    alert("Thank you for your purchase. We hope to see you soon.");
}