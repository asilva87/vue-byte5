import{d as v,r as k,o as d,c as w,a as t,t as b,b as C,p as f,e as p,_ as E}from"./index-764a03e6.js";const N=i=>(f("data-v-f0d8126c"),i=i(),p(),i),O={class:"calc"},$={class:"calc__display"},g={class:"calc__key-row",style:{"justify-content":"flex-end"}},A={class:"calc__key-row"},R={class:"calc__key-row"},S={class:"calc__key-row"},I=N(()=>t("sup",null,"2",-1)),m={class:"calc__key-row"},D=v({__name:"CalculatorView",setup(i){const n=k("0"),s=k("0"),c=k(!1),a=k("NO_OPERATION"),u=k(!0),r=_=>{let e=_.toString();return e.length>12&&(_>999999999999||_<-999999999999?e=_.toExponential(5):e=_.toFixed(11-Math.floor(_).toString().length)),e},y=(_,e,l)=>{switch(_){case"ADD":return e+l;case"SUB":return e-l;case"MULT":return e*l;case"DIV":return e/l;case"MODULO":return e%l;default:return 0}},o=_=>{if(Number.isInteger(Number(_))||_===".")s.value==="0"||c.value?(s.value=_.toString(),c.value=!1):s.value.length<12&&(s.value+=_);else switch(_){case"CLEAR_SCREEN":s.value="0";break;case"CLEAR":n.value="0",s.value="0",a.value="NO_OPERATION",c.value=!1;break;case"ADD":case"SUB":case"MULT":case"DIV":case"MODULO":if(a.value!=="NO_OPERATION"&&!u.value){const e=y(a.value,Number(n.value),Number(s.value));s.value=r(e)}a.value=_,n.value=s.value,c.value=!0,u.value=!1;break;case"SQUARED":s.value=r(Number(s.value)**2);break;case"ROOT":s.value=r(Math.sqrt(Number(s.value)));break;case"PERCENTAGE":s.value=r(Number(s.value)/100);break;case"PI":s.value=Math.PI.toFixed(12).toString();break;case"EQUALS":if(a.value!=="NO_OPERATION"){const e=y(a.value,Number(n.value),Number(s.value));s.value=r(e),a.value="NO_OPERATION",n.value="0",u.value=!0,c.value=!1}break}};return(_,e)=>(d(),w("main",null,[t("div",O,[t("div",$,b(s.value),1),t("div",g,[t("button",{onClick:e[0]||(e[0]=l=>o("CLEAR_SCREEN")),class:"calc__key-row__key"}," CE "),t("button",{onClick:e[1]||(e[1]=l=>o("CLEAR")),class:"calc__key-row__key"},"C")]),t("div",A,[t("button",{onClick:e[2]||(e[2]=l=>o("7")),class:"calc__key-row__key calc__key-row__key--digit"}," 7 "),t("button",{onClick:e[3]||(e[3]=l=>o("8")),class:"calc__key-row__key calc__key-row__key--digit"}," 8 "),t("button",{onClick:e[4]||(e[4]=l=>o("9")),class:"calc__key-row__key calc__key-row__key--digit"}," 9 "),t("button",{onClick:e[5]||(e[5]=l=>o("DIV")),class:"calc__key-row__key"}," ÷ "),t("button",{onClick:e[6]||(e[6]=l=>o("PI")),class:"calc__key-row__key"},"π")]),t("div",R,[t("button",{onClick:e[7]||(e[7]=l=>o("4")),class:"calc__key-row__key calc__key-row__key--digit"}," 4 "),t("button",{onClick:e[8]||(e[8]=l=>o("5")),class:"calc__key-row__key calc__key-row__key--digit"}," 5 "),t("button",{onClick:e[9]||(e[9]=l=>o("6")),class:"calc__key-row__key calc__key-row__key--digit"}," 6 "),t("button",{onClick:e[10]||(e[10]=l=>o("MULT")),class:"calc__key-row__key"}," × "),t("button",{onClick:e[11]||(e[11]=l=>o("ROOT")),class:"calc__key-row__key"}," √ ")]),t("div",S,[t("button",{onClick:e[12]||(e[12]=l=>o("1")),class:"calc__key-row__key calc__key-row__key--digit"}," 1 "),t("button",{onClick:e[13]||(e[13]=l=>o("2")),class:"calc__key-row__key calc__key-row__key--digit"}," 2 "),t("button",{onClick:e[14]||(e[14]=l=>o("3")),class:"calc__key-row__key calc__key-row__key--digit"}," 3 "),t("button",{onClick:e[15]||(e[15]=l=>o("SUB")),class:"calc__key-row__key"}," − "),t("button",{onClick:e[16]||(e[16]=l=>o("SQUARED")),class:"calc__key-row__key"},[C(" x"),I])]),t("div",m,[t("button",{onClick:e[17]||(e[17]=l=>o("0")),class:"calc__key-row__key calc__key-row__key--digit"}," 0 "),t("button",{onClick:e[18]||(e[18]=l=>o(".")),class:"calc__key-row__key"},"."),t("button",{onClick:e[19]||(e[19]=l=>o("PERCENTAGE")),class:"calc__key-row__key"}," % "),t("button",{onClick:e[20]||(e[20]=l=>o("ADD")),class:"calc__key-row__key"},"+"),t("button",{onClick:e[21]||(e[21]=l=>o("EQUALS")),class:"calc__key-row__key calc__key-row__key--equals"}," = ")])])]))}});const U=E(D,[["__scopeId","data-v-f0d8126c"]]);export{U as default};
