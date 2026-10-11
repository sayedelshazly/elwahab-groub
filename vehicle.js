(() => {
  const vehicles = [
    { id: '01', title: 'Passenger minibus', category: 'PASSENGER MOBILITY', description: 'A compact passenger vehicle with a high roofline, broad side windows and a practical step entry. Its layout is suited to group transport where a full-size coach is not needed.', facts: [['VEHICLE TYPE', 'Passenger minibus'], ['VISIBLE DESIGN', 'High-roof body · side passenger windows']], company: 'International Company for Buses', companyShort: 'INTERBUS', companyHref: 'factories/interbus.html', companyDescription: 'The group’s bus manufacturing specialist, producing micro, mini and midi buses alongside tailored passenger vehicles.' },
    { id: '02', title: 'Passenger coach', category: 'PASSENGER MOBILITY', description: 'A modern coach form with an extended passenger body and large glazed side panels. The long profile gives the cabin a clear, spacious presence on the road.', facts: [['VEHICLE TYPE', 'Passenger coach'], ['VISIBLE DESIGN', 'Extended body · full-length windows']], company: 'International Company for Buses', companyShort: 'INTERBUS', companyHref: 'factories/interbus.html', companyDescription: 'The group’s bus manufacturing specialist, producing micro, mini and midi buses alongside tailored passenger vehicles.' },
    { id: '03', title: 'Refuse collection body', category: 'SPECIALIST VEHICLES', description: 'A purpose-built refuse collection vehicle that pairs a dedicated working body with a road-going commercial chassis. The configuration is made for municipal collection duties.', facts: [['VEHICLE TYPE', 'Specialist collection vehicle'], ['VISIBLE DESIGN', 'Dedicated service body · work-ready chassis']], company: 'Helwan Body Builders', companyShort: 'HELWAN', companyHref: 'factories/helwan.html', companyDescription: 'The group’s body-building specialist, adapting vehicle bodies and layouts to meet specific working requirements.' },
    { id: '04', title: 'Passenger coach design', category: 'PASSENGER MOBILITY', description: 'A front-led view of a passenger coach, showing its forward profile and the broad windscreen that shapes the driving position and road presence.', facts: [['VEHICLE TYPE', 'Passenger coach'], ['VISIBLE DESIGN', 'Forward profile · broad windscreen']], company: 'International Company for Buses', companyShort: 'INTERBUS', companyHref: 'factories/interbus.html', companyDescription: 'The group’s bus manufacturing specialist, producing micro, mini and midi buses alongside tailored passenger vehicles.' },
    { id: '05', title: 'Armored specialist vehicle', category: 'SPECIALIST VEHICLES', description: 'A reinforced specialist vehicle with a purpose-built exterior. The visible heavy-duty form is designed around a dedicated application rather than everyday passenger use.', facts: [['VEHICLE TYPE', 'Armored specialist vehicle'], ['VISIBLE DESIGN', 'Reinforced body · dedicated application']], company: 'Helwan Body Builders', companyShort: 'HELWAN', companyHref: 'factories/helwan.html', companyDescription: 'The group’s body-building specialist, adapting vehicle bodies and layouts to meet specific working requirements.' },
    { id: '06', title: 'Armored utility vehicle', category: 'SPECIALIST VEHICLES', description: 'A compact utility platform with a reinforced body and a functional, task-led silhouette. Its design prioritizes a durable working configuration.', facts: [['VEHICLE TYPE', 'Specialist utility vehicle'], ['VISIBLE DESIGN', 'Reinforced body · compact platform']], company: 'Helwan Body Builders', companyShort: 'HELWAN', companyHref: 'factories/helwan.html', companyDescription: 'The group’s body-building specialist, adapting vehicle bodies and layouts to meet specific working requirements.' },
    { id: '07', title: 'Commercial service truck', category: 'COMMERCIAL TRANSPORT', description: 'A commercial service vehicle configured for everyday operational use. The dedicated body makes a practical working platform for business and fleet applications.', facts: [['VEHICLE TYPE', 'Commercial service vehicle'], ['VISIBLE DESIGN', 'Purpose-fitted commercial body']], company: 'Commercial Motors', companyShort: 'CMC', companyHref: 'factories/cmc.html', companyDescription: 'The group’s commercial vehicle company, with experience in truck beds and business-focused vehicle bodies.' },
    { id: '08', title: 'Commercial truck body', category: 'COMMERCIAL TRANSPORT', description: 'A commercial truck body designed to carry goods as part of a working fleet. Its box form makes the cargo area a clear, practical part of the vehicle.', facts: [['VEHICLE TYPE', 'Commercial truck body'], ['VISIBLE DESIGN', 'Enclosed cargo space · fleet format']], company: 'Commercial Motors', companyShort: 'CMC', companyHref: 'factories/cmc.html', companyDescription: 'The group’s commercial vehicle company, with experience in truck beds and business-focused vehicle bodies.' },
    { id: '09', title: 'Passenger transport bus', category: 'PASSENGER MOBILITY', description: 'A rear view of a passenger bus that highlights its broad body and full-height passenger cabin. The clean exterior is shaped for regular people-moving service.', facts: [['VEHICLE TYPE', 'Passenger bus'], ['VISIBLE DESIGN', 'Full-height cabin · broad rear profile']], company: 'International Company for Buses', companyShort: 'INTERBUS', companyHref: 'factories/interbus.html', companyDescription: 'The group’s bus manufacturing specialist, producing micro, mini and midi buses alongside tailored passenger vehicles.' },
    { id: '10', title: 'Custom commercial vehicle', category: 'CUSTOM BODY BUILDING', description: 'A custom white commercial vehicle built around a specific working brief. Its tailored body shows how a base vehicle can be adapted for a defined use.', facts: [['VEHICLE TYPE', 'Custom commercial vehicle'], ['VISIBLE DESIGN', 'Tailored body · application-led layout']], company: 'Helwan Body Builders', companyShort: 'HELWAN', companyHref: 'factories/helwan.html', companyDescription: 'The group’s body-building specialist, adapting vehicle bodies and layouts to meet specific working requirements.' },
    { id: '11', title: 'Purpose-built specialist vehicle', category: 'SPECIALIST VEHICLES', description: 'A distinctive two-tone specialist vehicle with a dedicated body. Its contrasting finish and fitted form make its purpose-built character easy to read.', facts: [['VEHICLE TYPE', 'Purpose-built specialist vehicle'], ['VISIBLE DESIGN', 'Two-tone body · dedicated fit-out']], company: 'Helwan Body Builders', companyShort: 'HELWAN', companyHref: 'factories/helwan.html', companyDescription: 'The group’s body-building specialist, adapting vehicle bodies and layouts to meet specific working requirements.' },
    { id: '12', title: 'Box-body commercial truck', category: 'COMMERCIAL TRANSPORT', description: 'A commercial truck with an enclosed box body that provides a defined cargo space for business transport. The straightforward form is made for practical daily use.', facts: [['VEHICLE TYPE', 'Box-body commercial truck'], ['VISIBLE DESIGN', 'Enclosed cargo space · commercial chassis']], company: 'Commercial Motors', companyShort: 'CMC', companyHref: 'factories/cmc.html', companyDescription: 'The group’s commercial vehicle company, with experience in truck beds and business-focused vehicle bodies.' }
  ];
  const frames = [
    { name: 'Full photograph', className: 'frame-whole', position: 'center' },
    { name: 'Front detail crop', className: 'frame-front', position: 'left center' },
    { name: 'Body detail crop', className: 'frame-body', position: 'center' },
    { name: 'Rear detail crop', className: 'frame-rear', position: 'right center' }
  ];
  const params = new URLSearchParams(location.search);
  const requestedId = params.get('id');
  const vehicle = vehicles.find(item => item.id === requestedId);
  const validVehicle = vehicle || vehicles[0];
  const image = `assets/vehicle-${validVehicle.id}.jpg`;
  const mainImage = document.getElementById('vehicle-main-image');
  const thumbHolder = document.getElementById('vehicle-thumbnails');
  const imageIndex = document.getElementById('vehicle-image-index');

  document.title = `${validVehicle.title} | El-Wahab Group`;
  document.getElementById('vehicle-category').textContent = validVehicle.category;
  document.getElementById('vehicle-title').textContent = validVehicle.title;
  document.getElementById('vehicle-description').textContent = validVehicle.description;
  document.getElementById('vehicle-maker-name').textContent = validVehicle.company;
  document.getElementById('vehicle-maker-description').textContent = validVehicle.companyDescription;
  document.getElementById('vehicle-maker-link').href = validVehicle.companyHref;
  document.getElementById('year').textContent = new Date().getFullYear();

  validVehicle.facts.forEach(([label, value]) => {
    const item = document.createElement('div');
    item.className = 'vehicle-fact';
    const key = document.createElement('span');
    key.textContent = label;
    const detail = document.createElement('strong');
    detail.textContent = value;
    item.append(key, detail);
    document.getElementById('vehicle-facts').append(item);
  });

  function selectFrame(index) {
    const frame = frames[index];
    mainImage.src = image;
    mainImage.alt = `${validVehicle.title} — ${frame.name.toLowerCase()}`;
    mainImage.className = frame.className;
    imageIndex.textContent = `${String(index + 1).padStart(2, '0')} / 04`;
    [...thumbHolder.querySelectorAll('button')].forEach((button, i) => {
      button.setAttribute('aria-pressed', String(i === index));
    });
  }

  frames.forEach((frame, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'vehicle-thumb';
    button.setAttribute('aria-label', frame.name);
    button.setAttribute('aria-pressed', String(index === 0));
    const thumb = document.createElement('img');
    thumb.src = image;
    thumb.alt = '';
    thumb.className = frame.className;
    const label = document.createElement('span');
    label.textContent = frame.name;
    button.append(thumb, label);
    button.addEventListener('click', () => selectFrame(index));
    thumbHolder.append(button);
  });
  selectFrame(0);

  const shortcuts = document.getElementById('vehicle-shortcuts');
  vehicles.filter(item => item.id !== validVehicle.id).forEach(item => {
    const link = document.createElement('a');
    link.className = 'vehicle-shortcut';
    link.href = `vehicle.html?id=${item.id}`;
    link.setAttribute('aria-label', `Explore ${item.title}`);
    const thumb = document.createElement('img');
    thumb.src = `assets/vehicle-${item.id}.jpg`;
    thumb.alt = '';
    thumb.loading = 'lazy';
    const label = document.createElement('span');
    label.textContent = item.id;
    link.append(thumb, label);
    shortcuts.append(link);
  });
})();
