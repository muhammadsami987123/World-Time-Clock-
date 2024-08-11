const countriesTimeZones = [
    { country: "Afghanistan", timezone: "Asia/Kabul" },
    { country: "Albania", timezone: "Europe/Tirane" },
    { country: "Algeria", timezone: "Africa/Algiers" },
    { country: "Andorra", timezone: "Europe/Andorra" },
    { country: "Angola", timezone: "Africa/Luanda" },
    { country: "Antigua and Barbuda", timezone: "America/Antigua" },
    { country: "Argentina", timezone: "America/Argentina/Buenos_Aires" },
    { country: "Armenia", timezone: "Asia/Yerevan" },
    { country: "Australia", timezone: "Australia/Sydney" },
    { country: "Austria", timezone: "Europe/Vienna" },
    { country: "Azerbaijan", timezone: "Asia/Baku" },
    { country: "Bahamas", timezone: "America/Nassau" },
    { country: "Bahrain", timezone: "Asia/Bahrain" },
    { country: "Bangladesh", timezone: "Asia/Dhaka" },
    { country: "Barbados", timezone: "America/Barbados" },
    { country: "Belarus", timezone: "Europe/Minsk" },
    { country: "Belgium", timezone: "Europe/Brussels" },
    { country: "Belize", timezone: "America/Belize" },
    { country: "Benin", timezone: "Africa/Porto-Novo" },
    { country: "Bhutan", timezone: "Asia/Thimphu" },
    { country: "Bolivia", timezone: "America/La_Paz" },
    { country: "Bosnia and Herzegovina", timezone: "Europe/Sarajevo" },
    { country: "Botswana", timezone: "Africa/Gaborone" },
    { country: "Brazil", timezone: "America/Sao_Paulo" },
    { country: "Brunei", timezone: "Asia/Brunei" },
    { country: "Bulgaria", timezone: "Europe/Sofia" },
    { country: "Burkina Faso", timezone: "Africa/Ouagadougou" },
    { country: "Burundi", timezone: "Africa/Bujumbura" },
    { country: "Cabo Verde", timezone: "Atlantic/Cape_Verde" },
    { country: "Cambodia", timezone: "Asia/Phnom_Penh" },
    { country: "Cameroon", timezone: "Africa/Douala" },
    { country: "Canada", timezone: "America/Toronto" },
    { country: "Central African Republic", timezone: "Africa/Bangui" },
    { country: "Chad", timezone: "Africa/Ndjamena" },
    { country: "Chile", timezone: "America/Santiago" },
    { country: "China", timezone: "Asia/Shanghai" },
    { country: "Colombia", timezone: "America/Bogota" },
    { country: "Comoros", timezone: "Indian/Comoro" },
    { country: "Congo", timezone: "Africa/Brazzaville" },
    { country: "Costa Rica", timezone: "America/Costa_Rica" },
    { country: "Croatia", timezone: "Europe/Zagreb" },
    { country: "Cuba", timezone: "America/Havana" },
    { country: "Cyprus", timezone: "Asia/Nicosia" },
    { country: "Czech Republic", timezone: "Europe/Prague" },
    { country: "Denmark", timezone: "Europe/Copenhagen" },
    { country: "Djibouti", timezone: "Africa/Djibouti" },
    { country: "Dominica", timezone: "America/Dominica" },
    { country: "Dominican Republic", timezone: "America/Santo_Domingo" },
    { country: "Ecuador", timezone: "America/Guayaquil" },
    { country: "Egypt", timezone: "Africa/Cairo" },
    { country: "El Salvador", timezone: "America/El_Salvador" },
    { country: "Equatorial Guinea", timezone: "Africa/Malabo" },
    { country: "Eritrea", timezone: "Africa/Asmara" },
    { country: "Estonia", timezone: "Europe/Tallinn" },
    { country: "Eswatini", timezone: "Africa/Mbabane" },
    { country: "Ethiopia", timezone: "Africa/Addis_Ababa" },
    { country: "Fiji", timezone: "Pacific/Fiji" },
    { country: "Finland", timezone: "Europe/Helsinki" },
    { country: "France", timezone: "Europe/Paris" },
    { country: "Gabon", timezone: "Africa/Libreville" },
    { country: "Gambia", timezone: "Africa/Banjul" },
    { country: "Georgia", timezone: "Asia/Tbilisi" },
    { country: "Germany", timezone: "Europe/Berlin" },
    { country: "Ghana", timezone: "Africa/Accra" },
    { country: "Greece", timezone: "Europe/Athens" },
    { country: "Grenada", timezone: "America/Grenada" },
    { country: "Guatemala", timezone: "America/Guatemala" },
    { country: "Guinea", timezone: "Africa/Conakry" },
    { country: "Guinea-Bissau", timezone: "Africa/Bissau" },
    { country: "Guyana", timezone: "America/Guyana" },
    { country: "Haiti", timezone: "America/Port-au-Prince" },
    { country: "Honduras", timezone: "America/Tegucigalpa" },
    { country: "Hungary", timezone: "Europe/Budapest" },
    { country: "Iceland", timezone: "Europe/Reykjavik" },
    { country: "India", timezone: "Asia/Kolkata" },
    { country: "Indonesia", timezone: "Asia/Jakarta" },
    { country: "Iran", timezone: "Asia/Tehran" },
    { country: "Iraq", timezone: "Asia/Baghdad" },
    { country: "Ireland", timezone: "Europe/Dublin" },
    { country: "Israel", timezone: "Asia/Jerusalem" },
    { country: "Italy", timezone: "Europe/Rome" },
    { country: "Jamaica", timezone: "America/Jamaica" },
    { country: "Japan", timezone: "Asia/Tokyo" },
    { country: "Jordan", timezone: "Asia/Amman" },
    { country: "Kazakhstan", timezone: "Asia/Almaty" },
    { country: "Kenya", timezone: "Africa/Nairobi" },
    { country: "Kiribati", timezone: "Pacific/Tarawa" },
    { country: "Korea, North", timezone: "Asia/Pyongyang" },
    { country: "Korea, South", timezone: "Asia/Seoul" },
    { country: "Kuwait", timezone: "Asia/Kuwait" },
    { country: "Kyrgyzstan", timezone: "Asia/Bishkek" },
    { country: "Laos", timezone: "Asia/Vientiane" },
    { country: "Latvia", timezone: "Europe/Riga" },
    { country: "Lebanon", timezone: "Asia/Beirut" },
    { country: "Lesotho", timezone: "Africa/Maseru" },
    { country: "Liberia", timezone: "Africa/Monrovia" },
    { country: "Libya", timezone: "Africa/Tripoli" },
    { country: "Liechtenstein", timezone: "Europe/Vaduz" },
    { country: "Lithuania", timezone: "Europe/Vilnius" },
    { country: "Luxembourg", timezone: "Europe/Luxembourg" },
    { country: "Madagascar", timezone: "Indian/Antananarivo" },
    { country: "Malawi", timezone: "Africa/Blantyre" },
    { country: "Malaysia", timezone: "Asia/Kuala_Lumpur" },
    { country: "Maldives", timezone: "Indian/Maldives" },
    { country: "Mali", timezone: "Africa/Bamako" },
    { country: "Malta", timezone: "Europe/Malta" },
    { country: "Marshall Islands", timezone: "Pacific/Majuro" },
    { country: "Mauritania", timezone: "Africa/Nouakchott" },
    { country: "Mauritius", timezone: "Indian/Mauritius" },
    { country: "Mexico", timezone: "America/Mexico_City" },
    { country: "Micronesia", timezone: "Pacific/Chuuk" },
    { country: "Moldova", timezone: "Europe/Chisinau" },
    { country: "Monaco", timezone: "Europe/Monaco" },
    { country: "Mongolia", timezone: "Asia/Ulaanbaatar" },
    { country: "Montenegro", timezone: "Europe/Podgorica" },
    { country: "Morocco", timezone: "Africa/Casablanca" },
    { country: "Mozambique", timezone: "Africa/Maputo" },
    { country: "Myanmar", timezone: "Asia/Yangon" },
    { country: "Namibia", timezone: "Africa/Windhoek" },
    { country: "Nauru", timezone: "Pacific/Nauru" },
    { country: "Nepal", timezone: "Asia/Kathmandu" },
    { country: "Netherlands", timezone: "Europe/Amsterdam" },
    { country: "New Zealand", timezone: "Pacific/Auckland" },
    { country: "Nicaragua", timezone: "America/Managua" },
    { country: "Niger", timezone: "Africa/Niamey" },
    { country: "Nigeria", timezone: "Africa/Lagos" },
    { country: "North Macedonia", timezone: "Europe/Skopje" },
    { country: "Norway", timezone: "Europe/Oslo" },
    { country: "Oman", timezone: "Asia/Muscat" },
    { country: "Pakistan", timezone: "Asia/Karachi" },
    { country: "Palau", timezone: "Pacific/Palau" },
    { country: "Panama", timezone: "America/Panama" },
    { country: "Papua New Guinea", timezone: "Pacific/Port_Moresby" },
    { country: "Paraguay", timezone: "America/Asuncion" },
    { country: "Peru", timezone: "America/Lima" },
    { country: "Philippines", timezone: "Asia/Manila" },
    { country: "Poland", timezone: "Europe/Warsaw" },
    { country: "Portugal", timezone: "Europe/Lisbon" },
    { country: "Qatar", timezone: "Asia/Qatar" },
    { country: "Romania", timezone: "Europe/Bucharest" },
    { country: "Russia", timezone: "Europe/Moscow" },
    { country: "Rwanda", timezone: "Africa/Kigali" },
    { country: "Saint Kitts and Nevis", timezone: "America/St_Kitts" },
    { country: "Saint Lucia", timezone: "America/St_Lucia" },
    { country: "Saint Vincent and the Grenadines", timezone: "America/St_Vincent" },
    { country: "Samoa", timezone: "Pacific/Apia" },
    { country: "San Marino", timezone: "Europe/San_Marino" },
    { country: "Sao Tome and Principe", timezone: "Africa/Sao_Tome" },
    { country: "Saudi Arabia", timezone: "Asia/Riyadh" },
    { country: "Senegal", timezone: "Africa/Dakar" },
    { country: "Serbia", timezone: "Europe/Belgrade" },
    { country: "Seychelles", timezone: "Indian/Mahe" },
    { country: "Sierra Leone", timezone: "Africa/Freetown" },
    { country: "Singapore", timezone: "Asia/Singapore" },
    { country: "Slovakia", timezone: "Europe/Bratislava" },
    { country: "Slovenia", timezone: "Europe/Ljubljana" },
    { country: "Solomon Islands", timezone: "Pacific/Guadalcanal" },
    { country: "Somalia", timezone: "Africa/Mogadishu" },
    { country: "South Africa", timezone: "Africa/Johannesburg" },
    { country: "South Sudan", timezone: "Africa/Juba" },
    { country: "Spain", timezone: "Europe/Madrid" },
    { country: "Sri Lanka", timezone: "Asia/Colombo" },
    { country: "Sudan", timezone: "Africa/Khartoum" },
    { country: "Suriname", timezone: "America/Paramaribo" },
    { country: "Sweden", timezone: "Europe/Stockholm" },
    { country: "Switzerland", timezone: "Europe/Zurich" },
    { country: "Syria", timezone: "Asia/Damascus" },
    { country: "Taiwan", timezone: "Asia/Taipei" },
    { country: "Tajikistan", timezone: "Asia/Dushanbe" },
    { country: "Tanzania", timezone: "Africa/Dar_es_Salaam" },
    { country: "Thailand", timezone: "Asia/Bangkok" },
    { country: "Timor-Leste", timezone: "Asia/Dili" },
    { country: "Togo", timezone: "Africa/Lome" },
    { country: "Tonga", timezone: "Pacific/Tongatapu" },
    { country: "Trinidad and Tobago", timezone: "America/Port_of_Spain" },
    { country: "Tunisia", timezone: "Africa/Tunis" },
    { country: "Turkey", timezone: "Europe/Istanbul" },
    { country: "Turkmenistan", timezone: "Asia/Ashgabat" },
    { country: "Tuvalu", timezone: "Pacific/Funafuti" },
    { country: "Uganda", timezone: "Africa/Kampala" },
    { country: "Ukraine", timezone: "Europe/Kiev" },
    { country: "United Arab Emirates", timezone: "Asia/Dubai" },
    { country: "United Kingdom", timezone: "Europe/London" },
    { country: "United States", timezone: "America/New_York" },
    { country: "Uruguay", timezone: "America/Montevideo" },
    { country: "Uzbekistan", timezone: "Asia/Tashkent" },
    { country: "Vanuatu", timezone: "Pacific/Efate" },
    { country: "Vatican City", timezone: "Europe/Vatican" },
    { country: "Venezuela", timezone: "America/Caracas" },
    { country: "Vietnam", timezone: "Asia/Ho_Chi_Minh" },
    { country: "Yemen", timezone: "Asia/Aden" },
    { country: "Zambia", timezone: "Africa/Lusaka" },
    { country: "Zimbabwe", timezone: "Africa/Harare" }
];

let selectedCountries = [];

function populateCountrySelector() {
    const countrySelector = document.getElementById('country-selector');
    countriesTimeZones.forEach(zone => {
        const option = document.createElement('option');
        option.value = zone.timezone;
        option.textContent = zone.country;
        countrySelector.appendChild(option);
    });
}

function updateWorldClock() {
    const worldClockElement = document.getElementById('world-clock');
    worldClockElement.innerHTML = ''; // Clear the clock before updating

    selectedCountries.forEach(country => {
        const now = new Date();
        const options = { timeZone: country.timezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const dateOptions = { timeZone: country.timezone, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const countryTime = now.toLocaleTimeString('en-US', options);
        const countryDate = now.toLocaleDateString('en-US', dateOptions);

        const countryElement = document.createElement('div');
        countryElement.className = 'city-clock';
        countryElement.innerHTML = `
            <div class="city-name">${country.country}</div>
            <div class="date">${countryDate}</div>
            <div class="time">${countryTime}</div>
        `;
        worldClockElement.appendChild(countryElement);
    });
}

document.getElementById('add-country-button').addEventListener('click', () => {
    const countrySelector = document.getElementById('country-selector');
    const selectedTimezone = countrySelector.value;
    const selectedCountry = countriesTimeZones.find(zone => zone.timezone === selectedTimezone);

    if (selectedCountry && !selectedCountries.includes(selectedCountry)) {
        selectedCountries.push(selectedCountry);
        updateWorldClock();
    }
});

populateCountrySelector();
updateWorldClock();
setInterval(updateWorldClock, 1000);
