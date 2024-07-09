// import axios from "axios";
// import { useState } from "react";
// import { getErrorMessageBetterBetterTres } from "./errors/ErrorCodes";
// import { Button } from "antd";
// import { PRODUCT_ENDPOINT } from "./constants/endpoints";

// function CleanCodeTres() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true)
//       const data = await axios.get(PRODUCT_ENDPOINT);
//       setIsLoading(false)
//       setProducts(data.data.products);
//     } catch (error) {
//       setIsLoading(false)
//       setErrorMessage(getErrorMessageBetterBetterTres(error.code));
//     }
//   };

//   return (
//     <>
//       <Button onClick={fetchProducts}>Fetch Products</Button>
//       {
//         isLoading ? <>Loading...</> :
//         {
//           products.map((product) => (
//             <div key={product.id}>
//               <h2>{product.title}</h2>
//               <p>{product.description}</p>
//             </div>
//           ))
//         }

//         }
//       {errorMessage ?? ""}
//     </>
//   );
// }

// export default CleanCodeTres;
