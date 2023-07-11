import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleRotate = () => {
    return isOpen ? 'transform rotate-180' : '';
  };

  const handleToggle = () => {
    return isOpen ? 'max-h-full' : 'max-h-0';
  };

  return (
    <li className="bg-white my-3 shadow-lg">
        <h2 onClick={handleClick} className="flex flex-row justify-between items-center font-sans font-bold p-5 cursor-pointer">
            <span className='w-10/12 md:w-full'>{question}</span>
            <svg className={`fill-current text-secondary h-6 w-6 transform transition-transform duration-500 ${handleRotate()}`}viewBox="0 0 20 20">
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
            </svg>
        </h2>
        <div className={`border-l-2 border-secondary overflow-hidden duration-500 transition-all ${handleToggle()}`}>
            <p className="p-5 font-sans">{answer}</p>
        </div>
    </li>
  );
};



const FaqAccordion = () => {
  return (
        <div className="w-full mx-auto">
            <ul className="flex flex-col">
                <Accordion
                    question="Are the travel packages customizable?"
                    answer="Absolutely! At Global Adventures, we understand that each traveler has unique preferences and interests. Our experienced team will work closely with you to customize your itinerary, ensuring it aligns perfectly with your dreams and desires." />
                <Accordion
                    question="How do I book a travel package with Global Adventures?"
                    answer="Booking with us is easy! Simply visit our website and explore our diverse range of travel packages. Once you find your ideal adventure, click on the booking button and follow the prompts to secure your spot. If you have any questions or need assistance, our dedicated customer experience team is ready to help." />
        
                <Accordion
                    question="What measures are in place to ensure traveler safety?"
                    answer="Your safety is our top priority. We closely monitor global travel advisories and work with trusted partners who prioritize safety protocols. Additionally, we provide detailed pre-departure information, offer travel insurance options, and implement rigorous health and hygiene standards to ensure your peace of mind throughout your journey." />
        
                <Accordion
                    question="What is the group size on your tours?"
                    answer="We believe in fostering intimate and immersive experiences. Group sizes vary depending on the destination and the nature of the adventure, but we strive to keep them small and personalized. This allows for more meaningful interactions, easier navigation, and a deeper connection with the destination." />
        
                <Accordion
                    question="What happens if I need to cancel or change my travel plans?"
                    answer="We understand that circumstances can change. Our flexible booking policies aim to accommodate your needs. Please refer to our terms and conditions for specific details regarding cancellations, refunds, and rescheduling. If you have any concerns or require assistance, our dedicated team is here to support you every step of the way." />
            </ul>
        </div>
  )
}

export default FaqAccordion;