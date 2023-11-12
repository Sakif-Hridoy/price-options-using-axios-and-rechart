import PropTypes from 'prop-types';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = props => {

    const priceOptions =  [
          {
            "id": 1,
            "option_name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to gym facilities",
              "Basic fitness classes",
              "Limited equipment usage"
            ]
          },
          {
            "id": 2,
            "option_name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Full access to gym facilities",
              "Unlimited fitness classes",
              "Access to all equipment"
            ]
          },
          {
            "id": 3,
            "option_name": "Family Membership",
            "price": 79.99,
            "features": [
              "Access for entire family",
              "Family fitness classes",
              "Shared personal training session"
            ]
          }
        ]
      
      
    
    return (
        <div className='m-12'>
            <h2 className='text-5xl'>Best Prices in the town</h2>
            <div className='grid md:grid-cols-3 gap-6'>
            {
                priceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;