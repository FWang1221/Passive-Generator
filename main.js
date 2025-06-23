// -----------------------
// helper: get schema field type
// -----------------------
function getFieldType(schemaName, funcName, key) {
  const schema = window[schemaName] || {};
  const groups = schema[funcName] || [];
  for (const group of groups) {
    if (group[key]) return group[key];
  }
  return null;
}

// -----------------------
// addAttachment (with 3 function‐lists)
// -----------------------
function addAttachment() {
  const container = document.getElementById('attachmentsContainer');
  const div = document.createElement('div');
  div.className = 'attachment-block';
  div.style.position = 'relative';
  div.innerHTML = `
    <button type="button" class="removeAttachmentBtn"
            style="position:absolute; top:0.5rem; right:0.5rem; background:#900; color:#fff; border:none; padding:0.2rem 0.5rem; cursor:pointer;">
      ×
    </button>
    <fieldset style="border:1px solid #555;padding:1rem;margin-bottom:1rem;">
      <legend>Attachment</legend>
      <!-- HOOKEDFUNC -->
      <label>Listener Function:
        <select class="listenerFunc">
          ${Object.entries(HOOKEDFUNCS).map(([k,v])=>
            `<option value="${v}">${k} (${v})</option>`
          ).join('')}
        </select>
      </label><br><br>
      <!-- FLAGS -->
      <label><input type="checkbox" class="cbBefore"> isCallbackBefore</label><br>
      <label><input type="checkbox" class="cbManipulator"> isEventManipulator</label><br>
      <label><input type="checkbox" class="cbManipulatorBefore"> isEventManipulatorBefore</label><br><br>
      <!-- PRIOR CONDITIONS -->
      <div class="priorFuncsContainer"></div>
      <button type="button" class="addPriorBtn">+ Add Prior Condition</button><br><br>
      <!-- TARGET FILTERS -->
      <div class="filterFuncsContainer"></div>
      <button type="button" class="addFilterBtn">+ Add Target Filter</button><br><br>
      <!-- EFFECTS -->
      <div class="effectFuncsContainer"></div>
      <button type="button" class="addEffectBtn">+ Add Effect</button>
    </fieldset>
  `;
  container.appendChild(div);

  // remove attachment
  div.querySelector('.removeAttachmentBtn')
     .addEventListener('click',()=>container.removeChild(div));

  // wire up the three "add" buttons
  div.querySelector('.addPriorBtn')
     .addEventListener('click',()=> addFunctionBlock(
       PRIORCONDITIONFUNCTIONS, 'priorFuncsContainer', div, renderPriorConditionFields
     ));
  div.querySelector('.addFilterBtn')
     .addEventListener('click',()=> addFunctionBlock(
       TARGETFILTRATIONFUNCTIONS, 'filterFuncsContainer', div, renderTargetFiltrationFields
     ));
  div.querySelector('.addEffectBtn')
     .addEventListener('click',()=> addFunctionBlock(
       EFFECTFUNCTIONS, 'effectFuncsContainer', div, renderEffectFields
     ));
}

// -----------------------
// generic: add one block of function inputs
// -----------------------
function addFunctionBlock(schema, containerClass, attachmentDiv, renderFn) {
  const container = attachmentDiv.querySelector('.' + containerClass);
  const block = document.createElement('div');
  block.className = 'func-block';
  block.style.border = '1px dashed #888';
  block.style.margin = '0.5rem 0';
  block.style.padding = '0.5rem';
  block.innerHTML = `
    <button type="button" class="removeFuncBtn" style="float:right">×</button>
    <label>Function:
      <select class="funcSelect">
        <option value="">-- none --</option>
        ${Object.keys(schema).map(fn=>
          `<option value="${fn}">${fn}</option>`
        ).join('')}
      </select>
    </label>
    <div class="funcFields"></div>
  `;
  container.appendChild(block);

  // remove this block
  block.querySelector('.removeFuncBtn')
       .addEventListener('click',()=>container.removeChild(block));

  // when function changes, render its inputs
  const sel = block.querySelector('.funcSelect');
  const fields = block.querySelector('.funcFields');
  sel.addEventListener('change',()=>{
    fields.innerHTML = '';
    if(sel.value) renderFn(sel.value, fields);
  });
}

// -----------------------
// render fields (identical pattern for each schema)
// -----------------------
function renderPriorConditionFields(funcName, container) {
  const spec = PRIORCONDITIONFUNCTIONS[funcName] || [];
  container.innerHTML = '';
  spec.forEach(group=>{
    const fs = document.createElement('fieldset');
    fs.style.margin = '0.5rem 0';
    Object.entries(group).forEach(([key,type])=>{
      const label = document.createElement('label');
      label.style.display='block';
      const txt = document.createTextNode(`${key} (${type.toLowerCase()}): `);
      label.appendChild(txt);
      let input;
      if(type===FUNCTIONTYPE){
        input = document.createElement('textarea');
        input.rows=10; input.style.width='100%';
        input.value = `function(passive, params)\n\nend`;
      } else if(type===NUMBERTYPE){
        input = document.createElement('input'); input.type='number';
      } else if(type===STRINGARRAYTYPE){
        input = document.createElement('input');
        input.placeholder='e.g. {"a","b"}';
        input.noQuotes = true; // special case for string arrays
      } else {
        // enums or string
        input = document.createElement(type.endsWith('ENUMTYPE')?'select':'input');
if (type.endsWith('ENUMTYPE')) {
  const list = ENUM_LISTS[type] || {};
  for (const [k,v] of Object.entries(list)) {
    const op = document.createElement('option');
    op.value = v;
    op.textContent = `${k} (${v})`;
    input.appendChild(op);
            input.noQuotes = true; // special case for enums
  }
}
      }
      input.dataset.key = key;
      label.appendChild(input);
      fs.appendChild(label);
    });
    container.appendChild(fs);
  });
}
function renderTargetFiltrationFields(funcName, container){
  const spec = TARGETFILTRATIONFUNCTIONS[funcName] || [];
  container.innerHTML='';
  spec.forEach(group=>{
    const fs=document.createElement('fieldset');
    fs.style.margin='0.5rem 0';
    Object.entries(group).forEach(([key,type])=>{
      const label=document.createElement('label'); label.style.display='block';
      label.appendChild(document.createTextNode(`${key} (${type.toLowerCase()}): `));
      let input;
      if(type===FUNCTIONTYPE){
        input=document.createElement('textarea');
        input.rows=10; input.style.width='100%';
        input.value=`function(passive, params, targetPool) \n\nend`;
      } else if(type===NUMBERTYPE){
        input=document.createElement('input'); input.type='number';
      } else if(type===STRINGARRAYTYPE){
        input = document.createElement('input');
        input.placeholder='e.g. {"a","b"}';
        input.noQuotes = true; // special case for string arrays
      } else {
        input=document.createElement(type.endsWith('ENUMTYPE')?'select':'input');
if (type.endsWith('ENUMTYPE')) {
  const list = ENUM_LISTS[type] || {};
  for (const [k,v] of Object.entries(list)) {
    const op = document.createElement('option');
    op.value = v;
    op.textContent = `${k} (${v})`;
    input.appendChild(op);
            input.noQuotes = true; // special case for enums
  }
}
      }
      input.dataset.key=key;
      label.appendChild(input);
      fs.appendChild(label);
    });
    container.appendChild(fs);
  });
}
function renderEffectFields(funcName, container){
  const spec = EFFECTFUNCTIONS[funcName] || [];
  container.innerHTML='';
  spec.forEach(group=>{
    const fs=document.createElement('fieldset');
    fs.style.margin='0.5rem 0';
    Object.entries(group).forEach(([key,type])=>{
      const label=document.createElement('label'); label.style.display='block';
      label.appendChild(document.createTextNode(`${key} (${type.toLowerCase()}): `));
      let input;
      if(type===FUNCTIONTYPE){
        input=document.createElement('textarea');
        input.rows=10; input.style.width='100%';
        input.value=`function(passive, params, targetPool, targetIndex) \n\nend`;
        input.noQuotes=true;
      } else if(type===NUMBERTYPE){
        input=document.createElement('input'); input.type='number';
      } else if(type===STRINGARRAYTYPE){
        input = document.createElement('input');
        input.placeholder='e.g. {"a","b"}';
        input.noQuotes = true; // special case for string arrays
      } else {
        input=document.createElement(type.endsWith('ENUMTYPE')?'select':'input');
if (type.endsWith('ENUMTYPE')) {
  const list = ENUM_LISTS[type] || {};
  for (const [k,v] of Object.entries(list)) {
    const op = document.createElement('option');
    op.value = v;
    op.textContent = `${k} (${v})`;
    input.appendChild(op);
            input.noQuotes = true; // special case for enums
  }
}
      }
      input.dataset.key=key;
      label.appendChild(input);
      fs.appendChild(label);
    });
    container.appendChild(fs);
  });
}

// -----------------------
// generateLua (collects all 3 lists)
// -----------------------
function generateLua(){
  const name=document.getElementById('passiveName').value.trim();
  const desc=document.getElementById('passiveDescription').value.trim();
  const atts=document.querySelectorAll('.attachment-block');

  const luaBlocks=Array.from(atts).map(el=>{
    const listener=el.querySelector('.listenerFunc').value;
    const cb=el.querySelector('.cbBefore').checked;
    const em=el.querySelector('.cbManipulator').checked;
    const emb=el.querySelector('.cbManipulatorBefore').checked;

        // helper to serialize any function-list with correct factory prefix
// helper to serialize any function-list with correct factory prefix + attr name
function serializeList(schemaName, containerSelector, factoryPath, attributeName) {
  const blocks = el.querySelectorAll(containerSelector + ' .func-block');
  if (!blocks.length) return `${attributeName} = {},`;
  const entries = Array.from(blocks).map(b => {
    const fn = b.querySelector('.funcSelect').value;
    const inputs = b.querySelectorAll('.funcFields [data-key]');
    const args = Array.from(inputs).map(i => {
      const k = i.dataset.key;
      let v = i.value.trim();
      if (i.tagName === 'SELECT') v = i.value;
      else if (i.type === 'number') v = v ? v : null;
      if (v === null || v === '') return '';
      const type = getFieldType(schemaName, fn, k);
      const noQuote = i.noQuotes
      let stringProduct = ""
      stringProduct = `                ${k} = "${v}"`;
      if (noQuote) {
        stringProduct = `                ${k} = ${v}`
      }
      return stringProduct
    }).filter(Boolean).join(',\n');

    return `            ${factoryPath}.${fn}({\n${args}\n            })`;
  }).join(',\n');

  return `${attributeName} = {\n${entries}\n        }`;
}


const pcfLua = serializeList(
  'PRIORCONDITIONFUNCTIONS',
  '.priorFuncsContainer',
  'ReactivePassiveFactory.priorConditionFunctions',
  'priorConditionFunctions'
);
const tffLua = serializeList(
  'TARGETFILTRATIONFUNCTIONS',
  '.filterFuncsContainer',
  'ReactivePassiveFactory.targetFiltrationFunctions',
  'targetFiltrationFunctions'
);
const efLua = serializeList(
  'EFFECTFUNCTIONS',
  '.effectFuncsContainer',
  'ReactivePassiveFactory.effectFunctions',
  'effectFunctions'
);

    const lines = [
      `listenerFunction = ${listener}`,
      cb?`isCallbackBefore = true`:null,
      em?`isEventManipulator = true`:null,
      emb?`isEventManipulatorBefore = true`:null,
      pcfLua,
      tffLua,
      efLua
    ].filter(Boolean).map(l=>`        ${l}`).join(',\n');

    return `    {\n${lines}\n    }`;
  }).join(',\n');

  const out =
`return function()
return {
    passiveName = "${name}",
    passiveDescription = "${desc}",
    attachments = {
${luaBlocks}
    }
}
end`;

  document.getElementById('exportBox').value = out;
}
