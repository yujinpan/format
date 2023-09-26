import{c as Ee,b as O,i as P,a as N,u as le,d as ne,e as se,f as q,_ as H,g as Te,h as ie,j as re,w as de,k as ue,l as J,m as Be,n as Ne,E as B,o as Ae,p as _e,q as $e,A as oe,r as Re,s as Pe,t as Fe,v as Ge,x as Le}from"./utils-72701f5b.js";import{i as F,g as A,h as Oe,j as g,d as E,o as d,c as S,b as v,k as ce,v as pe,u as e,l as ve,n as p,m as L,p as X,q as Z,f as G,t as w,x as Y,y as fe,z as ze,A as De,B as Je,C as U,D as Ke,E as C,w as T,G as R,H as V,e as j,I as Ue,J as te,_ as je,r as K,K as Me,F as qe,a as He}from"./index-151e565a.js";class Ye extends Error{constructor(r){super(r),this.name="ElementPlusError"}}function We(a,r){throw new Ye(`[${a}] ${r}`)}const _="update:modelValue",M="change",W="input",Qe=a=>["",...Ee].includes(a),me=O({size:le,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),Xe=O({...me,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),be={[_]:a=>F(a)||P(a)||N(a),[M]:a=>F(a)||P(a)||N(a)},he=Symbol("radioGroupKey"),ge=(a,r)=>{const s=A(),o=Oe(he,void 0),y=g(()=>!!o),k=g({get(){return y.value?o.modelValue:a.modelValue},set(i){y.value?o.changeEvent(i):r&&r(_,i),s.value.checked=a.modelValue===a.label}}),f=ne(g(()=>o==null?void 0:o.size)),l=se(g(()=>o==null?void 0:o.disabled)),c=A(!1),m=g(()=>l.value||y.value&&k.value!==a.label?-1:0);return{radioRef:s,isGroup:y,radioGroup:o,focus:c,size:f,disabled:l,tabIndex:m,modelValue:k}},Ze=["value","name","disabled"],xe=E({name:"ElRadio"}),ea=E({...xe,props:Xe,emits:be,setup(a,{emit:r}){const s=a,o=q("radio"),{radioRef:y,radioGroup:k,focus:f,size:l,disabled:c,modelValue:m}=ge(s,r);function i(){Z(()=>r("change",m.value))}return(n,u)=>{var I;return d(),S("label",{class:p([e(o).b(),e(o).is("disabled",e(c)),e(o).is("focus",e(f)),e(o).is("bordered",n.border),e(o).is("checked",e(m)===n.label),e(o).m(e(l))])},[v("span",{class:p([e(o).e("input"),e(o).is("disabled",e(c)),e(o).is("checked",e(m)===n.label)])},[ce(v("input",{ref_key:"radioRef",ref:y,"onUpdate:modelValue":u[0]||(u[0]=$=>ve(m)?m.value=$:null),class:p(e(o).e("original")),value:n.label,name:n.name||((I=e(k))==null?void 0:I.name),disabled:e(c),type:"radio",onFocus:u[1]||(u[1]=$=>f.value=!0),onBlur:u[2]||(u[2]=$=>f.value=!1),onChange:i,onClick:u[3]||(u[3]=L(()=>{},["stop"]))},null,42,Ze),[[pe,e(m)]]),v("span",{class:p(e(o).e("inner"))},null,2)],2),v("span",{class:p(e(o).e("label")),onKeydown:u[4]||(u[4]=L(()=>{},["stop"]))},[X(n.$slots,"default",{},()=>[G(w(n.label),1)])],34)],2)}}});var aa=H(ea,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const oa=O({...me,name:{type:String,default:""}}),ta=["value","name","disabled"],la=E({name:"ElRadioButton"}),na=E({...la,props:oa,setup(a){const r=a,s=q("radio"),{radioRef:o,focus:y,size:k,disabled:f,modelValue:l,radioGroup:c}=ge(r),m=g(()=>({backgroundColor:(c==null?void 0:c.fill)||"",borderColor:(c==null?void 0:c.fill)||"",boxShadow:c!=null&&c.fill?`-1px 0 0 0 ${c.fill}`:"",color:(c==null?void 0:c.textColor)||""}));return(i,n)=>{var u;return d(),S("label",{class:p([e(s).b("button"),e(s).is("active",e(l)===i.label),e(s).is("disabled",e(f)),e(s).is("focus",e(y)),e(s).bm("button",e(k))])},[ce(v("input",{ref_key:"radioRef",ref:o,"onUpdate:modelValue":n[0]||(n[0]=I=>ve(l)?l.value=I:null),class:p(e(s).be("button","original-radio")),value:i.label,type:"radio",name:i.name||((u=e(c))==null?void 0:u.name),disabled:e(f),onFocus:n[1]||(n[1]=I=>y.value=!0),onBlur:n[2]||(n[2]=I=>y.value=!1),onClick:n[3]||(n[3]=L(()=>{},["stop"]))},null,42,ta),[[pe,e(l)]]),v("span",{class:p(e(s).be("button","inner")),style:Y(e(l)===i.label?e(m):{}),onKeydown:n[4]||(n[4]=L(()=>{},["stop"]))},[X(i.$slots,"default",{},()=>[G(w(i.label),1)])],38)],2)}}});var ye=H(na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const sa=O({id:{type:String,default:void 0},size:le,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ia=be,ra=["id","aria-label","aria-labelledby"],da=E({name:"ElRadioGroup"}),ua=E({...da,props:sa,emits:ia,setup(a,{emit:r}){const s=a,o=q("radio"),y=Te(),k=A(),{formItem:f}=ie(),{inputId:l,isLabeledByFormItem:c}=re(s,{formItemContext:f}),m=n=>{r(_,n),Z(()=>r("change",n))};fe(()=>{const n=k.value.querySelectorAll("[type=radio]"),u=n[0];!Array.from(n).some(I=>I.checked)&&u&&(u.tabIndex=0)});const i=g(()=>s.name||y.value);return ze(he,De({...Je(s),changeEvent:m,name:i})),U(()=>s.modelValue,()=>{s.validateEvent&&(f==null||f.validate("change").catch(n=>void 0))}),(n,u)=>(d(),S("div",{id:e(l),ref_key:"radioGroupRef",ref:k,class:p(e(o).b("group")),role:"radiogroup","aria-label":e(c)?void 0:n.label||"radio-group","aria-labelledby":e(c)?e(f).labelId:void 0},[X(n.$slots,"default")],10,ra))}});var ke=H(ua,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);de(aa,{RadioButton:ye,RadioGroup:ke});const ca=ue(ke),pa=ue(ye),va=O({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Qe},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:J},activeActionIcon:{type:J},activeIcon:{type:J},inactiveIcon:{type:J},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:Be(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1}}),fa={[_]:a=>N(a)||F(a)||P(a),[M]:a=>N(a)||F(a)||P(a),[W]:a=>N(a)||F(a)||P(a)},ma=["onClick"],ba=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],ha=["aria-hidden"],ga=["aria-hidden"],ya=["aria-hidden"],Q="ElSwitch",ka=E({name:Q}),Sa=E({...ka,props:va,emits:fa,setup(a,{expose:r,emit:s}){const o=a,y=Ue(),{formItem:k}=ie(),f=ne(),l=q("switch");(t=>{t.forEach(h=>{_e({from:h[0],replacement:h[1],scope:Q,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},g(()=>{var D;return!!((D=y.vnode.props)!=null&&D[h[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:m}=re(o,{formItemContext:k}),i=se(g(()=>o.loading)),n=A(o.modelValue!==!1),u=A(),I=A(),$=g(()=>[l.b(),l.m(f.value),l.is("disabled",i.value),l.is("checked",b.value)]),Se=g(()=>[l.e("label"),l.em("label","left"),l.is("active",!b.value)]),Ce=g(()=>[l.e("label"),l.em("label","right"),l.is("active",b.value)]),Ie=g(()=>({width:Ne(o.width)}));U(()=>o.modelValue,()=>{n.value=!0}),U(()=>o.value,()=>{n.value=!1});const x=g(()=>n.value?o.modelValue:o.value),b=g(()=>x.value===o.activeValue);[o.activeValue,o.inactiveValue].includes(x.value)||(s(_,o.inactiveValue),s(M,o.inactiveValue),s(W,o.inactiveValue)),U(b,t=>{var h;u.value.checked=t,o.validateEvent&&((h=k==null?void 0:k.validate)==null||h.call(k,"change").catch(D=>void 0))});const z=()=>{const t=b.value?o.inactiveValue:o.activeValue;s(_,t),s(M,t),s(W,t),Z(()=>{u.value.checked=b.value})},ee=()=>{if(i.value)return;const{beforeChange:t}=o;if(!t){z();return}const h=t();[te(h),N(h)].includes(!0)||We(Q,"beforeChange must return type `Promise<boolean>` or `boolean`"),te(h)?h.then(ae=>{ae&&z()}).catch(ae=>{}):h&&z()},Ve=g(()=>l.cssVarBlock({...o.activeColor?{"on-color":o.activeColor}:null,...o.inactiveColor?{"off-color":o.inactiveColor}:null,...o.borderColor?{"border-color":o.borderColor}:null})),we=()=>{var t,h;(h=(t=u.value)==null?void 0:t.focus)==null||h.call(t)};return fe(()=>{u.value.checked=b.value}),r({focus:we,checked:b}),(t,h)=>(d(),S("div",{class:p(e($)),style:Y(e(Ve)),onClick:L(ee,["prevent"])},[v("input",{id:e(m),ref_key:"input",ref:u,class:p(e(l).e("input")),type:"checkbox",role:"switch","aria-checked":e(b),"aria-disabled":e(i),name:t.name,"true-value":t.activeValue,"false-value":t.inactiveValue,disabled:e(i),tabindex:t.tabindex,onChange:z,onKeydown:Ke(ee,["enter"])},null,42,ba),!t.inlinePrompt&&(t.inactiveIcon||t.inactiveText)?(d(),S("span",{key:0,class:p(e(Se))},[t.inactiveIcon?(d(),C(e(B),{key:0},{default:T(()=>[(d(),C(R(t.inactiveIcon)))]),_:1})):V("v-if",!0),!t.inactiveIcon&&t.inactiveText?(d(),S("span",{key:1,"aria-hidden":e(b)},w(t.inactiveText),9,ha)):V("v-if",!0)],2)):V("v-if",!0),v("span",{ref_key:"core",ref:I,class:p(e(l).e("core")),style:Y(e(Ie))},[t.inlinePrompt?(d(),S("div",{key:0,class:p(e(l).e("inner"))},[t.activeIcon||t.inactiveIcon?(d(),C(e(B),{key:0,class:p(e(l).is("icon"))},{default:T(()=>[(d(),C(R(e(b)?t.activeIcon:t.inactiveIcon)))]),_:1},8,["class"])):t.activeText||t.inactiveText?(d(),S("span",{key:1,class:p(e(l).is("text")),"aria-hidden":!e(b)},w(e(b)?t.activeText:t.inactiveText),11,ga)):V("v-if",!0)],2)):V("v-if",!0),v("div",{class:p(e(l).e("action"))},[t.loading?(d(),C(e(B),{key:0,class:p(e(l).is("loading"))},{default:T(()=>[j(e(Ae))]),_:1},8,["class"])):t.activeActionIcon&&e(b)?(d(),C(e(B),{key:1},{default:T(()=>[(d(),C(R(t.activeActionIcon)))]),_:1})):t.inactiveActionIcon&&!e(b)?(d(),C(e(B),{key:2},{default:T(()=>[(d(),C(R(t.inactiveActionIcon)))]),_:1})):V("v-if",!0)],2)],6),!t.inlinePrompt&&(t.activeIcon||t.activeText)?(d(),S("span",{key:1,class:p(e(Ce))},[t.activeIcon?(d(),C(e(B),{key:0},{default:T(()=>[(d(),C(R(t.activeIcon)))]),_:1})):V("v-if",!0),!t.activeIcon&&t.activeText?(d(),S("span",{key:1,"aria-hidden":!e(b)},w(t.activeText),9,ya)):V("v-if",!0)],2)):V("v-if",!0)],14,ma))}});var Ca=H(Sa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Ia=de(Ca),Va=E({components:{ElButton:$e,ElSwitch:Ia,ElRadioGroup:ca,ElRadioButton:pa},data(){return{loading:!1,keepAreaTree:!1,saveLevel:oe.DISTRICT,AreaLevels:Re,AreaLevel:oe}},methods:{downloadJson(a,r){Pe(JSON.stringify(a),`${r}.json`)},uploadFile(){const a=Array.from(this.$refs.input.files);return this.$refs.input.value="",this.loading=!0,Promise.all(a.map(async r=>{const s=await Fe(r);if(this.keepAreaTree){const o=Ge(s,this.saveLevel);this.downloadJson(o,s.name)}else{const o=Le(s);o.features.length&&this.downloadJson(o,s.name)}})).finally(()=>this.loading=!1)},triggerUpload(){this.$refs.input.click()}}}),wa=Me('<h3 class="margin-top-medium">DataVJSON To GeoJSON</h3><div class="margin-top-base"><a target="_blank" href="http://datav.aliyun.com/portal/school/atlas/level_generator">DataVJSON（层级.json(开放格式)）</a>: <pre><code>{ name: string; payload: TopoJSON; children: {...} }</code></pre></div><div class="margin-top-base"> GeoJSON: <pre><code>{ type: &#39;FeatureCollection&#39;, features: [] }</code></pre></div><h3 class="margin-top-medium">Options</h3>',4),Ea={class:"margin-top-base"},Ta=v("span",null,"Keep Area Tree",-1),Ba=v("pre",null,[v("code",null,"[{ code, name, children, geojson }]")],-1),Na={key:0},Aa={class:"margin-top-base"},_a=v("span",null,"Save Level",-1),$a={class:"margin-top-base"};function Ra(a,r,s,o,y,k){const f=K("el-button"),l=K("el-switch"),c=K("ElRadioButton"),m=K("ElRadioGroup");return d(),S("div",null,[j(f,{onClick:a.triggerUpload,loading:a.loading},{default:T(()=>[G(" Upload Files ")]),_:1},8,["onClick","loading"]),v("input",{onChange:r[0]||(r[0]=(...i)=>a.uploadFile&&a.uploadFile(...i)),style:{position:"absolute",top:"-99999px"},ref:"input",type:"file",accept:".json",multiple:""},null,544),wa,v("ul",null,[v("li",Ea,[Ta,G("   "),j(l,{modelValue:a.keepAreaTree,"onUpdate:modelValue":r[1]||(r[1]=i=>a.keepAreaTree=i)},null,8,["modelValue"]),Ba,a.keepAreaTree?(d(),S("ul",Na,[v("li",Aa,[_a,G("   "),j(m,{modelValue:a.saveLevel,"onUpdate:modelValue":r[2]||(r[2]=i=>a.saveLevel=i)},{default:T(()=>[(d(!0),S(qe,null,He(a.AreaLevels,i=>(d(),C(c,{key:i,value:i,label:i},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),v("pre",$a,"- "+w(a.AreaLevel.COUNTRY)+`
  - `+w(a.AreaLevel.PROVINCE)+`
    - `+w(a.AreaLevel.CITY)+`
      - `+w(a.AreaLevel.DISTRICT)+`
            `,1)])])):V("",!0)])])])}const Ga=je(Va,[["render",Ra]]);export{Ga as default};
