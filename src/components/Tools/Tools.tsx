import Calculator from "../Calculator/Calculator";
import Note from "../Note/Note";

const Tools = () => {
  return (
    <section>
      <div className="md:container md:mx-auto p-4">
        <h1>Tools</h1>
        <div className="grid gap-6 grid-cols-1  sm:grid-cols-2 cards">
          <div className="my-4 p-4">
            <Calculator />
          </div>
          <div className="my-4 p-4">
            <Note />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
