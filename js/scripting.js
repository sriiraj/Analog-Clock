function analog_clock()
{
    currenttime=new Date();
    var ch=30 * ((currenttime.getHours() % 12) + currenttime.getMinutes() / 60);
    var cm = 6 * currenttime.getMinutes();
    var cs = 6 * currenttime.getSeconds();
    setAttr('hour-hand', ch);
    setAttr('minute-hand', cm);
    setAttr('second-hand', cs);
    setTimeout(analog_clock, 1000);
    var h=currenttime.getHours();
    var m=currenttime.getMinutes();
    var s=currenttime.getSeconds();
    if(h >= 12){
        setText('suffix', 'PM');
    }else{
        setText('suffix', 'AM');
    }
    
    if(h != 12){
        h %= 12;
    }
    setText('sec', s);
    setText('min', m);
    setText('hr', h);
    
};

function setAttr(id,val)
{
    var v='rotate('+val +',324,325)';
    document.getElementById(id).setAttribute('transform',v);
   
};
function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};
window.onload=analog_clock;