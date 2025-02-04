export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 h-14 bg-primary animate-out"></header>
      <main className="min-h-screen">
        <section className="h-96 bg-amber-300"></section>
        <section className="mx-10 mt-14 h-20 bg-primary p-4"></section>
        <section className="flex flex-col items-center">
          <h2 className="mb-10 mt-12 font-[family-name:var(--font-poppins)] text-3xl font-medium uppercase">
            Location de matériel pour réceptions
          </h2>
          <div className="mx-auto flex h-96 flex-col bg-red-100 p-4">
            <h3 className="text-center font-[family-name:var(--font-poppins)] text-2xl font-medium uppercase">
              Nos services
            </h3>
            <p className="font-[family-name:var(--font-geist-sans)] text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, purus sit amet tincidunt varius, neque orci aliquam
              libero, nec ultricies lacus nunc nec justo. Nulla facilisi. Donec
              nec justo non odio tincidunt tincidunt. Sed vel eros euismod,
              tincidunt nunc nec, ultricies turpis. Donec sit amet odio nec
              libero tincidunt facilisis. Sed nec nunc eget purus fermentum
              tincidunt. Nullam auctor, libero vel tincidunt ultricies, purus
              justo fermentum nunc, nec tincidunt est nisl nec ex. Nulla
              facilisi. Donec nec justo non odio tincidunt tincidunt. Sed vel
              eros euismod, tincidunt nunc nec, ultricies turpis. Donec sit amet
              odio nec libero tincidunt facilisis. Sed nec nunc eget purus
              fermentum tincidunt. Nullam auctor, libero vel tincidunt
              ultricies, purus justo fermentum nunc, nec tincidunt est nisl nec
              ex.
            </p>
          </div>
          <span className="size-20"></span>
        </section>
        <section className="mx-6 my-8 min-h-screen rounded-2xl bg-green-400"></section>
      </main>
      <footer className="h-28 bg-primary"></footer>
    </div>
  );
}
