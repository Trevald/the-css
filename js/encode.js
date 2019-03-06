const toEncode = document.querySelectorAll('[data-encode-html]');

for (let i = 0; i < toEncode.length; ++i) {
    toEncode[i].innerHTML = decodeHtml(toEncode[i].innerHTML);
}

function decodeHtml(html) {
    const regeExStart = /</gi;
    const regeExEnd = /</gi;

    const result = html.replace(regeExStart, '&#x3C;').replace(regeExEnd, '&#x3E;').replace(/^\s+|\s+$/g, '');

    return result;
}
