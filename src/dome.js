// const calcPrice = (event) => {
//   event.preventDefault();
//   let price = document.querySelector("#price").value;
//   let count = document.querySelector("#count").value;

//   console.log({ price, count });
//   return { price, count };
// };

// document.querySelector("#productForm").addEventListener("submit", calcPrice);


const calcPrice = (event) => {
  event.preventDefault();
  let price = document.querySelector("#price").value;
  let count = document.querySelector("#count").value;

 let finalPrice = +price * +count;
 showData(finalPrice);
 
};

const showData = (data) => {
document.querySelector("#result").innerHTML = data;
}

document.querySelector("#productForm").addEventListener("submit", calcPrice);