let APIURL = '';

switch (window.location.hostname) {
case 'localhost' || '127.0.0.1':
    APIURL = 'localhost:3000/';
    break;
case 'queery2-client.herokuapp.com/':
    APIURL = 'https://queery-server2.herokuapp.com/'
}

export default APIURL;