import React from 'react'

const QuestionComponent = () => {
  return (
    <section className="flex flex-col px-10 gap-10 md:flex-row md:justify-evenly items-center w-full py-16 md:px-52  bg-gray-300 ">
        <div className="flex flex-col justify-start items-start gap-4 ">
          <h2 className="text-blue-950 font-bold text-2xl">
            Would you like to start a project with us?
          </h2>
          <p className="text-black md:pr-44">
            Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
          </p>
        </div>
        <button className="bg-blue-800 text-white px-10 py-4 hover:bg-blue-900 hover:text-white text-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-[5px]">
          Get A Quote
        </button>
      </section>
  )
}

export default QuestionComponent