let ipt = document.querySelector("textarea");
let btn = document.querySelector("button")

const pic = {A:"a.png",B:"b.png",C:"c_g.png",D:"d.png",E:"e.png",F:"f_v_y_u_w.png",G:"c_g.png",H:"h.png",
          I:"i.png",J:"j.png",K:"k.png",L:"l.png",M:"m.png",N:"n.png",O:"o.png",P:"p.png",Q:"q.png",R:"r.png",S:"s.png",
          T:"t.png",U:"f_v_y_u_w.png",V:"f_v_y_u_w.png",W:"f_v_y_u_w.png",X:"x.png",Y:"y.png",Z:"z.png",
            a:"a.png",b:"b.png",c:"c_g.png",d:"d.png",e:"e.png",f:"f_v_y_u_w.png",g:"c_g.png",h:"h.png",
          i:"i.png",j:"j.png",k:"k.png",l:"l.png",m:"m.png",n:"n.png",o:"o.png",p:"p.png",q:"q.png",r:"r.png",s:"s.png",
          t:"t.png",u:"f_v_y_u_w.png",v:"f_v_y_u_w.png",w:"f_v_y_u_w.png",x:"x.png",y:"y.png",z:"z.png",}
btn.addEventListener("click",()=>{
    var txt = ipt.value;
    var num = txt.length;
    var arr = Array.from(txt);

    for(let i = 0; i<num; i++){
        const elem =document.getElementById("img"+i);
        elem.src = pic[arr[i]] ;}}); //画像を切り替え
