/* eslint-disable react/prop-types */
import React from "react"
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card"
import { Link } from "react-router-dom"

import { EventCard } from "../components"

const Events = () => {
    return (
        <div className="flex flex-col mt-36">
            <div>
                <h1 className=" text-white text-4xl text-center">Events</h1>
            </div>

            <div className="flex flex-nowrap gap-9 overflow-y-auto justify-center">
                <ThreeDCardDemo
                    title="Google Gen Ai study jam"
                    description="aslfdkhnasdlkfj asdefljkhbasluifhdjbjk sadkufghasudfhasudjfb sadkfujghaslifhduoisfhdjnfahjfoijwertuiewpoirtyjlkngflkjsdfhgoifrhdgknvn xcfhngoifhsdg lhgifdoisfdj"
                    imgUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    learnUrl="/events/genai"
                    registerUrl="/"
                />

                <ThreeDCardDemo
                    title="Google Gen Ai study jam"
                    description="aslfdkhnasdlkfj asdefljkhbasluifhdjbjk sadkufghasudfhasudjfb sadkfujghaslifhduoisfhdjnfahjfoijwertuiewpoirtyjlkngflkjsdfhgoifrhdgknvn xcfhngoifhsdg lhgifdoisfdj"
                    imgUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    learnUrl="/events/genai"
                    registerUrl="/"
                />

                <ThreeDCardDemo
                    title="Google Gen Ai study jam"
                    description="aslfdkhnasdlkfj asdefljkhbasluifhdjbjk sadkufghasudfhasudjfb sadkfujghaslifhduoisfhdjnfahjfoijwertuiewpoirtyjlkngflkjsdfhgoifrhdgknvn xcfhngoifhsdg lhgifdoisfdj"
                    imgUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    learnUrl="/events/genai"
                    registerUrl="/"
                />
            </div>
        </div>
    )
}

export default Events

const ThreeDCardDemo = ({
    title,
    description,
    imgUrl,
    learnUrl,
    registerUrl,
}) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={imgUrl}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={learnUrl}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                    >
                        Learn More →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="a"
                        target="_blank"
                        href={registerUrl}
                        className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
                    >
                        Register
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )
}
