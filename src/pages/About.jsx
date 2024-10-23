// import React from "react"

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-gray-900 text-white py-12 px-8"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4">
                    Google Developer Groups on Campus
                </h2>
                <p className="text-lg">
                    Explore the world of technology with fellow students and
                    developers on campus. Learn, connect, and grow your skills
                    while building a community of like-minded individuals.
                </p>
                <div className="mt-8">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        Join a chapter
                    </button>
                </div>
            </div>

            {/* Cards for Connect, Learn, and Grow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold mb-4">Connect</h3>
                    <p className="text-gray-300">
                        Meet local developers and technologists. All are
                        welcome, including those with unique backgrounds and
                        from various companies and industries.
                    </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold mb-4">Learn</h3>
                    <p className="text-gray-300">
                        Learn about a range of technical topics and gain new
                        skills through hands-on workshops, training, events,
                        talks, and meetups, both online and in person.
                    </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold mb-4">Grow</h3>
                    <p className="text-gray-300">
                        Apply your knowledge and connections to build great
                        products, advance your skills, career, and network. Help
                        your community grow, too.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
