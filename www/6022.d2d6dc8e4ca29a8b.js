"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6022],{6022:(p,r,o)=>{o.r(r),o.d(r,{Tab4PageModule:()=>b});var l=o(6895),i=o(433),a=o(5035),c=o(2598),e=o(8256);const g=[{path:"",component:(()=>{class t{constructor(){this.proof={data:""},this.meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],this.dias_semana=["Domingo","Lunes","martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"],this.fecha=new Date}ngOnInit(){}formFecha(){console.log(this.proof.data),console.log(Date.parse(this.proof.data)),this.dateConverter=Date.parse(this.proof.data),this.dateReal=this.proof.data,console.log(this.dias_semana[this.fecha.getDay()]+", "+this.fecha.getDate()+" de "+this.meses[this.fecha.getMonth()]+" de "+this.fecha.getUTCFullYear())}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab4"]],decls:23,vars:7,consts:[[3,"translucent"],["tab","tab1"],["fill","outline"],["name","home-outline"],["tab","tab2"],["name","document-attach-outline"],["tab","tab3"],["name","notifications-outline"],["tab","tab4"],["name","person-circle-outline"],[3,"fullscreen"],[3,"ngSubmit"],["type","datetime-local","name","fecha",3,"ngModel","ngModelChange"],["type","submit"]],template:function(n,u){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-tab-bar")(2,"ion-tab-button",1)(3,"ion-button",2),e._UZ(4,"ion-icon",3),e.qZA()(),e.TgZ(5,"ion-tab-button",4)(6,"ion-button",2),e._UZ(7,"ion-icon",5),e.qZA()(),e.TgZ(8,"ion-tab-button",6)(9,"ion-button",2),e._UZ(10,"ion-icon",7),e.qZA()(),e.TgZ(11,"ion-tab-button",8)(12,"ion-button",2),e._UZ(13,"ion-icon",9),e.qZA()()()(),e.TgZ(14,"ion-content",10)(15,"form",11),e.NdJ("ngSubmit",function(){return u.formFecha()}),e.TgZ(16,"input",12),e.NdJ("ngModelChange",function(h){return u.proof.data=h}),e.qZA(),e.TgZ(17,"button",13),e._uU(18,"Enviar"),e.qZA()(),e.TgZ(19,"ion-text")(20,"h1"),e._uU(21),e.ALo(22,"date"),e.qZA()()()),2&n&&(e.Q6J("translucent",!0),e.xp6(14),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("ngModel",u.proof.data),e.xp6(5),e.Oqu(e.xi3(22,4,u.dateConverter,"medium")))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.On,i.F,a.YG,a.W2,a.Gu,a.gu,a.yq,a.ZU,a.yW,l.uU]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(g),c.Bz]}),t})();var d=o(581);let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,i.u5,a.Pc,m,d.e]}),t})()}}]);