import Joi from 'joi';

export default {
    validateComment(body) {
        const schema = Joi.object().keys({
            content: Joi.string().required()  
        });

        const {value, error} = Joi.validate(body, schema);
        if(error && error.details)
            return { error };
              
        return { value };
    }
};