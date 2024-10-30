/* eslint-disable react/prop-types */
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards"

const Events = () => {
    const EventData = [
        {
            title: "Figma Fusion: Where Ideas Take Shape",
            description: `Join us for an exciting event exploring the power of Figma, a leading design tool. Participate in a design challenge, showcase your creativity, and win amazing prizes! 
Total attendees: 95.`,
            imgUrl: "/figma.jpeg",
            registerUrl: "/",
        },
        {
            title: "Gen AI Study Jam",
            description:
                "Gen AI Study Jams will provide students an opportunity to kickstart their learning on Gen AI technology, and implement the learning by enabling them to build projects on the Google Cloud console.",
            imgUrl: "/genAi.jpeg",
            learnUrl: "/events/genai",
            registerUrl: "/",
        },
        {
            title: " Azure Cloud Computing Event",
            description:
                "In Azure Cloud Computing event, attendees received an introduction to fundamental cloud services. A Microsoft expert led the session, offering practical insights on real-world applications and best practices for cloud adoption.",
            imgUrl: "/azure.jpg",
            learnUrl: "/events/azure",
            registerUrl: "/",
        },
    ]

    return (
        <div className="flex flex-col mt-36">
            <div>
                <h1 className="text-white text-4xl text-center font-extrabold mb-8 tracking-widest">
                    Events
                </h1>
            </div>

            <div>
                <InfiniteMovingCards
                    items={EventData}
                    direction="left"
                    speed="normal"
                    pauseOnHover
                />
            </div>
        </div>
    )
}

export default Events
