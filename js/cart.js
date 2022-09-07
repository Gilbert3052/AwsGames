let cart = {};

function printCart(elementHTML){
    let html = "";

    const arrayCart = Object.values(cart);

    arrayCart.forEach(({ id, name, urlImages, amount, stock, price}) => {
        html += `
        <div class="cart_item" id="${stock}">
            <h4 class="item_title">${name}</h4>
            <div class="item">
                <div class="item_img">
                    <img src="${urlImages}" alt="${name}">
                </div>
                <div class="item_options" >
                    <p>$${price}</p>
                    <div class="sum_rest" id= "${id}">
                        <i class="bx bx-plus-circle bx-sm" ></i>
                        <p>${amount}</p>
                        <i class="bx bx-minus-circle bx-sm"></i>
                        <i class="bx bx-trash bx-sm remove"></i>
                    </div>
                </div>
            </div>
        </div>
    `;

    });
    elementHTML.innerHTML = html;

}

export {printCart, cart};