import star from '../images/icon-star.svg';
function Rating(props) {
  const handleSaveValue = (event) => {
    props.savedValue(event.target.value);
  };
  return (
    <section className='modal'>
      <button className='modal__star-button'>
        <img src={star} alt='Favorites' />
      </button>
      <h1 className='modal__title'>How did we do?</h1>
      <p className='modal__text'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='numbers'>
        <div className='numbers__circle'>
          <label className='numbers__circle--number' htmlFor='1'>
            1
          </label>
          <input
            onClick={handleSaveValue}
            className='numbers__circle--radio'
            type='radio'
            name='1'
            id='1'
            value='1'
          />
        </div>
        <div className='numbers__circle'>
          <label className='numbers__circle--number' htmlFor='2'>
            2
          </label>
          <input
            onClick={handleSaveValue}
            className='numbers__circle--radio'
            type='radio'
            name='2'
            id='2'
            value='2'
          />
        </div>
        <div className='numbers__circle'>
          <label className='numbers__circle--number' htmlFor='3'>
            3
          </label>
          <input
            onClick={handleSaveValue}
            className='numbers__circle--radio'
            type='radio'
            name='3'
            id='3'
            value='3'
          />
        </div>
        <div className='numbers__circle'>
          <label className='numbers__circle--number' htmlFor='4'>
            4
          </label>
          <input
            onClick={handleSaveValue}
            className='numbers__circle--radio'
            type='radio'
            name='4'
            id='4'
            value='4'
          />
        </div>
        <div className='numbers__circle'>
          <label className='numbers__circle--number' htmlFor='5'>
            5
          </label>
          <input
            onClick={handleSaveValue}
            className='numbers__circle--radio'
            type='radio'
            name='5'
            id='5'
            value='5'
          />
        </div>
      </div>
      <button className='modal__submit-button'>Submit</button>
    </section>
  );
}

export default Rating;
