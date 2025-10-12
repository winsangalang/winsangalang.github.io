const performersTop = ["aya_hitakayamaaa"];
  const containerTop = document.getElementById('linksTop');

  performersTop.forEach(name => {
    const a = document.createElement('a');
    a.href = `https://recu.me/performer/${name}/latest`;
    a.target = "_blank";
    a.textContent = name;
    containerTop.appendChild(a);
    containerTop.appendChild(document.createTextNode(' '));
  });

  const performers18 = ["power_ranger_pink","son_pak","kokomi_sangonomia","say_non"];
  const container18 = document.getElementById('links18');

  performers18.forEach(name => {
    const a = document.createElement('a');
    a.href = `https://recu.me/performer/${name}/latest`;
    a.target = "_blank";
    a.textContent = name;
    container18.appendChild(a);
    container18.appendChild(document.createTextNode(' '));
  });

  const performersHot = ["annbarby","candysfox"];
  const containerHot = document.getElementById('linksHot');

  performersHot.forEach(name => {
    const a = document.createElement('a');
    a.href = `https://recu.me/performer/${name}/latest`;
    a.target = "_blank";
    a.textContent = name;
    containerHot.appendChild(a);
    containerHot.appendChild(document.createTextNode(' '));
  });