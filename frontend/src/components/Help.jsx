import React, { useState } from 'react';

const Help = () => {
    // Example FAQs
    const [faqs] = useState([
        {
            question: "How do I add a new bus?",
            answer: "Navigate to the 'Manage Buses' section and click on 'Add Bus'. Fill in the required details and submit.",
        },
        {
            question: "How can I reset my password?",
            answer: "Contact the admin at support@whereismybus.com to reset your password.",
        },
        {
            question: "What should I do if I encounter an error?",
            answer: "Check the user manual for troubleshooting steps or contact technical support.",
        },
    ]);

    return (
        <div className="p-6 flex flex-col justify-center items-center min-h-screen mt-20">
            <h1 className="text-3xl font-bold mb-4 text-orange-700">Help</h1>

            {faqs.length > 0 ? (
                <div className="w-full max-w-3xl">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Frequently Asked Questions (FAQs)</h2>
                    <ul className="list-none">
                        {faqs.map((faq, index) => (
                            <li key={index} className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                                <p className="text-gray-700">{faq.answer}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="w-full max-w-3xl">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Support</h2>
                    <p className="text-lg text-gray-700 text-center">
                        If you have any questions or need assistance, please contact us:
                    </p>
                    <ul className="list-disc mt-4 text-gray-700">
                        <li>Email: support@whereismybus.com</li>
                        <li>Phone: +1-800-123-4567</li>
                        <li>Refer to the user manual for detailed instructions.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Help;