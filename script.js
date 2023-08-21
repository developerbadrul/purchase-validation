
let totalPrice = 0;
function updatePrice(e) {
    const addedItemsList = document.getElementById('added-items');
    // console.log(e.parentNode.childNodes[3].childNodes[7].childNodes[1].innerText);
    const selectedItem = e.childNodes[7].childNodes[1].innerText;
    
    // console.log(addedItemsList.childNodes);
    // const existingItems = addedItemsList.childNodes;
    // for(existingItems of existingItems){
    //     console.log(existingItems);
    // }

    const newItem = document.createElement('li');
    newItem.innerText = selectedItem;
    addedItemsList.appendChild(newItem);

    const itemPrice = parseFloat(e.childNodes[7].childNodes[3].childNodes[1].innerText);
    // console.log('item price', itemPrice, typeof itemPrice);
    let currentPrice = document.getElementById('total-Price');
    // console.log('currrent price' , currentPrice, typeof currentPrice);
    totalPrice = totalPrice + itemPrice;
    // console.log(totalPrice);
    currentPrice.innerText = totalPrice;

    if (totalPrice !== 0) {
        const purchaseBtn = document.getElementById('purchase-btn');
        purchaseBtn.removeAttribute('disabled')
        if (totalPrice >= 200) {
            const couponApplyBtn = document.getElementById('coupon-apply-btn');
            couponApplyBtn.removeAttribute('disabled');
        }
    }


}
