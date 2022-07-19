import thanks from '../images/illustration-thank-you.svg';

function Thankyou(props) {
  return (
    <section className='modal center'>
      <img className='modal__thanks' src={thanks} alt='Thank you' />
      <div className='modal__selection'>{`You selected ${props.number} out of 5`}</div>
      <h1 className='modal__title'> Thank you!</h1>
      <p className='modal__text'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </section>
  );
}

export default Thankyou;
