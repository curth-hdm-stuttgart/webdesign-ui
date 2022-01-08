function registriereHandler()
{
    window.addEventListener('scroll',()=> zeichneScrollBar())
}

function zeichneScrollBar() {
    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    //  Die Höhe des Dokuments, gemessen an der Bildschirmkante
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
    //  Der prozentuale Wert der Scrollposition
    const scrolled = (winScroll / height) * 100;
 
    document.documentElement.style.setProperty('--scroll',  `${scrolled}%`);
} 