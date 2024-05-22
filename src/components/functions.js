export function upFirstChar(value) {
  if (this.isEmpty(value)) return '';
  else
    return value === null
      ? ''
      : value.charAt(0).toUpperCase() + value.substr(1);
}
export function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export function clearObjectFromNull(data) {
  for (let item of Object.entries(data)) {
    let key = item[0];
    let value = item[1];
    if (value) {
      if (typeof value === 'object') {
        data[key] = clearObjectFromNull(value);
      }
    } else {
      if (value === null) {
        data[key] = '';
      }
    }
  }
  return data;
}

export function clearArrayEmptyValues(data) {
  for (let item of Object.entries(data)) {
    let value = item[1];
    if (value) {
      if (value.constructor === Array && !isEmpty(value)) {
        value.forEach((e, i) => {
          if (isEmpty(e))
            value.splice(i, 1)
        });
      }
    }
  }
  return data;
}

function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

export function getParsedDateTime(date) {
  if (!isEmpty(date)) {
    var d = new Date(date);
    var hour = addZero(d.getHours());
    var minute = addZero(d.getMinutes());
    date = String(date).split('T');
    var days = String(date[0]).split('-');
    return days[2] + '-' + days[1] + '-' + days[0] + ' ' + hour + ':' + minute;
  }
}

export function isEmpty(value) {
  return (
    value === '' ||
    value === null ||
    value === undefined ||
    value === 'null' ||
    value.length === 0
  );
}

export function updateFormData(form, index, field, value, formData) {
  if (form) form = form.charAt(0).toLowerCase() + form.substr(1);
  index =
    index === false || index === true
      ? index
      : index.charAt(0).toLowerCase() + index.substr(1);
  if (isEmpty(form)) {
    formData[index] = value;
  } else {
    if (isEmpty(formData[form])) {
      formData[form] = {};
    }
    let formDataChild = formData[form];
    if (isEmpty(field)) {
      switch (index) {
        default:
          formDataChild[index] = value;
      }
      formData[form] = formDataChild;
    }
    else {
      if (isEmpty(formData[form][index])) {
        formData[form][index] = {};
      }
      let formDataChild = formData[form][index];
      switch (field) {
        default:
          formDataChild[field] = value;
      }
      formData[form][index] = formDataChild;

    }
  }
  return formData;
}
