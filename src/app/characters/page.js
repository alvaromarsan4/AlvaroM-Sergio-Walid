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
          className="input input-bordered input-primary w-72 sm:w-96 bg-black rounded-full text-center"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* LAYOUT PRINCIPAL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full">

        {/* GRÁFICO */}
        <aside className="
          lg:col-span-4
          order-1
          lg:order-2
          flex
          justify-center
          lg:justify-start
          lg:sticky
          lg:top-24
        ">
          <div className="w-full max-w-sm flex justify-center">
            {characters.length > 0 && <StatsChart characters={characters} />}
          </div>
        </aside>

        {/* LISTADO */}
        <div className="lg:col-span-8 order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-6">

          {loading && (
            <div className="col-span-full flex justify-center py-20">
              <span className="loading loading-infinity loading-lg text-primary"></span>
            </div>
          )}

          {!loading && characters.map(char => (
            <div
              key={char.id}
              className="
                card
                bg-neutral/60
                border border-white/10
                shadow-xl
                overflow-hidden
              "
            >

              {/* IMAGEN (NUNCA SE SALE) */}
              <figure className="w-full h-72 bg-black flex items-center justify-center">
                <motion.img
                  src={char.image}
                  alt={char.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="
                    max-h-full
                    max-w-full
                    object-contain
                  "
                />
              </figure>

              {/* TEXTO BIEN ALINEADO */}
              <div className="card-body text-center space-y-3">
                <h3 className="text-xl font-bold text-white">
                  {char.name}
                </h3>

                <div className="flex justify-center gap-2">
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
      </div>
    </div>
  );
}
