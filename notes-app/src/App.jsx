import React, { useState } from "react";

const App = () => {
  
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    console.log("deleted");
    const copyTask = [...task];

    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="lg:flex h-screen bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="items-start lg:w-1/2 flex flex-col p-10  outline-none gap-5"
      >
        <input
          className="px-5 outline-none w-full py-2 border-2 rounded "
          type="text"
          placeholder="Enters Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="px-5 outline-none w-full h-35 py-2 border-2 rounded"
          placeholder="Enter Details"
          name=""
          id=""
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button className="bg-white w-full text-black p-5 py-2 rounded">
          Add Notes
        </button>
      </form>


      <div className="px-8 overflow-auto scrollbar-none border-l-2 h-full w-full lg:w-1/2 py-5">
        <h1>Your Notes</h1>
        <div className="flex flex-wrap mt-5  gap-8">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="bg-white text-black p-5 text-xl leading-tight h-52 w-40 rounded-2xl flex flex-col justify-between items-start "
              >
                <div>
                  <h3 className="font-bold  ">{elem.title}</h3>
                  <p className="text-sm">{elem.details}</p>
                </div>

                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="bg-red-400 w-full text-white text-sm rounded"
                >
                  delete note
                </button>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
