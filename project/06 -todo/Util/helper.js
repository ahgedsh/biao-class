window.helper = {
    get_form_data : get_form_data,
    set_form_data : set_form_data,
    clear_form    : clear_form,
  }
  
function get_form_data(form) {
  if (typeof form == 'string')
    form = document.querySelector(form);

  data = {};
  var list = form.querySelectorAll('[name]');
  list.forEach(function (input) {
    switch (input.nodeName) {
      case 'INPUT':
        switch (input.type) {
          case 'text':
          case 'password':
          case 'search':
          case 'hidden':
          case 'search':
            data[input.name] = input.value;
            break;
          case 'radio':
          case 'checkbox':
            data[input.name] = input.checked;
            break;
        }
        break;
      case 'TEXTAREA':
        data[input.name] = input.value;
        break;
      case 'SELECT':
        data[input.name] = input.value;
        break;
    }
  });
  return data;
}


function set_form_data(form, data) {

  if (typeof form == 'string')
    form = document.querySelector(form);

  for (var key in data) {
    var value = data[key];
    var input = form.querySelector(`[name=${key}`);

    if (!input)
      continue;


    var data_type = typeof value;

    switch (data_type) {
      case 'number':
      case 'string':
        input.value = value;
        break;

      case 'blooean':
        input.checked = value;
        break;
    }


  }



}

function clear_form(form) {
  if (typeof form == 'string')
    form = document.querySelector(form);

  form.querySelectorAll('[name]').forEach(function (input) {
    if (input.type == 'radio' || input.type == 'checkbox')
      input.checked = false;
    else {
      input.value = '';
    }


  })
}

window.helper={
  get_form_data:get_form_data,
  set_form_data:set_form_data,
  clear_form:clear_form,
}

function get_form_data(form){
  if(typeof form == 'string')//看看是不是选择器，如果是选择器就一定是字符串
  form=document.querySelector(form);//通过选择器拿到元素对象
 // console.log(form);
  var data={};
  var list=form.querySelectorAll('[name]');

  list.forEach(function(input){
      switch(input.nodeName){
          case'INPUT':
          switch(input.type){
              case'text':
              case'number':
              case'hidden':
              case'password':
              case'search':
              data[input.name]=input.value;
              break;
              case'radio':
              case'checkbox':
              data[input.name]=input.checked;
              break;
              case'SELECT':
              data[input.name]=input.value;
              break;
          }
          break;
          case'TEXTAREA':
          data[input.name]=input.value;
          break;
      }
  });
  return data;
}

function set_form_data(form,data){
  for(var key in data){
      var value=data[key];
      var input=form.querySelector(`[name=${key}]`);
      if(!input){
          continue;
      }
      var data_type=typeof value;
      switch(data_type){
          case'number':
          case'string':
          input.value=value;
          break;
          case'boolean':
          input.value=checked;
          break;
      }

  }
}


function clear_form(form) {
  /*看看是不是选择器，如果是选择器就一定是字符串。*/
  if (typeof form == 'string')
    form = document.querySelector(form); // 通过选择器拿到元素对象

  form
    .querySelectorAll('[name]')
    .forEach(function (input) {
      if (input.type == 'radio' || input.type == 'checkbox')
        input.checked = false;
      else
        input.value = '';
    });
}