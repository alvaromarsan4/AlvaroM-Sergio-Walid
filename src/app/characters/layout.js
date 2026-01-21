export default function CharacterLayout({ children }) {
  return (
    <section className="animate-fadeIn">
      <div className="bg-primary text-primary-content p-4 rounded-t-box mb-4">
        <h2 className="text-2xl font-bold">Explorador de Personajes</h2>
      </div>
      <div className="p-2 bg-base-100 border border-base-200 rounded-b-box">
        {children}
      </div>
    </section>
  );
}