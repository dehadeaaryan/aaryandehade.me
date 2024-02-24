"use client";

const scrollToNext = () => {
    const sections = document.querySelectorAll(".section");
    
    let nextIndex = -1;

    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top > 0) {
            nextIndex = i;
            break;
        }
    }

    if (nextIndex !== -1) {
        if (nextIndex === sections.length - 1) {
            // If on the last section, scroll to the first section
            sections[0].scrollIntoView({ behavior: "smooth" });
        } else {
            // Scroll to the next section entirely into view
            sections[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
};

const NextButton = () => {
    return (
        <button onClick={scrollToNext} className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    );
    }

export default NextButton;