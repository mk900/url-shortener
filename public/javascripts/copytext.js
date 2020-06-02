// ! Copy text for shortening URL

function copyText() {
  var range, selection, worked
  var element = document.getElementById('copyUrl')
  if (document.body.createTextRange) {
    range = document.body.createTextRange()
    range.moveToElementText(element)
    range.select()
  } else if (window.getSelection) {
    selection = window.getSelection()
    range = document.createRange()
    range.selectNodeContents(element)
    selection.removeAllRanges()
    selection.addRange(range)
  }

  try {
    document.execCommand('copy')
    alert('複製成功')
  }
  catch (err) {
    alert('複製失敗')
  }
}