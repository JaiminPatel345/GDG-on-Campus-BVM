import React from "react"
import { EventCard } from "../components"

const Events = () => {
    return (
        <div>
            <h1>Events</h1>
            <EventCard
                title="Google Cloud Study GAM"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
                redirect="/event/study-jam"
                background="https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg"
            />
        </div>
    )
}

export default Events
