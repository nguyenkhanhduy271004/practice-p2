import lodash from 'lodash';

const getInfoData = ({ fields = [], object = {} }) => {
    return lodash.pick(object, fields);
}

const removeUndefinedObject = obj => {
    Object.keys(obj).forEach(k => {
        if (obj[k] == null) {
            delete obj[k];
        }
    })

    return obj;
}

export { getInfoData, removeUndefinedObject }