import{I as Te,c as D,e as G,i as A,m as te,q as ne,o as se,g as q,_ as H,l as Ne,p as ie,r as re,w as de,s as ue,J,d as Be,h as Ae,E as N,C as _e,K as Re,H as $e,L as Pe,M as Fe}from"./file-7fdf481d.js";import{A as oe,a as Ge,d as Le,b as Oe}from"./utils-2955dd3e.js";import{U as L,l as _,m as De,p as y,d as E,o as d,c as k,b as p,D as ce,a8 as pe,u as e,q as ve,E as v,a0 as O,K as X,n as Z,f as B,t as w,G as Y,j as fe,A as Ue,I as ze,a2 as Je,k as j,a9 as Ke,C,w as T,L as P,M as V,e as F,i as je,aa as le,_ as Me,r as K,ab as qe,F as He,a as Ye}from"./index-b578c156.js";import{U as R,C as M,d as me,I as W,t as We}from"./event-e06a23af.js";const Qe=o=>["",...Te].includes(o),be=D({size:te,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),Xe=D({...be,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),he={[R]:o=>L(o)||G(o)||A(o),[M]:o=>L(o)||G(o)||A(o)},ye=Symbol("radioGroupKey"),ge=(o,r)=>{const s=_(),a=De(ye,void 0),g=y(()=>!!a),S=y({get(){return g.value?a.modelValue:o.modelValue},set(i){g.value?a.changeEvent(i):r&&r(R,i),s.value.checked=o.modelValue===o.label}}),f=ne(y(()=>a==null?void 0:a.size)),t=se(y(()=>a==null?void 0:a.disabled)),c=_(!1),m=y(()=>t.value||g.value&&S.value!==o.label?-1:0);return{radioRef:s,isGroup:g,radioGroup:a,focus:c,size:f,disabled:t,tabIndex:m,modelValue:S}},Ze=["value","name","disabled"],xe=E({name:"ElRadio"}),ea=E({...xe,props:Xe,emits:he,setup(o,{emit:r}){const s=o,a=q("radio"),{radioRef:g,radioGroup:S,focus:f,size:t,disabled:c,modelValue:m}=ge(s,r);function i(){Z(()=>r("change",m.value))}return(n,u)=>{var I;return d(),k("label",{class:v([e(a).b(),e(a).is("disabled",e(c)),e(a).is("focus",e(f)),e(a).is("bordered",n.border),e(a).is("checked",e(m)===n.label),e(a).m(e(t))])},[p("span",{class:v([e(a).e("input"),e(a).is("disabled",e(c)),e(a).is("checked",e(m)===n.label)])},[ce(p("input",{ref_key:"radioRef",ref:g,"onUpdate:modelValue":u[0]||(u[0]=$=>ve(m)?m.value=$:null),class:v(e(a).e("original")),value:n.label,name:n.name||((I=e(S))==null?void 0:I.name),disabled:e(c),type:"radio",onFocus:u[1]||(u[1]=$=>f.value=!0),onBlur:u[2]||(u[2]=$=>f.value=!1),onChange:i,onClick:u[3]||(u[3]=O(()=>{},["stop"]))},null,42,Ze),[[pe,e(m)]]),p("span",{class:v(e(a).e("inner"))},null,2)],2),p("span",{class:v(e(a).e("label")),onKeydown:u[4]||(u[4]=O(()=>{},["stop"]))},[X(n.$slots,"default",{},()=>[B(w(n.label),1)])],34)],2)}}});var aa=H(ea,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const oa=D({...be,name:{type:String,default:""}}),la=["value","name","disabled"],ta=E({name:"ElRadioButton"}),na=E({...ta,props:oa,setup(o){const r=o,s=q("radio"),{radioRef:a,focus:g,size:S,disabled:f,modelValue:t,radioGroup:c}=ge(r),m=y(()=>({backgroundColor:(c==null?void 0:c.fill)||"",borderColor:(c==null?void 0:c.fill)||"",boxShadow:c!=null&&c.fill?`-1px 0 0 0 ${c.fill}`:"",color:(c==null?void 0:c.textColor)||""}));return(i,n)=>{var u;return d(),k("label",{class:v([e(s).b("button"),e(s).is("active",e(t)===i.label),e(s).is("disabled",e(f)),e(s).is("focus",e(g)),e(s).bm("button",e(S))])},[ce(p("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":n[0]||(n[0]=I=>ve(t)?t.value=I:null),class:v(e(s).be("button","original-radio")),value:i.label,type:"radio",name:i.name||((u=e(c))==null?void 0:u.name),disabled:e(f),onFocus:n[1]||(n[1]=I=>g.value=!0),onBlur:n[2]||(n[2]=I=>g.value=!1),onClick:n[3]||(n[3]=O(()=>{},["stop"]))},null,42,la),[[pe,e(t)]]),p("span",{class:v(e(s).be("button","inner")),style:Y(e(t)===i.label?e(m):{}),onKeydown:n[4]||(n[4]=O(()=>{},["stop"]))},[X(i.$slots,"default",{},()=>[B(w(i.label),1)])],38)],2)}}});var Se=H(na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const sa=D({id:{type:String,default:void 0},size:te,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ia=he,ra=["id","aria-label","aria-labelledby"],da=E({name:"ElRadioGroup"}),ua=E({...da,props:sa,emits:ia,setup(o,{emit:r}){const s=o,a=q("radio"),g=Ne(),S=_(),{formItem:f}=ie(),{inputId:t,isLabeledByFormItem:c}=re(s,{formItemContext:f}),m=n=>{r(R,n),Z(()=>r("change",n))};fe(()=>{const n=S.value.querySelectorAll("[type=radio]"),u=n[0];!Array.from(n).some(I=>I.checked)&&u&&(u.tabIndex=0)});const i=y(()=>s.name||g.value);return Ue(ye,ze({...Je(s),changeEvent:m,name:i})),j(()=>s.modelValue,()=>{s.validateEvent&&(f==null||f.validate("change").catch(n=>me()))}),(n,u)=>(d(),k("div",{id:e(t),ref_key:"radioGroupRef",ref:S,class:v(e(a).b("group")),role:"radiogroup","aria-label":e(c)?void 0:n.label||"radio-group","aria-labelledby":e(c)?e(f).labelId:void 0},[X(n.$slots,"default")],10,ra))}});var ke=H(ua,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);de(aa,{RadioButton:Se,RadioGroup:ke});const ca=ue(ke),pa=ue(Se),va=D({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Qe},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:J},activeActionIcon:{type:J},activeIcon:{type:J},inactiveIcon:{type:J},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:Be(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),fa={[R]:o=>A(o)||L(o)||G(o),[M]:o=>A(o)||L(o)||G(o),[W]:o=>A(o)||L(o)||G(o)},ma=["onClick"],ba=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],ha=["aria-hidden"],ya=["aria-hidden"],ga=["aria-hidden"],Q="ElSwitch",Sa=E({name:Q}),ka=E({...Sa,props:va,emits:fa,setup(o,{expose:r,emit:s}){const a=o,g=je(),{formItem:S}=ie(),f=ne(),t=q("switch");(l=>{l.forEach(h=>{Re({from:h[0],replacement:h[1],scope:Q,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},y(()=>{var z;return!!((z=g.vnode.props)!=null&&z[h[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:m}=re(a,{formItemContext:S}),i=se(y(()=>a.loading)),n=_(a.modelValue!==!1),u=_(),I=_(),$=y(()=>[t.b(),t.m(f.value),t.is("disabled",i.value),t.is("checked",b.value)]),Ce=y(()=>[t.e("label"),t.em("label","left"),t.is("active",!b.value)]),Ie=y(()=>[t.e("label"),t.em("label","right"),t.is("active",b.value)]),Ve=y(()=>({width:Ae(a.width)}));j(()=>a.modelValue,()=>{n.value=!0}),j(()=>a.value,()=>{n.value=!1});const x=y(()=>n.value?a.modelValue:a.value),b=y(()=>x.value===a.activeValue);[a.activeValue,a.inactiveValue].includes(x.value)||(s(R,a.inactiveValue),s(M,a.inactiveValue),s(W,a.inactiveValue)),j(b,l=>{var h;u.value.checked=l,a.validateEvent&&((h=S==null?void 0:S.validate)==null||h.call(S,"change").catch(z=>me()))});const U=()=>{const l=b.value?a.inactiveValue:a.activeValue;s(R,l),s(M,l),s(W,l),Z(()=>{u.value.checked=b.value})},ee=()=>{if(i.value)return;const{beforeChange:l}=a;if(!l){U();return}const h=l();[le(h),A(h)].includes(!0)||We(Q,"beforeChange must return type `Promise<boolean>` or `boolean`"),le(h)?h.then(ae=>{ae&&U()}).catch(ae=>{}):h&&U()},we=y(()=>t.cssVarBlock({...a.activeColor?{"on-color":a.activeColor}:null,...a.inactiveColor?{"off-color":a.inactiveColor}:null,...a.borderColor?{"border-color":a.borderColor}:null})),Ee=()=>{var l,h;(h=(l=u.value)==null?void 0:l.focus)==null||h.call(l)};return fe(()=>{u.value.checked=b.value}),r({focus:Ee,checked:b}),(l,h)=>(d(),k("div",{class:v(e($)),style:Y(e(we)),onClick:O(ee,["prevent"])},[p("input",{id:e(m),ref_key:"input",ref:u,class:v(e(t).e("input")),type:"checkbox",role:"switch","aria-checked":e(b),"aria-disabled":e(i),"aria-label":l.label,name:l.name,"true-value":l.activeValue,"false-value":l.inactiveValue,disabled:e(i),tabindex:l.tabindex,onChange:U,onKeydown:Ke(ee,["enter"])},null,42,ba),!l.inlinePrompt&&(l.inactiveIcon||l.inactiveText)?(d(),k("span",{key:0,class:v(e(Ce))},[l.inactiveIcon?(d(),C(e(N),{key:0},{default:T(()=>[(d(),C(P(l.inactiveIcon)))]),_:1})):V("v-if",!0),!l.inactiveIcon&&l.inactiveText?(d(),k("span",{key:1,"aria-hidden":e(b)},w(l.inactiveText),9,ha)):V("v-if",!0)],2)):V("v-if",!0),p("span",{ref_key:"core",ref:I,class:v(e(t).e("core")),style:Y(e(Ve))},[l.inlinePrompt?(d(),k("div",{key:0,class:v(e(t).e("inner"))},[l.activeIcon||l.inactiveIcon?(d(),C(e(N),{key:0,class:v(e(t).is("icon"))},{default:T(()=>[(d(),C(P(e(b)?l.activeIcon:l.inactiveIcon)))]),_:1},8,["class"])):l.activeText||l.inactiveText?(d(),k("span",{key:1,class:v(e(t).is("text")),"aria-hidden":!e(b)},w(e(b)?l.activeText:l.inactiveText),11,ya)):V("v-if",!0)],2)):V("v-if",!0),p("div",{class:v(e(t).e("action"))},[l.loading?(d(),C(e(N),{key:0,class:v(e(t).is("loading"))},{default:T(()=>[F(e(_e))]),_:1},8,["class"])):l.activeActionIcon&&e(b)?(d(),C(e(N),{key:1},{default:T(()=>[(d(),C(P(l.activeActionIcon)))]),_:1})):l.inactiveActionIcon&&!e(b)?(d(),C(e(N),{key:2},{default:T(()=>[(d(),C(P(l.inactiveActionIcon)))]),_:1})):V("v-if",!0)],2)],6),!l.inlinePrompt&&(l.activeIcon||l.activeText)?(d(),k("span",{key:1,class:v(e(Ie))},[l.activeIcon?(d(),C(e(N),{key:0},{default:T(()=>[(d(),C(P(l.activeIcon)))]),_:1})):V("v-if",!0),!l.activeIcon&&l.activeText?(d(),k("span",{key:1,"aria-hidden":!e(b)},w(l.activeText),9,ga)):V("v-if",!0)],2)):V("v-if",!0)],14,ma))}});var Ca=H(ka,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Ia=de(Ca),Va=E({components:{ElButton:$e,ElSwitch:Ia,ElRadioGroup:ca,ElRadioButton:pa},data(){return{loading:!1,keepAreaTree:!1,saveLevel:oe.DISTRICT,removeParentNode:!1,AreaLevels:Ge,AreaLevel:oe}},methods:{downloadJson(o,r){Pe(JSON.stringify(o),`${r}.json`)},uploadFile(){const o=Array.from(this.$refs.input.files);return this.$refs.input.value="",this.loading=!0,Promise.all(o.map(async r=>{const s=await Fe(r);if(this.keepAreaTree){const a=Le(s,this.saveLevel,this.removeParentNode);this.downloadJson(a,s.name)}else{const a=Oe(s);a.features.length&&this.downloadJson(a,s.name)}})).finally(()=>this.loading=!1)},triggerUpload(){this.$refs.input.click()}}}),wa=qe('<h3 class="margin-top-medium">DataVJSON To GeoJSON</h3><div class="margin-top-base"><a target="_blank" href="http://datav.aliyun.com/portal/school/atlas/level_generator">DataVJSON（层级.json(开放格式)）</a>: <pre><code>{ name: string; payload: TopoJSON; children: {...} }</code></pre></div><div class="margin-top-base"> GeoJSON: <pre><code>{ type: &#39;FeatureCollection&#39;, features: [] }</code></pre></div><h3 class="margin-top-medium">Options</h3>',4),Ea={class:"margin-top-base"},Ta=p("span",null,"Keep Area Tree",-1),Na=p("pre",null,[p("code",null,"[{ code, name, children, geojson }]")],-1),Ba={key:0},Aa={class:"margin-top-base"},_a=p("span",null,"Save Level",-1),Ra={class:"margin-top-base"},$a={class:"margin-top-base"},Pa=p("span",null,"Remove Parent Node",-1);function Fa(o,r,s,a,g,S){const f=K("el-button"),t=K("el-switch"),c=K("ElRadioButton"),m=K("ElRadioGroup");return d(),k("div",null,[F(f,{onClick:o.triggerUpload,loading:o.loading},{default:T(()=>[B(" Upload Files ")]),_:1},8,["onClick","loading"]),p("input",{onChange:r[0]||(r[0]=(...i)=>o.uploadFile&&o.uploadFile(...i)),style:{position:"absolute",top:"-99999px"},ref:"input",type:"file",accept:".json",multiple:""},null,544),wa,p("ul",null,[p("li",Ea,[Ta,B("   "),F(t,{modelValue:o.keepAreaTree,"onUpdate:modelValue":r[1]||(r[1]=i=>o.keepAreaTree=i)},null,8,["modelValue"]),Na,o.keepAreaTree?(d(),k("ul",Ba,[p("li",Aa,[_a,B("   "),F(m,{modelValue:o.saveLevel,"onUpdate:modelValue":r[2]||(r[2]=i=>o.saveLevel=i)},{default:T(()=>[(d(!0),k(He,null,Ye(o.AreaLevels,i=>(d(),C(c,{key:i,value:i,label:i},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),p("pre",Ra,"- "+w(o.AreaLevel.COUNTRY)+`
  - `+w(o.AreaLevel.PROVINCE)+`
    - `+w(o.AreaLevel.CITY)+`
      - `+w(o.AreaLevel.DISTRICT)+`
            `,1)]),p("li",$a,[Pa,B("   "),F(t,{modelValue:o.removeParentNode,"onUpdate:modelValue":r[3]||(r[3]=i=>o.removeParentNode=i)},null,8,["modelValue"])])])):V("",!0)])])])}const Ua=Me(Va,[["render",Fa]]);export{Ua as default};
