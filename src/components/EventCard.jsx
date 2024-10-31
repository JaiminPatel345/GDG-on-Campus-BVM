/* eslint-disable react/prop-types */
const EventCard = ({ title, description, redirect, background }) => (
    <div
        className="relative max-w-[35ch] rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 focus-within:scale-105"
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
        }}
    >
        <div className="card-content bg-gradient-to-b from-transparent via-black/30 to-black p-6 transition-transform duration-500 hover:translate-y-0 translate-y-[65%]">
            <h2 className="relative text-white text-xl font-bold mb-4">
                {title}
                <span className="absolute left-0 bottom-[-0.5rem] h-1 w-full bg-green-500 transform scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100"></span>
            </h2>
            <p className="card-body text-white/85 mb-4 opacity-0 transition-opacity duration-500 hover:opacity-100">
                {description}
            </p>
            <a
                href={redirect}
                className="button inline-block text-neutral-900 bg-green-400 py-2 px-5 rounded transition-colors duration-500 hover:bg-neutral-100 focus:bg-neutral-100"
            >
                Learn More
            </a>
        </div>
    </div>
)

export default EventCard
