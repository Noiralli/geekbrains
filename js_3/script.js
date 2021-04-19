let xhr;

if (window.XMLHttpRequest) {
// Chrome, Mozilla, Opera, Safari
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) { 
// Internet Explorer
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

xhr.onreadystatechange = function (data) {
    const { response, status } = data
    if (xhr.readyState === 4) {
        console.log(data)
    }
}

xhr.ontimeout = function () {
    alert('К сожалению что-то пошло не так')
}

xhr.timeout = 15000;

xhr.open('POST', 'http://example.com/addtocart', true)

xhr.send({ product_id: 123 })

xhr.status
xhr.responseText  
xhr.responseXML  
