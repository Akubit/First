const formInput = document.getElementById('svgContent')
const formSubmit = document.getElementById('formSubmit')
const codeDisplay = document.getElementById('backgroundCode')

formInput.value= `
<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15'> 
<rect width='50' height='50' fill='#282828'/> <circle cx='3' cy='4.3' r='1.8' fill='#393939'/> 
<circle cx='3' cy='3' r='1.8' fill='black'/> 
<circle cx='10.5' cy='12.5' r='1.8' fill='#393939'/> 
<circle cx='10.5' cy='11.3' r='1.8' fill='black'/> 
</svg>
`

let svgToBase64 = () => {
    let b64 = window.btoa(formInput.value)
    console.log(`Generated: url('data:image/svg+xml;base64,${b64}')`)
    let newUrl = `url('data:image/svg+xml;base64,${b64}')`

    codeDisplay.textContent = `background:${newUrl}`
    document.body.style.background = newUrl
}

// function svgToBase64Image(svgElement) {
//     var div = document.createElement('div');
//     div.appendChild(svgElement.cloneNode(true));
//     var b64 = window.btoa(div.innerHTML);
//     return 'data:image/svg+xml;base64,' + b64;
//   }

//   formInput.addEventListener('change', () => {
//     var svgs = document.getElementsByTagName('svg');
//     var urls = [];
//     for (var i = 0; i < svgs.length; i++)
//       urls.push('url("' + svgToBase64Image(svgs[i]) + '")');
//     var url = urls.join(',');
//     var msg = 'Base64 CSS image (for cross-browser support):' +
//               '<br><br>background: ' + url + ';';
//     document.getElementById('code').innerHTML = msg;
//     document.body.style.background = url;
//   })

formInput.addEventListener('keyup', svgToBase64)


formSubmit.addEventListener('click', (e)=> {
    e.preventDefault();
    svgToBase64()
})