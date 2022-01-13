function registriereHandler()
{
    window.addEventListener('scroll',()=> zeichneScrollBar())
}

function zeichneScrollBar() {
    
    const winScroll = document.documentElement.scrollTop;        //  Je nach Browser:document.body.scrollTop || 
  //  console.log("scrollTop:" + document.documentElement.scrollTop);
    
    //  Die Höhe des Dokuments, gemessen an der Bildschirmkante
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //  console.log("Doc Height" + document.documentElement.scrollHeight);
    console.log("Client Height" + document.documentElement.clientHeight);
    
    //  Der prozentuale Wert der Scrollposition
    const scrolled = (winScroll / height) * 100;
    console.log("Scrolled " + scrolled + "%");




    document.documentElement.style.setProperty('--scroll',  `${scrolled}%`);
} 