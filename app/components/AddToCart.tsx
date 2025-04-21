'use client';

const AddToCartButton = () => {
  return (
    <button
      className="btn btn-primary w-64 rounded-full"
      onClick={() => console.log('Clicked')}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
