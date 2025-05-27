import { useState } from "react";

const productImages = [
  {
    src: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
    alt: "Main view",
    thumbnail: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
    alt: "Color options",
    thumbnail: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
    alt: "Cap detail",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    src: "https://pixabay.com/get/g671c944590a1482b3772734dd6407fad0d81989e70062645fa45bb3f31528093b572e2b927574b0f4f21efdb94f1ec894817d4e9997048b341be10fa14f1db56_1280.jpg",
    alt: "Lifestyle shot",
    thumbnail: "https://pixabay.com/get/g671c944590a1482b3772734dd6407fad0d81989e70062645fa45bb3f31528093b572e2b927574b0f4f21efdb94f1ec894817d4e9997048b341be10fa14f1db56_1280.jpg"
  },
  {
    src: "https://pixabay.com/get/gb7336f1420c4e31368ec5beb481554d9de124ba056fcb1d8926fda97a2195d326db05dbe8b1df6744eebe037e9213a7eb87ff0a0351fbaf04631de2c3bcf5e3d_1280.jpg",
    alt: "Size comparison",
    thumbnail: "https://pixabay.com/get/gb7336f1420c4e31368ec5beb481554d9de124ba056fcb1d8926fda97a2195d326db05dbe8b1df6744eebe037e9213a7eb87ff0a0351fbaf04631de2c3bcf5e3d_1280.jpg"
  },
  {
    src: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
    alt: "Size options",
    thumbnail: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  }
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="sticky top-4">
      {/* Main Product Image */}
      <div className="mb-4">
        <img 
          src={productImages[selectedImage].src}
          alt={productImages[selectedImage].alt}
          className="w-full h-96 object-contain border rounded"
        />
      </div>
      
      {/* Thumbnail Images */}
      <div className="grid grid-cols-6 gap-2">
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={image.alt}
            className={`w-full h-16 object-contain border-2 rounded cursor-pointer ${
              index === selectedImage 
                ? 'thumbnail-active' 
                : 'border-gray-300 hover:border-amazon-blue'
            }`}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
