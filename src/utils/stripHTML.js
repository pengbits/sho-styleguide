export function stripHTML(input) {
  let sanitized;
  const temp = document.createElement("span");
  temp.innerHTML = decodeURI(input);
  // textContext will strip html, but let's replace any stray &lt;'s, &gt;'s, or quotes just in case
  sanitized = temp.innerText.replace(/[<>"']/g, '');
  return sanitized
}