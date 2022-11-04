import { celebrate, Joi } from 'celebrate';
import validator from 'validator';

const checkUrl = (value: string, helpers: any) => {
  if (validator.isURL(value)) {
    return value;
  }

  return helpers.message('поле заполнено некорректно');
};

const validateData = celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().min(2).max(30).required(),
    country: Joi.string().min(2).max(30).required(),
    director: Joi.string().min(2).max(30).required(),
    description: Joi.string().min(2).max(200).required(),
    image: Joi.string().required().custom(checkUrl),
    movieId: Joi.number().required(),
  }),
});

export default validateData;
