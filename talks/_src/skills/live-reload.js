/* Local preview: reload when deck.yaml or a style/figure file changes, opening the first changed slide. */
'use strict';
(()=>{
  if(location.protocol==='file:')return;
  let last=null;
  async function check(){
    const response=await fetch('/api/slides/changes',{cache:'no-store'}).catch(()=>null);
    if(!response?.ok||!window.__ready)return;
    const {stamp}=await response.json();
    if(last===null||stamp===last){last=stamp;return;}
    // Keep unsaved in-browser edits; the editor's own save path handles those.
    if(!$('#editor').hidden||localStorage.getItem(DRAFT_KEY))return;
    const result=await (await fetch('/api/slides/deck',{cache:'no-store'})).json();
    if(result.error){toast(result.error);last=stamp;return;}
    last=stamp;
    const changed=result.deck.slides.find((s,i)=>JSON.stringify(s)!==JSON.stringify(deck.slides[i]));
    if(changed)history.replaceState(null,'','#'+encodeURIComponent(changed.id));
    location.reload();
  }
  setInterval(check,700);
})();
