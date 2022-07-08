import boom from '@hapi/boom';

const validatorHandler = (schema:any, property:string)=>{
  return (req:any, res:any, next:any)=>{
    const { name, age } = req[property];
    console.log(name, age);
    const { error } = schema.validate({ name, age });
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  };
};

export default validatorHandler;