import { Joi, Segments } from 'celebrate'

const userValidation = {
    addData: {
        [Segments.BODY]: Joi.object().keys({
            userName: Joi.string().required(),
            userType: Joi.string().required(),
            userEmail: Joi.string().email().required(),
            userContact: Joi.string().required(),
        })
    },
}

module.exports = { userValidation }