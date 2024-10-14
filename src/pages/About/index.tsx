import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '../../components/TextField';
import {
  faHandHoldingHeart,
  faHouseChimney,
  faPeopleRoof,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';
import IconCard from '../../components/IconCard';
import { ResponsiveRow } from '../../layouts/MainLayout';

const About = () => {
  return (
    <>
      <TextField position="middle">
        <h2> About Us </h2>{' '}
      </TextField>
      <TextField>
        "Welcome to pizzeria Leo, a family-owned and operated pizzeria where our
        love for food, tradition, and community comes together! Since our doors
        opened in 2023, we've been serving up delicious, hand-crafted pizzas
        made with passion and authentic ingredients, just the way our family has
        done for generations. Our Story Our journey began in the heart of Roma,
        inspired by our family's rich Italian heritage and love for sharing
        meals together."
      </TextField>
      <TextField position="middle">
        <h3>Why Choose Us?</h3>
      </TextField>
      <ResponsiveRow>
        <IconCard
          icon={<FontAwesomeIcon icon={faPizzaSlice} size="2x" />}
          title="Fresh Ingredients"
          text="We believe the best pizzas start with the freshest ingredients."
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />}
          title="Handcrafted Pizzas"
          text="Every pizza is made-to-order, from our traditional Margherita."
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faPeopleRoof} size="2x" />}
          title="Family Tradition"
          text="We treat our customers like family."
        />
      </ResponsiveRow>
      {/* Fresh Ingredients: We believe the best pizzas start with the freshest
      ingredients. That's why we source locally whenever possible and ensure
      everything we use is of the highest quality. Handcrafted Pizzas: Every
      pizza is made-to-order, from our traditional Margherita to our more
      adventurous specialty pies. Family Tradition: We treat our customers like
      family. Our friendly staff and cozy environment are all part of the
      pizzeria Leo experience. Community First: We're proud to be part of the
      local community, and we love giving back through local events,
      fundraisers, and more. Come Visit Us! We invite you to stop by pizzeria
      Leo and taste the difference that passion, tradition, and family make.
      Whether you're dining in, ordering takeout, or celebrating a special
      occasion, we're here to serve you with a smile and a slice of our best.
      Thank you for making us part of your family’s meals and memories! */}
      {/* </p>
      </TextField> */}
    </>
  );
};

export default About;
