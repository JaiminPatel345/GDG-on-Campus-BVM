// import React from "react"
import { ProfileCard } from "../components"

const Team = () => {
    const teamMembers = [
        // Mentor
        [
            {
                name: "MNS Arjun",
                role: "Lead",
                linkedinUrl: "",
                gmailUrl: "",
                githubUrl: "",
                imageUrl: "",
            },

            {
                name: "Dr. Vatsal Shah",
                role: "Faculty Advisor",
                linkedinUrl:
                    "https://www.linkedin.com/in/dr-vatsal-shah-03aa8218b",
                gmailUrl: "https://gdsc.community.dev/u/m6h7ku/",
                githubUrl: "",
                imageUrl: "",
            },

            {
                name: "Prof. Bijal Dalwadi",
                role: "Faculty Co-ordinator",
                linkedinUrl: "#",
                gmailUrl: "#",
                githubUrl: "",
                imageUrl: "",
            },

            {
                name: "Abhishek Nalla",
                role: "Mentor",
                linkedinUrl: "https://www.linkedin.com/in/abhisheknalla",
                gmailUrl: "nallaabhi2003@gmail.com",
                githubUrl: "https://github.com/abhinalla003",
                imageUrl:
                    "https://drive.google.com/open?id=1DgnAHrUvOP_XpozU_sVxWeeOVkrO2DTj",
            },
        ],

        // Design & Graphics Experts
        [
            {
                name: "Om Prajapati",
                role: "Design & Graphics Expert",
                linkedinUrl: "",
                gmailUrl: "theprajapatiom@gmail.com",
                githubUrl: "",
                imageUrl:
                    "https://drive.google.com/open?id=1lHTA5gBJQ6BIx0V8Ko7HcLKpl_4vGgDc",
            },
            {
                name: "Yatri Chhatrala",
                role: "Design & Graphics Expert",
                linkedinUrl: "",
                gmailUrl: "yatrichhatrala@gmail.com",
                githubUrl: "https://github.com/yatri28",
                imageUrl:
                    "https://drive.google.com/open?id=11Wrq5Y1kHoQ-huy16zi0rQHRag_mmlcq",
            },
        ],

        [
            {
                name: "Aditya Patel",
                role: "PR Handler",
                linkedinUrl: "",
                gmailUrl: "adityapatel14062006@gmail.com",
                githubUrl: "",
                imageUrl:
                    "https://drive.google.com/open?id=1AlOMyDGECOq8jewmUYMQGuvC4v3yZCP7",
            },
            {
                name: "Pratibha Indravath",
                role: "PR Handler",
                linkedinUrl: "",
                gmailUrl: "pratibhaindravath06@gmail.com",
                githubUrl: "https://github.com/Pratibha706",
                imageUrl:
                    "https://drive.google.com/open?id=1qC-e7zlLMBS3LZIkEX89qx5rAfB4EpgU",
            },
            {
                name: "Vihaa Shah",
                role: "PR Handler",
                linkedinUrl: "",
                gmailUrl: "vihaa.shah23@gmail.com",
                githubUrl: "https://github.com/vihaa23",
                imageUrl:
                    "https://drive.google.com/open?id=1yisK0aNFxA0rqLO06le0ai0jTCJaY33n",
            },
        ],

        // Content Artisans
        [
            {
                name: "Saniya Masih",
                role: "Content Artisan",
                linkedinUrl:
                    "https://www.linkedin.com/in/saniya-masih-130a44283",
                gmailUrl: "saniyamasih1837@gmail.com",
                githubUrl: "",
                imageUrl:
                    "https://drive.google.com/open?id=1Jv7xO44YvEI6XXltXS3p_ASKrKPmnBy8",
            },
            {
                name: "Tanisha Patel",
                role: "Content Artisan",
                linkedinUrl: "",
                gmailUrl: "p.tanisha257@gmail.com",
                githubUrl: "",
                imageUrl:
                    "https://drive.google.com/open?id=1zQihr4sPqDKlEjq0BjSP7rjoE1YxKBZF",
            },
        ],

        [
            {
                name: "Vishal Sharat Jena",
                role: "Associate Lead",
                linkedinUrl: "",
                gmailUrl: "vishal1713vsl@gmail.com",
                githubUrl: "WeR4Code",
                imageUrl:
                    "https://drive.google.com/open?id=1O-C79Qt1LRfXxISfn3yK2Cy-4_KeOy76",
            },
            {
                name: "Jaimin Detroja",
                role: "Tech Expert",
                linkedinUrl: "https://www.linkedin.com/in/jaimindetroja345/",
                gmailUrl: "officialjaimin345@gmail.com",
                githubUrl: "https://github.com/JaiminPatel345",
                imageUrl:
                    "https://drive.google.com/open?id=1dbTGLxsZqQ7QlRdCvcl2mnDjUhfnZJeB",
            },

            {
                name: "Tanish Himanshu Kamdar",
                role: "ML Associate",
                linkedinUrl: "https://www.linkedin.com/in/tanishkamdar/",
                gmailUrl: "tanishkamdar07@gmail.com",
                githubUrl: "https://github.com/Techoder",
                imageUrl:
                    "https://drive.google.com/open?id=183OQjWQWuRr932wevcWGSXZIVq6a2v72",
            },

            {
                name: "Narendra Mali",
                role: "Frontend Associate",
                linkedinUrl:
                    "https://www.linkedin.com/in/mali-narendra-60a508221",
                gmailUrl: "narendramali7874@gmail.com",
                githubUrl: "https://github.com/Naren7874",
                imageUrl:
                    "https://drive.google.com/open?id=1Zt51gfWQx62dj8F_1YmIomE5u1mqX6tH",
            },

            {
                name: "Rudra Prajapati",
                role: "CyberSecurity Associate",
                linkedinUrl:
                    "https://www.linkedin.com/in/rudra-prajapati-b34694274",
                gmailUrl: "prajapatirudra2594@gmail.com",
                githubUrl: "https://github.com/Rudra250",
                imageUrl:
                    "https://drive.google.com/open?id=1-wsk52aDbIU-ygbF_Ok-QK2226MVLfqA",
            },

            {
                name: "Krish Patel",
                role: "App Dev Associate",
                linkedinUrl:
                    "https://www.linkedin.com/in/krish-patel-84005320b",
                gmailUrl: "krishpatel.dcom46@gmail.com",
                githubUrl: "https://github.com/krishpatel46",
                imageUrl:
                    "https://drive.google.com/open?id=1qFqc9UN6O4HX0X5NWatUXojxMv3lxgiY",
            },
        ],
    ]

    return (
        <div className="flex flex-wrap gap-10 p-4">
            {teamMembers.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="flex flex-wrap justify-around gap-6 w-full"
                >
                    {row.map((member, memberIndex) => (
                        <ProfileCard
                            key={memberIndex}
                            imageUrl={member.imageUrl}
                            name={member.name}
                            role={member.role}
                            linkedinUrl={
                                member.linkedinUrl || "https://linkedin.com/"
                            }
                            gmailUrl={member.gmailUrl}
                            githubUrl={
                                member.githubUrl || "https://github.com/"
                            }
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Team
