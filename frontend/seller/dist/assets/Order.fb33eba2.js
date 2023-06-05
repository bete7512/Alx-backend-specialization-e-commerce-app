import{d as $,g as C,r as B,o as a,c,a as t,e as o,t as e,f as D,F as N,h as O,i as v,q as S,A as M}from"./index.38dbfffa.js";const P={class:"overflow-x-scroll"},Q={class:"w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400"},V=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{class:"py-3 px-2"},"Product name"),t("th",{class:"py-3 px-2"},"Customer name"),t("th",{class:"py-3 px-2"},"Customer Phone"),t("th",{class:"py-3 px-2"},"Price"),t("th",{class:"py-3 px-2"},"Order Date"),t("th",{class:"py-3 px-2"},"Quantity"),t("th",{class:"py-3 px-2"},"Country"),t("th",{class:"py-3 px-2"},"City"),t("th",{class:"py-3 px-2"},"Zip Code"),t("th",{class:"py-3 px-2"},"Order Status"),t("th",{class:"py-3 px-2"},"Actions")])],-1),Z={class:"px-2"},z={key:0},A={key:1},F={class:"py-3 px-2"},E={class:"py-3 px-2"},L={class:"py-3 px-2"},T={class:"py-3 px-2"},U={class:"py-3 px-2"},Y={class:"py-3 px-2"},j={class:"py-3 px-2"},G={class:"py-3 px-2"},H={class:"py-3 px-2"},I={class:"py-3 px-2"},J={class:"py-3 px-2"},K={class:"flex space-x-2"},R=["onClick"],W=["onClick"],st={__name:"Order",setup(X){const{error:p,loading:i,result:q,refetch:_}=$(C`
  query MyQuery {
    order {
      id
      created_at
      customer {
        email
        phone
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
`),l=async(d,u)=>{try{(await S.mutate({mutation:C`
        mutation MyMutation($id: uuid = "", $status: Boolean = false) {
          update_order_by_pk(
            pk_columns: { id: $id }
            _set: { status: $status }
          ) {
            id
          }
        }
      `,variables:{id:d,status:!u}})).data.update_order_by_pk.id&&(M({type:"success",text:"Order Status Updated Successfully"}),_()),_()}catch{}};return(d,u)=>{var r;const n=B("font-awesome-icon");return a(),c("div",P,[t("table",Q,[V,t("tbody",Z,[o(p)?(a(),c("tr",z,e(o(p)),1)):D("",!0),o(i)?(a(),c("tr",A,e(o(i)),1)):(a(!0),c(N,{key:2},O((r=o(q))==null?void 0:r.order,s=>{var y,h,x,m,f,g,k,b;return a(),c("tr",{key:s.id,class:"bg-white border-b dark:bg-gray-900 dark:border-gray-700"},[t("td",F,e((y=s.product)==null?void 0:y.product_name),1),t("td",E,e((h=s.customer)==null?void 0:h.first_name)+" "+e((x=s.customer)==null?void 0:x.last_name),1),t("td",L,e((m=s.customer)==null?void 0:m.phone),1),t("td",T,e((f=s.product)==null?void 0:f.price),1),t("td",U,e(s.created_at.split("T")[0]),1),t("td",Y,e(s==null?void 0:s.quantity),1),t("td",j,e((g=s==null?void 0:s.order_address)==null?void 0:g.Country),1),t("td",G,e((k=s==null?void 0:s.order_address)==null?void 0:k.City),1),t("td",H,e((b=s==null?void 0:s.order_address)==null?void 0:b.Zip_code),1),t("td",I,e(s.status?"Delivered":"Not Delivered Yet"),1),t("td",J,[t("div",K,[s.status?(a(),c("button",{key:0,onClick:w=>l(s.id,s.status)},[v(n,{icon:["fas","toggle-on"],style:{color:"#44d70f"},size:"xl"})],8,R)):(a(),c("button",{key:1,onClick:w=>l(s.id,s.status)},[v(n,{icon:["fas","toggle-off"],size:"xl",style:{color:"#b71010"}})],8,W))])])])}),128))])])])}}};export{st as default};
