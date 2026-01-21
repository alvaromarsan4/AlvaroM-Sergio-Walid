'use client';
import { useState } from 'react';
import { useCharacters } from '@/hooks/useCharacters';
import StatsChart from '@/components/StatsChart';
import { motion } from "framer-motion";

export default function CharacterPage() {
  const [filter, setFilter] = useState('');
  const { characters, loading } = useCharacters(filter);

  return (
    <div className="flex flex-col items-center w-full space-y-10">

      {/* TÍTULO + BUSCADOR */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black text-white tracking-tighter">
          REGISTRO <span className="text-primary italic">GALÁCTICO</span>
        </h1>

        <input
          type="text"
          placeholder="Filtrar por nombre..."
          className="input input-bordered input-primary w-80 md:w-96 bg-black rounded-full text-center"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full">

        {/* LISTADO PERSONAJES */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">

          {loading ? (
            <div className="col-span-full flex justify-center py-20">
              <span className="loading loading-infinity loading-lg text-primary"></span>
            </div>
          ) : characters.map(char => (

            <div
              key={char.id}
              className="
                card
                bg-neutral/60
                backdrop-blur
                border border-white/10
                shadow-xl
                transition-all
                hover:border-primary/50
              "
            >

              {/* IMAGEN */}
              <figure className="w-full h-64 flex items-center justify-center bg-black/40">
                <motion.img
                  src={char.image}
                  alt={char.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="
                    h-full
                    w-auto
                    object-contain
                  "
                />
              </figure>

              {/* TEXTO */}
              <div className="card-body items-center text-center">
                <h3 className="card-title text-white">{char.name}</h3>

                <div className="flex gap-2 mt-2">
                  <span className="badge badge-primary badge-outline">
                    {char.species}
                  </span>
                  <span className={`badge ${char.status === 'Alive' ? 'badge-success' : 'badge-error'}`}>
                    {char.status}
                  </span>
                </div>
              </div>

            </div>

          ))}

        </div>

        {/* GRÁFICO */}
        <aside className="lg:col-span-4 order-1 lg:order-2 lg:sticky lg:top-24">
          {characters.length > 0 ? <StatsChart characters={characters} /> : null}
        </aside>

      </div>
    </div>
  );
}
