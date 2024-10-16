import React, { useState } from 'react';
import './Accordion.css';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'How to learn digital marketing?',
            content: 'Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
        },
        {
            title: 'Can I use the demos made by Ewebot?',
            content: 'Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
        },
        {
            title: 'Why didn’t you showcase my submission?',
            content: 'Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
        },
        {
            title: 'What everybody ought to know about digital marketing?',
            content: 'Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
        }
    ];

    return (
        <div className="accordion">
            {accordionData.map((item, index) => (
                <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <div className="accordion-header">
                        <button className="accordion-button" onClick={() => handleToggle(index)}>
                            {item.title}
                        </button>
                    </div>
                    <div className="accordion-content">
                        {activeIndex === index && <p>{item.content}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
