/* eslint-disable react/prop-types */
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards"

const Events = () => {
    const EventData = [
        {
            title: "Google Gen Ai study jam1",
            description:
                "aslfdkhnasdlkfj asdefljkhbasluifhdjbjk sadkufghasudfhasudjfb sadkfujghaslifhduoisfhdjnfahjfoijwertuiewpoirtyjlkngflkjsdfhgoifrhdgknvn xcfhngoifhsdg lhgifdoisfdj",
            imgUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            learnUrl: "/events/genai",
            registerUrl: "/",
        },
        {
            title: "Google Gen Ai study jam2",
            description:
                "aslfdkhnasdlkfj asdefljkhbasluifhdjbjk sadkufghasudfhasudjfb sadkfujghaslifhduoisfhdjnfahjfoijwertuiewpoirtyjlkngflkjsdfhgoifrhdgknvn xcfhngoifhsdg lhgifdoisfdj",
            imgUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            learnUrl: "/events/genai",
            registerUrl: "/",
        },
        {
            title: "Google Gen Ai study jam3",
            description:
                "aslfdkhnasdlkfj asdefljkhbasluifhdjbjk sadkufghasudfhasudjfb sadkfujghaslifhduoisfhdjnfahjfoijwertuiewpoirtyjlkngflkjsdfhgoifrhdgknvn xcfhngoifhsdg lhgifdoisfdj",
            imgUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            learnUrl: "/events/genai",
            registerUrl: "/",
        },
        {
            title: "Google Gen Ai study jam4",
            description:
                "aslfdkhnasdlkfj asdefljkhbasluifhdjbjk sadkufghasudfhasudjfb sadkfujghaslifhduoisfhdjnfahjfoijwertuiewpoirtyjlkngflkjsdfhgoifrhdgknvn xcfhngoifhsdg lhgifdoisfdj",
            imgUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            learnUrl: "/events/genai",
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
