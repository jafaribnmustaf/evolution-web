export const addTimeout = function addTimeout(duration, name, callback) {
  return {
    type: '@@reduxTimeout/addTimeout',
    data: {
      duration,
      name,
      callback
    }
  };
};

export const cancelTimeout = function cancelTimeout(name) {
  return {
    type: '@@reduxTimeout/cancelTimeout',
    data: {name}
  };
};

export const reduxTimeout = function () {
  const timeouts = {};
  return store => next => action => {
    if (action.type === '@@reduxTimeout/addTimeout') {
      const {duration, name, callback} = action.data;
      console.log('timeout set')
      if (timeouts[name]) throw new Error(`reduxTimeout: timeout[${name}] already occupied!`);
      timeouts[name] = setTimeout(() => {
        //console.log('Aftertimeout', typeof callback)
        if (typeof callback === 'object') {
          next(callback)
        } else {
          callback((action) => next(action), store.getState)
        }
        timeouts[name] = void 0;
      }, duration);
    } else if (action.type === '@@reduxTimeout/cancelTimeout') {
      const nameToClear = action.data.name;
      console.log('cancelTimeout', action.type)
      //if (!timeouts[nameToClear]) throw new Error(`reduxTimeout: timeout[${name}] doesnt exists!`);
      clearTimeout(timeouts[nameToClear]);
      timeouts[nameToClear] = void 0;
    } else {
      next(action);
    }
  };
};