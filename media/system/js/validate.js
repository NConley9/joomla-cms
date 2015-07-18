var JFormValidator=function(){"use strict";var e,t,n,r=function(t,n,r){r=r===""?!0:r,e[t]={enabled:r,exec:n}},i=function(e,t){var n,r=jQuery(t);return e?(n=r.find("#"+e+"-lbl"),n.length?n:(n=r.find('label[for="'+e+'"]'),n.length?n:!1)):!1},s=function(e,t){var n=t.data("label");n===undefined&&(n=i(t.attr("id"),t.get(0).form),t.data("label",n)),e===!1?(t.addClass("invalid").attr("aria-invalid","true"),n&&n.addClass("invalid").attr("aria-invalid","true")):(t.removeClass("invalid").attr("aria-invalid","false"),n&&n.removeClass("invalid").attr("aria-invalid","false"))},o=function(t){var n=jQuery(t),r,i;if(n.attr("disabled"))return s(!0,n),!0;if(n.attr("required")||n.hasClass("required")){r=n.prop("tagName").toLowerCase();if(r==="fieldset"&&(n.hasClass("radio")||n.hasClass("checkboxes"))){if(!n.find("input:checked").length)return s(!1,n),!1}else if(!n.val()||n.hasClass("placeholder")||n.attr("type")==="checkbox"&&!n.is(":checked"))return s(!1,n),!1}return i=n.attr("class")&&n.attr("class").match(/validate-([a-zA-Z0-9\_\-]+)/)?n.attr("class").match(/validate-([a-zA-Z0-9\_\-]+)/)[1]:"",i===""?(s(!0,n),!0):i&&i!=="none"&&e[i]&&n.val()&&e[i].exec(n.val(),n)!==!0?(s(!1,n),!1):(s(!0,n),!0)},u=function(e){var t,r=!0,i,s,u,a=[],f,l;t=jQuery(e).find("input, textarea, select, fieldset");for(f=0,l=t.length;f<l;f++){if((" "+t[f].className+" ").indexOf(" novalidate ")!==-1)continue;o(t[f])===!1&&(r=!1,a.push(t[f]))}jQuery.each(n,function(e,t){t.exec()!==!0&&(r=!1)});if(!r&&a.length>0){i=Joomla.JText._("JLIB_FORM_FIELD_INVALID"),s={error:[]};for(f=a.length-1;f>=0;f--)u=jQuery(a[f]).data("label"),u&&s.error.push(i+u.text().replace("*",""));Joomla.renderMessages(s)}return r},a=function(e){var n=[],r,i=jQuery(e);r=i.find("input, textarea, select, fieldset, button");for(var s=0,a=r.length;s<a;s++){var f=jQuery(r[s]),l=f.prop("tagName").toLowerCase();l!=="input"&&l!=="button"||f.attr("type")!=="submit"&&f.attr("type")!=="image"?l!=="button"&&(l!=="input"||f.attr("type")!=="button")&&(f.hasClass("required")&&f.attr("aria-required","true").attr("required","required"),l!=="fieldset"&&(f.on("blur",function(){return o(this)}),f.hasClass("validate-email")&&t&&(f.get(0).type="email")),n.push(f)):f.hasClass("validate")&&f.on("click",function(){return u(e)})}i.data("inputfields",n)},f=function(){e={},n=n||{},t=function(){var e=document.createElement("input");return e.setAttribute("type","email"),e.type!=="text"}(),r("username",function(e,t){var n=new RegExp("[<|>|\"|'|%|;|(|)|&]","i");return!n.test(e)}),r("password",function(e,t){var n=/^\S[\S ]{2,98}\S$/;return n.test(e)}),r("numeric",function(e,t){var n=/^(\d|-)?(\d|,)*\.?\d*$/;return n.test(e)}),r("email",function(e,t){e=punycode.toASCII(e);var n=/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return n.test(e)});var i=jQuery("form.form-validate");for(var s=0,o=i.length;s<o;s++)a(i[s])};return f(),{isValid:u,validate:o,setHandler:r,attachToForm:a,custom:n}};document.formvalidator=null,jQuery(function(){document.formvalidator=new JFormValidator});