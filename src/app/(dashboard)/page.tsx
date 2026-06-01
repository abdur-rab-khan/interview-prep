import React from "react";

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 px-4 font-sans">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Theme Showcase
        </h1>
        <p className="text-slate-400 max-w-2xl">
          These custom components are built to match the industrial, high-tech
          aesthetic of the application.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Buttons */}
        <div className="card-theme space-y-6">
          <h2 className="text-xl font-semibold text-white mb-4 italic tracking-tight">
            Interactive Actions
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-theme">Standard Action</button>
            <button className="btn-theme-primary">Primary Action</button>
          </div>
          <div className="relative group max-w-fit">
            <div className="glow-blue group-hover:bg-blue-500/40" />
            <button className="btn-theme relative">Glow Hover Effect</button>
          </div>
        </div>

        {/* Inputs */}
        <div className="card-theme space-y-6">
          <h2 className="text-xl font-semibold text-white mb-4 italic tracking-tight">
            Data Entry
          </h2>
          <div className="space-y-4">
            <div>
              <label className="label-theme">Example Input</label>
              <input
                type="text"
                className="input-theme"
                placeholder="Type something..."
              />
            </div>
            <div>
              <label className="label-theme">Example Area</label>
              <textarea
                className="textarea-theme"
                placeholder="Share your thoughts..."
              ></textarea>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Section */}
      <section className="card-theme">
        <h2 className="text-xl font-semibold text-white mb-6 italic tracking-tight text-center">
          Form Layout Example
        </h2>
        <form className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label-theme">First Name</label>
              <input type="text" className="input-theme" placeholder="John" />
            </div>
            <div>
              <label className="label-theme">Last Name</label>
              <input type="text" className="input-theme" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="label-theme">Email Address</label>
            <input
              type="email"
              className="input-theme"
              placeholder="john@example.com"
            />
          </div>
          <button type="submit" className="btn-theme-primary w-full">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}

export default HomePage;
