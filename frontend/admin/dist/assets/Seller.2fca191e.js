import{d as b,g as y,k as n,l as v,r as w,o as e,c as a,a as t,e as d,t as o,f as $,F as g,h as S,i as h,B as C,G as q}from"./index.bfbf74aa.js";import{P as B}from"./ProductStores.9c8cd3fb.js";/* empty css                                                               */const N={class:"overflow-x-scroll"},P={class:"w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400"},A=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{class:"py-3 px-2"},"First Name"),t("th",{class:"py-3 px-2"},"Last Name"),t("th",{class:"py-3 px-2"},"Phone"),t("th",{class:"py-3 px-2"},"Total Product"),t("th",{class:"py-3 px-2"},"Registered At"),t("th",{class:"py-3 px-2"},"Action")])],-1),F={class:"px-2"},L={key:0},M={key:1},V={class:"py-3 px-2"},z={class:"py-3 px-2"},Q={class:"py-3 px-2"},T={class:"py-3 px-2"},D={class:"py-3 px-2"},E={class:"py-3 px-2"},G={class:"flex space-x-2"},R=["onClick"],U=["onClick"],j=t("div",{class:"overflow-hidden h-screen"},null,-1),O={__name:"Seller",setup(H){const{error:i,result:f,loading:x,refetch:_}=b(y`
  query MyQuery($_eq: String = "sellers") {
    users(where: { role: { name: { _eq: $_eq } } }) {
      phone
      id
      products_aggregate {
        aggregate {
          count(distinct: false)
        }
      }
      first_name
      last_name
      status
      created_at
    }
  }
`);n(!1),B();const m=v(()=>{var c,r;return(r=(c=f.value)==null?void 0:c.users)!=null?r:[]});n(0),n(!1);const p=async(c,r)=>{try{(await C.mutate({mutation:y`
      mutation MyMutation($id: uuid = "", $status: Boolean = false) {
          update_users_by_pk(
            pk_columns: { id: $id }
            _set: { status: $status }
          ) {
            id
          }
        }
      `,variables:{id:c,status:!r}})).data.update_users_by_pk.id&&(q({type:"success",text:"Seller Status Updated Successfully"}),_()),_()}catch{}};return n(!1),(c,r)=>{const l=w("font-awesome-icon");return e(),a(g,null,[t("div",N,[t("table",P,[A,t("tbody",F,[d(i)?(e(),a("tr",L,o(d(i)),1)):$("",!0),d(x)?(e(),a("tr",M," Loading ")):(e(!0),a(g,{key:2},S(d(m),s=>{var u;return e(),a("tr",{key:s.id,class:"bg-white border-b dark:bg-gray-900 dark:border-gray-700"},[t("td",V,o(s.first_name),1),t("td",z,o(s.last_name),1),t("td",Q,o(s.phone),1),t("td",T,o(((u=s.products_aggregate.aggregate)==null?void 0:u.count)||0),1),t("td",D,o(s.created_at.split("T")[0]),1),t("td",E,[t("div",G,[s.status?(e(),a("button",{key:0,onClick:k=>p(s.id,s.status)},[h(l,{icon:["fas","toggle-on"],style:{color:"#44d70f"},size:"xl"})],8,R)):(e(),a("button",{key:1,onClick:k=>p(s.id,s.status)},[h(l,{icon:["fas","toggle-off"],size:"xl",style:{color:"#b71010"}})],8,U))])])])}),128))])])]),j],64)}}};export{O as default};
