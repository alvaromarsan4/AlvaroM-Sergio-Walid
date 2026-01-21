'use client';
import { useState } from 'react';
import { useCharacters } from '@/hooks/useCharacters';
import StatsChart from '@/components/StatsChart';
import { motion } from "framer-motion"

export default function CharacterPage() {
  const [filter, setFilter] = useState('');
  const { characters, loading } = useCharacters(filter);

  return (
    <div className="flex flex-col items-center w-full space-y-10">
      {/* Título y Buscador Centrados */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black text-white tracking-tighter">
          REGISTRO <span className="text-primary italic">GALÁCTICO</span>
        </h1>
        <div className="form-control">
          <input 
            type="text" 
            placeholder="Filtrar por nombre..." 
            className="input input-bordered input-primary w-80 md:w-96 bg-black rounded-full text-center shadow-lg shadow-primary/20"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Layout de dos columnas: Izquierda (Cartas) - Derecha (Gráfico) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-start">
        
        {/* COLUMNA IZQUIERDA: Listado de Personajes */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
          {loading ? (
            <div className="col-span-full flex justify-center py-20">
              <span className="loading loading-infinity loading-lg text-primary"></span>
            </div>
          ) : characters.length > 0 ? (
            characters.map(char => (
              <div key={char.id} className="card card-side bg-neutral/50 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all group shadow-xl">
                <figure className="w-1/3 overflow-hidden">
                  <motion.img
  src={char.image}
  alt={char.name}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
  transition={{
    opacity: { duration: 0.4 },
    scale: { duration: 0.4 },
    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }}
  whileHover={{ scale: 1.12 }}
  className="cursor-pointer"
/>

                </figure>
                <div className="card-body p-4 justify-center">
                  <h3 className="card-title text-white text-base leading-tight">{char.name}</h3>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <div className="badge badge-primary badge-outline badge-xs">{char.species}</div>
                    <div className={`badge badge-xs ${char.status === 'Alive' ? 'badge-success' : 'badge-error'}`}>
                      {char.status}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-zinc-500 italic">No se encontraron sujetos en esta dimensión.</p>
          )}
        </div>

        {/* COLUMNA DERECHA: Gráfico Circular */}
        <aside className="lg:col-span-4 flex flex-col items-center space-y-4 order-1 lg:order-2 lg:sticky lg:top-24">
          <div className="badge badge-secondary badge-outline font-bold tracking-widest p-3">ANÁLISIS DE DATOS</div>
          {characters.length > 0 ? (
            <StatsChart characters={characters} />
          ) : (
            <div className="bg-neutral/30 h-64 w-full rounded-[2.5rem] flex items-center justify-center border border-dashed border-white/10">
              <p className="text-zinc-600 italic">Esperando datos...</p>
            </div>
          )}
        </aside>

      </div>
    </div>
  );
}