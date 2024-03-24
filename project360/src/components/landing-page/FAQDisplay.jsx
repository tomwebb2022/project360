import { FAQ } from "../../data/FAQ";

const FAQDisplay = () => {
  return (
    <div className="faq-container">
      <h2>FAQ</h2>
      <div className="faq-list">
        {FAQ.map((faq) => {
          return (
            <div className="faq-content" key={faq.index}>
            <div className="faq-row" key={faq.index*3}>
              <div className="faq-number-column" key={faq.index}>
                {faq.index < 10 ? `0${faq.index}` : faq.index}
              </div>
              <div className="faq-qa-column" key={faq.index*2}>
              <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQDisplay;
