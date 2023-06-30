// export default function ({ redirect, route}) {
//
//   if (route.name === 'login') {
//     if (localStorage.token) {
//       return redirect('/')
//     }
//   }
//
//   if (route.fullPath.includes('user')) {
//     if (!localStorage.token) {
//       return redirect('/login')
//     }
//   }
// }

export default function ({ redirect, route}) {

  if (route.name === 'login') {
    if (localStorage.token) {
      return redirect('/')
    }
  }

  if (route.fullPath.includes('user')) {
    if (!localStorage.token) {
      return redirect('/login')
    }
  }
}
