"use client";

import { useCart } from "@/lib/cart";
import NotAmazonHeader from "@/components/NotAmazonHeader";
import NotAmazonFooter from "@/components/NotAmazonFooter";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-white min-h-screen">
        <NotAmazonHeader />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          <div className="text-center py-16">
            <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some items to get started!</p>
            <Link 
              href="/"
              className="bg-amazon-orange hover:bg-orange-500 text-white font-bold py-2 px-6 rounded amazon-button"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <NotAmazonFooter />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <NotAmazonHeader />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <button 
            onClick={clearCart}
            className="text-amazon-blue hover:amazon-red hover:underline"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="border-b pb-6 mb-6">
                <div className="flex gap-4">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                    {item.size && <p className="text-sm text-gray-600">Size: {item.size}</p>}
                    {item.color && <p className="text-sm text-gray-600">Color: {item.color}</p>}
                    <p className="text-lg font-bold amazon-red mt-2">${item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <label className="text-sm font-medium">Qty:</label>
                        <select 
                          value={item.quantity}
                          onChange={(e) => updateQuantity(`${item.id}-${item.size}-${item.color}`, Number(e.target.value))}
                          className="border border-gray-300 rounded px-2 py-1"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(`${item.id}-${item.size}-${item.color}`)}
                        className="text-amazon-blue hover:amazon-red hover:underline text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="border border-gray-300 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal ({items.reduce((total, item) => total + item.quantity, 0)} items):</span>
                  <span className="font-bold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-green-700 font-bold">FREE</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="amazon-red">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-amazon-orange hover:bg-orange-500 text-white font-bold py-3 px-4 rounded amazon-button mb-2">
                Proceed to Checkout
              </button>
              
              <Link 
                href="/"
                className="block w-full text-center amazon-blue hover:amazon-red hover:underline text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NotAmazonFooter />
    </div>
  );
}