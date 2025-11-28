// Novo layout baseado no estilo "Máfia da Graxa"
// Tema: escuro, vibrante, com identidade forte, tipografia pesada, estilo "underground".

import React, { useState } from 'react';

export default function App() {
  const sampleProducts = [
    { id: 1, name: 'Camiseta Máfia', price: 59.9, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=60', description: 'Camiseta oficial da Máfia da Graxa.' },
    { id: 2, name: 'Adesivo Exclusivo', price: 9.9, image: 'https://images.unsplash.com/photo-1517686469429-8c6f3a0c8a7d?w=800&q=60', description: 'Adesivo resistente, original da Máfia.' },
    { id: 3, name: 'Bandana Preta', price: 29.9, image: 'https://images.unsplash.com/photo-1519340333755-5a6bff23b8e2?w=800&q=60', description: 'Bandana temática para eventos.' }
  ];

  const [products] = useState(sampleProducts);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id !== id));

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p));
  };

  const subtotal = cart.reduce((s, p) => s + p.price * p.qty, 0);

  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen bg-black text-white font-bold">
      {/* Header estilo máfia */}
      <header className="bg-black border-b border-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-wider text-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] drop-shadow-[0_0_8px_rgba(255,120,0,0.9)] drop-shadow-[0_0_6px_rgba(255,140,0,0.8)] uppercase">Máfia da Graxa</h1>

          <div className="flex items-center gap-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border border-gray-700 bg-gray-900 text-white rounded px-3 py-1 w-72"
              placeholder="Buscar produtos..."
            />
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] drop-shadow-[0_0_8px_rgba(255,120,0,0.9)] hover:bg-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] text-black font-bold px-4 py-2 rounded"
            >
              Carrinho ({cart.length})
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1600)' }}>
        <div className="w-full h-full bg-black/70 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl font-extrabold text-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] drop-shadow-[0_0_8px_rgba(255,120,0,0.9)] drop-shadow-[0_0_6px_rgba(255,140,0,0.8)] drop-shadow-lg">OFICIAL DA MÁFIA DA GRAXA</h2>
          <p className="text-lg mt-2 text-gray-200">Produtos exclusivos para os membros mais brabos.</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Produtos */}
        <section className="lg:col-span-3">
          <h3 className="text-2xl mb-4 text-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] drop-shadow-[0_0_8px_rgba(255,120,0,0.9)] drop-shadow-[0_0_6px_rgba(255,140,0,0.8)]">Produtos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filtered.map(product => (
              <article key={product.id} className="bg-gray-900 border border-gray-700 rounded p-4 shadow-xl">
                <img src={product.image} className="w-full h-48 object-cover rounded" />
                <h4 className="mt-3 text-xl text-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] drop-shadow-[0_0_8px_rgba(255,120,0,0.9)] drop-shadow-[0_0_6px_rgba(255,140,0,0.8)]">{product.name}</h4>
                <p className="text-gray-400 text-sm mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg">R$ {product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] drop-shadow-[0_0_8px_rgba(255,120,0,0.9)] hover:bg-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] text-black px-3 py-1 rounded"
                  >Adicionar</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Carrinho */}
        <aside className="bg-gray-900 border border-gray-700 rounded p-4">
          <h3 className="text-xl text-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] drop-shadow-[0_0_8px_rgba(255,120,0,0.9)] drop-shadow-[0_0_6px_rgba(255,140,0,0.8)]">Carrinho</h3>
          {cart.length === 0 && <p className="text-gray-500 mt-4">Carrinho vazio.</p>}

          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-3 mt-4">
              <img src={item.image} className="w-14 h-14 object-cover rounded" />
              <div className="flex-1">
                <p>{item.name}</p>
                <p className="text-gray-400 text-sm">R$ {item.price.toFixed(2)}</p>
                <div className="flex gap-2 mt-1">
                  <input type="number" min={1} value={item.qty} onChange={(e) => updateQty(item.id, Number(e.target.value))} className="w-20 bg-gray-800 border border-gray-600 rounded px-2 py-1" />
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 text-sm">Remover</button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4 border-t border-gray-700 pt-4">
            <div className="flex justify-between text-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] drop-shadow-[0_0_8px_rgba(255,120,0,0.9)] drop-shadow-[0_0_6px_rgba(255,140,0,0.8)] text-lg">Subtotal <span>R$ {subtotal.toFixed(2)}</span></div>
            <button onClick={() => setShowCheckout(true)} disabled={cart.length === 0} className={`mt-4 w-full py-2 rounded font-bold ${cart.length === 0 ? 'bg-gray-700 text-gray-500' : 'bg-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)] drop-shadow-[0_0_8px_rgba(255,120,0,0.9)] text-black hover:bg-orange-700 drop-shadow-[0_0_10px_rgba(255,100,0,1)]'}`}>Finalizar compra</button>
          </div>
        </aside>
      </main>

      <footer className="py-6 text-center text-gray-500">© {new Date().getFullYear()} Máfia da Graxa — Oficial</footer>
    </div>
  );
}
