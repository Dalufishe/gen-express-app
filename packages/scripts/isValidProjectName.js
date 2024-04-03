export default function (projectName, cb = () => { }) {
    const invalidSymbols = new RegExp("^[a-z_-]+$");
    if (projectName.length < 5 || !invalidSymbols.test(projectName)) {
      cb()
      return true
    } else {
      return false
    }
  }