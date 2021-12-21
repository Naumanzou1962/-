let ipt = document.querySelector("textarea");
let btn = document.querySelector("button")

const pic = {A:"a.png",B:"b.png",C:"c_g.png",D:"d.png",E:"e.png",F:"f_v_y_u_w.png",G:"c_g.png",H:"h.png",
          I:"i.png",J:"j.png",K:"k.png",L:"l.png",M:"m.png",N:"n.png",O:"o.png",P:"p.png",Q:"q.png",R:"r.png",S:"s.png",
          T:"t.png",U:"f_v_y_u_w.png",V:"f_v_y_u_w.png",W:"f_v_y_u_w.png",X:"x.png",Y:"y.png",Z:"z.png",t:"空白.png"}
btn.addEventListener("click",()=>{
    var txt = ipt.value;
    var num = txt.length;
    var arr = Array.from(txt);

    for(let i = 0; i<num; i++){
        const elem =document.getElementById("img"+i);
        elem.src = pic[arr[i]] ;}}); //画像を切り替え
