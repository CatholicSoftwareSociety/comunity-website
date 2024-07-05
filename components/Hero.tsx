// hero image:
// Photo by <a href="https://unsplash.com/@jasminnb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jasmin Ne</a> on <a href="https://unsplash.com/photos/white-and-black-book-page--faTkS8srWc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

export default function Hero() {
  return (
    <section
      id="about"
      className="px-12 py-4 h-[60vh] flex md:justify-end items-center bg-heroImage bg-cover bg-bottom"
    >
      <div className="md:w-1/2 p-6">
        <h1 className="text-2xl mb-6 font-semibold">
          Catholic Software Society
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          eveniet maiores earum distinctio optio consequatur iusto, eos sunt ex
          accusantium maxime incidunt facere suscipit omnis sed ab. Fugit, quae
          nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </section>
  );
}
