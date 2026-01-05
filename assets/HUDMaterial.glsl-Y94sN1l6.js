import{iU as Nt,xk as kt,xl as Wt,e2 as Yt,s5 as Xt,bz as wt,pD as Qt,xm as Zt,xn as Kt,uw as Jt,eG as We,ox as eo,e5 as bt,cT as to,xo as oo,xp as so,xq as io,wp as no,wq as ao,wr as ro,n4 as M,jb as lo,fx as co,fL as oe,e1 as _,fI as W,es as L,ej as N,eW as G,eX as q,su as uo,fP as fo,eL as po,er as se,fE as re,e4 as Je,e3 as yt,fz as Ye,g5 as Xe,mj as ho,kY as Qe,o_ as vo,b0 as go,jn as mo,_ as xo,kG as et,X as E,mh as wo,jW as tt,ji as Pt,jf as $t,pE as Ve,mi as St,e8 as zt,fA as be,fO as Ot,fm as bo,hh as yo,fw as ot,jd as Po,jX as $o,cR as So}from"./index-DcRZY5kx.js";import{u as zo}from"./meshVertexSpaceUtils-Dta9Id-h.js";import{o as Oo,x as Co}from"./hydratedFeatures-DnmJXUVN.js";import{r as H,t as st,n as Y}from"./vec3f32-WCVSSNPR.js";import{aM as Ao,n as X,m as Q,aN as it,K as Ct,f as Mo,M as Do,am as Ze,W as Be,a4 as Me,ad as Vo,aB as At,L as Mt,i as jo,al as Dt,N as To,aO as _o,u as Ro,d as Fo,b as Eo,ai as nt,e as _e,R as at,ay as Uo,E as te,ag as Io,c as Ho,g as Bo,t as Go,w as Lo,v as qo,x as Vt,y as No,z as U,s as ko,aP as Re,aQ as Wo,aR as Yo,au as Xo,aS as Qo,aT as Zo,aU as Ko,aV as rt,aW as Jo,aX as lt,aY as ct,aZ as es}from"./OutputColorHighlightOID.glsl-BLlApcGW.js";import{A as ts,U as jt}from"./Indices-DfQUWp03.js";import{s as Tt,g as os}from"./BufferView-BkGwg0rw.js";import{c as ss,a as is,l as ns,b as as}from"./BooleanBindUniform-rV7lhEqP.js";import{Q as _t,t as rs}from"./InterleavedLayout-BRE52VHV.js";import{T as ls,d as cs,c as us}from"./renderState-CKc66y4x.js";import{t as fs}from"./VertexAttributeLocations-BfZbt_DV.js";import{t as $,n as I}from"./glsl-B5bJgrnA.js";import{s as ps}from"./ShaderBuilder-DG0ic514.js";function di(o,e){if(o.type==="point")return ee(o,e,!1);if(Oo(o))switch(o.type){case"extent":return ee(o.center,e,!1);case"polygon":return ee(ft(o),e,!1);case"polyline":return ee(ut(o),e,!0);case"mesh":return ee(zo(o.vertexSpace,o.spatialReference)??o.extent.center,e,!1);case"multipoint":return}else switch(o.type){case"extent":return ee(ds(o),e,!0);case"polygon":return ee(ft(o),e,!0);case"polyline":return ee(ut(o),e,!0);case"multipoint":return}}function ut(o){const e=o.paths[0];if(!e||e.length===0)return null;const s=Kt(e,Jt(e)/2);return We(s[0],s[1],s[2],o.spatialReference)}function ds(o){return We(.5*(o.xmax+o.xmin),.5*(o.ymax+o.ymin),o.zmin!=null&&o.zmax!=null&&isFinite(o.zmin)&&isFinite(o.zmax)?.5*(o.zmax+o.zmin):void 0,o.spatialReference)}function ft(o){const e=o.rings[0];if(!e||e.length===0)return null;const s=eo(o.rings,!!o.hasZ);return We(s[0],s[1],s[2],o.spatialReference)}function ee(o,e,s){const t=s?o:Co(o);return e&&o?Zt(o,t,e)?t:null:t}function hi(o,e,s,t=0){if(o){e||(e=wt());const i=o;let a=.5*i.width*(s-1),n=.5*i.height*(s-1);return i.width<1e-7*i.height?a+=n/20:i.height<1e-7*i.width&&(n+=a/20),Qt(e,i.xmin-a-t,i.ymin-n-t,i.xmax+a+t,i.ymax+n+t),e}return null}function vi(o,e,s=null){const t=kt(Xt);return o!=null&&(t[0]=o[0],t[1]=o[1],t[2]=o[2],o.length>3&&(t[3]=o[3])),e!=null&&(t[3]=e),s&&Wt(t,t,s),t}function gi(o=Nt,e,s,t=1){const i=new Array(3);if(e==null||s==null)i[0]=1,i[1]=1,i[2]=1;else{let a,n=0;for(let r=2;r>=0;r--){const l=o[r],c=l!=null,u=r===0&&!a&&!c,p=s[r];let h;l==="symbol-value"||u?h=p!==0?e[r]/p:1:c&&l!=="proportional"&&isFinite(l)&&(h=p!==0?l/p:1),h!=null&&(i[r]=h,a=h,n=Math.max(n,Math.abs(h)))}for(let r=2;r>=0;r--)i[r]==null?i[r]=a:i[r]===0&&(i[r]=.001*n)}for(let a=2;a>=0;a--)i[a]/=t;return Yt(i)}function hs(o){return o.isPrimitive!=null}function mi(o){return vs(hs(o)?[o.width,o.depth,o.height]:o)?null:"Symbol sizes may not be negative values"}function vs(o){const e=s=>s==null||s>=0;return Array.isArray(o)?o.every(e):e(o)}function xi(o,e,s,t=bt()){return o&&no(t,t,-o/180*Math.PI),e&&ao(t,t,e/180*Math.PI),s&&ro(t,t,s/180*Math.PI),t}function wi(o,e,s){if(s.minDemResolution!=null)return s.minDemResolution;const t=to(e),i=oo(o)*t,a=so(o)*t,n=io(o)*(e.isGeographic?1:t);return i===0&&a===0&&n===0?s.minDemResolutionForPoints:.01*Math.max(i,a,n)}function pt(o,e){const s=o[e],t=o[e+1],i=o[e+2];return Math.sqrt(s*s+t*t+i*i)}function gs(o,e){const s=o[e],t=o[e+1],i=o[e+2],a=1/Math.sqrt(s*s+t*t+i*i);o[e]*=a,o[e+1]*=a,o[e+2]*=a}function dt(o,e,s){o[e]*=s,o[e+1]*=s,o[e+2]*=s}function ms(o,e,s,t,i,a=e){(i=i||o)[a]=o[e]+s[t],i[a+1]=o[e+1]+s[t+1],i[a+2]=o[e+2]+s[t+2]}function xs(){return ht??=ws(),ht}function ws(){const s=new M([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new Ao([["uv0",s]])}let ht=null;const Fe=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],bs=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],ys=[0,0,1,0,1,1,0,1],Ps=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Rt=new Array(36);for(let o=0;o<6;o++)for(let e=0;e<6;e++)Rt[6*o+e]=o;const ne=new Array(36);for(let o=0;o<6;o++)ne[6*o]=0,ne[6*o+1]=1,ne[6*o+2]=2,ne[6*o+3]=2,ne[6*o+4]=3,ne[6*o+5]=0;function bi(o,e){Array.isArray(e)||(e=[e,e,e]);const s=new Array(24);for(let t=0;t<8;t++)s[3*t]=Fe[t][0]*e[0],s[3*t+1]=Fe[t][1]*e[1],s[3*t+2]=Fe[t][2]*e[2];return new Q(o,[["position",new M(s,Ps,3,!0)],["normal",new M(bs,Rt,3)],["uv0",new M(ys,ne,2)]])}const Ee=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],$s=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Ss=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],zs=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function yi(o,e){Array.isArray(e)||(e=[e,e,e]);const s=new Array(18);for(let t=0;t<6;t++)s[3*t]=Ee[t][0]*e[0],s[3*t+1]=Ee[t][1]*e[1],s[3*t+2]=Ee[t][2]*e[2];return new Q(o,[["position",new M(s,Ss,3,!0)],["normal",new M($s,zs,3)]])}const $e=H(-.5,0,-.5),Se=H(.5,0,-.5),ze=H(0,0,.5),Oe=H(0,.5,0),ce=Y(),ue=Y(),pe=Y(),de=Y(),he=Y();W(ce,$e,Oe),W(ue,$e,Se),se(pe,ce,ue),L(pe,pe),W(ce,Se,Oe),W(ue,Se,ze),se(de,ce,ue),L(de,de),W(ce,ze,Oe),W(ue,ze,$e),se(he,ce,ue),L(he,he);const Ue=[$e,Se,ze,Oe],Os=[0,-1,0,pe[0],pe[1],pe[2],de[0],de[1],de[2],he[0],he[1],he[2]],Cs=[0,1,2,3,1,0,3,2,1,3,0,2],As=[0,0,0,1,1,1,2,2,2,3,3,3];function Pi(o,e){Array.isArray(e)||(e=[e,e,e]);const s=new Array(12);for(let t=0;t<4;t++)s[3*t]=Ue[t][0]*e[0],s[3*t+1]=Ue[t][1]*e[1],s[3*t+2]=Ue[t][2]*e[2];return new Q(o,[["position",new M(s,Cs,3,!0)],["normal",new M(Os,As,3)]])}function $i(o,e,s,t,i={uv:!0}){const a=-Math.PI,n=2*Math.PI,r=-Math.PI/2,l=Math.PI,c=Math.max(3,Math.floor(s)),u=Math.max(2,Math.floor(t)),p=(c+1)*(u+1),h=X(3*p),b=X(3*p),y=X(2*p),m=[];let d=0;for(let x=0;x<=u;x++){const C=[],f=x/u,z=r+f*l,O=Math.cos(z);for(let P=0;P<=c;P++){const B=P/c,w=a+B*n,j=Math.cos(w)*O,V=Math.sin(z),Z=-Math.sin(w)*O;h[3*d]=j*e,h[3*d+1]=V*e,h[3*d+2]=Z*e,b[3*d]=j,b[3*d+1]=V,b[3*d+2]=Z,y[2*d]=B,y[2*d+1]=f,C.push(d),++d}m.push(C)}const v=new Array;for(let x=0;x<u;x++)for(let C=0;C<c;C++){const f=m[x][C],z=m[x][C+1],O=m[x+1][C+1],P=m[x+1][C];x===0?(v.push(f),v.push(O),v.push(P)):x===u-1?(v.push(f),v.push(z),v.push(O)):(v.push(f),v.push(z),v.push(O),v.push(O),v.push(P),v.push(f))}const g=[["position",new M(h,v,3,!0)],["normal",new M(b,v,3,!0)]];return i.uv&&g.push(["uv0",new M(y,v,2,!0)]),i.offset&&(g[0][0]="offset",g.push(["position",new M(Float64Array.from(i.offset),jt(v.length),3,!0)])),new Q(o,g)}function Si(o,e,s,t){const i=Ms(e,s);return new Q(o,i)}function Ms(o,e,s){let t,i;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],i=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let l=0;l<t.length;l+=3)dt(t,l,o/pt(t,l));let a={};function n(l,c){l>c&&([l,c]=[c,l]);const u=l.toString()+"."+c.toString();if(a[u])return a[u];let p=t.length;return t.length+=3,ms(t,3*l,t,3*c,t,p),dt(t,p,o/pt(t,p)),p/=3,a[u]=p,p}for(let l=0;l<e;l++){const c=i.length,u=new Array(4*c);for(let p=0;p<c;p+=3){const h=i[p],b=i[p+1],y=i[p+2],m=n(h,b),d=n(b,y),v=n(y,h),g=4*p;u[g]=h,u[g+1]=m,u[g+2]=v,u[g+3]=b,u[g+4]=d,u[g+5]=m,u[g+6]=y,u[g+7]=v,u[g+8]=d,u[g+9]=m,u[g+10]=d,u[g+11]=v}i=u,a={}}const r=it(t);for(let l=0;l<r.length;l+=3)gs(r,l);return[["position",new M(it(t),i,3,!0)],["normal",new M(r,i,3,!0)]]}function zi(o,{normal:e,position:s,color:t,rotation:i,size:a,centerOffsetAndDistance:n,uvi:r,featureAttribute:l,olidColor:c=null}={}){const u=s?Je(s):_(),p=e?Je(e):yt(0,0,1),h=t?[t[0],t[1],t[2],t.length>3?t[3]:255]:[255,255,255,255],b=a!=null&&a.length===2?a:[1,1],y=i!=null?[i]:[0],m=jt(1),d=[["position",new M(u,m,3,!0)],["normal",new M(p,m,3,!0)],["color",new M(h,m,4,!0)],["size",new M(b,m,2)],["rotation",new M(y,m,1,!0)]];if(r&&d.push(["uvi",new M(r,m,r.length)]),n!=null){const v=[n[0],n[1],n[2],n[3]];d.push(["centerOffsetAndDistance",new M(v,m,4)])}if(l){const v=[l[0],l[1],l[2],l[3]];d.push(["featureAttribute",new M(v,m,4)])}return new Q(o,d,null,1,c,void 0,xs())}function Ds(o,e,s,t,i=!0,a=!0){let n=0;const r=e,l=o;let c=H(0,n,0),u=H(0,n+l,0),p=H(0,-1,0),h=H(0,1,0);t&&(n=l,u=H(0,0,0),c=H(0,n,0),p=H(0,1,0),h=H(0,-1,0));const b=[u,c],y=[p,h],m=s+2,d=Math.sqrt(l*l+r*r);if(t)for(let f=s-1;f>=0;f--){const z=f*(2*Math.PI/s),O=H(Math.cos(z)*r,n,Math.sin(z)*r);b.push(O);const P=H(l*Math.cos(z)/d,-r/d,l*Math.sin(z)/d);y.push(P)}else for(let f=0;f<s;f++){const z=f*(2*Math.PI/s),O=H(Math.cos(z)*r,n,Math.sin(z)*r);b.push(O);const P=H(l*Math.cos(z)/d,r/d,l*Math.sin(z)/d);y.push(P)}const v=new Array,g=new Array;if(i){for(let f=3;f<b.length;f++)v.push(1),v.push(f-1),v.push(f),g.push(0),g.push(0),g.push(0);v.push(b.length-1),v.push(2),v.push(1),g.push(0),g.push(0),g.push(0)}if(a){for(let f=3;f<b.length;f++)v.push(f),v.push(f-1),v.push(0),g.push(f),g.push(f-1),g.push(1);v.push(0),v.push(2),v.push(b.length-1),g.push(1),g.push(2),g.push(y.length-1)}const x=X(3*m);for(let f=0;f<m;f++)x[3*f]=b[f][0],x[3*f+1]=b[f][1],x[3*f+2]=b[f][2];const C=X(3*m);for(let f=0;f<m;f++)C[3*f]=y[f][0],C[3*f+1]=y[f][1],C[3*f+2]=y[f][2];return[["position",new M(x,v,3,!0)],["normal",new M(C,g,3,!0)]]}function Oi(o,e,s,t,i,a=!0,n=!0){return new Q(o,Ds(e,s,t,i,a,n))}function Ci(o,e,s,t,i,a,n){const r=i?st(i):H(1,0,0),l=a?st(a):H(0,0,0);n??=!0;const c=Y();L(c,r);const u=Y();G(u,c,Math.abs(e));const p=Y();G(p,u,-.5),q(p,p,l);const h=H(0,1,0);Math.abs(1-Ye(c,h))<.2&&oe(h,0,0,1);const b=Y();se(b,c,h),L(b,b),se(h,b,c);const y=2*t+(n?2:0),m=t+(n?2:0),d=X(3*y),v=X(3*m),g=X(2*y),x=new Array(3*t*(n?4:2)),C=new Array(3*t*(n?4:2));n&&(d[3*(y-2)]=p[0],d[3*(y-2)+1]=p[1],d[3*(y-2)+2]=p[2],g[2*(y-2)]=0,g[2*(y-2)+1]=0,d[3*(y-1)]=d[3*(y-2)]+u[0],d[3*(y-1)+1]=d[3*(y-2)+1]+u[1],d[3*(y-1)+2]=d[3*(y-2)+2]+u[2],g[2*(y-1)]=1,g[2*(y-1)+1]=1,v[3*(m-2)]=-c[0],v[3*(m-2)+1]=-c[1],v[3*(m-2)+2]=-c[2],v[3*(m-1)]=c[0],v[3*(m-1)+1]=c[1],v[3*(m-1)+2]=c[2]);const f=(w,j,V)=>{x[w]=j,C[w]=V};let z=0;const O=Y(),P=Y();for(let w=0;w<t;w++){const j=w*(2*Math.PI/t);G(O,h,Math.sin(j)),G(P,b,Math.cos(j)),q(O,O,P),v[3*w]=O[0],v[3*w+1]=O[1],v[3*w+2]=O[2],G(O,O,s),q(O,O,p),d[3*w]=O[0],d[3*w+1]=O[1],d[3*w+2]=O[2],g[2*w]=w/t,g[2*w+1]=0,d[3*(w+t)]=d[3*w]+u[0],d[3*(w+t)+1]=d[3*w+1]+u[1],d[3*(w+t)+2]=d[3*w+2]+u[2],g[2*(w+t)]=w/t,g[2*w+1]=1;const V=(w+1)%t;f(z++,w,w),f(z++,w+t,w),f(z++,V,V),f(z++,V,V),f(z++,w+t,w),f(z++,V+t,V)}if(n){for(let w=0;w<t;w++){const j=(w+1)%t;f(z++,y-2,m-2),f(z++,w,m-2),f(z++,j,m-2)}for(let w=0;w<t;w++){const j=(w+1)%t;f(z++,w+t,m-1),f(z++,y-1,m-1),f(z++,j+t,m-1)}}const B=[["position",new M(d,x,3,!0)],["normal",new M(v,C,3,!0)],["uv0",new M(g,x,2,!0)]];return new Q(o,B)}function Ai(o,e,s,t,i,a){t=t||10,i=i==null||i,Tt(e.length>1);const n=[[0,0,0]],r=[],l=[];for(let c=0;c<t;c++){r.push([0,-c-1,-(c+1)%t-1]);const u=c/t*2*Math.PI;l.push([Math.cos(u)*s,Math.sin(u)*s])}return Vs(o,l,e,n,r,i,a)}function Vs(o,e,s,t,i,a,n=H(0,0,0)){const r=e.length,l=X(s.length*r*3+(6*t.length||0)),c=X(s.length*r*3+(t?6:0)),u=new Array,p=new Array;let h=0,b=0;const y=_(),m=_(),d=_(),v=_(),g=_(),x=_(),C=_(),f=_(),z=_(),O=_(),P=_(),B=_(),w=_(),j=co();oe(z,0,1,0),W(m,s[1],s[0]),L(m,m),a?(q(f,s[0],n),L(d,f)):oe(d,0,0,1),vt(m,d,z,z,g,d,gt),N(v,d),N(B,g);for(let S=0;S<t.length;S++)G(x,g,t[S][0]),G(f,d,t[S][2]),q(x,x,f),q(x,x,s[0]),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2];c[b++]=-m[0],c[b++]=-m[1],c[b++]=-m[2];for(let S=0;S<i.length;S++)u.push(i[S][0]>0?i[S][0]:-i[S][0]-1+t.length),u.push(i[S][1]>0?i[S][1]:-i[S][1]-1+t.length),u.push(i[S][2]>0?i[S][2]:-i[S][2]-1+t.length),p.push(0),p.push(0),p.push(0);let V=t.length;const Z=t.length-1;for(let S=0;S<s.length;S++){let me=!1;S>0&&(N(y,m),S<s.length-1?(W(m,s[S+1],s[S]),L(m,m)):me=!0,q(O,y,m),L(O,O),q(P,s[S-1],v),uo(s[S],O,j),fo(j,po(P,y),f)?(W(f,f,s[S]),L(d,f),se(g,O,d),L(g,g)):vt(O,v,B,z,g,d,gt),N(v,d),N(B,g)),a&&(q(f,s[S],n),L(w,f));for(let J=0;J<r;J++)if(G(x,g,e[J][0]),G(f,d,e[J][1]),q(x,x,f),L(C,x),c[b++]=C[0],c[b++]=C[1],c[b++]=C[2],q(x,x,s[S]),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2],!me){const je=(J+1)%r;u.push(V+J),u.push(V+r+J),u.push(V+je),u.push(V+je),u.push(V+r+J),u.push(V+r+je);for(let Te=0;Te<6;Te++){const qt=u.length-6;p.push(u[qt+Te]-Z)}}V+=r}const le=s[s.length-1];for(let S=0;S<t.length;S++)G(x,g,t[S][0]),G(f,d,t[S][1]),q(x,x,f),q(x,x,le),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2];const K=b/3;c[b++]=m[0],c[b++]=m[1],c[b++]=m[2];const k=V-r;for(let S=0;S<i.length;S++)u.push(i[S][0]>=0?V+i[S][0]:-i[S][0]-1+k),u.push(i[S][2]>=0?V+i[S][2]:-i[S][2]-1+k),u.push(i[S][1]>=0?V+i[S][1]:-i[S][1]-1+k),p.push(K),p.push(K),p.push(K);const ie=[["position",new M(l,u,3,!0)],["normal",new M(c,p,3,!0)]];return new Q(o,ie)}function Mi(o,e,s,t,i){const a=lo(3*e.length),n=new Array(2*(e.length-1));let r=0,l=0;for(let u=0;u<e.length;u++){for(let p=0;p<3;p++)a[r++]=e[u][p];u>0&&(n[l++]=u-1,n[l++]=u)}const c=[["position",new M(a,n,3,!0)]];if(s&&s.length===e.length&&s[0].length===3){const u=X(3*s.length);let p=0;for(let h=0;h<e.length;h++)for(let b=0;b<3;b++)u[p++]=s[h][b];c.push(["normal",new M(u,n,3,!0)])}return t&&c.push(["color",new M(t,ts(t.length/4),4)]),new Q(o,c,null,2)}function Di(o,e,s,t,i,a=0){const n=new Array(18),r=[[-s,a,i/2],[t,a,i/2],[0,e+a,i/2],[-s,a,-i/2],[t,a,-i/2],[0,e+a,-i/2]],l=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let c=0;c<6;c++)n[3*c]=r[c][0],n[3*c+1]=r[c][1],n[3*c+2]=r[c][2];return new Q(o,[["position",new M(n,l,3,!0)]])}function Vi(o,e){const s=o.getMutableAttribute("position").data;for(let t=0;t<s.length;t+=3){const i=s[t],a=s[t+1],n=s[t+2];oe(fe,i,a,n),re(fe,fe,e),s[t]=fe[0],s[t+1]=fe[1],s[t+2]=fe[2]}}function ji(o,e=o){const s=o.attributes,t=s.get("position").data,i=s.get("normal").data;if(i){const a=e.getMutableAttribute("normal").data;for(let n=0;n<i.length;n+=3){const r=i[n+1];a[n+1]=-i[n+2],a[n+2]=r}}if(t){const a=e.getMutableAttribute("position").data;for(let n=0;n<t.length;n+=3){const r=t[n+1];a[n+1]=-t[n+2],a[n+2]=r}}}function Ie(o,e,s,t,i){return!(Math.abs(Ye(e,o))>i)&&(se(s,o,e),L(s,s),se(t,s,o),L(t,t),!0)}function vt(o,e,s,t,i,a,n){return Ie(o,e,i,a,n)||Ie(o,s,i,a,n)||Ie(o,t,i,a,n)}const gt=.99619469809,fe=_();function js(o){return o instanceof Float32Array&&o.length>=16}function Ts(o){return Array.isArray(o)&&o.length>=16}function _s(o){return js(o)||Ts(o)}const Ft=.5;function Rs(o,e){o.include(Ct),o.attributes.add("position","vec3"),o.attributes.add("normal","vec3"),o.attributes.add("centerOffsetAndDistance","vec4");const s=o.vertex;Mo(s,e),Do(s,e),s.uniforms.add(new Ze("viewport",t=>t.camera.fullViewport),new Be("polygonOffset",t=>t.shaderPolygonOffset),new Me("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),e.hasVerticalOffset&&ss(s),s.code.add($`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),s.code.add($`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?$.float(0):$`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Vo(s),e.draped||(s.uniforms.add(new Me("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),s.code.add($`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${$.float(Ft)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&At(s),e.hasScreenSizePerspective&&Mt(s),s.code.add($`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?$`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":$`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Ke(o){o.uniforms.add(new is("alignPixelEnabled",e=>e.alignPixelEnabled)),o.code.add($`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),o.code.add($`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Fs(o,e){const{vertex:s,fragment:t}=o;o.include(jo,e),s.include(Ke),s.main.add($`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),t.main.add($`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Es(o){o.vertex.uniforms.add(new Me("renderTransparentlyOccludedHUD",e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new Ze("viewport",e=>e.camera.fullViewport),new Dt("hudVisibilityTexture",e=>e.hudVisibility?.getTexture())),o.vertex.include(Ke),o.vertex.code.add($`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}class Us extends To{constructor(e,s,t){super(e,"vec4",2,(i,a,n)=>i.setUniform4fv(e,s(a,n),t))}}function Et(o){const e=new ps,{signedDistanceFieldEnabled:s,occlusionTestEnabled:t,horizonCullingEnabled:i,pixelSnappingEnabled:a,hasScreenSizePerspective:n,debugDrawLabelBorder:r,hasVVSize:l,hasVVColor:c,hasRotation:u,occludedFragmentFade:p,sampleSignedDistanceFieldTexelCenter:h}=o;e.include(Rs,o),e.vertex.include(_o,o);const{occlusionPass:b,output:y,oitPass:m}=o;if(b)return e.include(Fs,o),e;const{vertex:d,fragment:v}=e;e.include(Ct),e.include(Ro,o),e.include(Fo,o),t&&e.include(Es),v.include(Eo),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const g=y===9,x=g&&t;x&&e.varyings.add("voccluded","float"),d.uniforms.add(new Ze("viewport",P=>P.camera.fullViewport),new nt("screenOffset",(P,B)=>Qe(Ce,2*P.screenOffset[0]*B.camera.pixelRatio,2*P.screenOffset[1]*B.camera.pixelRatio)),new nt("anchorPosition",P=>ge(P)),new _e("materialColor",P=>P.color),new Be("materialRotation",P=>P.rotation),new at("tex",P=>P.texture)),At(d),s&&(d.uniforms.add(new _e("outlineColor",P=>P.outlineColor)),v.uniforms.add(new _e("outlineColor",P=>mt(P)?P.outlineColor:vo),new Be("outlineSize",P=>mt(P)?P.outlineSize:0))),i&&d.uniforms.add(new Us("pointDistanceSphere",(P,B)=>{const w=B.camera.eye,j=P.origin;return go(j[0]-w[0],j[1]-w[1],j[2]-w[2],mo.radius)})),a&&d.include(Ke),n&&(Uo(d),Mt(d)),r&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("uvi","vec4"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("rotation","float"),(l||c)&&e.attributes.add("featureAttribute","vec4"),d.code.add(i?$`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:$`bool behindHorizon(vec3 posModel) { return false; }`),d.main.add($`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${I(n,$`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,$`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${I(l,$`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${I(t,$`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${I(r,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${I(x,$`voccluded = visible ? 0.0 : 1.0;`)}
  `);const C=$`
      vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
      vec2 texSize = vec2(textureSize(tex, 0));
      uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${Hs})));
      quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

      ${I(u,$`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,f=a?s?$`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:$`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:$`posProj += quadOffset;`;d.main.add($`
    ${C}
    ${c?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${I(y===10,$`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${$.float(te)};
    ${I(s,`alphaDiscard = alphaDiscard && outlineColor.a < ${$.float(te)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${f}
      gl_Position = posProj;
    }

    vtc = uv;

    ${I(r,$`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),v.uniforms.add(new at("tex",P=>P.texture)),p&&!g&&v.uniforms.add(new Dt("depthMap",P=>P.mainDepth),new Me("occludedOpacity",P=>P.hudOccludedFragmentOpacity));const z=r?$`(isBorder > 0.0 ? 0.0 : ${$.float(te)})`:$.float(te),O=$`
    ${I(r,$`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${I(h,$`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${s?$`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${z} ||
          fillPixelColor.a + outlinePixelColor.a < ${$.float(te)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${I(!g,$`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${z}) {
          discard;
        }

        ${I(!g,$`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:$`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${z}) {
            discard;
          }
          ${I(!g,$`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${I(p&&!g,$`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${I(!g&&r,$`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(y){case 0:case 1:e.outputs.add("fragColor","vec4",0),y===1&&e.outputs.add("fragEmission","vec4",1),m===1&&e.outputs.add("fragAlpha","float",y===1?2:1),v.main.add($`
        ${O}
        ${I(m===2,$`fragColor.rgb /= fragColor.a;`)}
        ${I(y===1,$`fragEmission = vec4(0.0);`)}
        ${I(m===1,$`fragAlpha = fragColor.a;`)}`);break;case 10:v.main.add($`
        ${O}
        outputObjectAndLayerIdColor();`);break;case 9:e.include(Io,o),v.main.add($`
        ${O}
        outputHighlight(${I(x,$`voccluded == 1.0`,$`false`)});`)}return e}function mt(o){return o.outlineColor[3]>0&&o.outlineSize>0}function ge(o){return o.textureIsSignedDistanceField?Is(o.anchorPosition,o.distanceFieldBoundingBox,Ce):ho(Ce,o.anchorPosition),Ce}function Is(o,e,s){Qe(s,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const Ce=Xe(),ye=32e3,Hs=$.float(ye),Bs=Object.freeze(Object.defineProperty({__proto__:null,build:Et,calculateAnchorPosition:ge,fullUV:ye},Symbol.toStringTag,{value:"Module"}));class Gs extends Bo{constructor(e,s){super(e,s,new Go(Bs,()=>xo(()=>Promise.resolve().then(()=>Js),void 0)),fs([Ut,Ht()].map(rs))),this.primitiveType=s.occlusionPass?et.POINTS:et.TRIANGLE_STRIP}initializePipeline(e){const{oitPass:s,hasPolygonOffset:t,draped:i,output:a,depthTestEnabled:n,occlusionPass:r}=e,l=n&&!i&&s!==1&&!r&&a!==9;return ls({blending:Vt(a)?qo(s,!0):null,depthTest:n&&!i?{func:515}:null,depthWrite:l?us:null,drawBuffers:Lo(s,a),colorWrite:cs,polygonOffset:t?Ls:null})}}const Ls={factor:0,units:-4},Ut=_t().vec2u8("uv0",{glNormalized:!0}),It=_t().vec3f("position").vec3f("normal").vec4i16("uvi").vec4u8("color").vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),qs=It.clone().vec4u8("olidColor");function Ht(){return Ho()?qs:It}class R extends No{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1}}E([U()],R.prototype,"screenCenterOffsetUnitsEnabled",void 0),E([U()],R.prototype,"occlusionTestEnabled",void 0),E([U()],R.prototype,"signedDistanceFieldEnabled",void 0),E([U()],R.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),E([U()],R.prototype,"hasVVSize",void 0),E([U()],R.prototype,"hasVVColor",void 0),E([U()],R.prototype,"hasVerticalOffset",void 0),E([U()],R.prototype,"hasScreenSizePerspective",void 0),E([U()],R.prototype,"hasRotation",void 0),E([U()],R.prototype,"debugDrawLabelBorder",void 0),E([U()],R.prototype,"hasPolygonOffset",void 0),E([U()],R.prototype,"depthTestEnabled",void 0),E([U()],R.prototype,"pixelSnappingEnabled",void 0),E([U()],R.prototype,"draped",void 0),E([U()],R.prototype,"terrainDepthTest",void 0),E([U()],R.prototype,"cullAboveTerrain",void 0),E([U()],R.prototype,"occlusionPass",void 0),E([U()],R.prototype,"occludedFragmentFade",void 0),E([U()],R.prototype,"horizonCullingEnabled",void 0),E([U()],R.prototype,"isFocused",void 0);class Ti extends ko{constructor(e,s){super(e,Zs),this.produces=new Map([[13,t=>Re(t)&&!this.parameters.drawAsLabel],[14,t=>Re(t)&&this.parameters.drawAsLabel],[12,()=>this.parameters.occlusionTest],[18,t=>this.parameters.draped&&Re(t)]]),this._visible=!0,this._configuration=new R(s)}getConfiguration(e,s){const t=this.parameters.draped;return super.getConfiguration(e,s,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=t,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=s.slot===12,this._configuration.occludedFragmentFade=!t&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||s.slot===12,Vt(e)&&(this._configuration.debugDrawLabelBorder=!!wo.LABELS_SHOW_BORDER),this._configuration.oitPass=s.oitPass,this._configuration.terrainDepthTest=s.terrainDepthTest,this._configuration.cullAboveTerrain=s.cullAboveTerrain,this._configuration}intersect(e,s,t,i,a,n){const{options:{selectionMode:r,hud:l,excludeLabels:c},point:u,camera:p}=t,{parameters:h}=this;if(!r||!l||c&&h.isLabel||!e.visible||!u||!p)return;const b=e.attributes.get("featureAttribute"),y=b==null?null:tt(b.data,qe),{scaleX:m,scaleY:d}=Ne(y,h,p.pixelRatio);Pt(Ae,s),e.attributes.has("featureAttribute")&&Ws(Ae);const v=e.attributes.get("position"),g=e.attributes.get("size"),x=e.attributes.get("normal"),C=e.attributes.get("rotation"),f=e.attributes.get("centerOffsetAndDistance");Tt(v.size>=3);const z=ge(h),O=this.parameters.centerOffsetUnits==="screen";for(let P=0;P<v.data.length/v.size;P++){const B=P*v.size;oe(A,v.data[B],v.data[B+1],v.data[B+2]),re(A,A,s),re(A,A,p.viewMatrix);const w=P*f.size;if(oe(T,f.data[w],f.data[w+1],f.data[w+2]),!O&&(A[0]+=T[0],A[1]+=T[1],T[2]!==0)){const V=T[2];L(T,A),W(A,A,G(T,T,V))}const j=P*x.size;if(oe(ae,x.data[j],x.data[j+1],x.data[j+2]),Ge(ae,Ae,p,we),ke(this.parameters,A,we,p,ve),p.applyProjection(A,D),D[0]>-1){O&&(T[0]||T[1])&&(D[0]+=T[0]*p.pixelRatio,T[1]!==0&&(D[1]+=ve.alignmentEvaluator.apply(T[1])*p.pixelRatio),p.unapplyProjection(D,A)),D[0]+=this.parameters.screenOffset[0]*p.pixelRatio,D[1]+=this.parameters.screenOffset[1]*p.pixelRatio,D[0]=Math.floor(D[0]),D[1]=Math.floor(D[1]);const V=P*g.size;F[0]=g.data[V],F[1]=g.data[V+1],ve.evaluator.applyVec2(F,F);const Z=Lt*p.pixelRatio;let le=0;h.textureIsSignedDistanceField&&(le=Math.min(h.outlineSize,.5*F[0])*p.pixelRatio/2),F[0]*=m,F[1]*=d;const K=P*C.size,k=h.rotation+C.data[K];if(Le(u,D[0],D[1],F,Z,le,k,h,z)){const ie=t.ray;if(re(De,A,zt(Gt,p.viewMatrix)),D[0]=u[0],D[1]=u[1],p.unprojectFromRenderScreen(D,A)){const S=_();N(S,ie.direction);const me=1/be(S);G(S,S,me),n(Ot(ie.origin,A)*me,S,-1,De)}}}}}intersectDraped(e,s,t,i,a){const n=e.attributes.get("position"),r=e.attributes.get("size"),l=e.attributes.get("rotation"),c=this.parameters,u=ge(c),p=e.attributes.get("featureAttribute"),h=p==null?null:tt(p.data,qe),{scaleX:b,scaleY:y}=Ne(h,c,e.screenToWorldRatio),m=Xs*e.screenToWorldRatio;for(let d=0;d<n.data.length/n.size;d++){const v=d*n.size,g=n.data[v],x=n.data[v+1],C=d*r.size;F[0]=r.data[C],F[1]=r.data[C+1];let f=0;c.textureIsSignedDistanceField&&(f=Math.min(c.outlineSize,.5*F[0])*e.screenToWorldRatio/2),F[0]*=b,F[1]*=y;const z=d*l.size,O=c.rotation+l.data[z];Le(t,g,x,F,m,f,O,c,u)&&i(a.distance,a.normal,-1)}}createBufferWriter(){return new Ks}applyShaderOffsetsView(e,s,t,i,a,n,r){const l=Ge(s,t,a,we);return this._applyVerticalGroundOffsetView(e,l,a,r),ke(this.parameters,r,l,a,n),this._applyPolygonOffsetView(r,l,i[3],a,r),this._applyCenterOffsetView(r,i,r),r}applyShaderOffsetsNDC(e,s,t,i,a){return this._applyCenterOffsetNDC(e,s,t,i),a!=null&&N(a,i),this._applyPolygonOffsetNDC(i,s,t,i),i}_applyPolygonOffsetView(e,s,t,i,a){const n=i.aboveGround?1:-1;let r=Math.sign(t);r===0&&(r=n);const l=n*r;if(this.parameters.shaderPolygonOffset<=0)return N(a,e);const c=bo(Math.abs(s.cosAngle),.01,1),u=1-Math.sqrt(1-c*c)/c/i.viewport[2];return G(a,e,l>0?u:1/u),a}_applyVerticalGroundOffsetView(e,s,t,i){const a=be(e),n=t.aboveGround?1:-1,r=t.computeRenderPixelSizeAtDist(a)*Ft,l=G(A,s.normal,n*r);return q(i,e,l),i}_applyCenterOffsetView(e,s,t){const i=this.parameters.centerOffsetUnits!=="screen";return t!==e&&N(t,e),i&&(t[0]+=s[0],t[1]+=s[1],s[2]&&(L(ae,t),yo(t,t,G(ae,ae,s[2])))),t}_applyCenterOffsetNDC(e,s,t,i){const a=this.parameters.centerOffsetUnits!=="screen";return i!==e&&N(i,e),a||(i[0]+=s[0]/t.fullWidth*2,i[1]+=s[1]/t.fullHeight*2),i}_applyPolygonOffsetNDC(e,s,t,i){const a=this.parameters.shaderPolygonOffset;if(e!==i&&N(i,e),a){const n=t.aboveGround?1:-1,r=n*Math.sign(s[3]);i[2]-=(r||n)*a}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:s,outlineColor:t}=this.parameters,i=e[3]>=te||s>=te&&t[3]>=te;return this._visible&&i}createGLMaterial(e){return new Ns(e)}calculateRelativeScreenBounds(e,s,t=wt()){return ks(this.parameters,e,s,t),t[2]=t[0]+e[0],t[3]=t[1]+e[1],t}}class Ns extends as{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Gs,e)}}function ks(o,e,s,t){t[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*s,t[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*s}function Ge(o,e,s,t){return _s(e)&&(e=Pt(Ys,e)),Po(t.normal,o,e),re(t.normal,t.normal,s.viewInverseTransposeMatrix),t.cosAngle=Ye(Bt,Qs),t}function Ws(o){const e=o[0],s=o[1],t=o[2],i=o[3],a=o[4],n=o[5],r=o[6],l=o[7],c=o[8],u=1/Math.sqrt(e*e+s*s+t*t),p=1/Math.sqrt(i*i+a*a+n*n),h=1/Math.sqrt(r*r+l*l+c*c);return o[0]=e*u,o[1]=s*u,o[2]=t*u,o[3]=i*p,o[4]=a*p,o[5]=n*p,o[6]=r*h,o[7]=l*h,o[8]=c*h,o}function Le(o,e,s,t,i,a,n,r,l){let c=e-i-t[0]*l[0],u=c+t[0]+2*i,p=s-i-t[1]*l[1],h=p+t[1]+2*i;const b=r.distanceFieldBoundingBox;return r.textureIsSignedDistanceField&&b!=null&&(c+=t[0]*b[0],p+=t[1]*b[1],u-=t[0]*(1-b[2]),h-=t[1]*(1-b[3]),c-=a,u+=a,p-=a,h+=a),Qe(xt,e,s),$o(xe,o,xt,So(n)),xe[0]>c&&xe[0]<u&&xe[1]>p&&xe[1]<h}const ve=new Wo,A=_(),ae=_(),D=Ve(),Bt=_(),De=_(),xe=Xe(),xt=Xe(),Ae=$t(),Ys=$t(),Gt=bt(),Pe=Ve(),T=_(),He=_(),qe=Ve(),we={normal:Bt,cosAngle:0},Lt=1,Xs=2,F=St(0,0),Qs=yt(0,0,1);class Zs extends ns{constructor(){super(...arguments),this.renderOccluded=1,this.isDecoration=!1,this.color=ot(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=St(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ot(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=Ve(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Ks{constructor(){this.layout=Ut,this.instanceLayout=Ht()}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,s,t,i,a,n){const{position:r,normal:l,color:c,size:u,rotation:p,centerOffsetAndDistance:h,featureAttribute:b,uvi:y}=a;Qo(t.get("position"),e,r,n),Zo(t.get("normal"),s,l,n);const m=t.get("position").indices.length;let d=0,v=0,g=ye,x=ye;const C=t.get("uvi")?.data;C&&C.length>=4&&(d=C[0],v=C[1],g=C[2],x=C[3]);for(let f=0;f<m;++f){const z=n+f;y.setValues(z,d,v,g,x)}if(Ko(t.get("color"),4,c,n),rt(t.get("size"),u,n),Jo(t.get("rotation"),p,n),t.get("centerOffsetAndDistance")?lt(t.get("centerOffsetAndDistance"),h,n):ct(h,n,m),t.get("featureAttribute")?lt(t.get("featureAttribute"),b,n):ct(b,n,m),i!=null){const f=t.get("position")?.indices;if(f){const z=f.length,O=a.getField("olidColor",os);es(i,O,z,n)}}return{numVerticesPerItem:1,numItems:m}}writeBaseInstance(e,s){const{uv0:t}=s;rt(e.get("uv0"),t,0)}intersect(e,s,t,i,a,n,r){const{options:{selectionMode:l,hud:c,excludeLabels:u},point:p,camera:h}=i;if(!l||!c||u&&s.isLabel||!p)return;const b=this.instanceLayout.createView(e),{position:y,normal:m,rotation:d,size:v,featureAttribute:g,centerOffsetAndDistance:x}=b,C=s.centerOffsetUnits==="screen",f=ge(s);if(y==null||m==null||d==null||v==null||x==null||h==null)return;const z=g==null?null:g.getVec(0,qe),{scaleX:O,scaleY:P}=Ne(z,s,h.pixelRatio),B=y.count;for(let w=0;w<B;w++){if(y.getVec(w,A),t!=null&&q(A,A,t),re(A,A,h.viewMatrix),x.getVec(w,Pe),oe(T,Pe[0],Pe[1],Pe[2]),!C&&(A[0]+=T[0],A[1]+=T[1],T[2]!==0)){const j=T[2];L(T,A),W(A,A,G(T,T,j))}if(m.getVec(w,ae),Ge(ae,Ae,h,we),ke(s,A,we,h,ve),h.applyProjection(A,D),D[0]>-1){C&&(T[0]||T[1])&&(D[0]+=T[0]*h.pixelRatio,T[1]!==0&&(D[1]+=ve.alignmentEvaluator.apply(T[1])*h.pixelRatio),h.unapplyProjection(D,A)),D[0]+=s.screenOffset[0]*h.pixelRatio,D[1]+=s.screenOffset[1]*h.pixelRatio,D[0]=Math.floor(D[0]),D[1]=Math.floor(D[1]),v.getVec(w,F),ve.evaluator.applyVec2(F,F);const j=Lt*h.pixelRatio;let V=0;s.textureIsSignedDistanceField&&(V=Math.min(s.outlineSize,.5*F[0])*h.pixelRatio/2),F[0]*=O,F[1]*=P;const Z=d.get(w),le=s.rotation+Z;if(Le(p,D[0],D[1],F,j,V,le,s,f)){const K=i.ray;if(re(De,A,zt(Gt,h.viewMatrix)),D[0]=p[0],D[1]=p[1],h.unprojectFromRenderScreen(D,A)){const k=_();N(k,K.direction);const ie=1/be(k);G(k,k,ie),r(Ot(K.origin,A)*ie,k,w,De)}}}}}}function Ne(o,e,s){return o==null||e.vvSize==null?{scaleX:s,scaleY:s}:(Yo(He,e,o),{scaleX:He[0]*s,scaleY:He[1]*s})}function ke(o,e,s,t,i){if(!o.verticalOffset?.screenLength){const l=be(e);return i.update(s.cosAngle,l,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),e}const a=be(e),n=o.screenSizePerspectiveAlignment??o.screenSizePerspective,r=Xo(t,a,o.verticalOffset,s.cosAngle,n,o.screenSizePerspectiveMinPixelReferenceSize);return i.update(s.cosAngle,a,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),G(s.normal,s.normal,r),q(e,e,s.normal)}const Js=Object.freeze(Object.defineProperty({__proto__:null,build:Et,calculateAnchorPosition:ge,fullUV:ye},Symbol.toStringTag,{value:"Module"}));export{vi as A,gi as D,bi as E,wi as G,Mi as M,yi as Q,hi as U,mi as Z,zi as a,$i as b,Di as c,Rs as d,Ci as e,Oi as f,Ai as g,ji as h,Ti as i,Si as j,xi as k,Ke as l,Vs as m,Es as n,vt as o,Ds as p,vs as q,Pi as r,Ms as u,di as w,Vi as y};
