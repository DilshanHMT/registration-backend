import { Joi, Segments } from 'celebrate'

const authValidation = {
    signin: {
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
    },
    accessToken: {
        [Segments.BODY]: Joi.object().keys({
            refreshToken: Joi.string().required(),
        })
    },
}

module.exports = { authValidation }