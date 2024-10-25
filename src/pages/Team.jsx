// import React from "react"
import { ProfileCard } from "../components"

const Team = () => {
    const teamMembers = [
        // Mentor
        [
            {
                name: "MNS Arjun",
                role: "Lead",
                linkedinUrl:
                    "https://www.linkedin.com/in/m-naga-sai-arjun-a97089328/",
                gmailUrl: "",
                githubUrl: "",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729845482/arjun_qatc7b.jpg",
            },

            {
                name: "Dr. Vatsal Shah",
                role: "Faculty Advisor",
                linkedinUrl:
                    "https://www.linkedin.com/in/dr-vatsal-shah-03aa8218b",
                gmailUrl: "https://gdsc.community.dev/u/m6h7ku/",
                githubUrl: "",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729826211/vatsal_buxcuc.jpg",
            },

            {
                name: "Prof. Bijal Dalwadi",
                role: "Faculty Co-ordinator",
                linkedinUrl: "#",
                gmailUrl: "#",
                githubUrl: "",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729826211/bijal_qyretc.jpg",
            },

            {
                name: "Abhishek Nalla",
                role: "Mentor",
                linkedinUrl: "https://www.linkedin.com/in/abhisheknalla",
                gmailUrl: "nallaabhi2003@gmail.com",
                githubUrl: "https://github.com/abhinalla003",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824268/wd57kngcujagwldqnmtj.jpg",
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
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729825808/h5vsj7t6ubczeq9sbmsx.jpg",
            },
            {
                name: "Yatri Chhatrala",
                role: "Design & Graphics Expert",
                linkedinUrl: "",
                gmailUrl: "yatrichhatrala@gmail.com",
                githubUrl: "https://github.com/yatri28",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824272/jxfbijj58q9jbbknk8ay.jpg",
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
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824265/cvkluyrixrstlbpmcpgy.jpg",
            },
            {
                name: "Pratibha Indravath",
                role: "PR Handler",
                linkedinUrl: "",
                gmailUrl: "pratibhaindravath06@gmail.com",
                githubUrl: "https://github.com/Pratibha706",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824269/wbqx8zhrahvqp0freoxm.jpg",
            },
            {
                name: "Vihaa Shah",
                role: "PR Handler",
                linkedinUrl: "",
                gmailUrl: "vihaa.shah23@gmail.com",
                githubUrl: "https://github.com/vihaa23",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824274/eidrhpnxivbomdlyfdkq.jpg",
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
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824268/shvpew2oesyk1rdkwjgd.jpg",
            },
            {
                name: "Tanisha Patel",
                role: "Content Artisan",
                linkedinUrl: "",
                gmailUrl: "p.tanisha257@gmail.com",
                githubUrl: "",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824269/cwnliheudipjfuivxyur.jpg",
            },
        ],

        [
            {
                name: "Vishal  Jena",
                role: "Associate Lead",
                linkedinUrl: "",
                gmailUrl: "vishal1713vsl@gmail.com",
                githubUrl: "WeR4Code",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824270/amnle1ewk9rlo9i8e1fq.jpg",
            },
            {
                name: "Jaimin Detroja",
                role: "Tech Expert",
                linkedinUrl: "https://www.linkedin.com/in/jaimindetroja345/",
                gmailUrl: "officialjaimin345@gmail.com",
                githubUrl: "https://github.com/JaiminPatel345",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824266/oj2tyvgej9bicbgtml8f.jpg",
            },

            {
                name: "Tanish  Kamdar",
                role: "ML Associate",
                linkedinUrl: "https://www.linkedin.com/in/tanishkamdar/",
                gmailUrl: "tanishkamdar07@gmail.com",
                githubUrl: "https://github.com/Techoder",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824271/ghr5dwd5rq8eo4nrvefi.png",
            },

            {
                name: "Narendra Mali",
                role: "Frontend Associate",
                linkedinUrl:
                    "https://www.linkedin.com/in/mali-narendra-60a508221",
                gmailUrl: "narendramali7874@gmail.com",
                githubUrl: "https://github.com/Naren7874",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729825535/xvksei35uqzgmiqjznad.jpg",
            },

            {
                name: "Rudra Prajapati",
                role: "CyberSecurity Associate",
                linkedinUrl:
                    "https://www.linkedin.com/in/rudra-prajapati-b34694274",
                gmailUrl: "prajapatirudra2594@gmail.com",
                githubUrl: "https://github.com/Rudra250",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824273/yynmbm6dzbaxl8p1zqdb.jpg",
            },

            {
                name: "Krish Patel",
                role: "App Dev Associate",
                linkedinUrl:
                    "https://www.linkedin.com/in/krish-patel-84005320b",
                gmailUrl: "krishpatel.dcom46@gmail.com",
                githubUrl: "https://github.com/krishpatel46",
                imageUrl:
                    "https://res.cloudinary.com/driy33xtm/image/upload/v1729824270/hoindhm5wsj7egp3vfwc.jpg",
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
