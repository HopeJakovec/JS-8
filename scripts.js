let html = document.querySelector('html');

let head = document.head,
    metaUTF8 = document.createElement('meta'),
    metaViewport = document.createElement('meta'),
    metaIE = document.createElement('meta'),
    title = document.createElement('title');

let body = document.body,
    container = document.createElement('div'),
    h1 = document.createElement('h1'),
    headerText = document.createElement('p'),
    containerItems = document.createElement('div'),
    item1 = document.createElement('div'),
    item2 = document.createElement('div'),
    h4Item1 = document.createElement('h4'),
    h4Item2 = document.createElement('h4'),
    h3Item1 = document.createElement('h3'),
    h3Item2 = document.createElement('h3');
    item1Text = document.createElement('p'),
    item2Text = document.createElement('p'),
    btn1 = document.createElement('button'),
    btn2 = document.createElement('button');

html.setAttribute('lang', 'en');

metaUTF8.setAttribute('charset', 'UTF-8');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
metaIE.setAttribute('http-equiv', 'X-UA-Compatible');
metaIE.setAttribute('content', 'IE=edge');
title.innerHTML = 'Call to action#3';
head.appendChild(metaUTF8);
head.appendChild(metaViewport);
head.appendChild(metaIE);
head.appendChild(title);

body.style.margin = 0;
body.style.backgroundColor = '#ccc';

body.appendChild(container);
container.style.maxWidth = '1280px';
container.style.width = '100%';
container.style.margin = '20px auto';
container.style.backgroundColor = '#fff';
container.style.borderTop = '1px solid transparent';
container.style.borderBottom = '1px solid transparent';

container.appendChild(h1);
h1.innerHTML = 'Choose Your Option';
h1.style.marginTop = '122px';
h1.style.textAlign = 'center';
h1.style.fontFamily = 'Arvo, serif';
h1.style.fontStyle = 'normal';
h1.style.fontWeight = '400';
h1.style.fontSize = '36px';
h1.style.lineHeight = '48px';
h1.style.color = '#212121';

container.appendChild(headerText);
headerText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
headerText.style.marginTop = '10px';
headerText.style.textAlign = 'center';
headerText.style.fontFamily = 'Open Sans, sans-serif';
headerText.style.fontSize = '14px';
headerText.style.fontWeight = 'regular';
headerText.style.lineHeight = '22px';
headerText.style.color = '#9FA3A7';

container.appendChild(containerItems);
containerItems.appendChild(item1);
containerItems.appendChild(item2);
item1.appendChild(h4Item1);
item2.appendChild(h4Item2);
item1.appendChild(h3Item1);
item2.appendChild(h3Item2);
item1.appendChild(item1Text);
item2.appendChild(item2Text);
item1.appendChild(btn1);
item2.appendChild(btn2);

h4Item1.innerHTML = 'FREELANCER';
h4Item2.innerHTML = 'STUDIO';
h3Item1.innerHTML = 'Initially designed to';
h3Item2.innerHTML = 'Initially designed to';
item1Text.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
item2Text.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
btn1.innerHTML = 'START HERE';
btn2.innerHTML = 'START HERE';

containerItems.style.margin = '55px auto 140px';
containerItems.style.maxWidth = '800px';
containerItems.style.width = '100%';
containerItems.style.display = 'flex';
containerItems.style.border = '1px solid #E8E9ED';
containerItems.style.borderRadius = '10px';
containerItems.style.overflow = 'hidden';

item1.style.width = '50%';
item2.style.width = '50%';
item2.style.backgroundColor = '#8F75BE';
h4Item1.style.marginTop = '80px';
h4Item1.style.fontFamily = 'Montserrat, sans-serif';
h4Item1.style.fontStyle = 'normal';
h4Item1.style.fontWeight = '700';
h4Item1.style.fontSize = '12px';
h4Item1.style.lineHeight = '15px';
h4Item1.style.textAlign = 'center';
h4Item1.style.letterSpacing = '2.4px';
h4Item1.style.textTransform = 'uppercase';
h4Item1.style.color = '#9FA3A7';

h4Item2.style.marginTop = '80px';
h4Item2.style.fontFamily = 'Montserrat, sans-serif';
h4Item2.style.fontStyle = 'normal';
h4Item2.style.fontWeight = '700';
h4Item2.style.fontSize = '12px';
h4Item2.style.lineHeight = '15px';
h4Item2.style.textAlign = 'center';
h4Item2.style.letterSpacing = '2.4px';
h4Item2.style.textTransform = 'uppercase';
h4Item2.style.color = '#FFC80A';

h3Item1.style.marginTop = '20px';
h3Item1.style.marginLeft = 'auto';
h3Item1.style.marginRight = 'auto';
h3Item1.style.width = '210px';
h3Item1.style.fontFamily = 'Arvo, serif';
h3Item1.style.fontStyle = 'normal';
h3Item1.style.fontWeight = '400';
h3Item1.style.fontSize = '36px';
h3Item1.style.lineHeight = '46px';
h3Item1.style.textAlign = 'center';
h3Item1.style.color = '#212121';

h3Item2.style.marginTop = '20px';
h3Item2.style.marginLeft = 'auto';
h3Item2.style.marginRight = 'auto';
h3Item2.style.width = '210px';
h3Item2.style.fontFamily = 'Arvo, serif';
h3Item2.style.fontStyle = 'normal';
h3Item2.style.fontWeight = '400';
h3Item2.style.fontSize = '36px';
h3Item2.style.lineHeight = '46px';
h3Item2.style.textAlign = 'center';
h3Item2.style.color = '#fff';

item1Text.style.marginTop = '25px';
item1Text.style.marginLeft = 'auto';
item1Text.style.marginRight = 'auto';
item1Text.style.width = '210px';
item1Text.style.fontFamily = 'Open Sans, sans-serif';
item1Text.style.fontSize = '12px';
item1Text.style.lineHeight = '22px';
item1Text.style.textAlign = 'center';
item1Text.style.color = '#9FA3A7';

item2Text.style.marginTop = '25px';
item2Text.style.marginLeft = 'auto';
item2Text.style.marginRight = 'auto';
item2Text.style.width = '210px';
item2Text.style.fontFamily = 'Open Sans, sans-serif';
item2Text.style.fontSize = '12px';
item2Text.style.lineHeight = '22px';
item2Text.style.textAlign = 'center';
item2Text.style.color = '#fff';

btn1.style.display = 'flex';
btn1.style.justifyContent = 'center';
btn1.style.alignItems = 'center';
btn1.style.margin = '64.5px auto 93.5px';
btn1.style. width = '147px';
btn1.style.height = '46px';
btn1.style.border = '3px solid #FFC80A';
btn1.style.borderRadius = '30px';
btn1.style.cursor = 'pointer';
btn1.style.fontFamily = 'Montserrat, sans-serif';
btn1.style.fontStyle = 'normal';
btn1.style.fontWeight = '700';
btn1.style.fontStyle = '12px';
btn1.style.lineHeight = '15px';
btn1.style.textAlign = 'center';
btn1.style.letterSpacing = '2.4px';
btn1.style.color = '#212121';
btn1.style.backgroundColor = '#fff';

btn2.style.display = 'flex';
btn2.style.justifyContent = 'center';
btn2.style.alignItems = 'center';
btn2.style.margin = '64.5px auto 93.5px';
btn2.style. width = '147px';
btn2.style.height = '46px';
btn2.style.border = '3px solid #FFC80A';
btn2.style.borderRadius = '30px';
btn2.style.cursor = 'pointer';
btn2.style.fontFamily = 'Montserrat, sans-serif';
btn2.style.fontStyle = 'normal';
btn2.style.fontWeight = '700';
btn2.style.fontStyle = '12px';
btn2.style.lineHeight = '15px';
btn2.style.textAlign = 'center';
btn2.style.letterSpacing = '2.4px';
btn2.style.color = '#fff';
btn2.style.backgroundColor = '#8F75BE';