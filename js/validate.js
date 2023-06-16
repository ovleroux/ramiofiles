// ___________________________________________________________________
// validate contact form
const myform = document.getElementById('myform');
const subscriptionform = document.getElementsById('subscribe');
myform.noValidate = true;
subscriptionform.noValidate = true;

// custom form validation
myform.addEventListener('submit', validateForm);
subscriptionform.addEventListener('submit', formValidate);

// stop submission of valid form for demo
myform.addEventListener('submit', e => {
  
  e.preventDefault();
  alert('Form is valid!\n(open the console)');

  const fd = new FormData(e.target);
  for (const [name, value] of fd.entries()) {
    console.log(name + ': ' + value);
  }
  
});

subscriptionform.addEventListener('submit', e => {
  
    e.preventDefault();
    alert('Form is valid!\n(open the console)');
  
    const fd = new FormData(e.target);
    for (const [name, value] of fd.entries()) {
      console.log(name + ': ' + value);
    }
    
  });


// form validation
function validateForm(e) {

  const
    form = e.target,
    field = Array.from(form.elements);
  
  // reset fields
  field.forEach(i => {
    i.setCustomValidity('');
    i.parentElement.classList.remove('invalid');
  });

  // email or tel set?
  const err = form.email.value || form.tel.value ? '' : 'error';
  form.email.setCustomValidity(err);
  form.tel.setCustomValidity(err);
  
  if (!form.checkValidity()) {

    // form is invalid - cancel submit
    e.preventDefault();
    e.stopImmediatePropagation();

    // apply invalid class
    field.forEach(i => {

      if (!i.checkValidity()) {

        // field is invalid - add class
        i.parentElement.classList.add('invalid');

      }

    });

  }

};

function formValidate(e) {

    const
      form = e.target,
      field = Array.from(form.elements);
  
    // apply/remove invalid class
    field.forEach(i => {
  
      if (i.checkValidity()) {
  
        // field is valid - remove class
        i.parentElement.classList.remove('error');
  
      }
      else {
  
        // field is invalid - add class
        i.parentElement.classList.add('error');
  
      }
  
    });
  
    if (!form.checkValidity()) {
  
      // form is invalid - cancel submit
      e.preventDefault();
      e.stopImmediatePropagation();
  
    }
  
};

