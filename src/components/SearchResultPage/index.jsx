// import React, { useState } from 'react';
// import Select from 'react-select';

// const SearchWithAutocomplete = ({ allProducts }) => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = allProducts.map(product => ({
//     value: product.id,
//     label: product.title,
//   }));

//   const handleSearch = selectedOption => {
//     setSelectedOption(selectedOption);
//     // В selectedOption будет выбранный продукт, который вы можете использовать для отправки на сервер или другой обработки.
//   };

//   return (
//     <div>
//       <Select
//         value={selectedOption}
//         onChange={handleSearch}
//         options={options}
//         placeholder="Введите запрос"
//         isSearchable={true}
//       />
//     </div>
//   );
// };

// export default SearchWithAutocomplete;
