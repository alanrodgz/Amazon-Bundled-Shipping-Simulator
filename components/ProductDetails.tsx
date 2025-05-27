"use client";

import { useState } from "react";

const colors = [
  { name: "Black", value: "bg-black", selected: true },
  { name: "Blue", value: "bg-blue-500", selected: false },
  { name: "Red", value: "bg-red-500", selected: false },
  { name: "Green", value: "bg-green-500", selected: false },
  { name: "Pink", value: "bg-pink-400", selected: false },
  { name: "Purple", value: "bg-purple-500", selected: false },
];

const sizes = [
  { name: "18 Fl Oz", price: "$39.95", selected: false },
  { name: "24 Fl Oz", price: "$42.95", selected: false },
  { name: "32 Fl Oz", price: "$44.99", selected: true },
  { name: "40 Fl Oz", price: "$49.95", selected: false },
  { name: "64 Fl Oz", price: "$59.95", selected: false },
];

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("32 Fl Oz");

  return (
    <div>
      <h1 className="text-2xl amazon-dark mb-2">
        Hydro Flask Water Bottle - Stainless Steel & Vacuum Insulated - Wide Mouth with Leak Proof Flex Cap - 32 oz, Black
      </h1>
      
      <div className="text-sm amazon-gray mb-1">
        Brand: <span className="amazon-blue">Hydro Flask</span>
      </div>
      
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          <div className="star-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <span className="amazon-blue ml-1 hover:amazon-red hover:underline cursor-pointer">4.6</span>
        </div>
        <span className="amazon-blue ml-2 hover:amazon-red hover:underline cursor-pointer">23,847 ratings</span>
      </div>

      <div className="border-t border-b border-gray-200 py-3 mb-4">
        <div className="text-xs amazon-gray">1K+ bought in past month</div>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline">
          <span className="text-xs amazon-gray mr-1">$</span>
          <span className="text-2xl amazon-red">44</span>
          <span className="text-sm amazon-red">99</span>
        </div>
        <div className="text-xs amazon-gray">FREE Returns</div>
        <div className="text-sm">
          <span className="amazon-gray">FREE delivery</span>
          <span className="font-bold"> Wednesday, January 17</span>
          <span className="amazon-gray"> if you order within </span>
          <span className="text-green-700 font-bold">2 hrs 45 mins</span>
        </div>
        <div className="amazon-blue text-sm hover:amazon-red hover:underline cursor-pointer">
          Or fastest delivery <span className="font-bold">Tomorrow, January 16</span>
        </div>
      </div>

      {/* Color Selection */}
      <div className="mb-4">
        <div className="text-sm font-bold mb-2">Color: <span className="font-normal">{selectedColor}</span></div>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`w-8 h-8 ${color.value} rounded border-2 cursor-pointer ${
                selectedColor === color.name ? 'border-amazon-blue' : 'border-gray-300 hover:border-amazon-blue'
              }`}
              onClick={() => setSelectedColor(color.name)}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-4">
        <div className="text-sm font-bold mb-2">Size: <span className="font-normal">{selectedSize} (Pack of 1)</span></div>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size.name}
              className={`border rounded px-3 py-2 text-sm text-center ${
                selectedSize === size.name
                  ? 'border-2 border-amazon-blue'
                  : 'border-gray-300 hover:border-amazon-blue'
              }`}
              onClick={() => setSelectedSize(size.name)}
            >
              <div>{size.name}</div>
              <div className="text-xs amazon-gray">{size.price}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Product Features */}
      <div className="mb-6">
        <h3 className="font-bold mb-2">About this item</h3>
        <ul className="space-y-1 text-sm">
          <li>• <strong>24-HOUR COLD, 12-HOUR HOT:</strong> TempShield insulation eliminates condensation and keeps beverages cold up to 24 hours and hot up to 12 hours</li>
          <li>• <strong>PURE TASTE:</strong> Made with 18/8 pro-grade stainless steel to ensure pure taste and no flavor transfer</li>
          <li>• <strong>WIDE MOUTH:</strong> Easy to fill, drink from and clean; fits most backcountry water filters</li>
          <li>• <strong>LEAK PROOF:</strong> Leak proof when closed and features a wide mouth opening for easy filling and cleaning</li>
          <li>• <strong>LIFETIME WARRANTY:</strong> Manufactured with premium materials and backed by our lifetime warranty</li>
        </ul>
      </div>
    </div>
  );
}
