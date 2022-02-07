import axios from "axios"

async function callApi(method, url, dataObj) {
  try {
    return await axios({ method: method, url: url, data: dataObj, withCredentials: true, headers: { 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Origin': '*', 'X-Requested-With': 'XMLHttpRequest' } })
  } catch (e) {
    return e.response
  }
}

function showValidationErrors(res){
  for (let i in res.data.errors) {
   alert(res.data.errors[i][0])
  }
}
function showErrorMessage(res){
alert(res.message)
}
function _confirm(msg) {
  if (!confirm(msg)) return;
}

const names = "Wamae"
export { _confirm, callApi, showValidationErrors, showErrorMessage }

// export default {
//   callApi, _confirm
// }










// export default {
//   data() {
//     return {

//     }
//   },
//   methods: {
//     async callApi(method, url, dataObj) {
//       // this.start()
//       try {
//         return await axios({
//           method: method,
//           url: url,
//           data: dataObj
//         });
//       } catch (e) {
//         this.showError()
//         return e.response
//       }
//     },

//     // loadTooltipErrors(res) {
//     //   for (let i in res.data.errors) {
//     //     this.show_error_message(res.data.errors[i][0])
//     //   }
//     // },
//     // loadNoticeErrors(res) {
//     //   for (let i in res.data.errors) {
//     //     this.e(res.data.errors[i][0])
//     //   }
//     // },

//     // $type(t_type) {
//     //   if (t_type == 'CS') return 'Cash Sale'
//     //   if (t_type == 'IN') return 'Client Invoice'
//     //   if (t_type == 'CN') return 'Credit Note'
//     //   if (t_type == 'CP') return 'Cash Purchase'
//     //   if (t_type == 'BL') return 'Supplier Bill'
//     //   if (t_type == 'RC') return 'Client Receipt'
//     //   if (t_type == 'DN') return 'Debit Note'
//     //   if (t_type == 'PY') return 'Supplier Payment '
//     //   if (t_type == 'CE') return 'Contra Entry '
//     //   if (t_type == 'JN') return 'Journal Entry'
//     // },

//     // $hasRole(role) {
//     //   if (Roles.indexOf('Super Admin') !== -1) {
//     //     return true
//     //   } else {
//     //     return Roles.indexOf(role) !== -1;
//     //   }

//     // },

//     // $OrgHasModule(module) {
//     //   return Modules.indexOf(module) !== -1;
//     // },

//     isMobile() {
//       if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         return true
//       } else {
//         return false
//       }
//     },
//     $confirm(msg) {
//       if (!confirm(msg)) return;
//     }
//     // $can(permission) {
//     //   if (Permissions.indexOf('super_admin') !== -1) {
//     //     return true
//     //   } else {
//     //     return Permissions.indexOf(permission) !== -1;
//     //   }

//     // },

//     // i(desc, title = "Hey") {
//     //   this.$Notice.info({
//     //     title: title,
//     //     desc: desc,
//     //     top: 100,
//     //   });
//     // },
//     // s(desc, title = "Great!") {
//     //   this.$Notice.success({
//     //     title: title,
//     //     desc: desc,
//     //     top: 100,
//     //   });
//     // },
//     // w(desc, title = "Oops!") {
//     //   this.$Notice.warning({
//     //     title: title,
//     //     desc: desc,
//     //     top: 100,
//     //   });
//     // },
//     // e(desc, title = "Oops!") {
//     //   this.$Notice.error({
//     //     title: title,
//     //     desc: desc,
//     //     top: 100,

//     //   });
//     // },
//     // start() {
//     //   this.$Loading.start();
//     // },
//     // stop() {
//     //   this.$Loading.finish()
//     // },
//     // showError() {
//     //   this.$Loading.error()
//     // },
//     // async sys_logout() {
//     //   this.start()
//     //   const res = await this.callApi('post', '/logout')
//     //   if (res.status == 204) {
//     //     this.stop()
//     //     window.location = '/'
//     //   } else {
//     //     this.showError()
//     //   }
//     // },
//     // swr(desc = 'Something went wrong! Please try again.', title = "Error") {
//     //   this.$Notice.error({
//     //     title: title,
//     //     desc: desc,
//     //     top: 100,
//     //   });
//     // },
//     // show_success_message(message) {
//     //   this.$Message.success({
//     //     background: true,
//     //     content: message,
//     //     duration: 5,
//     //     closable: true
//     //   });
//     // },
//     // show_error_message(message) {
//     //   this.$Message.error({
//     //     background: true,
//     //     content: message,
//     //     duration: 10,
//     //     closable: true
//     //   });
//     // },
//     // show_info_message(message) {
//     //   this.$Message.info({
//     //     background: true,
//     //     content: message,
//     //     duration: 10,
//     //     closable: true
//     //   });
//     // }
//   }
// }
