// it resembles the user is trying to connect
// it will be like order number 1,2 n so on
function placeAnOrder(orderNumber){
    console.log("customer order:",orderNumber);


    cookAndDeliverFood(function(){
        console.log("delivered ordernumber",orderNumber);

    });

}

// next is the querying the database like 
// saying to the cook to cook and deliver
// here the operation is time consuming

function cookAndDeliverFood(callback){
    setTimeout(callback,5000);

}

// simulate users requests

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);


let swedeshna

