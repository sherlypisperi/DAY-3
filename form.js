function showData(e) {
    e.preventDefault();
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    let emailReceiver = 'sherly.pisperi1604@gmail.com'
    let bodyEmail = `Hy, my name is ${name}. i am so excited with your portofolio.${subject}, ${message}`

    window.open(`mailto:${emailReceiver}?subject=${subject}&body=${bodyEmail}`);

    if (name == '') {
        return alert("email wajib diisi")
    } else if (email == '') {
        return alert("email wajib diisi")
    } else if (phone == '') {
        return alert("phone wajib diisi")
    } else if (subject == '') {
        return alert("subject wajib diisi")
    } else if (message == '') {
        return alert("message wajib diisi")
    }
}




