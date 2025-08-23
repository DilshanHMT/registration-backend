import { Joi, Segments } from 'celebrate'

const giftValidation = {
    updateData: {
        [Segments.BODY]: Joi.object().keys({
            winnerNumber: Joi.number().integer().required()
        })
    },
}

module.exports = { giftValidation }