(() => {
  const documents = {
    'README.md': 'Workspace guide',
    '01_TEAM_BRIEF_AND_EXECUTION_ROADMAP.md': 'Team brief and roadmap',
    '02_ROLES_AND_WEEKLY_PLAN.md': 'Roles and weekly plan',
    '03_SCOPE_AND_APOLLO_HANDOFF_BOUNDARY.md': 'Scope and Apollo boundary',
    '04_WORKFLOW_REVIEW_AND_DEMO_SCRIPT.md': 'Workflow and demo script',
    '05_ROLE_AND_COORDINATION_CHANGELOG_20260820.md': 'Role and coordination update',
  };
  const requested = new URLSearchParams(window.location.search).get('doc');
  const current = Object.hasOwn(documents, requested) ? requested : 'README.md';
  const nav = document.getElementById('doc-nav');
  nav.innerHTML = Object.entries(documents).map(([file, title]) => `<a class="${file === current ? 'active' : ''}" href="?doc=${encodeURIComponent(file)}">${title}</a>`).join('');
  document.getElementById('source-link').href = `../resources/${encodeURIComponent(current)}`;

  const escape = value => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const inline = value => escape(value)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  const cells = line => line.split('|').slice(1, -1).map(cell => `<td>${inline(cell.trim())}</td>`).join('');
  const isTableDivider = line => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
  const render = markdown => {
    const lines = markdown.replace(/\r/g, '').split('\n');
    const output = [];
    for (let index = 0; index < lines.length;) {
      const line = lines[index];
      if (!line.trim()) { index++; continue; }
      if (line.startsWith('```')) { const code = []; index++; while (index < lines.length && !lines[index].startsWith('```')) code.push(lines[index++]); index++; output.push(`<pre><code>${escape(code.join('\n'))}</code></pre>`); continue; }
      const heading = line.match(/^(#{1,3})\s+(.+)$/);
      if (heading) { const level = heading[1].length; output.push(`<h${level}>${inline(heading[2])}</h${level}>`); index++; continue; }
      if (/^[-*_]{3,}\s*$/.test(line)) { output.push('<hr>'); index++; continue; }
      if (line.startsWith('> ')) { const quote = []; while (index < lines.length && lines[index].startsWith('> ')) quote.push(lines[index++].slice(2)); output.push(`<blockquote>${inline(quote.join(' '))}</blockquote>`); continue; }
      if (index + 1 < lines.length && line.includes('|') && isTableDivider(lines[index + 1])) { const header = line.split('|').slice(1, -1).map(cell => `<th>${inline(cell.trim())}</th>`).join(''); index += 2; const rows = []; while (index < lines.length && lines[index].includes('|') && lines[index].trim()) rows.push(`<tr>${cells(lines[index++])}</tr>`); output.push(`<table><thead><tr>${header}</tr></thead><tbody>${rows.join('')}</tbody></table>`); continue; }
      const list = line.match(/^\s*([-*+] |\d+\. )/);
      if (list) { const ordered = /^\s*\d+\. /.test(line); const tag = ordered ? 'ol' : 'ul'; const items = []; while (index < lines.length && (ordered ? /^\s*\d+\. /.test(lines[index]) : /^\s*[-*+] /.test(lines[index]))) items.push(`<li>${inline(lines[index++].replace(/^\s*(?:[-*+] |\d+\. )/, ''))}</li>`); output.push(`<${tag}>${items.join('')}</${tag}>`); continue; }
      const paragraph = [line.trim()]; index++; while (index < lines.length && lines[index].trim() && !/^(#{1,3})\s+|^```|^> |^\s*(?:[-*+] |\d+\. )/.test(lines[index])) paragraph.push(lines[index++].trim()); output.push(`<p>${inline(paragraph.join(' '))}</p>`);
    }
    return output.join('\n');
  };
  fetch(`../resources/${encodeURIComponent(current)}`).then(response => {
    if (!response.ok) throw new Error(`The document could not be loaded (${response.status}).`);
    return response.text();
  }).then(markdown => {
    document.title = `${documents[current]} | Apollo AgriIntel`;
    document.getElementById('document').innerHTML = `<div class="markdown-body">${render(markdown)}</div>`;
  }).catch(error => { document.getElementById('document').innerHTML = `<div class="markdown-error"><h1>Document unavailable</h1><p>${escape(error.message)}</p></div>`; });
  const menu = document.querySelector('.menu-button'); const mainNav = document.querySelector('.main-nav'); const theme = document.querySelector('.theme-button');
  if (localStorage.getItem('apollo-theme') === 'night') document.documentElement.dataset.theme = 'night';
  theme.textContent = document.documentElement.dataset.theme === 'night' ? 'Day' : 'Night';
  menu.addEventListener('click', () => { mainNav.classList.toggle('open'); menu.setAttribute('aria-expanded', mainNav.classList.contains('open')); });
  theme.addEventListener('click', () => { const night = document.documentElement.dataset.theme !== 'night'; document.documentElement.dataset.theme = night ? 'night' : ''; localStorage.setItem('apollo-theme', night ? 'night' : 'day'); theme.textContent = night ? 'Day' : 'Night'; });
})();
