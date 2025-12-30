// CHANGED: fixed import path to the actual component file in src/components
import ReusableForm from '../components/form';

function AddProduct() {
  const productFields = [
    { name: "name", label: "Product Name", type: "text", placeholder: "Enter product name" },
    { name: "price", label: "Price", type: "number", placeholder: "Enter price" },
    { name: "description", label: "Description", type: "textarea", placeholder: "Enter description" },
  ];

  const handleAddProduct = (formData) => {
      fetch("http://localhost:5000/product",{
        method:"post",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify(formData)
      })
      .then((response)=> response.json())
      .then((data)=>{
        alert('product added succesfully');
        console.log("added:",data)
      })
      .catch((error) => console.error("error adding product:",error));
  };

  return (
    <div className="add-product">
      <ReusableForm
        title="Add Product"
        fields={productFields}
        submitText="Add Product"
        onSubmit={handleAddProduct}
      />
    </div>
  );
}

export default AddProduct;
