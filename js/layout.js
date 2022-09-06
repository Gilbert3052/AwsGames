
// Slider de Destacados

function printDestacados(elementHTML, data) {
    let html = "";

    data.forEach(({ id, name, price, stock, urlImages }) => {
        if(id < 11){
            html += `
            <div class="destacado_contain swiper-slide">
                <div class="item1-1 item sizingImg">
                    <img class="img-slider" src="${urlImages}" alt="${name}">
                </div>
                <div class="item__info_destacados ">
                    <p class="item_text">${name}</p>
                    <div class="comprar" id="${id}">
                        <p id="stock">Stock: ${stock}</p>
                        <p>/  Price: $${price}</p>
                        <i class="bx bx-cart-add bx-sm bx-tada-hover"></i>
                    </div>
                    
                </div>
            </div>
        ` 
        }
        
    });

    elementHTML.innerHTML = html;
}

// Slider de Actualizados Recientes

function printRecent(elementHTML, data) {
    let html = "";

    data.forEach(({ id, name, price, stock, urlImages }) => {
        if(id > 10 && id < 21){
            html += `
            <div class="destacado_contain swiper-slide">
                <div class="item1-1 item sizingImg">
                    <img class="img-slider" src="${urlImages}" alt="${name}">
                </div>
                <div class="item__info_destacados ">
                    <p class="item_text">${name}</p>
                    <div class="comprar" id="${id}">
                        <p>Stock: ${stock}</p>
                        <p>/  Price: $${price}</p>
                        <i class="bx bx-cart-add bx-sm bx-tada-hover"></i>
                    </div>
                    
                </div>
            </div>
        ` 
        }
        
    });

    elementHTML.innerHTML = html;
}

// Slider de Populares

function printPopular(elementHTML, data) {
    let html = "";

    data.forEach(({ id, name, price, stock, urlImages }) => {
        if(id > 20 && id < 31){
            html += `
            <div class="destacado_contain swiper-slide">
                <div class="item1-1 item sizingImg">
                    <img class="img-slider" src="${urlImages}" alt="${name}">
                </div>
                <div class="item__info_destacados ">
                    <p class="item_text">${name}</p>
                    <div class="comprar" id="${id}">
                        <p>Stock: ${stock}</p>
                        <p>/  Price: $${price}</p>
                        <i class="bx bx-cart-add bx-sm bx-tada-hover"></i>
                    </div>
                    
                </div>
            </div>
        ` 
        }
        
    });

    elementHTML.innerHTML = html;
}

export {printDestacados, printRecent, printPopular};