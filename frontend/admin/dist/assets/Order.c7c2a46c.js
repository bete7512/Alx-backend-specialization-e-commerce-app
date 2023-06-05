import{d as $,g as b,r as q,o as a,c,a as t,e as o,t as e,f as B,F as D,h as N,i as C,B as O,G as S}from"./index.c3dc40f5.js";const M={class:"overflow-x-scroll"},Q={class:"w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400"},V=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{class:"py-3 px-2"},"Product name"),t("th",{class:"py-3 px-2"},"Customer name"),t("th",{class:"py-3 px-2"},"Price"),t("th",{class:"py-3 px-2"},"Order Date"),t("th",{class:"py-3 px-2"},"Quantity"),t("th",{class:"py-3 px-2"},"Country"),t("th",{class:"py-3 px-2"},"City"),t("th",{class:"py-3 px-2"},"Zip Code"),t("th",{class:"py-3 px-2"},"Order Status"),t("th",{class:"py-3 px-2"},"Actions")])],-1),Z={class:"px-2"},z={key:0},A={key:1},F={class:"py-3 px-2"},P={class:"py-3 px-2"},E={class:"py-3 px-2"},G={class:"py-3 px-2"},L={class:"py-3 px-2"},T={class:"py-3 px-2"},U={class:"py-3 px-2"},Y={class:"py-3 px-2"},j={class:"py-3 px-2"},H={class:"py-3 px-2"},I={class:"flex space-x-2"},J=["onClick"],K=["onClick"],X={__name:"Order",setup(R){const{error:i,loading:p,result:v,refetch:_}=$(b`
    query MyQuery {
      order {
        id
        created_at
        customer {
          email
          last_name
          first_name
          address
        }
        status
        product {
          price
          product_name
          about_product
          average_rate
          average_rates
          product_description
          quantity
        }
        order_address {
          City
          Country
          Zip_code
        }
        quantity
        reference_id
      }
    }
  `),d=async(l,u)=>{try{(await O.mutate({mutation:b`
          mutation MyMutation($id: uuid = "", $status: Boolean = false) {
            update_order_by_pk(
              pk_columns: { id: $id }
              _set: { status: $status }
            ) {
              id
            }
          }
        `,variables:{id:l,status:!u}})).data.update_order_by_pk.id&&(S({type:"success",text:"Order Status Updated Successfully"}),_()),_()}catch{}};return(l,u)=>{var r;const n=q("font-awesome-icon");return a(),c("div",M,[t("table",Q,[V,t("tbody",Z,[o(i)?(a(),c("tr",z,e(o(i)),1)):B("",!0),o(p)?(a(),c("tr",A,e(o(p)),1)):(a(!0),c(D,{key:2},N((r=o(v))==null?void 0:r.order,s=>{var y,x,h,m,f,g,k;return a(),c("tr",{key:s.id,class:"bg-white border-b dark:bg-gray-900 dark:border-gray-700"},[t("td",F,e((y=s.product)==null?void 0:y.product_name),1),t("td",P,e((x=s.customer)==null?void 0:x.first_name)+" "+e((h=s.customer)==null?void 0:h.last_name),1),t("td",E,e((m=s.product)==null?void 0:m.price),1),t("td",G,e(s.created_at.split("T")[0]),1),t("td",L,e(s==null?void 0:s.quantity),1),t("td",T,e((f=s==null?void 0:s.order_address)==null?void 0:f.Country),1),t("td",U,e((g=s==null?void 0:s.order_address)==null?void 0:g.City),1),t("td",Y,e((k=s==null?void 0:s.order_address)==null?void 0:k.Zip_code),1),t("td",j,e(s.status?"Delivered":"Not Delivered Yet"),1),t("td",H,[t("div",I,[s.status?(a(),c("button",{key:0,onClick:w=>d(s.id,s.status)},[C(n,{icon:["fas","toggle-on"],style:{color:"#44d70f"},size:"xl"})],8,J)):(a(),c("button",{key:1,onClick:w=>d(s.id,s.status)},[C(n,{icon:["fas","toggle-off"],size:"xl",style:{color:"#b71010"}})],8,K))])])])}),128))])])])}}};export{X as default};
