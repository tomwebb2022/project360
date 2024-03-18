import { FAQ } from "../data/FAQ";

const FAQDisplay = () => {
  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      <div className="faq-list">
        {FAQ.map((faq) => {
          return (
            <div className="faq-content" key={faq.index}>
              <div className="faq-number-column" key={faq.index}>
                <h3 className="faq-number">{faq.index}</h3>
              </div>
              <div className="faq-qa-column" key={faq.index}>
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQDisplay;
