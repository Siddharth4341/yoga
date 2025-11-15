import React from "react"
import FAQ from "../components/FAQ"

export default function Faq() {
    let yogaFAQs = [
    {
        question: "What is yoga?",
        answer: "Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote physical and mental well-being."
    },
    {
        question: "What are the benefits of practicing yoga?",
        answer: "Yoga improves flexibility, strength, balance, and posture. It also reduces stress, enhances mental clarity, and promotes relaxation."
    },
    {
        question: "Do I need to be flexible to start yoga?",
        answer: "No, yoga is for everyone. Flexibility improves over time with consistent practice. Start where you are and progress at your own pace."
    },
    {
        question: "How often should I practice yoga?",
        answer: "Even practicing 2–3 times a week can offer benefits. Daily practice, even if short, can lead to more noticeable improvements."
    },
    {
        question: "What type of yoga is best for beginners?",
        answer: "Hatha or Vinyasa yoga are great for beginners. They focus on basic postures and breathing, providing a solid foundation."
    },
    {
        question: "Can yoga help with stress and anxiety?",
        answer: "Yes, yoga incorporates mindfulness and breathing techniques that can reduce stress, calm the mind, and alleviate anxiety."
    },
    {
        question: "What should I wear to a yoga class?",
        answer: "Wear comfortable, stretchy clothing that allows free movement. Avoid anything too loose or restrictive."
    },
    {
        question: "Do I need any special equipment to start yoga?",
        answer: "A yoga mat is helpful for comfort and grip. Optional props like blocks, straps, and bolsters can support your practice, especially for beginners."
    },
    {
        question: "Is yoga a religion?",
        answer: "No, yoga is a spiritual and physical discipline. While it has roots in ancient Indian philosophy, it is not a religion and can be practiced by people of all beliefs."
    },
    {
        question: "Can yoga help with back pain?",
        answer: "Yes, certain yoga poses strengthen the back and improve posture, which can relieve and prevent back pain. Always consult a healthcare provider before starting if you have chronic pain."
    }
    ];
    return(
        <div>
            {
                yogaFAQs.map((q, i)=><FAQ title={`${i+1}. ${q.question}`} desc={q.answer}/>)
            }
        </div>
    )
}